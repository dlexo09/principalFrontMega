import React, { useEffect, useState, useContext } from "react";
import "./TopBar.css";
import { serverAPILambda } from "../config"; // Ajusta la ruta según la ubicación de tu archivo config.js
import { LocationContext } from "../LocationContext"; // Ajusta la ruta según la ubicación de tu archivo LocationContext.js

const TopBar = () => {
  const { currentLocation, setCurrentLocation } = useContext(LocationContext);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      if (locations.length === 0) {
        try {
          const response = await fetch(`${serverAPILambda}api/sucursales`); //cambio para pruebas
          const data = await response.json();
          setLocations(data);
          if (data.length > 0 && !currentLocation) {
            // Obtener la ubicación del usuario
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(
                (position) => {
                  const userLat = position.coords.latitude;
                  const userLng = position.coords.longitude;

                  // Calcular la distancia entre la ubicación del usuario y cada sucursal
                  const closestLocation = data.reduce((prev, curr) => {
                    const prevDistance = getDistance(
                      userLat,
                      userLng,
                      prev.latitud,
                      prev.longitud
                    );
                    const currDistance = getDistance(
                      userLat,
                      userLng,
                      curr.latitud,
                      curr.longitud
                    );
                    return prevDistance < currDistance ? prev : curr;
                  });

                  setCurrentLocation(closestLocation);
                },
                (error) => {
                  //console.error("Error getting user location:", error);
                  setCurrentLocation(data[0]);
                }
              );
            } else {
              setCurrentLocation(data[0]);
            }
          }
        } catch (error) {
          //console.error("Error fetching locations:", error);
        }
      }
    };

    fetchLocations();
  }, [setCurrentLocation, currentLocation, locations]);

  const handleLocationChange = (e) => {
    const selectedLocation = locations.find(
      (location) => location.sucursalName === e.target.value
    );
    setCurrentLocation(selectedLocation);

    // Simular clic en el botón de cierre del modal
    document.querySelector('#locationModal .btn-close').click();
  };

  // Función para calcular la distancia entre dos puntos usando la fórmula de Haversine
  const getDistance = (lat1, lng1, lat2, lng2) => {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371; // Radio de la Tierra en km
    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distancia en km
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-custom top-bar-container">
        <div className="container-fluid">
          <a className="navbar-brand d-none d-md-block" href="#"></a>
          <div
            className="container top-bar d-flex justify-content-md-between justify-content-center  align-item-center"
            id="navbarNav"
          >
            <div className="top-bar-phone d-lg-flex d-none align-items-center">
              <a href="tel:+523396901234" className="d-flex align-item-center">
                <span></span>33 9690 1234
              </a>
            </div>

            <ul className="top-bar-ubicacion d-flex align-items-center">
              <p className="text-light d-md-block d-none">Cambiar ubicación:</p>
              <li className="nav-item">
                <button
                  type="button"
                  className="btn top-bar-location d-flex align-item-center"
                  data-bs-toggle="modal"
                  data-bs-target="#locationModal"
                >
                  {" "}
                  <span className="location-icon"></span>
                  {currentLocation?.sucursalName || "Seleccionar Sucursal"}
                  <span className="down-icon"></span>
                </button>
              </li>
            </ul>

            <div className="client-mega d-md-flex d-none align-items-center">
              <a href="https://pagoenlinea.megacable.com.mx/" target="_blank">
                Paga en línea
              </a>
              <a href="https://sel.megacable.com.mx/" target="_blank">
                Mi cuenta MEGA
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div
        className="modal fade"
        id="locationModal"
        tabIndex="-1"
        aria-labelledby="locationModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="locationModalLabel">
                Seleccionar Sucursal
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
            </div>
            <div className="modal-body">
              <select
                className="form-select"
                onChange={handleLocationChange}
                value={currentLocation?.sucursalName || "Seleccionar sucursal"} // Valor por defecto "0"
              >
                {/* Opción por defecto */}
                <option value="1" disabled>
                  Seleccionar Sucursal
                </option>
                {locations.map((location) => (
                  <option key={location.idSucursal} value={location.sucursalName}>
                    {location.sucursalName}
                  </option>
                ))}
              </select>
            </div>
            <div className="modal-footer">
              {/* <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;