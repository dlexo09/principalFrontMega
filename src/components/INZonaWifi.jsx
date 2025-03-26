import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "./INZonaWifi.css";

const INZonaWifi = () => {
  // Estado para manejar si el botón está activo
  const [isActive, setIsActive] = useState(false);

  // Función para alternar el estado del botón
  const handleButtonClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <Helmet>
      <title>WiFi Gratis | Zona WiFi Megacable | Acceso Rápido en Lugares Públicos</title>
      <meta name="description" content="Navega gratis con Megacable WiFi en miles de lugares públicos. Accede a Internet de alta velocidad sin costo, exclusivo para suscriptores. ¡Conéctate desde tus dispositivos y disfruta de WiFi gratuito cerca de ti!" />
      </Helmet>

      <div className="container general-tabs-container container pe-2 ps-2 pe-md-none ps-md-none">
        <div className="text-center">
          <h1 className="small-title-services">MEGACABLE WIFI</h1>
          <h2 className="big-title-services">
            SITIOS CON ACCESO a MEGACABLE WIFI
          </h2>
          <p className="p-zw mt-5 p-2">
            Si eres suscriptor Megacable y cuentas con el servicio de Internet
            podrás navegar gratis con Megacable WiFi en miles de sitios públicos
            a lo largo de nuestro país desde cualquier dispositivo.
          </p>
        </div>

        {/* Botón con icono giratorio */}
        <div className="text-center mt-5">
          <button
            onClick={handleButtonClick}
            className={`recommendations-button ${isActive ? "active" : ""}`}
          >
            ¿Cómo usar MEGACABLE WIFI?
            <span
              className={`transition-icon ${isActive ? "rotate" : ""}`}
            ></span>
          </button>
        </div>

        {/* Contenido que se despliega/oculta */}
        <div
          className={`contenido-despegable-velocidad ${
            isActive ? "visible" : "hidden"
          }`}
        >
          <div className="mt-5 rec-info-container">
            <div className="rec-info-card">
              <div className="icon-rec-content d-flex justify-content-center">
                <img
                  src="/icons/servicios/internet/registrate.png"
                  alt="Registrate"
                />
              </div>
              <h3 className="text-center">REGÍSTRATE</h3>
              <div className="zw-pasos-container mt-5 mb-4">
                <div className="zw-paso-content">
                <span>1</span>
                  <p>Si eres cliente de Internet Megacable da click aquí.</p>
                </div>
                <div className="zw-paso-content">
                <span>2</span>
                  <p>
                    Ingresa los datos de contrato para registrar tu usuario y
                    contraseña.
                  </p>
                </div>
                <div className="zw-paso-content">
                <span>3</span>
                  <p>
                    Recibirás un correo a la dirección que ingresaste con una
                    liga.
                  </p>
                </div>
                <div className="zw-paso-content">
                <span>4</span>
                  <p>
                    Da click en la liga para finalizar con la activación de tu
                    registro.
                  </p>
                </div>
                <div className="zw-paso-content">
                <span>5</span>
                  <p>
                    Se abrirá la página de servicios en línea de
                    tu contrato, has finalizado tu registro.
                  </p>
                </div>
              </div>
            </div>

            <div className="rec-info-card">
              <div className="icon-rec-content d-flex justify-content-center">
                <img
                  src="/icons/servicios/internet/conectate.png"
                  alt="Conéctate"
                />
              </div>
              <h3 className="text-center">CONÉCTATE</h3>
              <div className="zw-pasos-container mt-5 mb-4">
                <div className="zw-paso-content">
                <span>1</span>
                  <p>Si eres cliente de Internet Megacable da click aquí.</p>
                </div>
                <div className="zw-paso-content">
                <span>2</span>
                  <p>
                    Ingresa los datos de contrato para registrar tu usuario y
                    contraseña.
                  </p>
                </div>
                <div className="zw-paso-content">
                <span>3</span>
                  <p>
                    Recibirás un correo a la dirección que ingresaste con una
                    liga.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Speedtest */}
        <div className="mide-tu-velocidad row align-items-center ">
          <div className="col-xl-9 pe-4 ps-4 pe-md-none ps-md-none">
            <img className="w-100 pe-2 ps-2 pb-md-5 pt-xl-none ps-md-none pe-md-none" src="../src/assets/images/servicios/internet/mapa-zw.jpg" alt="" />
          </div>
          <div className="col-xl-3 speed-pasos-container">
            <div className="speed-pasos-crd">
              <p>
              La Red Megacable WiFi la podrás encontrar en los principales establecimientos de tu ciudad como Centros Comerciales, Restaurantes, Estadios, Parques, Cafeterías, Hospitales, Sitios Públicos, CIS de Megacable y en muchas zonas más.
              </p>
            </div>
          </div>
        </div>
    
      </div>
    </>
  );
};

export default INZonaWifi;
