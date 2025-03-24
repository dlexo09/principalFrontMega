import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./INVelocidad.css";
import "./Globales.css";

const INVelocidad = () => {
  // Estado para manejar si el botón está activo
  const [isActive, setIsActive] = useState(false);

  // Función para alternar el estado del botón
  const handleButtonClick = () => {
    setIsActive(!isActive);
  };

  /* Speed test */

  return (
    <>
          <Helmet>
          <title>Mide tu Velocidad de Internet | Megacable | Test de Velocidad</title>
          <meta name="description" content="Mide la velocidad de tu internet Megacable al instante. Conoce tu velocidad de descarga y subida. ¡Realiza el test ahora y conoce el estado real de tu red!" />
          </Helmet>
      <div className="general-tabs-container container pe-2 ps-2 pe-md-none ps-md-none">
        <div className="text-center">
          <h2 className="small-title-services">MIDE TU VELOCIDAD</h2>
          <h3 className="big-title-services">
            ¡Conoce la velocidad de tu internet!
          </h3>
        </div>

        {/* Botón con icono giratorio */}
        <div className="text-center mt-5">
          <button
            onClick={handleButtonClick}
            className={`recommendations-button ${isActive ? "active" : ""}`}
          >
            Recomendaciones
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
                  src="../src/assets/icons/servicios/internet/ethernet.png"
                  alt="Ethermet"
                />
              </div>
              <h3 className="text-center">ETHERNET</h3>
              <div className="rec-ethernet-container mt-5">
                <div className="rec-info-content">
                    <span>1</span>
                  <p>
                    Conecta directamente el cable de red entre tu computadora y
                    el módem.
                  </p>
                </div>
                <div className="rec-info-content">
                <span>2</span>
                  <p>
                    Cierra las páginas de internet o programas que hagan uso de
                    la red de tu computadora.
                  </p>
                </div>
                <div className="rec-info-content">
                <span>3</span>
                  <p>
                    Desconecta tus demás dispositivos (tablet/Smartphone) que
                    estén conectados a tu internet.
                  </p>
                </div>
              </div>
            </div>

            <div className="rec-info-card">
              <div className="icon-rec-content d-flex justify-content-center">
                <img
                  src="../src/assets/icons/servicios/internet/wifi.png"
                  alt="Wifi"
                />
              </div>
              <h3 className="text-center">WIFI</h3>
              <div className="rec-ethernet-container mt-5">
                <div className="rec-info-content">
                <span>1</span>
                  <p>
                    Apaga el WiFi de tus demás dispositivos (Smart TV/ Consolas/
                    tablet/ Smartphone) que estén conectados a tu internet; y en
                    tu dispositivo cierra las páginas adicionales que hagan uso
                    del internet.
                  </p>
                </div>
                <div className="rec-info-content">
                <span>2</span>
                  <p>
                    Si tu módem es de Doble Banda (cuenta con 2 nombres de red),
                    conéctate a la red con terminación _5 para obtener una
                    navegación más rápida.
                  </p>
                </div>
                <div className="rec-info-content">
                <span>3</span>
                  <p>Acerca tu dispositivo al módem (sin obstáculos).</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Speedtest */}
        <div className="mide-tu-velocidad row align-items-center ">
          <div className="col-xl-9">
            <iframe
              src="https://fast.com"
              width="100%"
              height="600px"
              frameBorder="0"
            ></iframe>
          </div>
          <div className="col-xl-3 speed-pasos-container">
            <div className="speed-pasos-crd">
                <span>1</span>
              <p>
                Realiza un par de veces la prueba para tener mayor
                confiabilidad.
              </p>
            </div>
            <div className="speed-pasos-crd">
            <span>2</span>
              <p>
                Los Megabits por segundo (Mbps) corresponde a la velocidad
                máxima de transferencia de datos (Mbps).
              </p>
            </div>
            <div className="speed-pasos-crd">
            <span>3</span>
              <p>
                Los Mbps podrán variar según las condiciones técnicas del
                dispositivo, cantidad de equipos conectados, navegación en horas
                pico, distancia de conexión al módem y ubicación del módem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default INVelocidad;
