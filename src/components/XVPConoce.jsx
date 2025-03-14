import React from "react";
import "./XVPConoce.css";
import './BannerStreamingHome.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

const XVPConoce = () => {
  return (
    <>
      <div className="container-fluid xview-container">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 text-center text-xl-start">
              <h3 className="small-title-services">Xview+ TV Interactiva</h3>
              <h2 className="big-title-services">
                TODOS TUS CONTENIDOS EN UN MISMO LUGAR Y EN 4K
              </h2>
              <div className="d-block d-xl-none">
              <img className="w-100" src="/img/servicios/tv-interactiva/caja-xviewplus.png" alt="" />
            </div>
              <p className="mt-4">
                Xview Plus es la nueva plataforma de video de Megacable con una
                guía interactiva más intuitiva y fácil de usar, que reúne todos
                tus contenidos en un solo lugar en alta definición, para que veas
                lo que quieras, donde y cuando quieras en tu televisión o
                cualquier dispositivo
              </p>
              <div className="d-flex justify-content-center justify-content-xl-start mt-5">
                <a href="https://xview.mx/" target="_blank" className="btn-action">Consulta todo el contenido de Xview+ <span className="open-page-icon d-none d-md-block"></span></a>
              </div>
            </div>

            <div className="col-md-7 d-none d-xl-block">
              <img className="w-100" src="/img/servicios/tv-interactiva/caja-xviewplus.png" alt="" />
            </div>

          </div>
        </div>
      </div>

      {/* swiper */}
      <div className="banner-streaming-home text-center banner-strm-apps-xvp ps-3 pe-3 ps-md-0 pe-md-0"> 
        <h2 className="big-title-services content-title-sm ">Disfruta de tus Apps Favoritas desde Xview+</h2>
        <p className="content-txt-sm mt-4">
          Con Xview+ puedes descargar tus plataformas de streaming favoritas directamente desde Google Play. Convierte tu televisor en un centro de entretenimiento completo, con una gran variedad de apps disponibles para ti.
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
                <img src="/img/home/netflix-logo.png" alt="Netflix" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-img-container disney-item">
              <div className="swiper-content d-flex align-items-center flex-column justify-content-center">
                <img src="/img/home/disney-logo.png" alt="Disney" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-img-container paramount-item">
              <div className="swiper-content d-flex align-items-center flex-column justify-content-center">
                <img src="/img/home/paramount-logo.png" alt="Paramount" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-img-container prime-item">
              <div className="swiper-content d-flex align-items-center flex-column justify-content-center">
                <img src="/img/home/prime-logo.png" alt="Prime" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-img-container max-item">
              <div className="swiper-content d-flex align-items-center flex-column justify-content-center">
                <img src="/img/home/max-logo.png" alt="Max" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Botones de navegación */}
        <div className="swiper-button-prev serv-prev xv-prev carousel-control-prev"></div>
        <div className="swiper-button-next serv-next xv-next carousel-control-next"></div>
      </div>


    </>
  );
};

export default XVPConoce;
