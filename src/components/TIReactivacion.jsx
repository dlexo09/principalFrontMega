import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./TIReactivacion.css";
import "./Globales.css";

const TIReactivacion = () => {
  return (
    <div className="general-tabs-container">
      <div className="bg-reactiva-container">
        <div className="container text-center">
          <h3 className="small-title-services">Conoce nuestro</h3>
          <h2 className="big-title-services">SERVICIO DE REACTIVACIÓN</h2>
          <p className="reac-q-user mt-5">
            ¿Cancelaste el servicio de teléfono con otra compañía y te interesa
            recuperar tu número para usarlo en MEGA?
          </p>
          <p className="mt-5 reac-q-user-action">
            ¡TE LO REACTIVAMOS! ACÉRCATE A NOSOTROS
          </p>
        </div>

        <div className="contacto-reactivacion d-flex justify-content-center mt-5">
          <div className="contact-reac-card">
            <img
              src="../src/assets/icons/servicios/reactivacion/contact-reac-tel.png"
              alt=""
            />
            <h4>Teléfono</h4>
            <p>33 9690 0000</p>
          </div>

          <div className="contact-reac-card">
            <img
              src="../src/assets/icons/servicios/reactivacion/contact-react-mail.png"
              alt=""
            />
            <h4>Correo</h4>
            <p>portabilidad@megacable.com.mx</p>
          </div>

          <div className="contact-reac-card">
            <img
              src="../src/assets/icons/servicios/reactivacion/contact-react-suc.png"
              alt=""
            />
            <h4>Acude a tu CIS más cercano</h4>
            <p>
              Encuéntralo <a href="">aquí</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TIReactivacion;
