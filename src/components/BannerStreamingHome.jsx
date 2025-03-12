import React, { useEffect, useState, useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import { serverAPILambda } from '../config'; // Importar serverAPIUrl
import { LocationContext } from '../LocationContext'; // Importar LocationContext
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation'; // Importar estilos de navegación
import './BannerStreamingHome.css';

const BannerStreamingHome = () => {
  const { currentLocation } = useContext(LocationContext);
  const [cards, setCards] = useState([]);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [loop, setLoop] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(`${serverAPILambda}api/cardStreaming`);
        const data = await response.json();
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
        setCards(filteredCardsWithPermissions);

        // Ajustar dinámicamente la configuración de Swiper
        setSlidesPerView(filteredCardsWithPermissions.length < 3 ? filteredCardsWithPermissions.length : 3);
        setLoop(filteredCardsWithPermissions.length >= 3);
      } catch (error) {
        console.error('Error fetching card streaming data:', error);
      }
    };

    if (currentLocation) {
      fetchCards();
    }
  }, [currentLocation]);

  return (
    <>
      <div className="banner-streaming-home text-center">
        <h3 className="small-title mb-3 mb-md-0">TODO EN UN SOLO LUGAR</h3>
        <h2 className="big-title">¡Agrega más entretenimiento!</h2>
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
            nextEl: '.swiper-button-next next-btn-prz',
            prevEl: '.swiper-button-prev prev-btn-prz',
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
            const backgroundStyle = card.backgroundCard
              ? { backgroundColor: card.backgroundCard }
              : card.backgroundImageCard
              ? { backgroundImage: `url(/img/home/${card.backgroundImageCard})` }
              : { backgroundColor: '#000' };

            return (
              <SwiperSlide key={card.idCardStreaming}>
                <div className="swiper-img-container" style={backgroundStyle}>
                  <div className="swiper-content d-flex align-items-center flex-column justify-content-center">
                    <img src={`/img/home/${card.logoCard}`} alt={card.nameCard} />
                    <a href={card.linkButton} className="hidden-button btn-action">{card.textButton}</a>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Botones de navegación */}
        <div className="swiper-button-prev next-btn-prz"></div>
        <div className="swiper-button-next prev-btn-prz"></div>
      </div>
    </>
  );
};

export default BannerStreamingHome;