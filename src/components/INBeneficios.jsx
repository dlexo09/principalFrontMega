import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./INBeneficios.css";
import "./Globales.css";
import PaquetesTarifarios from "../components/PaquetesTarifarios"; // Importación

const INBeneficios = () => {
  return (
    <div className="container general-tabs-container pe-2 ps-2 pe-md-none ps-md-none">
      <div className="text-center mb-5">
            <h2 className="small-title-services">INTERNET</h2>
            <h3 className="big-title-services">Conoce los beneficios</h3>
            
        </div>

      <div className="container beneficios-int-container">
        <div className="beneficio-card-content">
            <img src="../src/assets/icons/servicios/internet/pago-flexible.png" alt="Opciones de pago flexibles" />
            <h3>Opciones de pago flexibles</h3>
            <p>Diversas formas de pago, desde tiendas de conveniencia hasta transferencias bancarias, facilitando el acceso al servicio.</p>
        </div>
        <div className="beneficio-card-content">
            <img src="../src/assets/icons/servicios/internet/velocidades-altas-estables.png" alt="Velocidades altas y estables" />
            <h3>Velocidades altas y estables</h3>
            <p>Ofrecemos planes de internet de alta velocidad, ideales para streaming, gaming, videollamadas y navegación fluida.</p>
        </div>
        <div className="beneficio-card-content">
            <img  src="../src/assets/icons/servicios/internet/cobertura-amplia.png" alt="Opciones de pago flexibles" />
            <h3>Cobertura amplia</h3>
            <p>Su red está disponible en diversas ciudades y áreas de México, lo que asegura conectividad en zonas urbanas y suburbanas.</p>
        </div>
        <div className="beneficio-img-content d-none d-xl-block m-auto">
            <img src="../src/assets/images/servicios/internet/wifiultra-modem.png" alt="" />
        </div>

        <div className="beneficio-card-content">
            <img src="../src/assets/icons/servicios/internet/atenicion-27-7.png" alt="Opciones de pago flexibles" />
            <h3>Atención al Cliente 24/7</h3>
            <p>Soporte técnico y atención al cliente disponibles en cualquier momento para resolver problemas o dudas.</p>
        </div>
        <div className="beneficio-card-content be-gr-espcial">
            <img src="../src/assets/icons/servicios/internet/acceso-wifi.png" alt="Opciones de pago flexibles" />
            <h3>Acceso a Megacable Wi-Fi</h3>
            <p>Usuarios de internet pueden disfrutar de acceso a puntos de Wi-Fi públicos de Megacable en varias ubicaciones.</p>
        </div>
      </div>
    </div>
  );
};

export default INBeneficios;
