import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './TopBar.css';
import { serverUrl, serverAPIUrl } from '../config'; // Ajusta la ruta según la ubicación de tu archivo config.js

const TopBar = ({ onLocationChange, currentLocation, setCurrentLocation }) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch(`${serverAPIUrl}api/sucursales`);
        const data = await response.json();
        setLocations(data);
        if (data.length > 0) {
          setCurrentLocation(data[0].sucursalName);
        }
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    fetchLocations();
  }, [setCurrentLocation]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Mega</a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#locationModal">
                  {currentLocation || 'Select Location'}
                </button>
              </li>
            </ul>
            <span className="navbar-text text-white me-3">
              Ventas: 33 9690 1234
            </span>
            <button type="button" className="btn btn-success me-2">
              Mi Cuenta
            </button>
            <button type="button" className="btn btn-success">
              Pago en Línea
            </button>
          </div>
        </div>
      </nav>

      <div className="modal fade" id="locationModal" tabIndex="-1" aria-labelledby="locationModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="locationModalLabel">Select Location</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <select className="form-select" onChange={(e) => onLocationChange(e.target.value)}>
                {locations.map((location) => (
                  <option key={location.idSucursal} value={location.sucursalName}>{location.sucursalName}</option>
                ))}
              </select>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopBar;