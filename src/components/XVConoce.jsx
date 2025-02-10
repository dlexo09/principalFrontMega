import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./XVConoce.css";
import "./Globales.css";

const XVConoce = () => {
  return (
    <>
      <div className="general-tabs-container">
        <div className="container">
          <div className="text-center">
            <h3 className="small-title-services">Xview+ TV Interactiva</h3>
            <h2 className="big-title-services content-title-sm ">
              TODOS TUS CONTENIDOS EN UN MISMO LUGAR Y EN 4K
            </h2>
            <p className="content-txt-sm mt-5">
              Xview Plus es la nueva plataforma de video de Megacable con una
              guía interactiva más intuitiva y fácil de usar, que reúne todos
              tus contenidos en un solo lugar en alta definición, para que veas
              lo que quieras, donde y cuando quieras en tu televisión o
              cualquier dispositivo
            </p>
          </div>

          <div className="d-flex justify-content-center mt-5">
          <a href="https://xview.mx/" target="_blank" className="btn-action">Consulta todo el contenido de Xview+ <span className="open-page-icon"></span></a>
          </div>

        </div>
      </div>
    </>
  );
};

export default XVConoce;
