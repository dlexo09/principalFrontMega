import React from "react";
import { Helmet } from "react-helmet-async";

import "./XVPConoce.css";
import "./Globales.css";
import "./BannerStreamingHome.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation } from "swiper/modules";

const XVConoce = () => {
  return (
    <>
      <Helmet>
        <title>
          Conoce Xview | TV Interactiva de Megacable
        </title>
        <meta
          name="description"
          content="Descubre Xview de Megacable: una plataforma interactiva con todos tus contenidos en un solo lugar. Disfruta de la mejor experiencia de TV en tu televisor o dispositivo móvil."
        ></meta>
      </Helmet>
      <div className="container-fluid xview-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-xl-5 text-center text-lg-start">
              <h1 className="small-title-services">Xview TV Interactiva</h1>
              <h2 className="big-title-services">
                Disfruta de una experiencia de TV interactiva
              </h2>
              <div className="d-block d-lg-none">
                <img
                  className="w-100"
                  src="/img/servicios/tv-interactiva/caja-xview.png"
                  alt="Xview"
                />
              </div>
              <p className="mt-4">
                Disfruta de tus contenidos favoritos con las funciones
                interactivas de Xview. Pausa, regresa, reinicia o graba
                cualquier programa en vivo en canales interactivos y accede a un
                catálogo de series y películas On Demand sin costo adicional.
              </p>
            </div>

            <div className="col-lg-5 col-xl-7 d-none d-lg-block">
              <img
                className="w-100"
                src="/img/servicios/tv-interactiva/caja-xview.png"
                alt="Xview"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default XVConoce;
