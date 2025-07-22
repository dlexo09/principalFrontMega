import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { serverAPILambda } from '../config';
import { LocationContext } from '../LocationContext';
import { cifrarAES } from "../utils/AES"; // Ajusta la ruta si es necesario

import './PaquetesTarifarios.css';

const AES_KEY = "9e3f2b1a4c6d8e7f0a1b2c3d4e5f6789a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5";

const PaquetesTarifariosNetflix = () => {
  const { currentLocation } = useContext(LocationContext);
  const [paquetes, setPaquetes] = useState([]);
  const [selectedPack, setSelectedPack] = useState('triple');
  const [extraPromos, setExtraPromos] = useState([]);
  const [selectedPromo, setSelectedPromo] = useState({});
  // Estado para controlar el popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedPackageData, setSelectedPackageData] = useState(null);
  const promoValue = 0;
  const idSucursal = currentLocation?.idSucursal;
  const nombreSucursal = currentLocation?.sucursalName || ""; // <-- Asegura que tienes el nombre
  const navigate = useNavigate();

  // Obtener paquetes
  useEffect(() => {
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

  // Obtener promociones extra
  useEffect(() => {
    const fetchExtraPromos = async () => {
      try {
        const response = await fetch(`${serverAPILambda}api/extraPromoNetflix`);
        const data = await response.json();
        setExtraPromos(data);

        const initialSelectedPromo = {};
        data.forEach((promo) => {
          paquetes.forEach((paquete, i) => {
            const uniqueId = `${paquete.idContrata}-${i}`;
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

  // Configuración responsive
  const getSlidesPerView = () => {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView());
      ajustarAlturas();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Función para ajustar alturas
  const ajustarAlturas = () => {
    const items = document.querySelectorAll(".my-swiper .paquete-item-netflix");
    let maxHeight = 0;

    // Resetear alturas
    items.forEach((item) => {
      item.style.height = "auto";
    });

    // Calcular altura máxima
    items.forEach((item) => {
      const height = item.offsetHeight;
      if (height > maxHeight) maxHeight = height;
    });

    // Aplicar altura máxima
    items.forEach((item) => {
      item.style.height = `${maxHeight}px`;
    });
  };

  useEffect(() => {
    const timer = setTimeout(ajustarAlturas, 100);
    return () => clearTimeout(timer);
  }, [paquetes, selectedPack]);

  const handleButtonClick = (idPaqueteWeb, costoPaquete, idSucursal, nombreSucursal) => {
    if (!idSucursal || !nombreSucursal) {
      alert("Selecciona una sucursal para continuar.");
      return;
    }
    // Guardar los datos del paquete seleccionado y abrir el popup
    setSelectedPackageData({
      idPaqueteWeb,
      costoPaquete,
      idSucursal,
      nombreSucursal
    });
    setIsPopupOpen(true);
  };

  const handlePromoChange = (uniqueId, promo) => {
    setSelectedPromo(prevState => ({
      ...prevState,
      [uniqueId]: promo,
    }));
    setTimeout(ajustarAlturas, 50);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedPackageData(null);
  };

  // Componente del popup
  const ContactPopup = () => {
    if (!isPopupOpen) return null;

    return (
      <div className="popup-overlay" onClick={handleClosePopup}>
        <div className="popup-content popup-content-tarifario" onClick={(e) => e.stopPropagation()}>
          <div className="popup-header">
            <h3>¡Quiero contratar!</h3>
            <button className="popup-close-btn" onClick={handleClosePopup}>×</button>
          </div>
          <div className="popup-body">
            <form role="form" id="f-llamame-home0">   
              <input 
                type="text" 
                className="form-control telefono popup-input form-popup-streaming" 
                placeholder="Tu teléfono" 
                name="dato1" 
                id="P2_dato1" 
                required 
              />    
              <div className="popup-checkbox-container label-popup-container">
                <input 
                  type="checkbox" 
                  id="i-acepto-popup" 
                  required 
                  name="i-acepto" 
                  data-ic-form-field="i-acepto"
                />
                <label htmlFor="i-acepto-popup">
                  <small>He leído y Acepto el <a target='_blank' href="/aviso-de-privacidad">Aviso de privacidad</a></small>
                </label>
              </div>
              
              <button className="popup-submit-btn" type="button">Llámame</button>
            </form>
          </div>
        </div>
      </div>
    );
  };

  // Funciones para el manejo del popup
  const openPopup = (packageData) => {
    setSelectedPackageData(packageData);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedPackageData(null);
  };

  return (
    <div className="container pad-container paquetes-tarifarios text-center">
      <h2 className="small-title tarifario-title">Elige el paquete ideal para ti</h2>
      <h3 className="big-title mb-5 title-especial">¡Te instalamos sin costo!<sup>*</sup></h3>

      <div className="d-flex justify-content-center mb-3 btn-container">
        <button
          type="button"
          className={`pack-btn ${selectedPack === 'triple' ? 'pack-btn-active netflix-btn-color' : 'pack-btn-inactive'} btn-lg mx-2`}
          onClick={() => setSelectedPack('triple')}
        >
          TRIPLE PACK<br /><span>INTERNET + TV + TELEFONÍA</span>
        </button>
        <button
          type="button"
          className={`pack-btn ${selectedPack === 'doble' ? 'pack-btn-active netflix-btn-color' : 'pack-btn-inactive'} btn-lg mx-2`}
          onClick={() => setSelectedPack('doble')}
        >
          DOBLE PACK<br /><span>INTERNET + TELEFONÍA</span>
        </button>
      </div>

      <div className="d-flex justify-content-center mb-3">
        <p>(Cliente nuevo)</p>
      </div>

      <div className="position-relative swiper-general-container">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '.packs-prev',
            nextEl: '.packs-next',
          }}
          spaceBetween={20}
          slidesPerView={slidesPerView}
          onSlideChange={ajustarAlturas}
          centeredSlides={paquetes.length === 1}
          onResize={ajustarAlturas}
          className="my-swiper"
        >
          {paquetes.map((paquete, i) => {
            const velocidad = paquete.velocidadPromo === 0 ? paquete.velocidadInternet : paquete.velocidadPromo;
            const uniqueId = `${paquete.idContrata}-${i}`;
            const selectedPromoCost = selectedPromo[uniqueId]?.costoMensual || 0;
            const showExtensor = velocidad >= 200;

            return (
              <SwiperSlide key={uniqueId}>
                <div className="icons-pack-container d-flex justify-content-center">
                  <img
                    className="icon-card-packs internet-icon d-md-block"
                    src="/icons/netflix/internet-icon.png"
                    alt="Icono Internet"
                  />

                  {selectedPack !== 'doble' && (
                    <img
                      className="icon-card-packs tv-icon d-md-block"
                      src="/icons/netflix/tv-icon.png"
                      alt="Icono TV"
                    />
                  )}
                  <img
                    className={`icon-card-packs d-md-block telefonia-icon ${selectedPack === 'doble' ? 'telefonia-icon-doble' : ''}`}
                    src="/icons/netflix/telefonia-icon.png"
                    alt="Icono Telefonía"
                  />
                  <img
                    className="icon-card-packs str-icon d-md-block"
                    src="/icons/netflix/strm-icon.png"
                    alt="Icono Netflix"
                  />
                </div>
                <div className="d-flex justify-content-center container-packs-swiper h-100">
                  <div className={`paquete-item paquete-item-netflix card ${selectedPack === 'doble' ? 'paquete-item-doble' : 'paquete-item-triple'}`}>
                    <div className="card-body">
                      <div className="paquete-header">
                        <h2 className="card-title">{paquete.idTipoRed == 3 ? 'INTERNET SIMÉTRICO' : 'INTERNET ILIMITADO'}</h2>
                        <p className="card-text velocidadPromo velocidadPromo-netflix">{velocidad} MEGAS</p>

                        {paquete.tiempoVelocidaPromo > 0 ? (
                          <p className="card-text tiempoVelocidadPromo">
                            x {paquete.tiempoVelocidaPromo} meses<sup>*</sup>
                          </p>
                        ) : (
                          <p className="card-text tiempoVelocidadPromo"></p>
                        )}

                        {showExtensor ? (
                          <img
                            src="/img/extensor_wifi_ultra.png"
                            alt="Extensor Wifi Ultra Incluido"
                            style={{ height: '40px', marginBlockStart: '10px' }}
                          />
                        ) : (
                          <p
                            className="card-title"
                            style={{ marginBlockStart: '10px' }}
                          >
                            DE VELOCIDAD
                          </p>
                        )}

                      </div>

                      <div className="paquete-body">
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
                                    style={{ height: '60px' }}
                                  />
                                </p>
                                <p className="card-text">Más de 130 canales</p>
                                <p className="card-text">+ De 30,000 horas</p>
                                <p className="card-text">de películas y series</p>
                              </>
                            )}
                          </div>
                        )}

                        <p className="card-servicio-txt servicio-m">+ Telefonía Fija</p>
                        <div className="promoExtra">
                          <div className="pack-str-container">
                            <p className="card-servicio-txt servicio-m mb-2">SELECCIONA TU PLAN</p>
                            <div className="pack-str-content d-flex flex-column justify-content-center">
                              {extraPromos.map((promo, promoIndex) => (
                                <button
                                  key={`promo-${promo.idStreaming}-${promoIndex}`}
                                  className={`pack-btn-str ${selectedPromo[uniqueId]?.idStreaming === promo.idStreaming ? "netflix-btn-color" : "pack-btn-inactive"}`}
                                  onClick={() => handlePromoChange(uniqueId, promo)}
                                >
                                  {promo.textButtonCard}
                                </button>
                              ))}
                            </div>
                          </div>
                          <p className="card-text price-card">
                            <span className="price-mxn">$</span>
                            {Math.round(Number(paquete.tarifaPromocional) + Number(promoValue) + Number(selectedPromoCost))}
                            <sup>*</sup>
                            <span className="time-crd">/mes</span>
                          </p>
                          {paquete.tarifaPromocionalTemp > 0 && (
                            <p className="card-text">x {paquete.tarifaPromocionalTemp} meses</p>
                          )}
                        </div>
                        <button
                          className="btn btn-packs btn-pack-card"
                          onClick={() => handleButtonClick(
                            paquete.idContrata,
                            paquete.tarifaPromocional,
                            currentLocation?.idSucursal,
                            currentLocation?.sucursalName
                          )}
                        >
                          ¡Lo quiero!
                        </button>

                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <button className="carousel-control-prev packs-prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next packs-next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container packs-terminos">
        {selectedPack !== "doble" && (
          <p className="promo-xview">
            Incluyen <span className="txt-netflix-color">más de 30,000 hrs de contenido</span> en Xview+
          </p>
        )}
        <p>
          Nota: Promoción válida domiciliando el pago a tarjeta.{" "}
          <a className="txt-netflix-color" href="">Tarifas registradas ante el IFT. </a>
          Aplican restricciones. Consulta términos y condiciones{" "}
          <a className="txt-netflix-color" target="_blank" href="https://www.megacable.com.mx/terminos-y-condiciones">
            aquí.
          </a>
        </p>
      </div>

      <ContactPopup />
    </div>
  );
};

export default PaquetesTarifariosNetflix;