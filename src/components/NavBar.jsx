import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './NavBar.css';
import { serverAPIUrl } from '../config'; // Ajusta la ruta según la ubicación de tu archivo config.js


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-xl navbar-custom navbar-container">
      <div className="container">
        {/* Logo */}
        <div className="navbar-logo">
          <img
            src="../src/assets/images/general/mega-logo.png"
            alt="Logo"
            className="logo-img"
          />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
                <img src={`${serverAPIUrl}/uploads/assets/megacable-logo.svg`} alt="MegaLogo" className="mega-logo-navbar" />
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Paquetes
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/paquetesResidenciales">Residencial</Link></li>
                <li><Link className="dropdown-item" to="https://empresas.megacable.com.mx/" target="_blank" rel="noopener noreferrer" >Negocios</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Servicios
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li className="dropdown-submenu">
                  <a className="dropdown-item dropdown-toggle" >Televisión</a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/xview">TV Interactiva</Link></li>
                    <li className="dropdown-submenu">
                      <a className="dropdown-item dropdown-toggle">Premier</a>
                      <ul className="dropdown-submenu">
                        <li><a className="dropdown-item" href="/foxSports">Fox sports premium</a></li>
                        <li><a className="dropdown-item" href="/adultPack">Adult pack</a></li>
                      </ul>
                    </li>
                    <li><Link className="dropdown-item" to="/canales">Canales</Link></li>
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
                <li><Link className="dropdown-item" to="/entretenimiento">Disney+</Link></li>
                <li><Link className="dropdown-item" to="/entretenimiento">Netflix</Link></li>
                <li><Link className="dropdown-item" to="/entretenimiento">Amazon prime</Link></li>
                <li><Link className="dropdown-item" to="/entretenimiento">Max</Link></li>
                <li><Link className="dropdown-item" to="/entretenimiento">Paramount+</Link></li>
                <li><Link className="dropdown-item" to="/entretenimiento">Fox Sports</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Mega móvil</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Mi cuenta
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/mi-cuenta">Mi cuenta Mega</Link></li>
                <li><Link className="dropdown-item" to="/mi-cuenta">Soporte técnico</Link></li>
                <li><Link className="dropdown-item" to="/mi-cuenta">Formas de pago</Link></li>
                <li><Link className="dropdown-item" to="/mi-cuenta">CIS</Link></li>
                <li><Link className="dropdown-item" to="/mi-cuenta">Preguntas frecuentes</Link></li>
                <li><Link className="dropdown-item" to="/mi-cuenta">Chat</Link></li>
                <li><Link className="dropdown-item" to="/mi-cuenta">Correo</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Pago en Línea</a>
            </li>
          </ul>
        </div>


      </div>
    </nav>
  );
};

export default NavBar;
