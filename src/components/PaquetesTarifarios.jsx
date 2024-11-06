import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { serverAPIUrl } from '../config'; // Ajusta la ruta según la ubicación de tu archivo config.js
import { LocationContext } from '../LocationContext';

const PaquetesTarifarios = () => {
  const { currentLocation } = useContext(LocationContext);
  const [paquetes, setPaquetes] = useState([]);
  const [selectedPack, setSelectedPack] = useState('triple');

  useEffect(() => {
    const fetchPaquetes = async () => {
      if (currentLocation) {
        try {
          const response = await fetch(`${serverAPIUrl}api/${selectedPack}Pack/${currentLocation.idSucursal}`);
          const data = await response.json();
          setPaquetes(data);
        } catch (error) {
          console.error('Error fetching paquetes:', error);
        }
      }
    };

    fetchPaquetes();
  }, [selectedPack, currentLocation]);

  return (
    <div className="paquetes-tarifarios">
      <h1>Paquetes Tarifarios</h1>
      <div className="d-flex justify-content-center mb-3">
        <button
          type="button"
          className={`btn ${selectedPack === 'triple' ? 'btn-primary' : 'btn-outline-primary'} btn-lg mx-2`}
          onClick={() => setSelectedPack('triple')}
        >
          Triple Pack
        </button>
        <button
          type="button"
          className={`btn ${selectedPack === 'doble' ? 'btn-primary' : 'btn-outline-primary'} btn-lg mx-2`}
          onClick={() => setSelectedPack('doble')}
        >
          Doble Pack
        </button>
      </div>
      <div className="paquetes-list">
        {paquetes.map((paquete, index) => (
          <div key={index} className="paquete-item">
            <h2>{paquete.nombreTipoPaquete}</h2>
            <p>{paquete.nameServicioCable}</p>
            <p>Precio: {paquete.tarifaPromocional}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaquetesTarifarios;