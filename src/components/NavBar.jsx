import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './NavBar.css';
import { serverAPIUrl, serverUrl } from '../config'; // Ajusta la ruta según la ubicación de tu archivo config.js


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-xl navbar-custom navbar-container">
      <div className="container">
        {/* Logo */}
        <div className="navbar-logo">
        <a href={serverUrl}>
          <img
            src="../src/assets/images/general/mega-logo.png"
            alt="Logo"
            className="logo-img"
          />
        </a>
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
            {/* home url
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
                <img src={`${serverAPIUrl}/uploads/assets/megacable-logo.svg`} alt="MegaLogo" className="mega-logo-navbar" />
              </Link>
            </li>
             */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Oferta
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="/paquetesResidenciales">Residencial</a></li>
                <li><a className="dropdown-item" href="https://empresas.megacable.com.mx/" target="_blank" rel="noopener noreferrer">Negocios</a></li>
                <li><a className="dropdown-item" href="/mcm" target="_blank" rel="noopener noreferrer">MCM</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Servicios
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">      
                <li><a className="dropdown-item" href="/television">Televisión</a></li>
                <li><a className="dropdown-item" href="/internet">Internet</a></li>
                <li><a className="dropdown-item" href="/telefonia-ilimitada">Telefonía Ilimitada</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Entretenimiento
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="/disneyplus">Disney+</a></li>
                <li><a className="dropdown-item" href="/netflix">Netflix</a></li>
                <li><a className="dropdown-item" href="/amazon">Amazon prime</a></li>
                <li><a className="dropdown-item" href="/max">Max</a></li>
                <li><a className="dropdown-item" href="/paramount+">Paramount+</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Fibra óptica y simetria</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Xview+</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Mega móvil</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Soporte</a>
            </li>
          </ul>
        </div>


      </div>
    </nav>
  );
};

export default NavBar;
