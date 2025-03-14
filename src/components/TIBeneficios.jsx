import React from "react";
import "./TIBeneficios.css";

const TIBeneficios = () => {
  return (
    <>
    <div className="d-flex flex-column align-items-center beneficios-serv-container general-tabs-container ps-1 pe-1 ps-md-none pe-md-none">
      <div className="text-center">
        <h3 className="small-title-services">Telefonía ilimitada</h3>
        <h2 className="big-title-services">Conoce los beneficios</h2>
      </div>

      <div className="d-flex justify-content-center align-items-center container beneficios-card-container">
        <div className=" d-flex flex-column justify-content-start align-items-center text-center beneficio-card">
          <img src="/icons/servicios/telefonia-ilimitada/earth-icon.png" alt="" />
          <h3>Habla sin límites</h3>
          <p>Habla todo lo que quieras, de forma ilimitada a cualquier número local o nacional, así como a Estados Unidos y Canadá, a números fijos y celulares. Esto es nuestro plan de telefonía ilimitado plus.</p>
        </div>
        <div className="d-flex flex-column justify-content-start align-items-center text-center beneficio-card">
          <img src="/icons/servicios/telefonia-ilimitada/flash-icon.png" alt="" />
          <h3>Mejora tu Telefonía Fija</h3>
          <p>Complementa tu servicio de Telefonía Fija Mega con las soluciones digitales que tenemos para tí.
          </p>
        </div>
      </div>
      
    </div>
    </>
  );
};

export default TIBeneficios;
