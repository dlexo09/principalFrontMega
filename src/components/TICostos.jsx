import React from "react";
import { Helmet } from "react-helmet-async";
import "./TICostos.css";

const TICostos = () => {
  return (
    <>
      <Helmet>
        <title>Tarifas Larga Distancia | Megacable | Telefonía Ilimitada</title>
        <meta
          name="description"
          content="Conoce las tarifas de larga distancia de Megacable para telefonía ilimitada. ¡Consulta nuestras opciones y disfruta de llamadas internacionales sin preocupaciones!"
        />
      </Helmet>
      <div className="general-tabs-container ps-1 pe-1 ps-md-0 pe-md-0">
        <div className="text-center">
          <h3 className="small-title-services">CONOCE NUESTRAS TARIFAS</h3>
          <h2 className="big-title-services">LARGA DISTANCIA INTERNACIONAL</h2>
          <p className="mt-4">
            Busca las tarifas que tenemos para los distintos países:
          </p>
        </div>
      </div>
    </>
  );
};

export default TICostos;
