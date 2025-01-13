import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { serverAPIUrl } from "../config"; // Ajusta la ruta según la ubicación de tu archivo config.js
import { LocationContext } from "../LocationContext";
import "./Globales.css";
import "./PackStrDisney.css";

const PackStrDisney = () => {
  const { currentLocation } = useContext(LocationContext);
  const [paquetes, setPaquetes] = useState([]);
  const [selectedPack, setSelectedPack] = useState("triple");
  const [chunkSize, setChunkSize] = useState(4); // Nuevo estado para chunkSize
  const [isCliente, setIsCliente] = useState(false); // Estado para "¿Eres cliente?"
  const promoValue = 60; // Definir la variable para el valor adicional
  const [selectedPlan, setSelectedPlan] = useState("Premium"); // Estado para el plan seleccionado

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
        <h3 className="small-title txt-disney-color">EL MEJOR PLAN PARA TI</h3>
        <h3 className="big-title mb-5">¿Ya eres cliente Mega?</h3>
        <div className="btn-container">
          <button
            className={`pack-btn btn-lg mx-2 disney-cliente-btn ${
              isCliente
                ? "pack-btn-active disney-btn-color"
                : "pack-btn-inactive"
            }`}
            onClick={() => setIsCliente(true)}
          >
            Sí
          </button>
          <button
            className={`pack-btn btn-lg mx-2 disney-cliente-btn ${
              !isCliente
                ? "pack-btn-active disney-btn-color"
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
            <p className="cliente-info mt-5">
              ¡Elige el paquete ideal para disfrutar el mejor contenido para
              toda la familia!
            </p>
          </div>
          <div className="container table-str-clients">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">ESTÁNDAR</th>
                  <th scope="col">PREMIUM</th>
                </tr>
              </thead>
              <tbody>
                <tr className="tr-gray">
                  <td className="text-start br-str-table1">Familiar</td>
                  <td><span></span></td>
                  <td><span></span></td>

                </tr>
                <tr>
                  <td className="text-start">Deportes</td>
                  <td>ESPN 1, ESPN 3</td>
                  <td>TODO ESPN</td>
                </tr>
                <tr className="tr-gray">
                  <td className="text-start">Anuncios en VOD</td>
                  <td>NO</td>
                  <td>NO</td>
                </tr>
                <tr >
                  <td className="text-start">Calidad de Video</td>
                  <td>1080 MP</td>
                  <td>UHD / HDR</td>
                </tr>
                <tr className="tr-gray">
                  <td className="text-start">Dispositivos Simultáneos</td>
                  <td>2</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td className="text-start">Descargas</td>
                  <td>Si</td>
                  <td>Si</td>
                </tr>
                <tr className="tr-gray">
                  <td className="text-start br-str-table3">Calidad de Audio</td>
                  <td>STEREO 5.1</td>
                  <td>ATMOS</td>
                </tr>
              </tbody>
            </table>

            <div className="contrata-str-clients row d-flex justify-content-end">
              <div className="col-md-4">

              </div>
              <div className="col-md-4 plans-contrata">
                <img src="../src/assets/icons/disney/strm-icon.png" alt="" />
                <button className=" btn-packs disney-btn-color btn-client-pos">¡Lo quiero!</button>
              </div>
              <div className="col-md-4 plans-contrata">
                <img src="../src/assets/icons/disney/strm-icon.png" alt="" />
                <button className=" btn-packs disney-btn-color btn-client-pos">¡Lo quiero!</button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>
          <p className="mb-5 title-especial mt-5">
            ¡Elige el paquete ideal para disfrutar el mejor contenido para toda
            la familia!
          </p>
          <div className="d-flex justify-content-center mb-3 btn-container">
            <button
              type="button"
              className={`pack-btn ${
                selectedPack === "triple"
                  ? "pack-btn-active disney-btn-color"
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
                  ? "pack-btn-active disney-btn-color"
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
                        className="paquete-item paquete-item-disney card m-2"
                      >
                        <div className="card-body">
                          <h2 className="card-title">
                            {paquete.simetria === 0
                              ? "INTERNET ILIMITADO"
                              : "INTERNET SIMÉTRICO"}
                          </h2>
                          <p className="card-text velocidadPromo velocidadPromo-disney">
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
                                SELECCIONA TU PLAN
                              </p>
                              <div className="pack-str-content d-flex flex-column justify-content-center">
                                <button
                                  className={`pack-btn-str ${
                                    selectedPlan === "Premium"
                                      ? "disney-btn-color"
                                      : "pack-btn-inactive"
                                  }`}
                                  onClick={() => setSelectedPlan("Premium")}
                                >
                                  Premium
                                </button>
                                <button
                                  className={`pack-btn-str ${
                                    selectedPlan === "Estandar"
                                      ? "disney-btn-color"
                                      : "pack-btn-inactive"
                                  }`}
                                  onClick={() => setSelectedPlan("Estandar")}
                                >
                                  Estandar
                                </button>
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
                          <button className="btn btn-packs btn-pack-card disney-btn-color">
                            ¡Lo quiero!
                          </button>

                          {/* Icons cards */}
                          <img
                            className="icon-card-packs internet-icon"
                            src="../src/assets/icons/disney/internet-icon.png"
                            alt="Icono Internet"
                          />
                          <img
                            className="icon-card-packs str-icon"
                            src="../src/assets/icons/disney/strm-icon.png"
                            alt="Icono Internet"
                          />
                          {selectedPack !== "doble" && (
                            <img
                              className="icon-card-packs tv-icon"
                              src="../src/assets/icons/disney/tv-icon.png"
                              alt="Icono TV"
                            />
                          )}
                          <img
                            className={`icon-card-packs telefonia-icon ${
                              selectedPack === "doble"
                                ? "telefonia-icon-doble"
                                : ""
                            }`}
                            src="../src/assets/icons/disney/telefonia-icon.png"
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
              <p className="promo-xview ">
                Incluyen <span className="txt-disney-color">más de 30,000 hrs de contenido</span> en Xview+
              </p>
              <p>
                Nota: Promoción válida domiciliando el pago a tarjeta.{" "}
                <a className="txt-disney-color" href="">Tarifas registradas ante el IFT. </a>
                Aplican restricciones. Consulta términos y condiciones{" "}
                <a className="txt-disney-color"
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

export default PackStrDisney;
