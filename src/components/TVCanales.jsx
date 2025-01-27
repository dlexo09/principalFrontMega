import React, { useEffect, useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { LocationContext } from "../LocationContext";
import { serverAPIUrl } from "../config";
import "./TVCanales.css";
import "./Globales.css";

const Canales = () => {
  const { currentLocation } = useContext(LocationContext); // Contexto de ubicación
  const [canales, setCanales] = useState({}); // Estado para los canales agrupados
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(""); // Estado para la categoría seleccionada
  const [categorias, setCategorias] = useState([]); // Estado para las categorías únicas

  useEffect(() => {
    if (currentLocation) {
      fetch(`${serverAPIUrl}api/canales/${currentLocation.idSucursal}`)
        .then((response) => response.json())
        .then((data) => {
          const groupedCanales = data.reduce((acc, canal) => {
            const { tipoCanal, validacion } = canal;
            if (!acc[tipoCanal]) {
              acc[tipoCanal] = [];
            }
            acc[tipoCanal].push({
              ...canal,
              conecta: validacion === 2,
              basico_plus: validacion >= 1,
            });
            return acc;
          }, {});
          setCanales(groupedCanales);
          setCategorias(Object.keys(groupedCanales)); // Extrae las categorías únicas
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [currentLocation]);

  // Filtrar canales según la categoría seleccionada
  const canalesFiltrados = categoriaSeleccionada
    ? { [categoriaSeleccionada]: canales[categoriaSeleccionada] }
    : canales;

  return (
    <div className="container-fluid canales-container">
      <h2 className="text-center mb-4 title-canales">Canales</h2>
      <p className="text-center text-canales">
        Estamos llegando a tu ciudad... <br />
        ¡Espéralo! a través de tu cuenta de Gmail.
      </p>
      <div className="row">
        {/* Columna izquierda: Botones de categorías */}
        <div className="col-md-3 pe-xl-3 filtro-canales-content">
          <div className="btn-group-vertical w-100 filtro-container">
            <button
              className={` btn-filtro-canales mb-2 ${
                !categoriaSeleccionada && "active"
              }`}
              onClick={() => setCategoriaSeleccionada("")}
            >
              Todas
            </button>
            {categorias.map((categoria) => (
              <button
                key={categoria}
                className={` btn-filtro-canales mb-2 ${
                  categoriaSeleccionada === categoria && "active"
                }`}
                onClick={() => setCategoriaSeleccionada(categoria)}
              >
                {categoria}
              </button>
            ))}
          </div>
        </div>


        <div className="col-md-1 d-none d-xl-block"></div>

        {/* Columna derecha: Lista de canales */}
        <div className="col-md-9 col-xl-8">
          <div className="row table-title-container me-1">
            <h3 className="col-3"></h3>
            <h3 className="col-3"></h3>
            <h3 className="col-3 table-title-color">Conecta</h3>
            <h3 className="col-3 table-title-color">Básico Plus</h3>
          </div>

          {Object.keys(canalesFiltrados).map((familia) => (
            <div className="table-canales-container me-1" key={familia}>
              {Array.isArray(canalesFiltrados[familia]) &&
                canalesFiltrados[familia].map((canal, index) => (
                  <div className="row m-0 table-canales-content" key={index}>
                    <div className="col-3 p-2 d-flex justify-content-center align-items-center">
                      <img
                        src={`${serverAPIUrl}uploads/canales/${canal.imagen}`}
                        alt={`${canal.imagen}`}
                        className="img-fluid canal-logo"
                        style={{ maxHeight: "100px" }}
                      />
                    </div>
                    <div className="col-3 p-2 d-flex justify-content-center align-items-center canales-selector-title">
                      {canal.selectorCanal}
                    </div>
                    <div className="col-3 p-2 d-flex justify-content-center align-items-center">
                      {canal.conecta ? (
                        <span className="check-content check-canal"></span>
                      ) : null}
                    </div>
                    <div className="col-3 p-2 d-flex justify-content-center align-items-center">
                      {canal.basico_plus ? (
                        <span className="check-content check-canal-lg"></span>
                      ) : null}
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Canales;
