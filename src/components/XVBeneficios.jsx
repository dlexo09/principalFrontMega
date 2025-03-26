import React from "react";
import { Helmet } from "react-helmet-async";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./XVPBeneficios.css";
import "./Globales.css";
import PaquetesTarifarios from "./PaquetesTarifarios";

const XVBeneficios = () => {
  return (
    <>
    <Helmet>
          <title>Beneficios de Xview | Megacable | VOD, Pausa, Grabación y Más</title>
          <meta name="description" content="Descubre los beneficios de Xview: Accede a más de 20,000 horas de contenido, graba programas y disfruta de la experiencia. ¡Lleva el entretenimiento a otro nivel con Megacable!" />
          </Helmet>
      <div className="container general-tabs-container ps-3 pe-3 ps-md-0 pe-md-0">
        <div className="text-center">
          <h3 className="small-title-services">TV Interactiva</h3>
          <h2 className="big-title-services">Conoce las funcionalidades</h2>
        </div>

        <div className="mt-5 xview-beneficios-container-b d-flex flex-wrap justify-content-center align-content-center">
          <div className="xview-beneficio">
            <div className="xview-beneficio-content">
            <img
              src="../src/assets/icons/servicios/tv-interactiva/xviewb-vod.png"
              alt="VOD"
            />
            <h3>VOD</h3>
            <p>
              Accede a más de 20,000 horas de series, películas, novelas,
              deportes y más, para verlos en el momento que tú quieras.
            </p>
            </div>
          </div>

          <div className="xview-beneficio xviewb-pausa">
            <div className="xview-beneficio-content">
              <img
                src="../src/assets/icons/servicios/tv-interactiva/xviewb-pausa.png"
                alt="Pausa y reinicia"
              />
              <h3>Pausa y reinicia</h3>
              <p>
                Detén tu programa en vivo y retómalo justo donde te quedaste, en
                el momento que quieras para que no te pierdas ningún detalle.
                Empieza a ver un programa desde el inicio, aunque ya haya
                comenzado.
              </p>
            </div>
          </div>


          <div className="xview-beneficio xviewb-regresa">
            <div className="xview-beneficio-content">
              <img
                src="../src/assets/icons/servicios/tv-interactiva/xviewn-regresa.png"
                alt="Regresa"
              />
              <h3>Regresa</h3>
              <p>
                Regresa hasta 24 hrs. tus canales interactivos favoritos para
                disfrutar 48Hde un programa que ya pasó.
              </p>
            </div>
          </div>

          <div className="xview-beneficio xviewb-graba">
            <div className="xview-beneficio-content">
              <img
                src="../src/assets/icons/servicios/tv-interactiva/xviewb-graba.png"
                alt="Graba"
              />
              <h3>Graba</h3>
              <p>
                Graba los programas en vivo de los canales interactivos (Función
                disponible a partir de Básico)
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default XVBeneficios;
