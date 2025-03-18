import React, { useState, useEffect, useContext } from "react";
import { serverAPILambda } from "../config"; // Ajusta la ruta según la ubicación de tu archivo config.js
import { LocationContext } from "../LocationContext";
import PaquetesTarifariosNetflix from "./PaquetesTarifariosNetflix";
import "./PackStrNetflix.css";

const PackStrNetflix = () => {
  const { currentLocation } = useContext(LocationContext);
  const [paquetes, setPaquetes] = useState([]);
  const [selectedPack, setSelectedPack] = useState("triple");
  const [chunkSize, setChunkSize] = useState(4); // Nuevo estado para chunkSize
  const [isCliente, setIsCliente] = useState(false); // Estado para "¿Eres cliente?"
  const promoValue = 0; // Definir la variable para el valor adicional
  const [selectedPlan, setSelectedPlan] = useState({});

  useEffect(() => {
    const fetchPaquetes = async () => {
      if (currentLocation) {
        try {
          const response = await fetch(
            `${serverAPILambda}api/${selectedPack}Pack/${currentLocation.idSucursal}`
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
    <div className="container paquetes-tarifarios text-center  paquetes-tarifarios-strm">
      <div className="cliente-question mb-4">
        <h3 className="small-title txt-netflix-color">EL MEJOR PLAN PARA TI</h3>
        <h3 className="big-title mb-5">¿Ya eres cliente Mega?</h3>
        <div className="btn-container">
          <button
            className={`pack-btn btn-lg mx-2 disney-cliente-btn ${isCliente
                ? "pack-btn-active netflix-btn-color"
                : "pack-btn-inactive"
              }`}
            onClick={() => setIsCliente(true)}
          >
            Sí
          </button>
          <button
            className={`pack-btn btn-lg mx-2 disney-cliente-btn ${!isCliente
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
                <img src="/icons/netflix/strm-icon.png" alt="" />
                <button className=" btn-packs netflix-btn-color btn-client-pos">
                  ¡Lo quiero!
                </button>
              </div>
              <div className="col-md-3 plans-contrata-netflix">
                <img src="/icons/netflix/strm-icon.png" alt="" />
                <button className=" btn-packs netflix-btn-color btn-client-pos">
                  ¡Lo quiero!
                </button>
              </div>
              <div className="col-md-3 plans-contrata-netflix">
                <img src="/icons/netflix/strm-icon.png" alt="" />
                <button className=" btn-packs netflix-btn-color btn-client-pos">
                  ¡Lo quiero!
                </button>
              </div>
            </div>
          </div>
          
          <div className="pack-client-legal mt-5 d-none d-lg-block">
            <p className="pt-lg-5">
              *Aplican restricciones. Consulta términos y condiciones{" "}
              <a href="#">aquí</a>
            </p>
          </div>

          {/* **************** IS CLIENT MOVILE ************** */}

          <div className="carousel-container d-lg-none mt-5">
            <div
              id="carouselClienteMobile"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner carrousel-streaming-mov ">
                {(() => {
                  // Datos de prueba locales para esta sección
                  const datosPrueba = [
                    {
                      titulo: (
                        <>
                          ESTÁNDAR
                          <br />
                          CON ANUNCIOS
                        </>
                      ),
                      contenido: (
                        <ul className="beneficios-pack-movile">
                          <li>
                            Con anuncios; todos los juegos móviles y la mayoría
                            de las series y películas están disponibles.{" "}
                          </li>
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
                          <li>
                            Juegos móviles, series y películas; sin publicidad y
                            sin límite
                          </li>
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
                          <li>
                            Juegos móviles, series y películas; sin publicidad y
                            sin límite
                          </li>
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
                            className="paquete-item paquete-item-netflix card mt-2"
                          >
                            <div className="card-body card-body-movile">
                              {/* Accede a las propiedades del objeto "paquete" */}
                              <img
                                className="str-icon-movile"
                                src="/icons/netflix/strm-icon.png"
                                alt="Icono Netflix"
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
                className="carousel-control-prev packs-prev prev-icon-netflix"
                type="button"
                data-bs-target="#carouselClienteMobile"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon "
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next packs-next next-icon-netflix"
                type="button"
                data-bs-target="#carouselClienteMobile"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className="pack-client-legal mt-5 ">
              <p className="pt-lg-5">
                *Aplican restricciones. Consulta términos y condiciones{" "}
                <a href="#">aquí</a>
              </p>
            </div>
          </div>

          {/* **************** IS NOT CLIENT ************** */}
        </>
      ) : (
        <PaquetesTarifariosNetflix />
      )}
    </div>
  );
};

export default PackStrNetflix;
