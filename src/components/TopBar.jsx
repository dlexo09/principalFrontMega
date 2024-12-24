import React, { useEffect, useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./TopBar.css";
import { serverAPIUrl } from "../config"; // Ajusta la ruta según la ubicación de tu archivo config.js
import { LocationContext } from "../LocationContext"; // Ajusta la ruta según la ubicación de tu archivo LocationContext.js

const TopBar = () => {
  const { currentLocation, setCurrentLocation } = useContext(LocationContext);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      if (locations.length === 0) {
        try {
          const response = await fetch(`${serverAPIUrl}api/sucursales`);
          const data = await response.json();
          setLocations(data);
          if (data.length > 0 && !currentLocation) {
            setCurrentLocation(data[0]);
          }
        } catch (error) {
          console.error("Error fetching locations:", error);
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
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-custom top-bar-container">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"></a>
          <div
            className="top-bar collapse navbar-collapse d-flex justify-content-between align-item-center"
            id="navbarNav"
          >
            <div className="top-bar-phone">
              <a href="" className="d-flex align-item-center">
                <span></span>33 9690 1234
              </a>
            </div>

            <ul className="top-bar-ubicacion d-flex align-items-center">
            <p className="text-light">Cambiar ubicación:</p>
              <li className="nav-item">
                <button
                  type="button"
                  className="btn top-bar-location d-flex align-item-center"
                  data-bs-toggle="modal"
                  data-bs-target="#locationModal"
                > <span className="location-icon"></span>
                  {currentLocation?.sucursalName || "Seleccionar Sucursal"}
                  <span className="down-icon"></span>
                </button>
              </li>
            </ul>

            <div className="client-mega d-flex">
              <a href="">Mi Cuenta</a>
              <a href="">Pago en Línea</a>
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
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="locationModalLabel">
                Seleccionar Sucursal
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <select
                className="form-select"
                onChange={handleLocationChange}
                value={currentLocation?.sucursalName || ""}
              >
                {locations.map((location) => (
                  <option
                    key={location.idSucursal}
                    value={location.sucursalName}
                  >
                    {location.sucursalName}
                  </option>
                ))}
              </select>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
