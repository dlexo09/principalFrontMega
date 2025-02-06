import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./FORed.css";
import "./Globales.css";

const FORed = () => {
  return (
    <div className="general-tabs-container">
      <div className="text-center">
        <h3 className="small-title-services">CONOCE EL MAPA INTERACTIVO</h3>
        <h2 className="big-title-services">¡Ubica tu CIS más cercano!</h2>
      </div>

 
        <div className="fibra-presentation">
          <div className="fibra-presentation-content">
            <h3>Fibra óptica directo a tu hogar</h3>
            <p className="title-descr">
              Ahora tus servicios están respaldados por una nueva red de fibra óptica que llega hasta tu hogar.
            </p>

            <div className="cards-presentation">
              <div className="card-presentation card-b">
                <div className="icon-card-p">
                  <img src="https://www.megacable.com.mx/fibra-optica_new/assets/img/icons/velocidad-icon.png" alt="Velocidad" />
                </div>
                <div className="texts-card-p">
                  <p>¡Mayores<br />Velocidades!</p>
                  <p className="txt-crd1">200, 350, 500MB</p>
                  <p className="txt-crd2">Y HASTA</p>
                  <p className="txt-crd3">1 GB</p>
                </div>
              </div>

              <div className="card-presentation">
                <div className="icon-card-p">
                  <img src="https://www.megacable.com.mx/fibra-optica_new/assets/img/icons/equipo-icon.png" alt="Equipo" />
                </div>
                <div className="texts-card-p">
                  <p>Un equipo de última generación con mejor cobertura de señal WiFi</p>
                </div>
              </div>

              <div className="card-presentation">
                <div className="icon-card-p">
                  <img src="https://www.megacable.com.mx/fibra-optica_new/assets/img/icons/velocidad-subida-icon.png" alt="Velocidad de subida" />
                </div>
                <div className="texts-card-p">
                  <p>Mayor velocidad de subida (upload) automáticamente.</p>
                </div>
              </div>

              <div className="card-presentation">
                <div className="icon-card-p">
                  <img src="https://www.megacable.com.mx/fibra-optica_new/assets/img/icons/v-simetrica-icon.png" alt="Velocidad simétrica" />
                </div>
                <div className="texts-card-p">
                  <p>Velocidades simétricas de subida y bajada</p>
                </div>
              </div>

              <div className="card-presentation">
                <div className="icon-card-p">
                  <img src="https://www.megacable.com.mx/fibra-optica_new/assets/img/icons/estabilidad-icon.png" alt="Estabilidad" />
                </div>
                <div className="texts-card-p">
                  <p>Mejor estabilidad en tu conexión de Internet</p>
                </div>
              </div>
            </div>

            
          </div>
     

        <div className="int-simetrico-container">
          <div className="int-simetrico-content">
            <div className="int-simetrico-txt">
              <h3>Internet simétrico</h3>
              <p className="title-descr-sohrt">¡Conéctate sin límites!</p>
              <p className="descr-sub">
                Conoce más sobre nuestros planes de fibra óptica y eleva tu conexión
              </p>
            </div>
            <div className="int-simetrico-cards">
              <div className="int-simetrico-card">
                <img src="https://www.megacable.com.mx/fibra-optica_new/assets/img/icons/internet-simetrico-icon.png" alt="Internet simétrico" />
                <h4>INTERNET SIMÉTRICO</h4>
                <p>Cuenta con la misma velocidad para cargar y descargar archivos.</p>
              </div>
              <div className="int-simetrico-card">
                <img src="https://www.megacable.com.mx/fibra-optica_new/assets/img/icons/internet-asimetrico-icon.png" alt="Internet asimétrico" />
                <h4>INTERNET ASIMÉTRICO</h4>
                <p>La velocidad de descarga es mayor que la velocidad de carga de archivos.</p>
              </div>
            </div>
          </div>

          <div className="int-simetrico-img">
            <img src="https://www.megacable.com.mx/fibra-optica_new/assets/img/internet-simetrico.png" alt="Internet simétrico" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FORed;