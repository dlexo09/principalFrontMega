import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { serverAPIUrl } from '../config'; // Ajusta la ruta según la ubicación de tu archivo config.js
import { LocationContext } from '../LocationContext';
import './PaquetesTarifarios.css';
import './Globales.css'

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
    <div className="paquetes-tarifarios text-center">
      <h2 className='small-title'>Elige el paquete ideal para ti</h2>
      <p className='big-title mb-5'>¡Te instalamos sin costo!<sup>*</sup></p>
      <div className="d-flex justify-content-center mb-5 btn-container">
        <button
          type="button"
          className={`pack-btn ${selectedPack === 'triple' ? 'pack-btn-active' : 'pack-btn-inactive'} btn-lg mx-2`}
          onClick={() => setSelectedPack('triple')}
        >
          TRIPLE PACK<br/><span>TV+INTERNET+TELEFONIA</span>
        </button>
        <button
          type="button"
          className={`pack-btn ${selectedPack === 'doble' ? 'pack-btn-active' : 'pack-btn-inactive'} btn-lg mx-2`}
          onClick={() => setSelectedPack('doble')}
        >
          DOBLE PACK<br/><span>TV+INTERNET</span>
        </button>
        
      </div>
      <div className="d-flex justify-content-center mb-3">
        <p>(Cliente nuevo)</p>
      </div>
      <div id="carouselPaquetes" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {chunkedPaquetes.map((chunk, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div className="d-flex justify-content-center slider-gp">
                {chunk.map((paquete, i) => (
                  <div key={i} className="paquete-item card m-2">
                    
                    <div className="card-body">
                      <h2 className="card-title">{paquete.simetria == 0 ? 'INTERNET ILIMITADO' : 'INTERNET SIMÉTRICO'}</h2>
                      {/*  
                      <p className="card-text">{paquete.velocidadInternet} Megas de velocidad</p>
                      */}
                      <p className="card-text velocidadPromo"> {paquete.velocidadPromo} MEGAS</p>
                      <p className="card-text tiempoVelocidadPromo">x {paquete.tiempoVelocidaPromo} meses<sup>*</sup></p>
                      
                      {paquete.archivo && (
                        <div className='xview-content'>
                          <p className='card-servicio-txt'>TV HD INTERACTIVA</p>
                          <p>
                            <img src={`${serverAPIUrl}${paquete.ruta}${paquete.archivo}`} alt={`${serverAPIUrl}${paquete.ruta}${paquete.archivo}`} style={{ height: '30px' }} />
                          </p>
                          <p className="card-text">{paquete.textoServicioCable}</p>
                        </div>
                      )}
                      
                      <p className="card-servicio-txt servicio-m">Telefonia Fija</p>
                      <div className='promoExtra'>
                        <img src={`${serverAPIUrl}/uploads/banners/promo-partner.png`} alt={`${serverAPIUrl}/uploads/banners/promo-partner.png`} style={{ height: '50px' }} />
                        <p className="card-text price-card"><span className='price-mxn'>$</span>{paquete.tarifaPromocional + promoValue}<sup>*</sup><span className='time-crd'>/mes</span></p>
                        <p className="card-text">x {paquete.tiempoVelocidaPromo} meses</p>
                      </div>
                      <button className='btn btn-packs btn-pack-card'>¡Lo quiero!</button>
                      
                      {/* Icons cards */}
                      <img className='icon-card-packs internet-icon' src="../src/assets/icons/internet-icon.png" alt="" />
                      <img className='icon-card-packs tv-icon' src="../src/assets/icons/tv-icon.png" alt="" />
                      <img className='icon-card-packs telefonia-icon' src="../src/assets/icons/telefonia-icon.png" alt="" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="packs-terminos mt-5">
         <p className='promo-xview'>Incluyen <span>más de 30 000 hrs de contenido</span> en Xview+</p>
          <p>Nota: Promoción válida domiciliando el pago a tarjeta. Tarifas registradas ante el IFT. Aplican restricciones. Consulta términos y condiciones <a href="">aquí.</a></p>
          
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