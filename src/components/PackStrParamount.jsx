import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { serverAPIUrl } from "../config"; // Ajusta la ruta según la ubicación de tu archivo config.js
import { LocationContext } from "../LocationContext";
import "./PackStrParamount.css";
import "./Globales.css";
const PackStrParamount = () => {
  const { currentLocation } = useContext(LocationContext);
  const [paquetes, setPaquetes] = useState([]);
  const [selectedPack, setSelectedPack] = useState("triple");
  const [chunkSize, setChunkSize] = useState(4); // Nuevo estado para chunkSize
  const [isCliente, setIsCliente] = useState(false); // Estado para "¿Eres cliente?"
  const promoValue = 60; // Definir la variable para el valor adicional

  useEffect(() => {
    const fetchPaquetes = async () => {
      if (currentLocation) {
        try {
          const response = await fetch(
            `${serverAPIUrl}api/${selectedPack}Pack/${currentLocation.idSucursal}`
          );
          const data = await response.json();
          setPaquetes(data);
        } catch (error) {
          console.error("Error fetching paquetes:", error);
        }
      }
    };

    fetchPaquetes();
  }, [selectedPack, currentLocation]);

  // Función para actualizar el chunkSize según el tamaño de la pantalla
  const updateChunkSize = () => {
    if (window.innerWidth < 768) {
      setChunkSize(1); // 1 tarjeta en pantallas pequeñas
    } else if (window.innerWidth < 1024) {
      setChunkSize(2); // 2 tarjetas en pantallas medianas
    } else if (window.innerWidth < 1400) {
      setChunkSize(3); // 3 tarjetas en pantallas medianas grandes
    } else {
      setChunkSize(4); // 4 tarjetas en pantallas grandes
    }
  };

  useEffect(() => {
    updateChunkSize();
    window.addEventListener("resize", updateChunkSize);
    return () => window.removeEventListener("resize", updateChunkSize);
  }, []);

  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  const chunkedPaquetes = chunkArray(paquetes, chunkSize);

  return (
    <div className="container paquetes-tarifarios text-center">
      <div className="cliente-question mb-4">
        <h3 className="small-title txt-paramount-color">EL MEJOR PLAN PARA TI</h3>
        <h3 className="big-title mb-5">¿Ya eres cliente Mega?</h3>
        <div className="btn-container">
          <button
            className={`pack-btn btn-lg mx-2 paramount-cliente-btn ${
              isCliente
                ? "pack-btn-active paramount-btn-color"
                : "pack-btn-inactive"
            }`}
            onClick={() => setIsCliente(true)}
          >
            Sí
          </button>
          <button
            className={`pack-btn btn-lg mx-2 paramount-cliente-btn ${
              !isCliente
                ? "pack-btn-active paramount-btn-color"
                : "pack-btn-inactive "
            }`}
            onClick={() => setIsCliente(false)}
          >
            No
          </button>
        </div>
      </div>

      {isCliente ? (
        <>
          <div className="mt-4">
            <p className="cliente-info cliente-info-paramount mt-5">
            Si tienes
              <span>Xview o Xview+</span> por Mega <br />
              ¡Tienes <span>Paramount+</span> incluido en tu paquete!
            </p>
          </div>
          <div className="container table-str-clients table-prime-clients">
              <div className="plans-contrata-paramount d-flex justify-content-center">
                <div className="paramount-icon-container">
                  <img className="paramount-icon" src="../src/assets/icons/paramount/strm-icon-2.png" alt="" />
                </div>
                <ul className="paramount-content">
                    <li>Contenido exclusivo</li>
                    <li>Contenido en idioma original</li>
                    <li>Descarga de contenidos para disfrutarlos sin conexión a internet</li>
                    <li>Descarga la App y lleva el contenido de Paramount+ en todos tus dispositivos móviles</li>
                    <li>Podrás conectar 3 dispositivos simultáneamente</li>
                </ul>
                <button className=" btn-packs paramount-btn-color paramount-btn-contrata btn-client-pos">
                  ¡Lo quiero!
                </button>
            </div>

            <div className="paramount-programs d-flex justify-content-center align-items-center" >
              <img src="../src/assets/images/streamings/paramount/paramount-originals-logo.png" alt="Paramount Plus Originals" />
              <img src="../src/assets/images/streamings/paramount/showtime-logo.png" alt="Show Time" />
              <img src="../src/assets/images/streamings/paramount/mtv-logo.png" alt="MTV" />
              <img src="../src/assets/images/streamings/paramount/nikelodeon-logo.png" alt="Nikelodeon" />
              <img src="../src/assets/images/streamings/paramount/nikjr-logo.png" alt="Nick Jr" />
              <img src="../src/assets/images/streamings/paramount/smithsonian-logo.png" alt="Smithsonian Channel" />
            </div>
          </div>

          <div className="pack-client-legal mt-5">
            <p>*Aplican restricciones. Consulta términos y condiciones <a href="#">aquí</a></p>
          </div>

          

          {/* **************** IS NOT CLIENT ************** */}
        </>
      ) : (
        <div>
          <p className="mb-5 cliente-info mt-5">
            ¡Elige el paquete ideal para disfrutar el mejor contenido para toda
            la familia!
          </p>
          <div className="d-flex justify-content-center mb-3 btn-container">
            <button
              type="button"
              className={`pack-btn ${
                selectedPack === "triple"
                  ? "pack-btn-active paramount-btn-color"
                  : "pack-btn-inactive"
              } btn-lg mx-2`}
              onClick={() => setSelectedPack("triple")}
            >
              TRIPLE PACK
              <br />
              <span>INTERNET + TV + TELEFONÍA</span>
            </button>
            <button
              type="button"
              className={`pack-btn ${
                selectedPack === "doble"
                  ? "pack-btn-active paramount-btn-color"
                  : "pack-btn-inactive"
              } btn-lg mx-2`}
              onClick={() => setSelectedPack("doble")}
            >
              DOBLE PACK
              <br />
              <span>INTERNET + TELEFONÍA</span>
            </button>
          </div>
          <div
            id="carouselPaquetes"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {chunkedPaquetes.map((chunk, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <div className="d-flex justify-content-center slider-gp">
                    {chunk.map((paquete, i) => (
                      <div
                        key={i}
                        className="paquete-item paquete-item-prme card m-2"
                      >
                        <div className="card-body">
                          <h2 className="card-title">
                            {paquete.simetria === 0
                              ? "INTERNET ILIMITADO"
                              : "INTERNET SIMÉTRICO"}
                          </h2>
                          <p className="card-text velocidadPromo velocidadPromo-paramount">
                            {paquete.velocidadPromo} MEGAS
                          </p>
                          <p className="card-text tiempoVelocidadPromo">
                            x {paquete.tiempoVelocidaPromo} meses<sup>*</sup>
                          </p>

                          {paquete.archivo && (
                            <div className="xview-content">
                              <p className="card-servicio-txt">
                                TV HD INTERACTIVA
                              </p>
                              <p>
                                <img
                                  src={`${serverAPIUrl}${paquete.ruta}${paquete.archivo}`}
                                  alt="TV HD INTERACTIVA"
                                  style={{ height: "30px" }}
                                />
                              </p>
                              <p className="card-text">
                                {paquete.textoServicioCable}
                              </p>
                            </div>
                          )}

                          <p className="card-servicio-txt servicio-m">
                            Telefonia Fija
                          </p>
                          <div className="promoExtra">
                            <div className="pack-str-container">
                              <p className="card-servicio-txt servicio-m mb-2">
                                Membresía
                              </p>
                              <div className="membresia-paramount">
                                <img src="../src/assets/images/streamings/paramount/paramount-logo.png" alt="" />
                              </div>
                            </div>
                            <p className="card-text price-card">
                              <span className="price-mxn">$</span>
                              {paquete.tarifaPromocional + promoValue}
                              <sup>*</sup>
                              <span className="time-crd">/mes</span>
                            </p>
                            <p className="card-text">
                              x {paquete.tiempoVelocidaPromo} meses
                            </p>
                          </div>
                          <button className="btn btn-packs btn-pack-card paramount-btn-color">
                            ¡Lo quiero!
                          </button>

                          {/* Icons cards */}
                          <img
                            className="icon-card-packs internet-icon"
                            src="../src/assets/icons/paramount/internet-icon.png"
                            alt="Icono Internet"
                          />
                          <img
                            className="icon-card-packs str-icon str-icon-prime"
                            src="../src/assets/icons/paramount/strm-icon.png"
                            alt="Icono Internet"
                          />
                          {selectedPack !== "doble" && (
                            <img
                              className="icon-card-packs tv-icon"
                              src="../src/assets/icons/paramount/tv-icon.png"
                              alt="Icono TV"
                            />
                          )}
                          <img
                            className={`icon-card-packs telefonia-icon ${
                              selectedPack === "doble"
                                ? "telefonia-icon-doble"
                                : ""
                            }`}
                            src="../src/assets/icons/paramount/telefonia-icon.png"
                            alt="Icono Telefonía"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="container packs-terminos">
            {selectedPack !== "doble" && (
              <p className="promo-xview ">
                Incluyen{" "}
                <span className="txt-paramount-color">
                  más de 30,000 hrs de contenido
                </span>{" "}
                en Xview+
              </p>
              )}
              
              <p>
                Nota: Promoción válida domiciliando el pago a tarjeta.{" "}
                <a className="txt-paramount-color" href="">
                  Tarifas registradas ante el IFT.{" "}
                </a>
                Aplican restricciones. Consulta términos y condiciones{" "}
                <a
                  className="txt-paramount-color"
                  target="_blank"
                  href="https://www.megacable.com.mx/terminos-y-condiciones"
                >
                  aquí.
                </a>
              </p>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselPaquetes"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselPaquetes"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PackStrParamount;
