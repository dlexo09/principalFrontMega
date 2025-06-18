import React, { useEffect, useState, useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import { serverAPILambda, S3_BASE_URL } from '../config';
import { LocationContext } from '../LocationContext';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import './BannerStreamingHome.css';

// Constante para la URL base de S3/CloudFront
const DEFAULT_PLACEHOLDER = "/img/placeholder-card.png";

/**
 * Registra información de depuración en consola
 */
const debug = (message, data) => {
  console.log(`[BannerStreaming] ${message}`, data);
};

/**
 * Obtiene la URL correcta para una imagen
 * @param {string} fileName - Nombre del archivo o ruta
 * @returns {string} URL completa de la imagen
 */
const getImageUrl = (fileName) => {
  // Si no hay nombre de archivo, usar el placeholder
  if (!fileName) {
    debug('Sin nombre de archivo', { fileName });
    return DEFAULT_PLACEHOLDER;
  }
  
  // Si ya es una URL completa de S3/CloudFront, dejarla como está
  if (fileName.startsWith('http')) {
    debug('Usando URL completa', { fileName });
    return fileName;
  }

  // Si ya incluye 'uploads/bannerHero/', extraer solo esa parte
  if (fileName.includes('uploads/bannerHero/')) {
    const match = fileName.match(/uploads\/bannerHero\/[^/]+$/);
    if (match) {
      const pathFragment = match[0];
      const s3Url = `${S3_BASE_URL}/${pathFragment}`;
      debug('Reconstruyendo URL desde ruta parcial', { s3Url });
      return s3Url;
    }
  }

  // Extraer solo el nombre del archivo, sin importar la ruta
  const fileNameOnly = fileName.split('/').pop();
  
  // Construir la URL con la ruta correcta que funciona
  const s3Url = `${S3_BASE_URL}/uploads/bannerHero/${fileNameOnly}`;
  debug('Generando URL S3', { originalPath: fileName, s3Url });
  return s3Url;
};

const BannerStreamingHome = () => {
  const { currentLocation } = useContext(LocationContext);
  const [cards, setCards] = useState([]);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [loop, setLoop] = useState(true);
  const [loading, setLoading] = useState(true);
  const [imageErrors, setImageErrors] = useState({});

  // Función para probar rutas S3 diferentes
  useEffect(() => {
    // Función para probar la disponibilidad de una URL
    const testUrl = (url, description) => {
      const img = new Image();
      img.onload = () => debug(`✅ URL accesible: ${description}`, { url });
      img.onerror = () => debug(`❌ URL inaccesible: ${description}`, { url });
      img.src = url;
    };
    
    // Probar diferentes estructuras de URL con un archivo conocido
    testUrl(`${S3_BASE_URL}/uploads/bannerHero/sdk444-logo.jpeg`, "S3 path: /uploads/bannerHero/");
    testUrl(`${S3_BASE_URL}/dist/uploads/bannerHero/sdk444-logo.jpeg`, "S3 path: /dist/uploads/bannerHero/");
    testUrl("/img/home/sdk444-logo.jpeg", "Local path: /img/home/");
  }, []);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setLoading(true);
        debug('Solicitando datos de API', `${serverAPILambda}api/cardStreaming`);
        const response = await fetch(`${serverAPILambda}api/cardStreaming`);
        const data = await response.json();
        debug('Datos recibidos:', data);
        
        const currentDate = new Date();

        const filteredCards = data.filter(card => {
          const fhInicio = new Date(card.fhInicio);
          const fhFin = new Date(card.fhFin);
          return card.status === 1 && currentDate >= fhInicio && currentDate <= fhFin;
        });

        // Obtener permisos para cada card
        const cardsWithPermissions = await Promise.all(filteredCards.map(async (card) => {
          const permisoResponse = await fetch(`${serverAPILambda}api/permisosSucursal?objetoName=CardStreamingHome&idObjeto=${card.idCardStreaming}&idSucursal=${currentLocation.idSucursal}`);
          const permisoData = await permisoResponse.json();
          return permisoData.length > 0 ? card : null;
        }));

        // Filtrar cards con permisos
        const filteredCardsWithPermissions = cardsWithPermissions.filter(card => card !== null);
        debug('Cards filtradas', filteredCardsWithPermissions);
        setCards(filteredCardsWithPermissions);

        // Ajustar dinámicamente la configuración de Swiper
        setSlidesPerView(filteredCardsWithPermissions.length < 3 ? filteredCardsWithPermissions.length : 3);
        setLoop(filteredCardsWithPermissions.length >= 3);
      } catch (error) {
        console.error('Error fetching card streaming data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (currentLocation) {
      fetchCards();
    }
  }, [currentLocation]);

  // Manejador de errores de imagen mejorado
  const handleImageError = (e, cardId, isLogo = true) => {
    const currentSrc = e.target.src;
    const fileName = currentSrc.split('/').pop();
    const errorKey = `${cardId}-${isLogo ? 'logo' : 'bg'}`;
    
    // Registrar el error
    setImageErrors(prev => ({
      ...prev,
      [errorKey]: (prev[errorKey] || 0) + 1
    }));
    
    debug('Error cargando imagen', { 
      src: currentSrc, 
      fileName,
      cardId,
      tipo: isLogo ? 'logo' : 'background',
      intentos: imageErrors[errorKey] || 0
    });
    
    // Prevenir múltiples llamadas
    e.target.onerror = null;
    
    // Si ya estamos usando el placeholder, no seguir intentando
    if (currentSrc.includes(DEFAULT_PLACEHOLDER)) {
      debug('Ya usando placeholder, no hacer nada', { placeholder: DEFAULT_PLACEHOLDER });
      return;
    }

    // Si la URL contiene /img/home/ y ha fallado, intentar con ruta S3 correcta
    if (currentSrc.includes('/img/home/')) {
      // Intentar con la ruta S3
      const s3Url = `${S3_BASE_URL}/uploads/bannerHero/${fileName}`;
      debug('URL local falló, intentando con URL S3 correcta', { s3Url });
      e.target.src = s3Url;
      
      // Si la ruta S3 falla, usar placeholder
      e.target.onerror = () => {
        debug('S3 también falló, usando placeholder', { placeholder: DEFAULT_PLACEHOLDER });
        e.target.src = DEFAULT_PLACEHOLDER;
        e.target.onerror = null; // Evitar bucles
      };
      return;
    }
    
    // Si es una URL de S3/CloudFront que falló, intentar con ruta local
    if (currentSrc.includes(S3_BASE_URL)) {
      const localUrl = `/img/home/${fileName}`;
      debug('URL S3 falló, intentando con ruta local', { localUrl });
      e.target.src = localUrl;
      
      // Si vuelve a fallar, usar placeholder
      e.target.onerror = () => {
        debug('Ruta local también falló, usando placeholder', { placeholder: DEFAULT_PLACEHOLDER });
        e.target.src = DEFAULT_PLACEHOLDER;
        e.target.onerror = null; // Evitar bucles
      };
    } else {
      // Último recurso para cualquier otra situación: usar el placeholder
      debug('Usando placeholder directo', { placeholder: DEFAULT_PLACEHOLDER });
      e.target.src = DEFAULT_PLACEHOLDER;
    }
  };

  if (loading) {
    return <div className="loading-container">Cargando...</div>;
  }

  return (
    <>
      <div className="banner-streaming-home text-center">
        <h2 className="small-title mb-3 mb-md-0">TODO EN UN SOLO LUGAR</h2>
        <h3 className="big-title">¡Agrega más entretenimiento!</h3>
        <p className="txt-wht">
          Si eres cliente, disfruta de la comodidad de gestionar todas tus suscripciones desde un solo lugar, ¡simplifica tus pagos y obtén más beneficios!
        </p>
      </div>

      <div className="container swiper-container streamings-home">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true} 
          loop={loop}
          slidesPerView={slidesPerView} 
          spaceBetween={cards.length < 3 ? 0 : -60} 
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }} 
          coverflowEffect={{
            rotate: 0,
            stretch: cards.length < 3 ? 0 : 100,
            depth: 200,
            modifier: 1.5,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Navigation]}
          className="swiper_container"
          breakpoints={{
            0: { // responsive 
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: slidesPerView,
              spaceBetween: cards.length < 3 ? 0 : -200,
            },
            1440: {
              slidesPerView: slidesPerView,
              spaceBetween: cards.length < 3 ? 0 : -60,
            },
          }}
        >
          {cards.map(card => {
            const cardId = card.idCardStreaming;
            debug(`Procesando card ${cardId}`, {
              name: card.nameCard,
              logoCard: card.logoCard,
              s3_logo_url: card.s3_logo_url,
              backgroundImageCard: card.backgroundImageCard,
              s3_image_url: card.s3_image_url
            });
            
            // Determinar el estilo de fondo
            let backgroundStyle = {};
            
            // Priorizar URLs directas de S3
            if (card.s3_image_url) {
              // Si s3_image_url comienza con / o es ruta relativa, convertirla a S3
              const bgUrl = card.s3_image_url.startsWith('http') ? 
                card.s3_image_url : getImageUrl(card.s3_image_url);
              
              debug('Usando URL de imagen S3', { url: bgUrl, original: card.s3_image_url });
              backgroundStyle = { backgroundImage: `url(${bgUrl})` };
            } else if (card.backgroundCard) {
              debug('Usando color de fondo', { color: card.backgroundCard });
              backgroundStyle = { backgroundColor: `#${card.backgroundCard.replace('#', '')}` };
            } else if (card.backgroundImageCard) {
              const bgUrl = getImageUrl(card.backgroundImageCard);
              debug('Usando imagen de fondo desde S3', { bgUrl });
              backgroundStyle = { backgroundImage: `url(${bgUrl})` };
            } else {
              debug('Usando color negro por defecto');
              backgroundStyle = { backgroundColor: '#000' };
            }

            // Determinar la URL del logo
            let logoUrl;
            if (card.s3_logo_url) {
              // Si s3_logo_url comienza con / o es ruta relativa, convertirla a S3
              logoUrl = card.s3_logo_url.startsWith('http') ? 
                card.s3_logo_url : getImageUrl(card.s3_logo_url);
              
              debug('Usando URL de logo S3', { logoUrl, original: card.s3_logo_url });
            } else if (card.logoCard) {
              logoUrl = getImageUrl(card.logoCard);
              debug('Usando logo desde S3', { logoUrl });
            } else {
              logoUrl = DEFAULT_PLACEHOLDER;
              debug('Sin logo, usando placeholder', { logoUrl });
            }

            return (
              <SwiperSlide key={card.idCardStreaming}>
                <div 
                  className="swiper-img-container" 
                  style={backgroundStyle}
                  data-card-id={card.idCardStreaming}
                >
                  <div className="swiper-content d-flex align-items-center flex-column justify-content-center">
                    <img 
                      src={logoUrl} 
                      alt={card.nameCard || 'Streaming'} 
                      onError={(e) => handleImageError(e, card.idCardStreaming, true)}
                      data-original-src={card.s3_logo_url || card.logoCard || ''}
                    />
                    <a 
                      href={card.linkButton} 
                      className="hidden-button btn-action"
                      style={card.backgroundButton ? 
                        { backgroundColor: `#${card.backgroundButton.replace('#', '')}` } : 
                        {}}
                    >
                      {card.textButton}
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Botones de navegación */}
        <div className="swiper-button-prev serv-prev xv-prev carousel-control-prev"></div>
        <div className="swiper-button-next serv-next xv-next carousel-control-next"></div>
      </div>
    </>
  );
};

export default BannerStreamingHome;