import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { serverAPIUrl } from '../config'; // Ajusta la ruta según la ubicación de tu archivo config.js
import BannerTrivias from '../components/BannerTrivias';  
import Footer from '../components/Footer'; 

const PaquetesResidenciales = ({ location }) => {
  const [paquetes, setPaquetes] = useState([]);
  const [selectedPack, setSelectedPack] = useState('triple');

  useEffect(() => {
    const fetchPaquetes = async () => {
      try {
        const response = await fetch(`${serverAPIUrl}api/${selectedPack}Pack/${location}`);
        const data = await response.json();
        setPaquetes(data);
      } catch (error) {
        console.error('Error fetching paquetes:', error);
      }
    };

    fetchPaquetes();
  }, [selectedPack, location]);

  return (
    <>
      <div className="paquetes-residenciales">
        <h1>Paquetes Residenciales</h1>
        <div className="btn-group mb-3" role="group" aria-label="Paquetes">
          <button
            type="button"
            className={`btn ${selectedPack === 'triple' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setSelectedPack('triple')}
          >
            Triple Pack
          </button>
          <button
            type="button"
            className={`btn ${selectedPack === 'doble' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setSelectedPack('doble')}
          >
            Doble Pack
          </button>
        </div>
        <div className="paquetes-list">
          {paquetes.map((paquete, index) => (
            <div key={index} className="paquete-item">
              <h2>{paquete.name}</h2>
              <p>{paquete.description}</p>
              <p>Precio: {paquete.price}</p>
            </div>
          ))}
        </div>
      </div>
      <BannerTrivias />
      <Footer />
    </>

  );
};

export default PaquetesResidenciales;