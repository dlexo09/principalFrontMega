import React, { useEffect, useState, useContext } from "react";
import { Helmet } from "react-helmet-async";
import { LocationContext } from "../LocationContext";
import { serverAPIUrl, serverAPILambda } from "../config";
import "./TVCanales.css";

const Canales = () => {
  const { currentLocation } = useContext(LocationContext); // Contexto de ubicación
  const [canales, setCanales] = useState([]); // Estado para los canales
  const [categorias, setCategorias] = useState([]); // Estado para las categorías únicas
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(""); // Estado para la categoría seleccionada
  const [paquetesDisponibles, setPaquetesDisponibles] = useState([]); // Estado para los paquetes disponibles

  useEffect(() => {
    if (currentLocation) {
      // Obtener los paquetes disponibles
      fetch(`${serverAPILambda}api/paquetesCanales/${currentLocation.idSucursal}`)
        .then((response) => response.json())
        .then((data) => {
          const paquetes = data.map((item) => item.paquete.toUpperCase());
          setPaquetesDisponibles(paquetes);
        })
        .catch((error) => console.error("Error fetching paquetes:", error));

      // Obtener los canales
      // console.log(`${serverAPILambda}api/Canales/${currentLocation.idSucursal}`);
      fetch(`${serverAPILambda}api/Canales/${currentLocation.idSucursal}`)
        .then((response) => response.json())
        .then((data) => {
          // Agrupar canales por selector
          const groupedCanales = Object.values(
            data.reduce((acc, canal) => {
              if (!acc[canal.selector]) {
                acc[canal.selector] = {
                  ...canal,
                  paquetes: [canal.paquete],
                };
              } else {
                acc[canal.selector].paquetes.push(canal.paquete);
              }
              return acc;
            }, {})
          );
          setCanales(groupedCanales);
          const categoriasUnicas = [
            ...new Set(data.map((canal) => canal.tipoCanal)),
          ];
          setCategorias(categoriasUnicas); // Extrae las categorías únicas
        })
        .catch((error) => console.error("Error fetching canales:", error));
    }
  }, [currentLocation]);

  // Filtrar canales según la categoría seleccionada
  const canalesFiltrados = categoriaSeleccionada
    ? canales.filter((canal) => canal.tipoCanal === categoriaSeleccionada)
    : canales;

  return (
    <>
      <Helmet>
        <title>Canales | Megacable | Disfruta de tu Contenido Favorito</title>
        <meta
          name="description"
          content="Lista de canales disponibles en Megacable. Disfruta de tus programas, películas y deportes favoritos, con acceso a contenido exclusivo desde tu televisión o dispositivos móviles."
        ></meta>
      </Helmet>
      <div className="container-fluid general-tabs-container ">
        <h1 className="text-center small-title-services">Canales</h1>
        <div className="text-center mb-5">
          <h2 className="big-title-services">Conoce la lista de canales de tu TV</h2>
        </div>
        <div className="row">
          {/* Columna izquierda: Botones de categorías */}
          <div className="col-md-3 pe-xl-3 filtro-canales-content">
            <div className="btn-group-vertical w-100 filtro-container">
              <button
                className={` btn-filtro-canales mb-2 ${!categoriaSeleccionada && "active"
                  }`}
                onClick={() => setCategoriaSeleccionada("")}
              >
                Todas
              </button>
              {categorias.map((categoria) => {
                const categoriaLabel = categoria && categoria.trim() ? categoria : "Otros";
                return (
                  <button
                    key={categoriaLabel}
                    className={`btn-filtro-canales mb-2 ${categoriaSeleccionada === categoria ? "active" : ""}`}
                    onClick={() => setCategoriaSeleccionada(categoria)}
                  >
                    {categoriaLabel}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="col-md-1 d-none d-xl-block"></div>

          {/* Columna derecha: Lista de canales */}
          <div className="col-md-9 col-xl-8">
            <div className="row table-title-container me-1">
              <h3 className="col-3"></h3>
              <h3 className="col-3"></h3>
              {paquetesDisponibles.includes("CONECTA") && (
                <h3 className="col-3 table-title-color">Conecta</h3>
              )}
              {paquetesDisponibles.includes("BASICO PLUS") && (
                <h3 className="col-3 table-title-color">Básico Plus</h3>
              )}
            </div>

            {canalesFiltrados.map((canal, index) => (
              <div className="row m-0 table-canales-content" key={index}>
                <div className="col-3 p-2 d-flex justify-content-center align-items-center">
                  <img
                    src={`../uploads/canales/${canal.imagenCanal}`}
                    alt={`${canal.canal}`}
                    className="img-fluid canal-logo"
                    style={{ maxHeight: "75px", objectFit: "contain" }}
                    onError={e => {
                      console.warn("Imagen no encontrada:", e.target.src, canal);
                      e.target.onerror = null;
                      e.target.src = "../uploads/canales/logo-no-disponible.png"; // Usa aquí la ruta de tu imagen de respaldo
                    }}
                  />
                </div>
                <div className="col-3 p-2 d-flex justify-content-center align-items-center canales-selector-title">
                  {canal.selector}
                </div>
                {paquetesDisponibles.includes("CONECTA") && (
                  <div className="col-3 p-2 d-flex justify-content-center align-items-center">
                    {canal.paquetes.includes("CONECTA") && (
                      <span className="check-content check-canal"></span>
                    )}
                  </div>
                )}
                {paquetesDisponibles.includes("BASICO PLUS") && (
                  <div className="col-3 p-2 d-flex justify-content-center align-items-center">
                    {canal.paquetes.includes("BASICO PLUS") && (
                      <span className="check-content check-canal-lg"></span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Canales;