import React, { useState, useEffect, useContext } from "react";
import { serverAPIsFront, serverAPILambda } from "../config";
import { LocationContext } from "../LocationContext";

import "./terminos-y-condiciones.css";

const TerminosYCondiciones = () => {
  const { currentLocation } = useContext(LocationContext); // Obtener currentLocation desde el contexto
  const [contenido, setContenido] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTerminosCondiciones = async () => {
      try {
        // Validar si currentLocation está definido
        if (!currentLocation || !currentLocation.idSucursal) {
          console.warn("currentLocation.idSucursal no está definido");
          setLoading(false);
          return;
        }

        const response = await fetch(`${serverAPIsFront}api/terminos-condiciones`);
        const data = await response.json();

        if (data.length > 0) {
          // Iterar sobre los registros en orden inverso (del más nuevo al más antiguo)
          for (let i = data.length - 1; i >= 0; i--) {
            const terminos = data[i];

            console.log("Parámetros enviados a permisosSucursal:", {
              idObjeto: terminos.id,
              idSucursal: currentLocation.idSucursal,
            });

            // Validar permisos por sucursal para el registro actual
            const permisoResponse = await fetch(
              `${serverAPILambda}api/permisosSucursal?objetoName=TerminosCondiciones&idObjeto=${terminos.id}&idSucursal=${currentLocation.idSucursal}`
            );
            const permisoData = await permisoResponse.json();

            console.log("Respuesta de permisos:", permisoData); // Depurar la respuesta de permisos

            if (permisoData.length > 0) {
              setContenido(terminos.texto); // Mostrar contenido si hay permisos
              return; // Salir del bucle una vez que se encuentra un registro válido
            }
          }

          console.warn("❌ No se encontraron registros con permisos para la sucursal.");
        } else {
          console.warn("❌ No se encontraron términos y condiciones.");
        }
      } catch (error) {
        console.error("❌ Error al obtener términos y condiciones:", error);
      } finally {
        setLoading(false);
      }
    };

    // Solo ejecutar si currentLocation está definido
    if (currentLocation && currentLocation.idSucursal) {
      fetchTerminosCondiciones();
    }
  }, [currentLocation]);

  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="text-center">
          <img
            className="img-fluid w-100"
            src="/img/general/xview-legal.jpg" // Ruta fija de la imagen del banner
            alt="Banner Términos y Condiciones"
          />
        </div>
        {loading ? (
          <div className="text-center">Cargando...</div>
        ) : contenido ? (
          <div
            className="tyc-text mt-5 mb-5"
            dangerouslySetInnerHTML={{ __html: contenido }}
          ></div>
        ) : (
          <div className="text-center">No tienes permisos para ver los términos y condiciones.</div>
        )}
      </div>
    </>
  );
};

export default TerminosYCondiciones;