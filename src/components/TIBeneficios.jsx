import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./TIBeneficios.css";
import "./Globales.css";

const TIBeneficios = () => {
  return (
    <div className="d-flex flex-column align-items-center beneficios-serv-container">
      <div className="text-center">
        <h3 className="small-title-services">Conoce nuestros</h3>
        <h2 className="big-title-services">Beneficios</h2>
      </div>

      <div className="d-flex justify-content-center align-items-center container beneficios-card-container">
        <div className=" d-flex flex-column justify-content-start align-items-center text-center beneficio-card">
          <img className="mb-5" src="../src/assets/icons/servicios/telefonia-ilimitada/earth-icon.png" alt="" />
          <p>Habla todo lo que quieras, de forma ilimitada a cualquier número local o nacional, así como a Estados Unidos y Canadá, a números fijos y celulares. Esto es nuestro plan de telefonía ilimitado plus.</p>
        </div>
        <div className="d-flex flex-column justify-content-start align-items-center text-center beneficio-card">
          <img className="mb-5" src="../src/assets/icons/servicios/telefonia-ilimitada/flash-icon.png" alt="" />
          <p>Compementa tu servicio de Telefonía Fija Mega con las soluciones digitales que tenemos para tí.
          </p>
        </div>
      </div>
      
      
    </div>
  );
};

export default TIBeneficios;
