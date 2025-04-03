import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { serverAPILambda } from '../config'; // Ajusta la ruta según la ubicación de tu archivo config.js
import { LocationContext } from '../LocationContext';
import './PaquetesTarifarios.css';

const PaquetesTarifariosAmazonPrime = () => {
  const { currentLocation } = useContext(LocationContext);
  const [paquetes, setPaquetes] = useState([]);
  const [selectedPack, setSelectedPack] = useState('triple');
  const [chunkSize, setChunkSize] = useState(4); // Nuevo estado para chunkSize
  const [extraPromos, setExtraPromos] = useState([]);
  const [selectedPromo, setSelectedPromo] = useState({});
  const promoValue = 0; // Definir la variable para el valor adicional
  const navigate = useNavigate(); // Hook para redirigir

  //console.log("ID sucursal", idSucursal); // Imprimir el valor de idSucursal

  useEffect(() => {
    //console.log("Current Location:", currentLocation); // Imprimir el valor de currentLocation

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

  useEffect(() => {
    const fetchExtraPromos = async () => {
      try {
        const response = await fetch(`${serverAPILambda}api/extraPromoAmazonPrime`);
        const data = await response.json();
        setExtraPromos(data);

        // Seleccionar por defecto el botón con el promoCost más barato
        const initialSelectedPromo = {};
        data.forEach((promo) => {
          paquetes.forEach((paquete, i) => {
            const uniqueId = `${paquete.id}-${i}`;
            if (!initialSelectedPromo[uniqueId] || promo.costoMensual < initialSelectedPromo[uniqueId].costoMensual) {
              initialSelectedPromo[uniqueId] = promo;
            }
          });
        });
        setSelectedPromo(initialSelectedPromo);
      } catch (error) {
        console.error('Error fetching extra promos:', error);
      }
    };

    fetchExtraPromos();
  }, [paquetes]);

  const updateChunkSize = () => {
    if (window.innerWidth < 1024) {
      setChunkSize(1); // 2 tarjetas en pantallas medianas
    } else if (window.innerWidth < 1400) {
      setChunkSize(2); // 3 tarjetas en pantallas medianas grandes
    } else {
      setChunkSize(3); // 4 tarjetas en pantallas grandes
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

  const handleButtonClick = (idContrata) => {
    navigate(`/detallePaquete/${idContrata}`);
  };

  const handlePromoChange = (uniqueId, promo) => {
    setSelectedPromo(prevState => ({
      ...prevState,
      [uniqueId]: promo,
    }));
  };

  return (
    <div className="container pad-container paquetes-tarifarios text-center">
      <h2 className="small-title tarifario-title">Elige el paquete ideal para ti</h2>
      <h3 className="big-title mb-5 title-especial">¡Te instalamos sin costo!<sup>*</sup></h3>
      <div className="d-flex justify-content-center mb-3 btn-container">
        <button
          type="button"
          className={`pack-btn ${selectedPack === 'triple' ? 'pack-btn-active prime-btn-color' : 'pack-btn-inactive'} btn-lg mx-2`}
          onClick={() => setSelectedPack('triple')}
        >
          TRIPLE PACK<br /><span>INTERNET + TV + TELEFONÍA</span>
        </button>
        <button
          type="button"
          className={`pack-btn ${selectedPack === 'doble' ? 'pack-btn-active prime-btn-color' : 'pack-btn-inactive'} btn-lg mx-2`}
          onClick={() => setSelectedPack('doble')}
        >
          DOBLE PACK<br /><span>INTERNET + TELEFONÍA</span>
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
                  const uniqueId = `${paquete.id}-${i}`;
                  const selectedPromoCost = selectedPromo[uniqueId]?.costoMensual || 0;
                  return (
                    <div key={i} className="paquete-item paquete-item-prime card m-2">
                      <div className="card-body">
                        <h2 className="card-title">{paquete.idTipoRed == 3 ? 'INTERNET SIMÉTRICO' : 'INTERNET ILIMITADO'}</h2>
                        <p className="card-text velocidadPromo velocidadPromo-prime">{velocidad} MEGAS</p>
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
                          <div className="pack-str-container">
                            <p className="card-servicio-txt servicio-m mb-2">SELECCIONA TU PLAN</p>
                            <div className="pack-str-content d-flex flex-column justify-content-center">
                              {extraPromos.map(promo => (
                                <button
                                  key={promo.idStreaming}
                                  className={`pack-btn-str ${selectedPromo[uniqueId]?.idStreaming === promo.idStreaming ? "prime-btn-color" : "pack-btn-inactive"}`}
                                  onClick={() => handlePromoChange(uniqueId, promo)}
                                >
                                  {promo.textButtonCard}
                                </button>
                              ))}
                            </div>
                          </div>
                          <p className="card-text price-card">
                            <span className="price-mxn">$</span>
                            {paquete.tarifaPromocional + promoValue + selectedPromoCost}
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
                          className="icon-card-packs internet-icon d-none d-md-block"
                          src="/icons/amazon/internet-icon.png"
                          alt="Icono Internet"
                        />
                        <img
                          className="icon-card-packs str-icon d-none d-md-block"
                          src="/icons/amazon/strm-icon.png"
                          alt="Icono Amazon Prime"
                        />
                        {selectedPack !== 'doble' && (
                          <img
                            className="icon-card-packs tv-icon d-none d-md-block"
                            src="/icons/amazon/tv-icon.png"
                            alt="Icono TV"
                          />
                        )}
                        <img
                          className={`icon-card-packs d-none d-md-block telefonia-icon ${selectedPack === 'doble' ? 'telefonia-icon-doble' : ''}`}
                          src="/icons/amazon/telefonia-icon.png"
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
        <button
          className="carousel-control-prev packs-prev"
          type="button"
          data-bs-target="#carouselPaquetes"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next packs-next"
          type="button"
          data-bs-target="#carouselPaquetes"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container packs-terminos">
        {selectedPack !== "doble" && (
          <p className="promo-xview ">
            Incluyen{" "}
            <span className="txt-prime-color">
              más de 30,000 hrs de contenido
            </span>{" "}
            en Xview+
          </p>
        )}

        <p>
          Nota: Promoción válida domiciliando el pago a tarjeta.{" "}
          <a className="txt-prime-color" href="">
            Tarifas registradas ante el IFT.{" "}
          </a>
          Aplican restricciones. Consulta términos y condiciones{" "}
          <a
            className="txt-prime-color"
            target="_blank"
            href="https://www.megacable.com.mx/terminos-y-condiciones"
          >
            aquí.
          </a>
        </p>
      </div>

    </div>
  );
};

export default PaquetesTarifariosAmazonPrime;