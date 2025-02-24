import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { serverAPIUrl } from "../config"; // Ajusta la ruta según la ubicación de tu archivo config.js
import { LocationContext } from "../LocationContext";
import "./Globales.css";
import "./PackStrMax.css";

const PackStrMax = () => {
  const { currentLocation } = useContext(LocationContext);
  const [paquetes, setPaquetes] = useState([]);
  const [selectedPack, setSelectedPack] = useState("triple");
  const [chunkSize, setChunkSize] = useState(4); // Nuevo estado para chunkSize
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
  
          // Inicializar el estado selectedPlan con "BasicoAnuncios" para cada paquete
          const initialSelectedPlan = {};
          data.forEach((paquete, i) => {
            initialSelectedPlan[paquete.id || i] = "BasicoAnuncios"; // Usa el ID del paquete o el índice
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
        <h3 className="small-title txt-max-color">EL MEJOR PLAN PARA TI</h3>
        <h3 className="big-title mb-5">Por ser cliente Mega</h3>
      </div>

      <div className="mt-4">
        <p className="cliente-info mt-5">
          ¡Elige el paquete ideal para disfrutar el mejor contenido para
          toda la familia!
        </p>
      </div>
      <div className="container table-str-clients d-none d-lg-block table-str-clients-max">
        <table className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">
                BÁSICO
                <br />
                CON ANUNCIOS
              </th>
              <th scope="col">ESTÁNDAR</th>
            </tr>
          </thead>
          <tbody>
            <tr className="tr-blue">
              <td className="text-start br-str-table1 vm-td">Dispositivos</td>
              <td>
                <span>2 dispositivos;</span><br /> a la vez
              </td>
              <td>
              <span>2 dispositivos;</span><br /> a la vez
              </td>
            </tr>
            <tr>
              <td className="text-start">
              Calidad de Video
              </td>
              <td>
              Resolución<br />
              <span>(Full HD)</span>
              </td>
              <td>
              Resolución<br />
              <span>(Full HD)</span>
              </td>
            </tr>
            <tr className="tr-blue">
              <td className="text-start">Descargas</td>
              <td></td>
              <td><span>30 descargas</span><br />para disfrutar offline</td>
            </tr>
            <tr>
              <td className="text-start"></td>
              <td>
                <p className="max-pack-price">$149<sup>*</sup></p>
                <p className="max-pack-price_time">Al mes</p>
                </td>
              <td>
                <p className="max-pack-price">$199<sup>*</sup></p>
                <p className="max-pack-price_time">Al mes</p>
                </td>
            </tr>
            
          </tbody>
        </table>

        <div className="contrata-str-max row d-flex justify-content-end">
          <div className="col-md-"></div>
          <div className="col-md-3 plans-contrata-max">
            <img src="../src/assets/icons/max/strm-icon.png" alt="" />
            <button className=" btn-packs max-btn-color btn-client-pos">
              ¡Lo quiero!
            </button>
          </div>
          <div className="col-md-3 plans-contrata-max">
            <img src="../src/assets/icons/max/strm-icon.png" alt="" />
            <button className=" btn-packs max-btn-color btn-client-pos">
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
                      BÁSICO<br />
                      CON ANUNCIOS
                    </>
                  ),
                  contenido: (
                    <ul className="beneficios-pack-movile">
                      <li>Plan con Anuncios</li>
                      <li>2 dispositivos a la vez</li>
                      <li>Resolución Full HD</li>
                    </ul>
                  ),
                },
                {
                  titulo: "ESTÁNDAR",
                  contenido: (
                    <ul className="beneficios-pack-movile">
                      <li>2 dispositivos a la vez</li>
                      <li>Resolución Full HD</li>
                      <li>30 descargas para disfrutar offline</li>
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
                        className="paquete-item paquete-item-max card m-2"
                      >
                        <div className="card-body card-body-movile">
                          {/* Accede a las propiedades del objeto "paquete" */}
                          <img
                            className="str-icon-movile"
                            src="../src/assets/icons/max/strm-icon.png"
                            alt="Icono Disney"
                          />
                          <h3 className="pack-movile-title">
                            {paquete.titulo}
                          </h3>
                          <div className="text-start">
                            {paquete.contenido}{" "}
                            {/* Renderiza el contenido JSX */}
                          </div>
                          <button className="btn-packs max-btn-color btn-pack-movil">
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
              className="carousel-control-prev-icon prev-icon-max"
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
              className="carousel-control-next-icon next-icon-max"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackStrMax;