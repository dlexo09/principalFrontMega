import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

import "./SOPFAQ.css";
import "./Globales.css";

const SOPFAQ = () => {
  return (
    <>
      <Helmet>
      <title>Soporte Técnico Megacable | Guía de Soluciones para Internet, Televisión y Telefonía</title>
      <meta name="description" content="Accede a nuestra guía de soporte técnico para resolver tus dudas sobre Internet, Televisión y Telefonía. Encuentra soluciones rápidas y efectivas para todos tus servicios Megacable." />

      </Helmet>
      <div className="general-tabs-container container ps-2 pe-2">
        <div className="text-center">
          <h3 className="small-title-services">CONOCE NUESTRAS</h3>
          <h2 className="big-title-services">Preguntas Frecuentes</h2>
        </div>

        <div className="faq-list-container mt-5">
          <div className="faq-content">
            <h3>Contratación</h3>
            <a target="_blank" href="../src/assets/files/faq/contratacion.pdf">
              <img
                src="../src/assets/icons/download-icon.png"
                alt="Descargar"
              />
            </a>
          </div>
          <div className="faq-content">
            <h3>Cancelación de los servicios</h3>
            <a target="_blank" href="../src/assets/files/faq/cancelacion.pdf">
              <img
                src="../src/assets/icons/download-icon.png"
                alt="Descargar"
              />
            </a>
          </div>
          <div className="faq-content">
            <h3>Compensaciones y/o bonificaciones</h3>
            <a
              target="_blank"
              href="../src/assets/files/faq/compensaciones.pdf"
            >
              <img
                src="../src/assets/icons/download-icon.png"
                alt="Descargar"
              />
            </a>
          </div>
          <div className="faq-content">
            <h3>Otros gastos relacionados con la prestación del servicio</h3>
            <a target="_blank" href="../src/assets/files/faq/otros_gastos.pdf">
              <img
                src="../src/assets/icons/download-icon.png"
                alt="Descargar"
              />
            </a>
          </div>
          <div className="faq-content">
            <h3>Instalación</h3>
            <a target="_blank" href="../src/assets/files/faq/instalacion.pdf">
              <img
                src="../src/assets/icons/download-icon.png"
                alt="Descargar"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SOPFAQ;
