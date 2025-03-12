import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { serverAPILambda } from '../config'; // Ajusta la ruta según la ubicación de tu archivo config.js
import { LocationContext } from '../LocationContext'; //
import './PaquetesTarifarios.css';

const PaquetesTarifarios = () => {
  const { currentLocation } = useContext(LocationContext);
  const [paquetes, setPaquetes] = useState([]);
  const [selectedPack, setSelectedPack] = useState('triple');
  const [chunkSize, setChunkSize] = useState(4); // Nuevo estado para chunkSize
  const [fullConnectedData, setFullConnectedData] = useState([]);
  const [promos, setPromos] = useState([]);
  const promoValue = 0; // Definir la variable para el valor adicional
  const idSucursal = currentLocation?.idSucursal; // Obtener el idSucursal de currentLocation
  const navigate = useNavigate(); // Hook para redirigir

  console.log("ID sucursal", idSucursal); // Imprimir el valor de idSucursal

  useEffect(() => {
    console.log("Current Location:", currentLocation); // Imprimir el valor de currentLocation

    const fetchPaquetes = async () => {
      if (currentLocation) {
        try {
          const response = await fetch(`${serverAPILambda}api/${selectedPack}Pack/${currentLocation.idSucursal}`);
          const data = await response.json();
          setPaquetes(data);
        } catch (error) {
          console.error('Error fetching paquetes:', error);
        }
      }
    };

    fetchPaquetes();
  }, [selectedPack, currentLocation]);

  useEffect(() => {
    const fetchFullConnectedData = async () => {
      try {
        const response = await fetch(`${serverAPILambda}api/fullConnected`);
        const data = await response.json();
        setFullConnectedData(data);
      } catch (error) {
        console.error('Error fetching full connected data:', error);
      }
    };

    fetchFullConnectedData();
  }, []);

  useEffect(() => {
    const fetchPromos = async () => {
      try {
        const response = await fetch(`${serverAPILambda}api/promoEspecialHome/`);
        const data = await response.json();
        setPromos(data);
      } catch (error) {
        console.error('Error fetching promos:', error);
      }
    };

    fetchPromos();
  }, []);

  const updateChunkSize = () => {
    if (window.innerWidth < 768) {
      setChunkSize(1); // 1 tarjeta en pantallas pequeñas
    } else if (window.innerWidth < 1024) {
      setChunkSize(2); // 2 tarjetas en pantallas medianas
    } else if (window.innerWidth < 1400) {
      setChunkSize(3); // 3 tarjetas en pantallas medianas grandes
    } else {
      setChunkSize(4); // 4 tarjetas en pantallas grandes
    }
  };

  useEffect(() => {
    updateChunkSize();
    window.addEventListener('resize', updateChunkSize);
    return () => window.removeEventListener('resize', updateChunkSize);
  }, []);

  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  const chunkedPaquetes = chunkArray(paquetes, chunkSize);

  const isFullConnectedVisible = fullConnectedData.some(item => item.idSucursal === idSucursal && item.status === 1);

  const handleButtonClick = (idContrata) => {
    navigate(`/detallePaquete/${idContrata}`);
  };

  return (
    <div className="container paquetes-tarifarios text-center">
      <h2 className="small-title tarifario-title">Elige el paquete ideal para ti</h2>
      <p className="big-title mb-5 title-especial">¡Te instalamos sin costo!<sup>*</sup></p>
      <div className="d-flex justify-content-center mb-3 btn-container">
        <button
          type="button"
          className={`pack-btn ${selectedPack === 'triple' ? 'pack-btn-active' : 'pack-btn-inactive'} btn-lg mx-2`}
          onClick={() => setSelectedPack('triple')}
        >
          TRIPLE PACK<br /><span>INTERNET + TV +   TELEFONÍA</span>
        </button>
        <button
          type="button"
          className={`pack-btn ${selectedPack === 'doble' ? 'pack-btn-active' : 'pack-btn-inactive'} btn-lg mx-2`}
          onClick={() => setSelectedPack('doble')}
        >
          DOBLE PACK<br /><span>INTERNET + TELEFONÍA </span>
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
                {chunk.map((paquete, i) => {
                  const velocidad = paquete.velocidadPromo === 0 ? paquete.velocidadInternet : paquete.velocidadPromo;
                  const totalPromoValue = promos.reduce((acc, promo) => acc + promo.costoMensualPromo, promoValue);
                  return (
                    <div key={i} className="paquete-item card m-2">
                      <div className="card-body">
                        <h2 className="card-title">{paquete.idTipoRed == 3 ? 'INTERNET SIMÉTRICO' : 'INTERNET ILIMITADO'}</h2>
                        <p className="card-text velocidadPromo">
                          {velocidad} MEGAS
                        </p>
                        {paquete.tiempoVelocidaPromo > 0 ? (
                          <p className="card-text tiempoVelocidadPromo">
                            x {paquete.tiempoVelocidaPromo} meses<sup>*</sup>
                          </p>
                        ) : paquete.tarifaPromocionalTemp > 0 ? (
                          <p className="card-text tiempoVelocidadPromo">
                            x {paquete.tarifaPromocionalTemp} meses<sup>*</sup>
                          </p>
                        ) : (
                          <p className="card-text tiempoVelocidadPromo"></p>
                        )}

                        {velocidad >= 200 && (
                          <p>
                            <img
                              src={`/img/extensor_wifi_ultra.png`}
                              alt="IncluyeExtensor Wifi Ultra"
                              style={{ height: '40px', marginTop: '20px' }}
                            />
                          </p>
                        )}

                        {paquete.archivo && (
                          <div className="xview-content">
                            {paquete.idTipoPaquete === 2 ? (
                              <>
                                {paquete.nameServicioCable.includes('HD') ? (
                                  <>
                                    <p className="card-servicio-txt">Televisión HD</p>
                                    <p className="card-text">{paquete.textoServicioCable}</p>
                                  </>
                                ) : (
                                  <>
                                    <p className="card-servicio-txt">Televisión</p>
                                    <p className="card-text">{paquete.textoServicioCable}</p>
                                  </>
                                )}
                              </>
                            ) : (paquete.idTipoPaquete === 3 || paquete.idTipoPaquete === 4) && (
                              <>
                                <p>
                                  <img
                                    src={`/img/${paquete.logo}`}
                                    alt="TV INTERACTIVA"
                                    style={{ height: '30px' }}
                                  />
                                </p>
                                <p className="card-text">Más de 130 canales </p>
                                <p className="card-text">+ De 30,000 horas</p>
                                <p className="card-text">de peliculas y series</p>
                              </>
                            )}

                          </div>
                        )}

                        <p className="card-servicio-txt servicio-m">Telefonia Fija</p>
                        <div className="promoExtra">
                          {promos
                            .filter(promo => promo.dondeAplica === 1 || (promo.dondeAplica === 2 && selectedPack === 'doble') || (promo.dondeAplica === 3 && selectedPack === 'triple'))
                            .map((promo, index) => (
                              <img
                                key={index}
                                src={`/uploads/cardTarifarioStreaming/${promo.logo}`}
                                alt={promo.nameStreaming}
                                style={{ height: '50px' }}
                              />
                            ))}
                          <p className="card-text price-card">
                            <span className="price-mxn">$</span>
                            {paquete.tarifaPromocional + totalPromoValue}
                            <sup>*</sup>
                            <span className="time-crd">/mes</span>
                          </p>
                          {paquete.tarifaPromocionalTemp > 0 && (
                            <p className="card-text">x {paquete.tarifaPromocionalTemp} meses</p>
                          )}
                        </div>
                        <button className="btn btn-packs btn-pack-card" onClick={() => handleButtonClick(paquete.idContrata)}>¡Lo quiero!</button>

                        {/* Icons cards */}
                        <img
                          className="icon-card-packs internet-icon"
                          src="/icons/internet-icon.png"
                          alt="Icono Internet"
                        />
                        {selectedPack !== 'doble' && (
                          <img
                            className="icon-card-packs tv-icon"
                            src="/icons/tv-icon.png"
                            alt="Icono TV"
                          />
                        )}
                        <img
                          className={`icon-card-packs telefonia-icon ${selectedPack === 'doble' ? 'telefonia-icon-doble' : ''}`}
                          src="/icons/telefonia-icon.png"
                          alt="Icono Telefonía"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {isFullConnectedVisible && (
          <div className="d-flex justify-content-center mb-3 full-connected-container">
            <p>
              <img
                src="/img/home/full_connected_home.png"
                alt="Full Connected"
                className="img-fluid fullconnect-img"
              />
            </p>
            <button className="btn btn-packs btn-pack-card">¡Quiero fullconnect!</button>
          </div>
        )}

        <div className="container packs-terminos">
          <p className="promo-xview">
            Incluyen <span>más de 30,000 hrs de contenido</span> en Xview+
          </p>
          <p>
            Nota: Promoción válida domiciliando el pago a tarjeta. Tarifas registradas ante el IFT. Aplican restricciones.
            Consulta términos y condiciones <a href="">aquí.</a>
          </p>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselPaquetes"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselPaquetes"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default PaquetesTarifarios;