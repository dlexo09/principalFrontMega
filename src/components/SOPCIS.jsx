import React from "react";
import { Helmet } from "react-helmet-async";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./SOPCIS.css";
import "./Globales.css";

const TICostos = () => {
  return (
    <>
      <Helmet>
        <title>
          Centros de atención Megacable | Mapa Interactivo
        </title>
        <meta name="description" content="Consulta nuestro mapa interactivo y encuentra el CIS de Megacable más cercano a tu ubicación. ¡Accede fácilmente a nuestros centros de atención!"/>
      </Helmet>

      <div className="general-tabs-container ps-2 pe-2 ps-md-0 pe-md-0">
        <div className="text-center">
          <h3 className="small-title-services">CONOCE EL MAPA INTERACTIVO</h3>
          <h2 className="big-title-services">¡Ubica tu CIS más cercano!</h2>
        </div>
      </div>
    </>
  );
};

export default TICostos;
