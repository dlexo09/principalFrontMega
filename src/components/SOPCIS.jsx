import React, { useState, useEffect, useContext } from "react";
import { Helmet } from "react-helmet-async";
import { serverAPILambda } from "../config";
import { LocationContext } from "../LocationContext";
import "./SOPCIS.css";

const SOPCIS = () => {
  const { currentLocation } = useContext(LocationContext); // Usa el objeto completo
  const [ciudades, setCiudades] = useState([]);
  const [ciudadSeleccionada, setCiudadSeleccionada] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${serverAPILambda}api/sucursales`)
      .then((res) => res.json())
      .then((data) => {
        setCiudades(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Sincroniza ciudadSeleccionada con currentLocation y ciudades cargadas
  useEffect(() => {
    if (ciudades.length > 0) {
      if (
        currentLocation &&
        ciudades.some((c) => String(c.idSucursal) === String(currentLocation.idSucursal))
      ) {
        setCiudadSeleccionada(String(currentLocation.idSucursal));
      } else {
        setCiudadSeleccionada(String(ciudades[0].idSucursal));
      }
    }
  }, [currentLocation, ciudades]);

  const handleChange = (e) => {
    setCiudadSeleccionada(e.target.value);
  };

  return (
    <>
      <Helmet>
        <title>Centros de atención Megacable | Mapa Interactivo</title>
        <meta
          name="description"
          content="Consulta nuestro mapa interactivo y encuentra el CIS de Megacable más cercano a tu ubicación. ¡Accede fácilmente a nuestros centros de atención!"
        />
      </Helmet>

      <div className="general-tabs-container ps-2 pe-2 ps-md-0 pe-md-0">
        <div className="text-center">
          <h1 className="small-title-services">¡Ubica tu CIS más cercano!</h1>
          <h2 className="big-title-services">CONOCE EL MAPA INTERACTIVO</h2>
        </div>
        <div className="d-flex flex-column align-items-center mt-4">
          <form className="w-100" style={{ maxWidth: 400 }}>
            {loading ? (
              <div>Cargando ciudades...</div>
            ) : (
              <select
                className="form-control"
                value={ciudadSeleccionada}
                onChange={handleChange}
              >
                {ciudades.map((ciudad) => (
                  <option key={ciudad.idSucursal} value={ciudad.idSucursal}>
                    {ciudad.sucursalName}
                  </option>
                ))}
              </select>
            )}
          </form>
          <div
            className="w-100 mt-4 d-flex justify-content-center"
            style={{ minHeight: 400 }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: 900,
                borderRadius: 12,
                overflow: "hidden",
                boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
                border: "1px solid #e0e0e0",
                background: "#fff",
                margin: "0 32px",
              }}
            >
              {ciudadSeleccionada && (
                <iframe
                  title="Mapa CIS"
                  src={`https://megacable.com.mx/pruebas/cis/proxy_ayuda_cis_new2.php?id_sucursal=${ciudadSeleccionada}`}
                  width="100%"
                  height="824"
                  style={{
                    display: "block",
                    background: "#fff",
                    border: "none",
                    borderRadius: 12,
                  }}
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SOPCIS;