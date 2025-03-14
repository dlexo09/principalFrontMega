import React, { useState, useEffect, useContext } from "react";
import { serverAPILambda } from "../config"; // Ajusta la ruta según la ubicación de tu archivo config.js
import { LocationContext } from "../LocationContext";
import "./PackStrDisney.css";

const PackStrDisney = () => {
  const { currentLocation } = useContext(LocationContext);
  const [paquetes, setPaquetes] = useState([]);
  const [selectedPack, setSelectedPack] = useState("triple");
  const [chunkSize, setChunkSize] = useState(4); // Nuevo estado para chunkSize
  const [isCliente, setIsCliente] = useState(false); // Estado para "¿Eres cliente?"
  const promoValue = 0; // Definir la variable para el valor adicional
  const [extraPromos, setExtraPromos] = useState([]); // Estado para las promociones extra
  const [selectedPlan, setSelectedPlan] = useState({}); // Estado para el plan seleccionado
  const [selectedPromo, setSelectedPromo] = useState({}); // Estado para la promoción seleccionada

  const handlePlanChange = (paqueteId, plan) => {
    setSelectedPlan(prevState => ({
      ...prevState,
      [paqueteId]: plan,
    }));
  };

  const handlePromoChange = (paqueteId, promo) => {
    setSelectedPromo(prevState => ({
      ...prevState,
      [paqueteId]: promo,
    }));
  };

  useEffect(() => {
    const fetchPaquetes = async () => {
      if (currentLocation) {
        try {
          const response = await fetch(
            `${serverAPILambda}api/${selectedPack}Pack/${currentLocation.idSucursal}`
          );
          const data = await response.json();
          setPaquetes(data);

          // Inicializar el estado selectedPlan con "Estandar" para cada paquete
          const initialSelectedPlan = {};
          data.forEach((paquete, i) => {
            initialSelectedPlan[paquete.id || i] = "Estandar"; // Usa el ID del paquete o el índice
          });
          setSelectedPlan(initialSelectedPlan);
        } catch (error) {
          console.error("Error fetching paquetes:", error);
        }
      }
    };

    fetchPaquetes();
  }, [selectedPack, currentLocation]);

  useEffect(() => {
    const fetchExtraPromos = async () => {
      try {
        const response = await fetch(`${serverAPILambda}api/extraPromoDisney`);
        const data = await response.json();
        setExtraPromos(data);
      } catch (error) {
        console.error("Error fetching extra promos:", error);
      }
    };

    fetchExtraPromos();
  }, []);

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

  const handleButtonClick = (idContrata) => {
    navigate(`/detallePaquete/${idContrata}`);
  };

  return (
    <div className="container paquetes-tarifarios text-center">
      <div className="cliente-question mb-4">
        <h3 className="small-title txt-disney-color">EL MEJOR PLAN PARA TI</h3>
        <h3 className="big-title mb-5">¿Ya eres cliente Mega?</h3>
        <div className="btn-container">
          <button
            className={`pack-btn btn-lg mx-2 disney-cliente-btn ${isCliente
              ? "pack-btn-active disney-btn-color"
              : "pack-btn-inactive"
              }`}
            onClick={() => setIsCliente(true)}
          >
            Sí
          </button>
          <button
            className={`pack-btn btn-lg mx-2 disney-cliente-btn ${!isCliente
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
          <div className="container table-str-clients d-none d-lg-block">
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
                  <td>
                    <span></span>
                  </td>
                  <td>
                    <span></span>
                  </td>
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
                <tr>
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
              <div className="col-md-4"></div>
              <div className="col-md-4 plans-contrata">
                <img src="/icons/disney/strm-icon.png" alt="" />
                <button className=" btn-packs disney-btn-color btn-client-pos">
                  ¡Lo quiero!
                </button>
              </div>
              <div className="col-md-4 plans-contrata">
                <img src="/icons/disney/strm-icon.png" alt="" />
                <button className=" btn-packs disney-btn-color btn-client-pos">
                  ¡Lo quiero!
                </button>
              </div>
            </div>
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
                      titulo: "ESTÁNDAR",
                      contenido: (
                        <ul className="beneficios-pack-movile">
                          <li>Familiar</li>
                          <li>ESPN 1, ESPN 3</li>
                          <li>Sin Anuncios en VOD</li>
                          <li>Video 1080 MP</li>
                          <li>2 Dispositivos Simultáneos</li>
                          <li>Descargas Disponibles</li>
                          <li>Audio STEREO 5.1</li>
                        </ul>
                      ),
                    },
                    {
                      titulo: "PREMIUM",
                      contenido: (
                        <ul className="beneficios-pack-movile">
                          <li>Familiar</li>
                          <li>TODO ESPN</li>
                          <li>Sin Anuncios en VOD</li>
                          <li>Video UHD / HDR</li>
                          <li>4 Dispositivos Simultáneos</li>
                          <li>Descargas Disponibles</li>
                          <li>Audio ATMOS</li>
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
                            className="paquete-item paquete-item-disney card m-2"
                          >
                            <div className="card-body card-body-movile">
                              {/* Accede a las propiedades del objeto "paquete" */}
                              <img
                                className="str-icon-movile"
                                src="/icons/disney/strm-icon.png"
                                alt="Icono Disney"
                              />
                              <h3 className="pack-movile-title">
                                {paquete.titulo}
                              </h3>
                              <div className="text-start">
                                {paquete.contenido}{" "}
                                {/* Renderiza el contenido JSX */}
                              </div>
                              <button className="btn-packs disney-btn-color btn-pack-movil">
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
                  className="carousel-control-prev-icon prev-icon-disney"
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
                  className="carousel-control-next-icon next-icon-disney"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="pack-client-legal mt-5">
            <p className="pt-lg-5">
              *Aplican restricciones. Consulta términos y condiciones{" "}
              <a href="#">aquí</a>
            </p>
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
              className={`pack-btn ${selectedPack === "triple"
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
              className={`pack-btn ${selectedPack === "doble"
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
                    {chunk.map((paquete, i) => {
                      const velocidad = paquete.velocidadPromo === 0 ? paquete.velocidadInternet : paquete.velocidadPromo;
                      const selectedPromoCost = selectedPromo[paquete.id || i]?.costoMensual || 0;
                      return (
                        <div
                          key={i}
                          className="paquete-item paquete-item-disney card m-2"
                        >
                          <div className="card-body">
                            <h2 className="card-title">
                              {paquete.idTipoRed == 3 ? 'INTERNET SIMÉTRICO' : 'INTERNET ILIMITADO'}
                            </h2>
                            <p className="card-text velocidadPromo velocidadPromo-disney">
                              {velocidad} MEGAS
                            </p>
                            {paquete.tiempoVelocidaPromo > 0 ? (
                              <p className="card-text tiempoVelocidadPromo">
                                x {paquete.tiempoVelocidaPromo} meses<sup>*</sup>
                              </p>
                            ) : paquete.tarifaPromocionalTemp > 0 ? (
                              <p className="card-text tiempoVelocidadPromo">
                                x {paquete.tarifaPromocionalTemp} meses<sup>*</sup>
                              </p>
                            ) : (
                              <p className="card-text tiempoVelocidadPromo"></p>
                            )}

                            {velocidad >= 200 && (
                              <p>
                                <img
                                  src={`/img/extensor_wifi_ultra.png`}
                                  alt="IncluyeExtensor Wifi Ultra"
                                  style={{ height: '40px', marginTop: '20px' }}
                                />
                              </p>
                            )}

                            {paquete.archivo && (
                              <div className="xview-content">
                                {paquete.idTipoPaquete === 2 ? (
                                  <>
                                    {paquete.nameServicioCable.includes('HD') ? (
                                      <>
                                        <p className="card-servicio-txt">Televisión HD</p>
                                        <p className="card-text">{paquete.textoServicioCable}</p>
                                      </>
                                    ) : (
                                      <>
                                        <p className="card-servicio-txt">Televisión</p>
                                        <p className="card-text">{paquete.textoServicioCable}</p>
                                      </>
                                    )}
                                  </>
                                ) : (paquete.idTipoPaquete === 3 || paquete.idTipoPaquete === 4) && (
                                  <>
                                    <p>
                                      <img
                                        src={`/img/${paquete.logo}`}
                                        alt="TV INTERACTIVA"
                                        style={{ height: '30px' }}
                                      />
                                    </p>
                                    <p className="card-text">Más de 130 canales </p>
                                    <p className="card-text">+ De 30,000 horas</p>
                                    <p className="card-text">de peliculas y series</p>
                                  </>
                                )}

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
                                  {extraPromos.map(promo => (
                                    <button
                                      key={promo.idStreaming}
                                      className={`pack-btn-str ${selectedPromo[paquete.id || i]?.idStreaming === promo.idStreaming
                                        ? "disney-btn-color"
                                        : "pack-btn-inactive"
                                        }`}
                                      onClick={() => handlePromoChange(paquete.id || i, promo)}
                                    >
                                      {promo.textButtonCard}
                                    </button>
                                  ))}
                                </div>
                              </div>
                              <p className="card-text price-card">
                                <span className="price-mxn">$</span>
                                {paquete.tarifaPromocional + promoValue + selectedPromoCost}
                                <sup>*</sup>
                                <span className="time-crd">/mes</span>
                              </p>
                              {paquete.tarifaPromocionalTemp > 0 && (
                            <p className="card-text">x {paquete.tarifaPromocionalTemp} meses</p>
                          )}
                            </div>
                            <button className="btn btn-packs btn-pack-card" onClick={() => handleButtonClick(paquete.idContrata)}>¡Lo quiero!</button>

                            {/* Icons cards */}
                            <img
                              className="icon-card-packs internet-icon"
                              src="/icons/disney/internet-icon.png"
                              alt="Icono Internet"
                            />
                            <img
                              className="icon-card-packs str-icon"
                              src="/icons/disney/strm-icon.png"
                              alt="Icono Internet"
                            />
                            {selectedPack !== "doble" && (
                              <img
                                className="icon-card-packs tv-icon"
                                src="/icons/disney/tv-icon.png"
                                alt="Icono TV"
                              />
                            )}
                            <img
                              className={`icon-card-packs telefonia-icon ${selectedPack === "doble"
                                ? "telefonia-icon-doble"
                                : ""
                                }`}
                              src="/icons/disney/telefonia-icon.png"
                              alt="Icono Telefonía"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
            <div className="container packs-terminos">
              {selectedPack !== "doble" && (
                <p className="promo-xview ">
                  Incluyen{" "}
                  <span className="txt-disney-color">
                    más de 30,000 hrs de contenido
                  </span>{" "}
                  en Xview+
                </p>
              )}

              <p>
                Nota: Promoción válida domiciliando el pago a tarjeta.{" "}
                <a className="txt-disney-color" href="">
                  Tarifas registradas ante el IFT.{" "}
                </a>
                Aplican restricciones. Consulta términos y condiciones{" "}
                <a
                  className="txt-disney-color"
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