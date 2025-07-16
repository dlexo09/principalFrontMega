import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { serverAPIsFront } from "../config";
import "./TICostos.css";

const TICostos = () => {
  const [localidades, setLocalidades] = useState([]);
  const [paisSeleccionado, setPaisSeleccionado] = useState("");
  const [tarifas, setTarifas] = useState([]);
  const [loading, setLoading] = useState(false);

  // Trae todas las localidades únicas para el select
  useEffect(() => {
    fetch(`${serverAPIsFront}api/tarifas-internacionales`)
      .then((res) => res.json())
      .then((data) => {
        // Agrupa por localidad
        const uniqueLocalidades = Array.from(
          new Set(data.map((item) => item.localidad))
        );
        setLocalidades(uniqueLocalidades);
      });
  }, []);

  // Trae las tarifas para la localidad seleccionada
  useEffect(() => {
    if (paisSeleccionado) {
      setLoading(true);
      fetch(
        `${serverAPIsFront}api/tarifas-internacionales?localidad=${encodeURIComponent(paisSeleccionado)}`
      )
        .then((res) => res.json())
        .then((data) => {
          setTarifas(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    } else {
      setTarifas([]);
    }
  }, [paisSeleccionado]);

  return (
    <>
      <Helmet>
        <title>Tarifas Larga Distancia | Megacable | Telefonía Ilimitada</title>
        <meta
          name="description"
          content="Conoce las tarifas de larga distancia de Megacable para telefonía ilimitada. ¡Consulta nuestras opciones y disfruta de llamadas internacionales sin preocupaciones!"
        />
      </Helmet>

      <div className="general-tabs-container ps-1 pe-1 ps-md-0 pe-md-0">
        <div className="text-center">
          <h1 className="small-title-services">CONOCE NUESTRAS TARIFAS</h1>
          <h2 className="big-title-services">LARGA DISTANCIA INTERNACIONAL</h2>
          <p className="mt-4">
            Busca las tarifas que tenemos para los distintos países:
          </p>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center mt-4 gap-3">
          <form style={{ maxWidth: 400 }}>
            <select
              name="localidad"
              id="localidad"
              className="form-control mb-2 text-uppercase h-40 back-gray localidad cargar"
              value={paisSeleccionado}
              onChange={(e) => setPaisSeleccionado(e.target.value)}
            >
              <option value="">SELECCIONA</option>
              {localidades.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </form>
        </div>
        <div className="mt-4 d-flex justify-content-center">
          <div className="tarifas-table-wrapper w-100" style={{ maxWidth: 500 }}>
            {loading ? (
              <div className="text-center py-4">Cargando tarifas...</div>
            ) : tarifas.length > 0 ? (
              <table className="table table-striped table-hover shadow rounded overflow-hidden">
                <thead className="table-primary">
                  <tr>
                    <th className="text-center" style={{ width: "50%" }}>Serie</th>
                    <th className="text-center" style={{ width: "50%" }}>Tarifa por minuto</th>
                  </tr>
                </thead>
                <tbody>
                  {tarifas.map((tarifa) => (
                    <tr key={tarifa.id_tarifa_int}>
                      <td className="text-center fw-bold">{tarifa.serie}</td>
                      <td className="text-center text-success fw-semibold">${tarifa.tarifa}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : paisSeleccionado ? (
              <div className="text-center py-4">No hay tarifas disponibles para este país.</div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default TICostos;