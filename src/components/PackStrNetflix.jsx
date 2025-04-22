import React, { useState } from "react";
import PaquetesTarifariosNetflix from "./PaquetesTarifariosNetflix";
import "./PackStrNetflix.css";

const PackStrNetflix = () => {
  const [selectedPack, setSelectedPack] = useState("triple");
  const [isCliente, setIsCliente] = useState(false); // Estado para "¿Eres cliente?"

  // Función para manejar el cambio de cliente
  const handleClienteChange = (isClienteValue) => {
    setIsCliente(isClienteValue);
  };

  return (
    <div className="container paquetes-tarifarios text-center">
      <div className="cliente-question mb-4">
        <h3 className="small-title txt-netflix-color">EL MEJOR PLAN PARA TI</h3>
        <h3 className="big-title mb-5">¿Ya eres cliente Mega?</h3>
        <div className="btn-container">
          <button
            className={`pack-btn btn-lg mx-2 netflix-cliente-btn ${isCliente ? "pack-btn-active netflix-btn-color" : "pack-btn-inactive"
              }`}
            onClick={() => handleClienteChange(true)}
          >
            Sí
          </button>
          <button
            className={`pack-btn btn-lg mx-2 netflix-cliente-btn ${!isCliente
              ? "pack-btn-active netflix-btn-color"
              : "pack-btn-inactive"
              }`}
            onClick={() => handleClienteChange(false)}
          >
            No
          </button>
        </div>
      </div>

      {isCliente ? (
        <ClienteTable />
      ) : (
        <PaquetesTarifariosNetflix selectedPack={selectedPack} />
      )}
    </div>
  );
};

// Componente para la tabla de clientes
const ClienteTable = () => {
  return (
    <>
      <div className="mt-4">
        <p className="cliente-info mt-5">
          ¡Elige el paquete ideal para disfrutar el mejor contenido para toda
          la familia!
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
          <PlanButton />
          <PlanButton />
          <PlanButton />
        </div>
      </div>

      <ClienteCarousel />
      <LegalDisclaimer />
    </>
  );
};

// Componente para los botones de planes
const PlanButton = () => {
  return (
    <div className="col-md-4 plans-contrata-netflix">
      <img src="/icons/netflix/strm-icon.png" alt="" />
      <button className="btn-packs netflix-btn-color btn-client-pos">
        ¡Lo quiero!
      </button>
    </div>
  );
};

// Componente para el carrusel de clientes
const ClienteCarousel = () => {
  const datosPrueba = [
    {
      titulo: <>
        ESTÁNDAR
        <br />
        CON ANUNCIOS
      </>,
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

  return (
    <div className="carousel-container d-lg-none mt-5 d-flex justify-content-center">
      <div
        id="carouselClienteMobile"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner pt-5 pb-5 ">
          {datosPrueba.map((paquete, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="paquete-item paquete-item-netflix card m-2 ">
                <div className="card-body card-body-movile ">
                  <img
                    className="str-icon-movile"
                    src="/icons/netflix/strm-icon.png"
                    alt="Icono Netflix"
                  />
                  <h3 className="pack-movile-title">{paquete.titulo}</h3>
                  <div className="text-start">{paquete.contenido}</div>
                  <button className="btn-packs netflix-btn-color btn-pack-movil">
                    ¡Lo quiero!
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev packs-prev"
          type="button"
          data-bs-target="#carouselClienteMobile"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next packs-next"
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
    </div>
  );
};

// Componente para el aviso legal
const LegalDisclaimer = () => {
  return (
    <div className="pack-client-legal mt-5 d-none d-lg-block">
      <p className="pt-lg-5">
        *Aplican restricciones. Consulta términos y condiciones{" "}
        <a href="#">aquí</a>
      </p>
    </div>
  );
};

export default PackStrNetflix;