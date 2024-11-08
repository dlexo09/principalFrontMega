import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { serverAPIUrl } from '../config'; // Ajusta la ruta según la ubicación de tu archivo config.js
import { LocationContext } from '../LocationContext';
import './PaquetesTarifarios.css';

const PaquetesTarifarios = () => {
  const { currentLocation } = useContext(LocationContext);
  const [paquetes, setPaquetes] = useState([]);
  const [selectedPack, setSelectedPack] = useState('triple');
  const promoValue = 60; // Definir la variable para el valor adicional

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

  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  const chunkedPaquetes = chunkArray(paquetes, 4);

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
      <div id="carouselPaquetes" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {chunkedPaquetes.map((chunk, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div className="d-flex justify-content-center">
                {chunk.map((paquete, i) => (
                  <div key={i} className="paquete-item card m-2">
                    <div className="card-body">
                      <h2 className="card-title">{paquete.simetria == 0 ? 'INTERNET ILIMITADO' : 'INTERNET SIMÉTRICO'}</h2>
                      <p className="card-text">{paquete.velocidadInternet} Megas de velocidad</p>
                      <p className="card-text velocidadPromo"> {paquete.velocidadPromo} Megas</p>
                      <p className="card-text tiempoVelocidadPromo">x {paquete.tiempoVelocidaPromo} meses*</p>
                      <hr />
                      {paquete.archivo && (
                        <div>
                          <p>
                            <img src={`${serverAPIUrl}${paquete.ruta}${paquete.archivo}`} alt={`${serverAPIUrl}${paquete.ruta}${paquete.archivo}`} style={{ height: '30px' }} />
                          </p>
                          <p className="card-text">{paquete.textoServicioCable}</p>
                          <p className="card-text">+ de 25000 horas</p>
                          <p className="card-text">de peliculas y series</p>
                        </div>
                      )}
                      <br />
                      <p className="card-text">+ Telefonia Fija</p>
                      <div className='promoExtra'>
                        <img src={`${serverAPIUrl}/uploads/banners/promo-partner.png`} alt={`${serverAPIUrl}/uploads/banners/promo-partner.png`} style={{ height: '50px' }} />
                        <p className="card-text">${paquete.tarifaPromocional + promoValue}* al mes</p>
                        <p className="card-text">x {paquete.tiempoVelocidaPromo} Meses*</p>
                      </div>
                      <br />
                      <button className='btn btn-primary'>Contrata Ahora</button>



                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselPaquetes" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselPaquetes" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default PaquetesTarifarios;