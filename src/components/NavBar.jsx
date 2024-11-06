import React from 'react';
import { serverUrl, serverAPIUrl } from '../config'; // Ajusta la ruta según la ubicación de tu archivo config.js

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-custom">
      <div className="container-fluid justify-content-center">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href={`${serverUrl}`}>Home</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Paquetes
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="/paquetesResidenciales">Residencial</a></li>
                <li><a className="dropdown-item" href="https://empresas.megacable.com.mx/" target="_blank" rel="noopener noreferrer">Negocios</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Servicios
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li className="dropdown-submenu">
                  <a className="dropdown-item dropdown-toggle" href="#">Televisión</a>
                  <ul className="dropdown-submenu">
                    <li><a className="dropdown-item" href="/xview">TV Interactiva</a></li>
                    <li className="dropdown-submenu">
                      <a className="dropdown-item dropdown-toggle" >Premier</a>
                      <ul className="dropdown-submenu">
                        <li><a className="dropdown-item" href="/foxSports">Fox sports premium</a></li>
                        <li><a className="dropdown-item" href="/adultPack">Adult pack</a></li>
                      </ul>
                    </li>
                    <li><a className="dropdown-item" href="/Canales">Canales</a></li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <a className="dropdown-item dropdown-toggle" href="#">Internet</a>
                  <ul className="dropdown-submenu">
                    <li><a className="dropdown-item" href="/mideVelocidad">Mide tu velocidad</a></li>
                    <li><a className="dropdown-item" href="/zonaWifi">Zonas WIFI</a></li>
                    <li><a className="dropdown-item" href="/extensorWifi">Extensor WIFI</a></li>
                    <li><a className="dropdown-item" href="/norton">Norton</a></li>

                  </ul>
                </li>
                <li><a className="dropdown-item" href="#">Mega móvil</a></li>
                <li><a className="dropdown-item" href="#">Telefonia ilimitada</a></li>
                <li><a className="dropdown-item" href="#">Extensor WIFI</a></li>
                <li><a className="dropdown-item" href="#">Metrocarrier</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Entretenimiento
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Disney+</a></li>
                <li><a className="dropdown-item" href="#">Netflix</a></li>
                <li><a className="dropdown-item" href="#">Amazon prime</a></li>
                <li><a className="dropdown-item" href="#">Max</a></li>
                <li><a className="dropdown-item" href="#">Paramount+</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Mega móvil</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Mi cuenta
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Mi cuenta Mega</a></li>
                <li><a className="dropdown-item" href="#">Soporte técnico</a></li>
                <li><a className="dropdown-item" href="#">Formas de pago</a></li>
                <li><a className="dropdown-item" href="#">CIS</a></li>
                <li><a className="dropdown-item" href="#">Preguntas frecuentes</a></li>
                <li><a className="dropdown-item" href="#">Chat</a></li>
                <li><a className="dropdown-item" href="#">Correo</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Pago en Línea</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;