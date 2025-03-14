import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { serverAPIUrl } from "../config"; // Ajusta la ruta según la ubicación de tu archivo config.js
import { LocationContext } from "../LocationContext";
import "./Globales.css";
import "./PackStrNetflix.css";

const PackStrNetflix = () => {
  const { currentLocation } = useContext(LocationContext);
  const [paquetes, setPaquetes] = useState([]);
  const [selectedPack, setSelectedPack] = useState("triple");
  const [chunkSize, setChunkSize] = useState(4); // Nuevo estado para chunkSize
  const [isCliente, setIsCliente] = useState(false); // Estado para "¿Eres cliente?"
  const promoValue = 60; // Definir la variable para el valor adicional
  const [selectedPlan, setSelectedPlan] = useState({});

  useEffect(() => {
    const fetchPaquetes = async () => {
      if (currentLocation) {
        try {
          const response = await fetch(
            `${serverAPIUrl}api/${selectedPack}Pack/${currentLocation.idSucursal}`
          );
          const data = await response.json();
          setPaquetes(data);
  
          // Inicializar el estado selectedPlan con "EstandarAnuncios" para cada paquete
          const initialSelectedPlan = {};
          data.forEach((paquete, i) => {
            initialSelectedPlan[paquete.id || i] = "EstandarAnuncios"; // Usa el ID del paquete o el índice
          });
          setSelectedPlan(initialSelectedPlan);
        } catch (error) {
          console.error("Error fetching paquetes:", error);
        }
      }
    };
  
    fetchPaquetes();
  }, [selectedPack, currentLocation]);

  // Función para actualizar el chunkSize según el tamaño de la pantalla
  const updateChunkSize = () => {
  if (window.innerWidth < 1024) {
      setChunkSize(1); // 2 tarjetas en pantallas medianas
    } else if (window.innerWidth < 1400) {
      setChunkSize(2); // 3 tarjetas en pantallas medianas grandes
    } else {
      setChunkSize(3); // 4 tarjetas en pantallas grandes
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
        <h3 className="small-title txt-netflix-color">EL MEJOR PLAN PARA TI</h3>
        <h3 className="big-title mb-5">¿Ya eres cliente Mega?</h3>
        <div className="btn-container">
          <button
            className={`pack-btn btn-lg mx-2 disney-cliente-btn ${
              isCliente
                ? "pack-btn-active netflix-btn-color"
                : "pack-btn-inactive"
            }`}
            onClick={() => setIsCliente(true)}
          >
            Sí
          </button>
          <button
            className={`pack-btn btn-lg mx-2 disney-cliente-btn ${
              !isCliente
                ? "pack-btn-active netflix-btn-color"
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
          <div className="container table-str-clients d-none d-lg-block">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">
                    ESTÁNDAR
                    <br />
                    CON ANUNCIOS
                  </th>
                  <th scope="col">ESTÁNDAR</th>
                  <th scope="col">PREMIUM</th>
                </tr>
              </thead>
              <tbody>
                <tr className="tr-red">
                  <td className="text-start br-str-table1 vm-td">Anuncios</td>
                  <td>
                    <span>Con anuncios;</span> todos los
                    <br />
                    juegos móviles y la
                    <br />
                    mayoría de las series y<br />
                    películas están disponibles.
                  </td>
                  <td>
                    Juegos móviles, series y<br />
                    películas;
                    <span>
                      sin publicidad
                      <br />y sin límite
                    </span>
                  </td>
                  <td>
                    Juegos móviles, series y<br />
                    películas;
                    <span>
                      sin
                      <br />
                      publicidad y sin límite
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="text-start">
                    Dispositivos
                    <br />
                    compatibles
                  </td>
                  <td>
                    <span>2 dispositivos</span>
                    <br />
                    compatibles a la vez
                  </td>
                  <td>
                    <span>2 dispositivos</span>
                    <br />
                    compatibles a la vez
                  </td>
                  <td>
                    <span>6 dispositivos</span>
                    <br />
                    compatibles a la vez
                  </td>
                </tr>
                <tr className="tr-red">
                  <td className="text-start">Calidad de Video</td>
                  <td>1080p (Full HD)</td>
                  <td>1080p (Full HD)</td>
                  <td>4K (Ultra HD) + HDR</td>
                </tr>
                <tr>
                  <td className="text-start">Descargas</td>
                  <td>
                    <span>2 dispositivos</span>
                    <br />
                    compatibles a la vez
                  </td>
                  <td>
                    <span>2 dispositivos</span>
                    <br />
                    compatibles a la vez
                  </td>
                  <td>
                    <span>6 dispositivos</span>
                    <br />
                    compatibles a la vez
                  </td>
                </tr>
                <tr className="tr-red">
                  <td className="text-start">Miembros extra</td>
                  <td></td>
                  <td>
                    <span>1 miembro extra</span> que
                    <br />
                    no viva contigo
                  </td>
                  <td>
                    <span>2 miembro extra</span> que
                    <br />
                    no viva contigo
                  </td>
                </tr>

                <tr>
                  <td className="text-start br-str-table3">Audio espacial</td>
                  <td></td>
                  <td></td>
                  <td>
                    <span>Audio espacial</span>
                    <br /> de Netflix
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="contrata-str-netflix row d-flex justify-content-end">
              <div className="col-md-"></div>
              <div className="col-md-3 plans-contrata-netflix">
                <img src="../src/assets/icons/netflix/strm-icon.png" alt="" />
                <button className=" btn-packs netflix-btn-color btn-client-pos">
                  ¡Lo quiero!
                </button>
              </div>
              <div className="col-md-3 plans-contrata-netflix">
                <img src="../src/assets/icons/netflix/strm-icon.png" alt="" />
                <button className=" btn-packs netflix-btn-color btn-client-pos">
                  ¡Lo quiero!
                </button>
              </div>
              <div className="col-md-3 plans-contrata-netflix">
                <img src="../src/assets/icons/netflix/strm-icon.png" alt="" />
                <button className=" btn-packs netflix-btn-color btn-client-pos">
                  ¡Lo quiero!
                </button>
              </div>
            </div>
          </div>
          <div className="pack-client-legal mt-5">
            <p className="pt-lg-5">*Aplican restricciones. Consulta términos y condiciones <a href="#">aquí</a></p>
          </div>

          {/* **************** IS CLIENT MOVILE ************** */}

          <div className="carousel-container d-lg-none mt-5">
            <div
              id="carouselClienteMobile"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {(() => {
                  // Datos de prueba locales para esta sección
                  const datosPrueba = [
                    {
                      titulo: (
                        <>
                          ESTÁNDAR<br />
                          CON ANUNCIOS
                        </>
                      ),
                      contenido: (
                        <ul className="beneficios-pack-movile">
                          <li>Con anuncios; todos los juegos móviles y la mayoría de las series y películas están disponibles. </li>
                          <li>2 dispositivos compatibles a la vez</li>
                          <li>1080p (Full HD)</li>
                          <li>2 dispositivos compatibles a la vez</li>
                        </ul>
                      ),
                    },
                    {
                      titulo: "ESTÁNDAR",
                      contenido: (
                        <ul className="beneficios-pack-movile">
                          <li>Juegos móviles, series y películas; sin publicidad y sin límite</li>
                          <li>2 dispositivos compatibles a la vez</li>
                          <li>1080p (Full HD)</li>
                          <li>2 dispositivos compatibles a la vez</li>
                          <li>1 miembro extra que no viva contigo</li>
                        </ul>
                      ),
                    },
                    {
                      titulo: "PREMIUM",
                      contenido: (
                        <ul className="beneficios-pack-movile">
                          <li>Juegos móviles, series y películas; sin publicidad y sin límite</li>
                          <li>4 dispositivos compatibles a la vez</li>
                          <li>4K (Ultra HD) + HDR</li>
                          <li>6 dispositivos compatibles a la vez</li>
                          <li>2 miembros extras que no vivan contigo</li>
                          <li>Audio espacial de Netflix</li>
                        </ul>
                      ),
                    },
                  ];

                  // Particionar datos de prueba en chunks según el tamaño
                  const chunkedPrueba = chunkArray(datosPrueba, chunkSize);

                  return chunkedPrueba.map((chunk, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                      <div className="d-flex justify-content-center slider-gp">
                        {chunk.map((paquete, i) => (
                          <div
                            key={i}
                            className="paquete-item paquete-item-netflix card m-2"
                          >
                            <div className="card-body card-body-movile">
                              {/* Accede a las propiedades del objeto "paquete" */}
                              <img
                                className="str-icon-movile"
                                src="../src/assets/icons/netflix/strm-icon.png"
                                alt="Icono Disney"
                              />
                              <h3 className="pack-movile-title">
                                {paquete.titulo}
                              </h3>
                              <div className="text-start">
                                {paquete.contenido}{" "}
                                {/* Renderiza el contenido JSX */}
                              </div>
                              <button className="btn-packs netflix-btn-color btn-pack-movil">
                                ¡Lo quiero!
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ));
                })()}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselClienteMobile"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon prev-icon-netflix"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselClienteMobile"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon next-icon-netflix"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
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
                  ? "pack-btn-active netflix-btn-color"
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
                  ? "pack-btn-active netflix-btn-color"
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
                        className="paquete-item paquete-item-netflix card m-2"
                      >
                        <div className="card-body">
                          <h2 className="card-title">
                            {paquete.simetria === 0
                              ? "INTERNET ILIMITADO"
                              : "INTERNET SIMÉTRICO"}
                          </h2>
                          <p className="card-text velocidadPromo velocidadPromo-netflix">
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
                              <div className="pack-str-content pack-str-netflix d-flex flex-column justify-content-center">
                              <button
            className={`text-start netflix-btn-plan d-flex justify-content-start align-items-center pack-btn-str ${
              selectedPlan[paquete.id || i] === "EstandarAnuncios"
                ? "netflix-btn-color"
                : "pack-btn-inactive pack-btn-inactive-netflix"
            }`}
            onClick={() =>
              setSelectedPlan((prevState) => ({
                ...prevState,
                [paquete.id || i]: "EstandarAnuncios",
              }))
            }
          >
            <span className="pi1-hd plans-netflix-icon"></span>
            <p>
              Estándar
              <br />
              con anuncios <br />
              <span className="plans-netflix-tv">2 Pantallas</span>
            </p>
          </button>

          <button
            className={`text-start netflix-btn-plan d-flex justify-content-start align-items-center pack-btn-str ${
              selectedPlan[paquete.id || i] === "Estandar"
                ? "netflix-btn-color"
                : "pack-btn-inactive pack-btn-inactive-netflix"
            }`}
            onClick={() =>
              setSelectedPlan((prevState) => ({
                ...prevState,
                [paquete.id || i]: "Estandar",
              }))
            }
          >
            <span className="pi2-2hd plans-netflix-icon"></span>
            <p>
              Estándar <br />
              <span className="plans-netflix-tv">2 Pantallas</span>
            </p>
          </button>

          <button
            className={`text-start netflix-btn-plan d-flex justify-content-start align-items-center pack-btn-str ${
              selectedPlan[paquete.id || i] === "Premium"
                ? "netflix-btn-color"
                : "pack-btn-inactive pack-btn-inactive-netflix"
            }`}
            onClick={() =>
              setSelectedPlan((prevState) => ({
                ...prevState,
                [paquete.id || i]: "Premium",
              }))
            }
          >
            <span className="pi3-4k plans-netflix-icon"></span>
            <p>
              Premium <br />
              <span className="plans-netflix-tv">2 Pantallas</span>
            </p>
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
                          <button className="btn btn-packs btn-pack-card netflix-btn-color">
                            ¡Lo quiero!
                          </button>

                          {/* Icons cards */}
                          <img
                            className="icon-card-packs internet-icon d-none d-md-block"
                            src="../src/assets/icons/netflix/internet-icon.png"
                            alt="Icono Internet"
                          />
                          <img
                            className="icon-card-packs str-icon d-none d-md-block"
                            src="../src/assets/icons/netflix/strm-icon.png"
                            alt="Icono Internet"
                          />
                          {selectedPack !== "doble" && (
                            <img
                              className="icon-card-packs tv-icon d-none d-md-block"
                              src="../src/assets/icons/netflix/tv-icon.png"
                              alt="Icono TV"
                            />
                          )}
                          <img
                            className={`icon-card-packs telefonia-icon d-none d-md-block ${
                              selectedPack === "doble"
                                ? "telefonia-icon-doble"
                                : ""
                            }`}
                            src="../src/assets/icons/netflix/telefonia-icon.png"
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
                <span className="txt-netflix-color">
                  más de 30,000 hrs de contenido
                </span>{" "}
                en Xview+
              </p>
              )}
              
              <p>
                Nota: Promoción válida domiciliando el pago a tarjeta.{" "}
                <a className="txt-netflix-color" href="">
                  Tarifas registradas ante el IFT.{" "}
                </a>
                Aplican restricciones. Consulta términos y condiciones{" "}
                <a
                  className="txt-netflix-color"
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

export default PackStrNetflix;
