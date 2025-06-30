import React, { useEffect, useState, useContext } from "react";
import { serverAPILambda, serverUrl } from "../config";
import { LocationContext } from "../LocationContext";
import "./BannerHome.css";

// Constante para la URL base de S3/CloudFront
const DEFAULT_PLACEHOLDER = "/img/placeholder-banner.png";

/**
 * Obtiene la URL correcta para una imagen, considerando rutas S3
 * @param {string} basePath - Ruta base (ej: uploads/bannerHero/)
 * @param {string} fileName - Nombre del archivo
 * @returns {string} URL completa de la imagen
 */
const getImageUrl = (basePath = '', fileName = '') => {
  if (!fileName) return DEFAULT_PLACEHOLDER;
  
  // Si es una URL completa
  if (fileName.startsWith('http')) {
    return fileName;
  }
  
  // Limpiar barras iniciales para evitar dobles barras
  const path = basePath ? (basePath.startsWith('/') ? basePath.substring(1) : basePath) : '';
  const file = fileName.startsWith('/') ? fileName.substring(1) : fileName;
  
  // Si la ruta incluye 'uploads/' es una ruta S3
  if (path.includes('uploads/')) {
    return `${serverUrl}/${path}${file}`;
  }
  
  // Para mantener compatibilidad con rutas anteriores
  return `/${path}${file}`;
};

const BannerHome = () => {
  const { currentLocation } = useContext(LocationContext);
  const [banners, setBanners] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch(`${serverAPILambda}api/bannerHero`);
        const data = await response.json();

        const filteredBanners = await filterActiveBanners(data, currentLocation);
        setBanners(filteredBanners);
      } catch (error) {
        console.error("Error fetching banners:", error);
        setError("No se pudieron cargar los banners. Intenta nuevamente más tarde.");
      }
    };

    if (currentLocation) {
      fetchBanners();
    }
  }, [currentLocation]);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div id="carouselExampleIndicators" className="carousel slide banner-home-container" data-bs-ride="carousel">
      <CarouselIndicators banners={banners} />
      <CarouselSlides banners={banners} />
      <CarouselControls />
    </div>
  );
};

// Función para filtrar banners activos y con permisos
const filterActiveBanners = async (banners, currentLocation) => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const activeBanners = banners.filter((banner) => {
    const startDate = new Date(new Date(banner.fhInicio).setHours(0, 0, 0, 0));
    const endDate = new Date(new Date(banner.fhFin).setHours(23, 59, 59, 999));
    return banner.status === 1 && startDate <= today && endDate >= today;
  });

  const bannersWithPermissions = await Promise.all(
    activeBanners.map(async (banner) => {
      const permisoResponse = await fetch(
        `${serverAPILambda}api/permisosSucursal?objetoName=BannerHome&idObjeto=${banner.idBannerHome}&idSucursal=${currentLocation.idSucursal}`
      );
      const permisoData = await permisoResponse.json();
      return permisoData.length > 0 ? banner : null;
    })
  );

  return bannersWithPermissions.filter((banner) => banner !== null);
};

// Componente para los indicadores del carrusel
const CarouselIndicators = ({ banners }) => (
  <div className="carousel-indicators">
    {banners.map((_, index) => (
      <button
        key={index}
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={index}
        className={index === 0 ? "active" : ""}
        aria-current={index === 0 ? "true" : "false"}
        aria-label={`Slide ${index + 1}`}
      ></button>
    ))}
  </div>
);

// Componente para los slides del carrusel
const CarouselSlides = ({ banners }) => (
  <div className="carousel-inner banner-principal-home">
    {banners.map((banner, index) => (
      <CarouselSlide key={index} banner={banner} isActive={index === 0} />
    ))}
  </div>
);

// Componente para un slide individual
const CarouselSlide = ({ banner, isActive }) => {
  const [imgError, setImgError] = useState({
    background: false,
    banner: false,
    mobile: false
  });

  // Manejo de errores de imagen con reintentos
  const handleImageError = (e, type) => {
    e.target.onerror = null; // Prevenir bucles infinitos
    
    // Si la imagen ya falló una vez, marcar error permanente
    if (imgError[type]) {
      return;
    }
    
    // Marcar este tipo de imagen como con error
    setImgError(prev => ({...prev, [type]: true}));
    
    // Intentar ruta alternativa con S3
    if (e.target.src.includes(`/${banner.ruta}`)) {
      const file = e.target.src.split(`/${banner.ruta}`)[1];
      if (file) {
        // Intentar ruta directa a S3
        e.target.src = `${serverUrl}/uploads/bannerHero/${file}`;
      } else {
        e.target.src = DEFAULT_PLACEHOLDER;
      }
    } else {
      e.target.src = DEFAULT_PLACEHOLDER;
    }
  };

  // Si fallaron todas las imágenes principales, mostrar placeholder pero no ocultar el banner
  const allImagesFailed = imgError.background && imgError.banner && imgError.mobile;

  // Construir URLs utilizando la función getImageUrl
  const backgroundUrl = getImageUrl(banner.ruta, banner.background);
  const bannerImgUrl = getImageUrl(banner.ruta, banner.imagenBanner);
  const mobileImgUrl = getImageUrl(banner.ruta, banner.imagenMobile);

  return (
    <div className={`carousel-item ${isActive ? "active" : ""}`}>
      {/* Fondo del Slider */}
      <img
        src={backgroundUrl}
        className="d-block w-100 banner-background"
        alt={`Slide`}
        onError={(e) => handleImageError(e, 'background')}
      />

      {/* Contenido Superpuesto */}
      <div className="banner-home-content d-flex justify-content-center align-items-center">
        <div className="container g-4 g-md-0 row text-white d-flex justify-content-center justify-content-md-between align-items-center banner-sup-container">
          {/* Columna Izquierda: Texto */}
          <div className="col-md-4 text-column order-2 order-md-1 text-center text-md-start">
            <h1 className="mb-3 secondary-title banner-title">{banner.title}</h1>
            <div className="mt-4 mt-lg-5 d-flex justify-content-center justify-content-lg-start">
              {banner.textButton && (
                <a href={banner.linkButton} className="btn-action pe-5 ps-5 banner-btn-limit">
                  <span className="banner-btn-text">{banner.textButton}</span>
                </a>
              )}
            </div>
          </div>

          {/* Columna Derecha: Imagen */}
          <div className="order-2 order-md-1 d-none d-md-flex col-md-8 d-flex justify-content-end banner-principal-img">
            <img 
              className="img-netflix" 
              src={bannerImgUrl} 
              alt=""
              onError={(e) => handleImageError(e, 'banner')}
            />
          </div>
          <div className="order-1 order-md-2 d-md-none banner-principal-img-mov">
            <img 
              className="img-netflix-movil" 
              src={mobileImgUrl} 
              alt="" 
              onError={(e) => handleImageError(e, 'mobile')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente para los botones de control del carrusel
const CarouselControls = () => (
  <>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Anterior</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Siguiente</span>
    </button>
  </>
);

export default BannerHome;