import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "./FOBeneficios.css";

const FOBeneficios = () => {
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
    <>
      <Helmet>
      <title>Beneficios de la Fibra Óptica Mega | Internet Simétrico, Rápido y Sin Límites</title>
      <meta name="description" content="Descubre los beneficios de la fibra óptica con Megacable: internet simétrico, sin límites de velocidad, instalación sin costos adicionales y atención personalizada. ¡Navega con estabilidad y máxima velocidad sin interrupciones!" />

      </Helmet>

      <div className="general-tabs-container">
        <div className="container-fluid">
          <div className="container">
            <div className="text-center">
              <h1 className="small-title-services">fibra óptica</h1>
              <h2 className="big-title-services">
                BENEFICIOS DE LA FIBRA ÓPTICA CON MEGA
              </h2>
            </div>
          </div>

          <div className="comparative-table-container d-flex justify-content-center align-items-center">
            <div className="comparative-table-img">
              <img
                src="/img/fibra-optica/FOYS-tabla-comp-img.png"
                alt="Beneficios Fibra Óptica Megacable"
              />
            </div>

            <div className="comparative-table table-gp">
              {/* tabla CON MEGA */}
              <div className="con-mega">
                <h3 className="comparative-title">
                  CON{" "}
                  <img
                    src="/icons/fibra-optica/logo_mega_horizontal.png"
                    alt="Megacable logo"
                  />
                </h3>
                <div className="beneficios-mega">
                  <div className="txt-b-content beneficio-blue txt-border-top">
                    <img
                      src="/icons/fibra-optica/check-blue.png"
                      alt=""
                    />
                    <p>
                      <span className="txt-blue-table">
                        ¡Nuestra red es nueva!
                      </span>{" "}
                      ¡Estrénala!
                    </p>
                  </div>

                <div className="txt-b-content beneficio-white">
                  <img
                    src="/icons/fibra-optica/check-blue.png"
                    alt=""
                  />
                  <p>
                    <span className="txt-blue-table">
                      ¡Sin plazos forzosos!
                    </span>{" "}
                    En costo de cableado y equipo
                  </p>
                </div>

                <div className="txt-b-content beneficio-blue">
                  <img
                    src="/icons/fibra-optica/check-blue.png"
                    alt=""
                  />
                  <p>
                    Instalamos con tramos cortos{" "}
                    <span className="txt-blue-table">
                      más estabilidad y menos interferencias
                    </span>
                  </p>
                </div>

                <div className="txt-b-content beneficio-white">
                  <img
                    src="/icons/fibra-optica/check-blue.png"
                    alt=""
                  />
                  <p>
                    <span>¡Nuestro internet es realmente inmediato!</span>{" "}
                    navega sin topes y a la máxima velocidad sin limitaciones
                  </p>
                </div>

                <div className="txt-b-content beneficio-blue">
                  <img
                    src="/icons/fibra-optica/check-blue.png"
                    alt=""
                  />
                  <p>
                    <span>Atención con más de 300 sucursales</span> a tu
                    servicio y un Call Center Nacional{" "}
                    <span className="txt-blue-table">
                      para atenderte en todo momento
                    </span>
                  </p>
                </div>

                <div className="txt-b-content beneficio-white">
                  <img
                    src="/icons/fibra-optica/check-blue.png"
                    alt=""
                  />
                  <p>
                    <br />
                    <span>No cobramos</span> activación, instalación ni
                    anualidad
                    <br />
                    <br />
                  </p>
                </div>

                <div className="txt-b-content beneficio-blue txt-border-button">
                  <img
                    src="/icons/fibra-optica/check-blue.png"
                    alt=""
                  />
                  <p>
                    <span>Premiamos</span> a nuestros clientes leales
                  </p>
                </div>
              </div>
            </div>

              {/* tabla CON LOS OTROS */}
              <div className="con-otros">
                <h3 className="comparative-title mrg-title">CON LOS OTROS</h3>
                <div className="con-otros-beneficios">
                  <div className="txt-b-content beneficio-grey txt-border-top">
                    <img
                      src="/icons/fibra-optica/wht-icon.png"
                      alt=""
                    />
                    <p>Su red ya es vieja.</p>
                  </div>

                <div className="txt-b-content beneficio-white">
                  <img
                    src="/icons/fibra-optica/wht-icon.png"
                    alt=""
                  />
                  <p>
                    Ellos tiran hasta 600 mts para llegar a tu casa,
                    sacrificando la estabilidad
                  </p>
                </div>

                <div className="txt-b-content beneficio-grey">
                  <img
                    src="/icons/fibra-optica/wht-icon.png"
                    alt=""
                  />
                  <p>
                    Con ellos firmas un plazo de 18 meses por el costo del
                    cableado y la ONT
                  </p>
                </div>

                <div className="txt-b-content beneficio-white">
                  <img
                    src="/icons/fibra-optica/wht-icon.png"
                    alt=""
                  />
                  <p>
                    Allá tienen tope. Evita quedarte a mitad de tu serie o que
                    se caiga tu conferencia porque “te terminaste tus datos”
                  </p>
                </div>

                <div className="txt-b-content beneficio-grey">
                  <img
                    src="/icons/fibra-optica/wht-icon.png"
                    alt=""
                  />
                  <p>
                    <br />
                    Ellos solo atienden por teléfono
                    <br />
                    <br />
                  </p>
                </div>

                <div className="txt-b-content beneficio-white">
                  <img
                    src="/icons/fibra-optica/wht-icon.png"
                    alt=""
                  />
                  <p>
                    Allá te cobran $450 de activación del servicio y hasta
                    $1,350 por la instalación y a plazo forzoso. Y por anualidad
                    te hacen cargo de $130!
                  </p>
                </div>

                <div className="txt-b-content beneficio-grey txt-border-button">
                  <img
                    src="/icons/fibra-optica/wht-icon.png"
                    alt=""
                  />
                  <p>No te premian</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


        <div className="container">
          <form onSubmit={handleSubmit} className="container" id="miFormulario">
            <div className="form__label-p text-center">
              <label htmlFor="phone">SOLICITA TU CAMBIO</label>
            </div>
            <div className="form__capt-p form-fob">
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
                <button
                  type="submit"
                  id="tel-megamovil-f"
                  className="enviarForm"
                >
                  <b>LLÁMAME</b>
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="fobeneficios-container">
          <div className="container ventajas-simetrico-content">
            <h2 className="text-center ventajas-simetrico-title text-uppercase">
              Ventajas del internet simétrico
            </h2>
            <div className="row justify-content-center ventajas-simetrico-container">
              <div className=" col-md-5 col-xl-3 ventajas-simetrico-card">
                <img
                  src="/icons/fibra-optica/vdis-num-1.png"
                  alt="Uno"
                />
                <h3 className="mb-4">Ventaja Frente al Internet Tradicional</h3>
                <p>
                  Su principal ventaja es la velocidad de subida. Ofrece la
                  misma velocidad de subida y de bajada, por lo que la simetría
                  permite una transmisión de datos más equilibrada y rápida.
                </p>
              </div>
              <div className="col-md-5 col-xl-3 ventajas-simetrico-card">
                <img
                  src="/icons/fibra-optica/vdis-num-2.png"
                  alt="Dos"
                />
                <h3 className="mb-4">Menor Latencia</h3>
                <p>
                  La menor latencia gracias a la red de Fibra óptica en conjunto
                  con la velocidad simétrica permite respuestas de red más
                  rápidas especialmente importantes para videollamadas o juegos
                  en línea.
                </p>
              </div>
              <div className="col-md-5 col-xl-3 ventajas-simetrico-card">
                <img
                  src="/icons/fibra-optica/vdis-num-3.png"
                  alt="Tres"
                />
                <h3 className="mb-4">Mejora en Videollamadas y Streaming</h3>
                <p>
                  La velocidad simétrica permite mejorar la calidad de las
                  videollamadas (en imagen y sonido), ver vídeos en directo sin
                  cortes en plataformas como YouTube, hacer streaming desde tus
                  dispositivos, cargar y descargar archivos mucho más rápido.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FOBeneficios;
