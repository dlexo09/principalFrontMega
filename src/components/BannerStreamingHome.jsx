import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';

import './BannerStreamingHome.css';

const BannerStreamingHome = () => {
  return (
    <>
      <div className="banner-streaming-home text-center">
        <h3 className="small-title">TODO EN UN SOLO LUGAR</h3>
        <h2 className="big-title">¡Agrega más entretenimiento!</h2>
        <p className="txt-wht">
          Si eres cliente, disfruta de la comodidad de gestionar todas tus suscripciones desde un solo lugar, ¡simplifica tus pagos y obtén más beneficios!
        </p>
      </div>

      <div className="container swiper-container">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true} // Centra siempre el slide activo
          loop={true} // Loop infinito
          slidesPerView={3} // 3 slides visibles (centro + 2 a los lados)
          spaceBetween={-60} // Espaciado entre slides
          coverflowEffect={{
            rotate: 0,
            stretch: 100,
            depth: 200,
            modifier: 1.5,
            slideShadows: false,
          }}
          modules={[EffectCoverflow]}
          className="swiper_container"
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
      </div>
    </>
  );
};

export default BannerStreamingHome;
