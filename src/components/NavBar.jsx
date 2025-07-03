import React, { useState, useEffect, useContext } from 'react';
import { serverUrl, serverAPILambda } from '../config'; // Ajusta la ruta según la ubicación de tu archivo config.js
import { LocationContext } from '../LocationContext';
import './NavBar.css';

const NavBar = () => {
  const { currentLocation } = useContext(LocationContext);
  const [paqueteData, setPaqueteData] = useState([]);
  const idSucursal = currentLocation?.idSucursal;

  // Log para verificar configuraciones al inicio
  useEffect(() => {
    // console.log('=== NavBar: Configuración inicial ===');
    // console.log('serverUrl:', serverUrl);
    // console.log('serverAPILambda:', serverAPILambda);
    // console.log('currentLocation:', currentLocation);
  }, []);

  useEffect(() => {
    const fetchPaqueteData = async () => {
      if (idSucursal) {
        try {
          // console.log(`Fetching paquete data for idSucursal: ${idSucursal}`);
          const response = await fetch(`${serverAPILambda}api/xview/${idSucursal}`);
          const data = await response.json();
          // console.log('Paquete data received:', data);
          setPaqueteData(data);
        } catch (error) {
          console.error('Error fetching paquete data:', error);
        }
      }
    };

    fetchPaqueteData();
  }, [idSucursal]);

  const getLinkXview = () => {
    if (paqueteData.some(paquete => paquete.idTipoPaquete === 4)) {
      return '/xviewplus';
    } else if (paqueteData.some(paquete => paquete.idTipoPaquete === 3)) {
      return '/xview';
    } else {
      return '/tv';
    }
  };
  
  const getTextXview = () => {
    if (paqueteData.some(paquete => paquete.idTipoPaquete === 4)) {
      return 'Xview+';
    } else if (paqueteData.some(paquete => paquete.idTipoPaquete === 3)) {
      return 'Xview';
    } else {
      return 'Televisión';
    }
  };

  // Función para manejar errores de imágenes y mostrar información útil
  const handleImageError = (e) => {
    // console.error('=== Error cargando imagen ===');
    // console.error('Ruta intentada:', e.target.src);
    // console.error('Elemento:', e.target);
    // console.error('Alt text:', e.target.alt);
    
    // Evitar bucles infinitos de error
    e.target.onerror = null;
    
    // Opcional: intentar una ruta alternativa
    if (e.target.src.includes('/img/')) {
      const newPath = e.target.src.replace('/img/', '/uploads/');
      // console.log('Intentando ruta alternativa:', newPath);
      e.target.src = newPath;
    }
  };

  return (
    <nav className="navbar navbar-expand-xl navbar-custom navbar-container nav-menu">
      <div className="container">
        {/* Logo con manejo de errores */}
        <div className="navbar-logo">
          <a href="/">
            <img
              src="/img/general/mega-logo.png"
              alt="Logo"
              className="logo-img"
              // onLoad={() => console.log('Logo cargado correctamente')}
              onError={handleImageError}
            />
          </a>
        </div>
        
        {/* Resto del código sin cambios */}
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
        <div className="navbar-container collapse navbar-collapse justify-content-end pt-2 pb-2" id="navbarNav">
          <ul className="navbar-nav">
            {/* Dropdown de Oferta */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Oferta
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="/oferta">Residencial</a></li>
                <li><a className="dropdown-item" href="https://empresas.megacable.com.mx/" target="_blank" rel="noopener noreferrer">Negocios</a></li>
                <li><a className="dropdown-item" href="/mcm" target="_blank" rel="noopener noreferrer">MCM</a></li>
              </ul>
            </li>
            
            {/* Resto de los elementos del menú... */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Servicios
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href={getLinkXview()}>{getTextXview()}</a></li>
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
              <a className="nav-link" aria-current="page" href="/fibra-optica">Fibra óptica y simetria</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href={getLinkXview()}>{getTextXview()}</a>
            </li>
        
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href='https://megamovil.mx/'>Mega móvil</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/ayuda">Ayuda</a>
            </li>
            {/* Movil */}
            <li className="nav-item">
              <a className="nav-link d-xl-none" target='_blank' aria-current="page" href="https://pagoenlinea.megacable.com.mx/">Paga en Línea</a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-xl-none" target='_blank' aria-current="page" href="https://sel.megacable.com.mx/">Mi cuenta Mega</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Log para verificar que el componente se está exportando correctamente
// console.log('NavBar component loaded');

export default NavBar;