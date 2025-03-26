import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "./TIReactivacion.css";

const TIReactivacion = () => {
  return (
    <>
      <Helmet>
      <title>Reactivación de Telefonía | Megacable | Recupera Tu Número</title>
      <meta name="description" content="Recupera tu número telefónico y reactiva tu línea con Megacable. Rápido, fácil y sin complicaciones. ¡Solicítalo hoy mismo y sigue conectado!" />
      </Helmet>
      <div className="general-tabs-container">
        <div className="bg-reactiva-container">
          <div className="container text-center ps-2 pe-2 ps-md-none pe-md-none">
            <h3 className="small-title-services">Conoce nuestro</h3>
            <h2 className="big-title-services">SERVICIO DE REACTIVACIÓN</h2>
            <p className="mt-4">
              ¿Cancelaste el servicio de teléfono con otra compañía y te
              interesa recuperar tu número para usarlo en MEGA?
            </p>
            <p className="mt-5 reac-q-user-action">
              ¡TE LO REACTIVAMOS! ACÉRCATE A NOSOTROS
            </p>
          </div>

          <div className="contacto-reactivacion d-flex justify-content-center mt-5">
            <div className="contact-reac-card">
              <img
                src="/icons/servicios/reactivacion/contact-reac-tel.png"
                alt="Teléfono Icono"
              />
              <h4>Teléfono</h4>
              <p>33 9690 0000</p>
            </div>

            <div className="contact-reac-card">
              <img
                src="/icons/servicios/reactivacion/contact-react-mail.png"
                alt="Correo Icono"
              />
              <h4>Correo</h4>
              <p>portabilidad@megacable.com.mx</p>
            </div>

            <div className="contact-reac-card">
              <img
                src="/icons/servicios/reactivacion/contact-react-suc.png"
                alt="Cis Icono"
              />
              <h4>Acude a tu CIS más cercano</h4>
              <p>
                Encuéntralo <a href="">aquí</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TIReactivacion;
