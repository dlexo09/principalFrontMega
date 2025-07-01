import React, { useEffect } from 'react';
import './MideVelocidad.css';

const MideVelocidad = () => {
  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const ios = /iphone|ipod|ipad/.test(userAgent);
    const android = /android|Android/.test(userAgent);

    if (ios) {
      document.getElementById('not_ios').style.display = 'none';
      document.getElementById('ios').style.display = 'block';
    }

    if (android) {
      document.getElementById('not_ios').style.display = 'none';
      document.getElementById('android').style.display = 'block';
    }
  }, []);

  return (
    <>
      <div className="navbar-height"></div>
      <div className="navbar-height"></div>
      <div className="seccion">
        <div className="main_wrapper_content">
          <div className="seccion_wrapper">
            <div id="d-mide-content" className="container">
              <div className="mb-5">
                <h2 className="text-center mb-3">Conoce la velocidad de tu internet</h2>
                <h3 className="text-center">Recomendaciones</h3>
              </div>

              <div className="row mb-5">
                <div className="col-md-6">
                  <h4 className="text-center mb-5">ETHERNET</h4>
                  <ul>
                    <li><strong>Conecta directamente el cable de red</strong> entre tu computadora y el módem</li>
                    <li><strong>Cierra las páginas</strong> de internet o programas que hagan uso de la red de tu computadora</li>
                    <li><strong>Desconecta tus demás dispositivos</strong><br />(tablet/Smartphone) que estén conectados a tu internet.</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h4 className="text-center mb-5">WIFI</h4>
                  <ul>
                    <li><strong>Si tu módem es de Doble Banda</strong> (cuenta con 2 nombres de red), conéctate a la red con terminación _5 para obtener una navegación más rápida.</li>
                    <li><strong>Acerca tu dispositivo al módem</strong> (sin obstáculos).</li>
                    <li><strong>Apaga el WiFi de tus demás dispositivos</strong> (Smart TV/ Consolas/ tablet/ Smartphone) que estén conectados a tu internet; y en tu dispositivo cierra las páginas adicionales que hagan uso del internet.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div id="d-mide-content2" className="mb-5">
              <div className="container">
                <ul>
                  <li>Realiza un par de veces la prueba para tener mayor confiabilidad.</li>
                  <li>Los Megabits por segundo (Mbps) corresponde a la velocidad máxima de transferencia de datos (Mbps).</li>
                  <li>Los Mbps podrán variar según las condiciones técnicas del dispositivo, cantidad de equipos conectados, navegación en horas pico, distancia de conexión al módem y ubicación del módem.</li>
                </ul>
              </div>
            </div>
            <div className="container">
              <h1 className="text-center">MIDE TU VELOCIDAD</h1><br />
              <iframe width="100%" height="580px" frameBorder="0" src="https://megacable.dualstack.speedtestcustom.com"></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MideVelocidad;