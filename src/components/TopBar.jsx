import React, { useEffect } from "react";
import "./TopBar.css";
import { serverAPILambda } from "../config";

const TopBar = ({
  modalRef,
  locations,
  setLocations,
  currentLocation,
  setCurrentLocation,
}) => {
  useEffect(() => {
    const fetchLocations = async () => {
      if (locations.length === 0) {
        try {
          const response = await fetch(`${serverAPILambda}api/sucursales`);
          const data = await response.json();
          setLocations(data);

          const savedLocation = localStorage.getItem("selectedLocation");
          if (savedLocation) {
            const parsedLocation = JSON.parse(savedLocation);
            setCurrentLocation(parsedLocation);
          } else if (data.length > 0 && !currentLocation) {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(
                (position) => {
                  const userLat = position.coords.latitude;
                  const userLng = position.coords.longitude;
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
                  setCurrentLocation(data[0]);
                  // Depuración
                  console.log("Intentando abrir modal por error de geolocalización");
                  console.log("window.bootstrap:", window.bootstrap);
                  console.log("modalRef.current:", modalRef.current);
                  if (window.bootstrap && modalRef.current) {
                    const modal = new window.bootstrap.Modal(modalRef.current);
                    modal.show();
                    console.log("Modal abierto por error de geolocalización");
                  } else {
                    console.log("No se pudo abrir el modal: window.bootstrap o modalRef.current es undefined");
                  }
                }
              );
            } else {
              setCurrentLocation(data[0]);
              // Abrir el modal automáticamente si no hay geolocalización
              if (window.bootstrap && modalRef.current) {
                const modal = new window.bootstrap.Modal(modalRef.current);
                modal.show();
              }
            }
          }
        } catch (error) {
          console.error("Error fetching locations:", error);
        }
      }
    };

    fetchLocations();
    // Solo una vez al montar
    // eslint-disable-next-line
  }, []);

  const getDistance = (lat1, lng1, lat2, lng2) => {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371;
    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-custom top-bar-container fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand d-none d-md-block" href="#"></a>
        <div
          className="container top-bar d-flex justify-content-lg-between justify-content-center align-item-center"
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
                <span className="location-icon"></span>
                {currentLocation?.sucursalName || "Seleccionar Sucursal"}
                <span className="down-icon"></span>
              </button>
            </li>
          </ul>

          <div className="client-mega d-lg-flex d-none align-items-center">
            <a href="https://pagoenlinea.megacable.com.mx/" target="_blank" rel="noopener noreferrer">
              Paga en línea
            </a>
            <a href="https://sel.megacable.com.mx/" target="_blank" rel="noopener noreferrer">
              Mi cuenta MEGA
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;