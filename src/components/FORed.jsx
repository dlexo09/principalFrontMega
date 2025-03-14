import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./FORed.css";
import "./Globales.css";

const FORed = () => {
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Teléfono enviado:", phone);
  };

  const handlePhoneChange = (event) => {
    const value = event.target.value;
    setPhone(value);
  };
  return (
    <div className="general-tabs-container">
      <div className="fibra-presentation">
        <div className="text-center ps-2 pe-2 ps-md-0 pe-md-0">
          <h2 className="small-title-services">
            Fibra óptica directo a tu hogar
          </h2>
          <h3 className="big-title-services title-descr">
            Ahora tus servicios están respaldados por una nueva red de fibra
            óptica que llega hasta tu hogar.
          </h3>
        </div>
        <div className="fibra-presentation-content ps-2 pe-2 ps-md-0 pe-md-0">
          <div className="container fored-cards-presentation">
            <div className="fored-card-presentation card-b">
              <div className="fored-icon-card">
                <img
                  src="../src/assets/icons/fibra-optica/mayores-velocidades.png"
                  alt="Velocidad"
                />
              </div>
              <div className="fored-texts-p">
                <p>
                  ¡Mayores
                  <br />
                  Velocidades!
                </p>
                <p className="txt-crd1">200, 350, 500MB</p>
                <p className="mt-2">Y HASTA</p>
                <p className="txt-crd3">1 GB</p>
              </div>
            </div>

            <div className="fored-card-presentation">
              <div className="fored-icon-card">
                <img
                  src="../src/assets/icons/fibra-optica/equipo-ultima-generacion.png"
                  alt="Equipo"
                />
              </div>
              <div className="fored-texts-p">
                <p>
                  Un equipo de última generación con mejor cobertura de señal
                  WiFi
                </p>
              </div>
            </div>

            <div className="fored-card-presentation">
              <div className="fored-icon-card">
                <img
                  src="../src/assets/icons/fibra-optica/mayor-velocidad-subida.png"
                  alt="Velocidad de subida"
                />
              </div>
              <div className="fored-texts-p">
                <p>Mayor velocidad de subida (upload) automáticamente.</p>
              </div>
            </div>

            <div className="fored-card-presentation">
              <div className="fored-icon-card">
                <img
                  src="../src/assets/icons/fibra-optica/velocidades-simetricas.png"
                  alt="Velocidad simétrica"
                />
              </div>
              <div className="fored-texts-p">
                <p>Velocidades simétricas de subida y bajada</p>
              </div>
            </div>

            <div className="fored-card-presentation">
              <div className="fored-icon-card">
                <img
                  src="../src/assets/icons/fibra-optica/mejor-estabilidad.png"
                  alt="Estabilidad"
                />
              </div>
              <div className="fored-texts-p">
                <p>Mejor estabilidad en tu conexión de Internet</p>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="container fored-formulario-p ps-3 pe-3 ps-md-0 pe-md-0"
          id="miFormulario"
        >
          <div className="form__label-p text-center">
            <label htmlFor="phone">SOLICITA TU CAMBIO</label>
          </div>
          <div className="form__capt-p ">
            <div className="form__input">
              <input
                type="text"
                placeholder="Tu teléfono"
                className="inp"
                value={phone}
                onChange={handlePhoneChange}
                maxLength="14"
                id="phone"
                name="phone"
                required
              />
            </div>
            <div className="form__btn-p">
              <button type="submit" id="tel-megamovil-f" className="enviarForm">
                <b>LLÁMAME</b>
              </button>
            </div>
          </div>
        </form>
      </div>

      {/*----------------------------------------------------------------*/}

      <div className="container int-simetrico-container ">
        <div className="row align-items-lg-end align-items-xl-center">
          <div className="col-lg-6 col-xl-5 int-simetrico-content">
            <div className="int-simetrico-txt text-center text-lg-start">
              <h3 className="small-title">Internet simétrico</h3>
              <p className="big-title text-uppercase">
                ¡Conéctate sin límites!
              </p>
              <p className="descr-sub">
                Conoce más sobre nuestros planes de fibra óptica y eleva tu
                conexión
              </p>
            </div>

            <div className="mt-5 d-block d-lg-none col-lg-6 col-xl-7 int-simetrico-img mb-md-5 mb-xl-0">
              <img
                src="../src/assets/images/fibra-optica/conectate-sin-limites.png"
                alt="Internet simétrico"
              />
            </div>

            <div className=" row int-simetrico-cards text-center text-md-start ps-3 pe-3 ps-md-0 pe-md-0">
              <div className="col-lg-5 int-simetrico-card">
                <img
                  src="../src/assets/icons/fibra-optica/internet-simetrico.png"
                  alt="Internet simétrico"
                />
                <h4 className="mt-4 mb-3">INTERNET SIMÉTRICO</h4>
                <p>
                  Cuenta con la misma velocidad para cargar y descargar
                  archivos.
                </p>
              </div>
              <div className="col-lg-5 int-simetrico-card">
                <img
                  src="../src/assets/icons/fibra-optica/internet-asimetrico.png"
                  alt="Internet asimétrico"
                />
                <h4 className="mt-4 mb-3">INTERNET ASIMÉTRICO</h4>
                <p>
                  La velocidad de descarga es mayor que la velocidad de carga de
                  archivos.
                </p>
              </div>
            </div>
          </div>

          <div className="d-none d-lg-block col-lg-6 col-xl-7 int-simetrico-img mb-md-5 mb-xl-0">
            <img
              src="../src/assets/images/fibra-optica/conectate-sin-limites.png"
              alt="Internet simétrico"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FORed;
