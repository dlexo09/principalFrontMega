import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-custom fixed-top" style={{ top: '56px' }}>
      <div className="container-fluid justify-content-center">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">MegaLogo</Link>
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
                      <a className="dropdown-item dropdown-toggle" href="#">Premier</a>
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/foxsports">Fox Sports Premium</Link></li>
                        <li><Link className="dropdown-item" to="/adultPack">Adult Pack</Link></li>
                      </ul>
                    </li>
                    <li><Link className="dropdown-item" to="/canales">Canales</Link></li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                      <a className="dropdown-item dropdown-toggle" >Internet</a>
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/MideVelocidad">Mide tu velocidad</Link></li>
                        <li><Link className="dropdown-item" to="/MideVelocidad">Zona Wifi</Link></li>
                        <li><Link className="dropdown-item" to="/MideVelocidad">Extensor Wifi</Link></li>
                        <li><Link className="dropdown-item" to="/MideVelocidad">Norton</Link></li>
                      </ul>
                    </li>
                <li><Link className="dropdown-item" to="/servicios">Mega móvil</Link></li>
                <li><Link className="dropdown-item" to="/servicios">Telefonia ilimitada</Link></li>
                <li><Link className="dropdown-item" to="/servicios">Extensor WIFI</Link></li>
                <li><Link className="dropdown-item" to="/servicios">Metrocarrier</Link></li>
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
              <Link className="nav-link active" aria-current="page" to="/mega-movil">Mega móvil</Link>
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
              <Link className="nav-link active" aria-current="page" to="/pago-en-linea">Pago en Línea</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;