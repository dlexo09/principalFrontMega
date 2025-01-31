import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation'; // Importar estilos de navegación
import { EffectCoverflow, Navigation } from 'swiper/modules';

import './BannerStreamingHome.css';

const BannerStreamingHome = () => {
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
          loop={true}
          slidesPerView={3} 
          spaceBetween={-60} 
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }} 
          coverflowEffect={{
            rotate: 0,
            stretch: 100,
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
              slidesPerView: 3,
              spaceBetween: -200,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: -60,
            },
          }}
        >
          <SwiperSlide>
            <div className="swiper-img-container netflix-item">
              <div className="swiper-content d-flex align-items-center flex-column justify-content-center">
                <img src="../src/assets/images/home/netflix-logo.png" alt="Netflix" />
                <button className="hidden-button btn-action">Activar ahora</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-img-container disney-item">
              <div className="swiper-content d-flex align-items-center flex-column justify-content-center">
                <img src="../src/assets/images/home/disney-logo.png" alt="Disney" />
                <button className="hidden-button btn-action">Activar ahora</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-img-container paramount-item">
              <div className="swiper-content d-flex align-items-center flex-column justify-content-center">
                <img src="../src/assets/images/home/paramount-logo.png" alt="Paramount" />
                <button className="hidden-button btn-action">Activar ahora</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-img-container prime-item">
              <div className="swiper-content d-flex align-items-center flex-column justify-content-center">
                <img src="../src/assets/images/home/prime-logo.png" alt="Prime" />
                <button className="hidden-button btn-action">Activar ahora</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-img-container max-item">
              <div className="swiper-content d-flex align-items-center flex-column justify-content-center">
                <img src="../src/assets/images/home/max-logo.png" alt="Max" />
                <button className="hidden-button btn-action">Activar ahora</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Botones de navegación */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </>
  );
};

export default BannerStreamingHome;
