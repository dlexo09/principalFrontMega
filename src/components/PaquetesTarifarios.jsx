import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { serverAPILambda } from "../config";
import { LocationContext } from "../LocationContext";
import { cifrarAES } from "../utils/AES";
import { submitLeadToInConcert } from "../services/inConcertAPI";
import "./PaquetesTarifarios.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const AES_KEY =
  "9e3f2b1a4c6d8e7f0a1b2c3d4e5f6789a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5";
const SUCURSALES_PERMITIDAS = [
  399, 400, 401, 416, 472, 473, 497, 517, 527, 528, 529, 534, 537, 540, 549, 41, 324
];

const PaquetesTarifarios = () => {
  console.log('🎯 PaquetesTarifarios: Componente iniciando');

  const { currentLocation } = useContext(LocationContext);
  const [paquetes, setPaquetes] = useState([]);
  const [selectedPack, setSelectedPack] = useState("triple");
  const [fullConnectedData, setFullConnectedData] = useState([]);
  const [promos, setPromos] = useState([]);
  const promoValue = 0;
  const idSucursal = currentLocation?.idSucursal;
  const nombreSucursal = currentLocation?.sucursalName || "";

  const [showModal, setShowModal] = useState(false);
  const [telefonoModal, setTelefonoModal] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  console.log('🎯 PaquetesTarifarios: CurrentLocation:', currentLocation);

  useEffect(() => {
    console.log('🎯 PaquetesTarifarios: useEffect fetchPaquetes ejecutándose');
    
    const fetchPaquetes = async () => {
      if (currentLocation) {
        try {
          console.log('🎯 Fetching paquetes para:', currentLocation.idSucursal);
          const response = await fetch(
            `${serverAPILambda}api/${selectedPack}Pack/${currentLocation.idSucursal}`
          );
          const data = await response.json();
          console.log('🎯 Paquetes obtenidos:', data);
          setPaquetes(data);
        } catch (error) {
          console.error("Error fetching paquetes:", error);
        }
      } else {
        console.log('🎯 No hay currentLocation, no se pueden cargar paquetes');
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
        console.error("Error fetching full connected data:", error);
      }
    };
    fetchFullConnectedData();
  }, []);

  useEffect(() => {
    const fetchPromos = async () => {
      try {
        const response = await fetch(`${serverAPILambda}api/promoEspecialHome`);
        const data = await response.json();
        setPromos(data);
      } catch (error) {
        console.error("Error fetching promos:", error);
      }
    };
    fetchPromos();
  }, []);

  const isFullConnectedVisible = fullConnectedData.some(
    (item) => item.idSucursal === idSucursal && item.status === 1
  );

  const handleButtonClick = (
    idPaqueteWeb,
    costoPaquete,
    idSucursal,
    nombreSucursal
  ) => {
    if (!idSucursal || !nombreSucursal) {
      alert("Selecciona una sucursal para continuar.");
      return;
    }
    const costoCifrado = cifrarAES(String(costoPaquete), AES_KEY);
    const url = `https://ventas-web.megacable.com.mx/#/new-sale/${idPaqueteWeb}/${idSucursal}/${encodeURIComponent(
      nombreSucursal
    )}?c=${encodeURIComponent(costoCifrado)}`;
    window.open(url, "_blank");
  };

  const handleContrataAhora = () => {
    setShowModal(true);
  };

  const handleModalSubmit = async (e) => {
    e.preventDefault();
    if (!telefonoModal) {
      alert("Por favor ingresa tu teléfono.");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitLeadToInConcert(telefonoModal, 'paquetes_home');
      
      if (result.success) {
        alert(`¡Gracias! Pronto te contactaremos. ID: ${result.contactId}`);
        setShowModal(false);
        setTelefonoModal("");
      } else {
        alert("Error al enviar. Intenta de nuevo.");
        console.error('Error enviando lead:', result.error);
      }
    } catch (error) {
      console.error('Error en modal submit:', error);
      alert("Error de conexión. Intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const ajustarAlturas = () => {
      const items = document.querySelectorAll(".swiper .paquete-item");
      let maxHeight = 0;
      items.forEach((item) => {
        item.style.height = "auto";
      });
      items.forEach((item) => {
        const height = item.offsetHeight;
        if (height > maxHeight) maxHeight = height;
      });
      items.forEach((item) => {
        item.style.height = `${maxHeight}px`;
      });
    };
    setTimeout(() => {
      ajustarAlturas();
    }, 100);
    window.addEventListener("resize", ajustarAlturas);
    return () => window.removeEventListener("resize", ajustarAlturas);
  }, [paquetes, selectedPack]);

  console.log('🎯 PaquetesTarifarios: Renderizando JSX, paquetes:', paquetes.length);

  return (
    <div className="container pad-container paquetes-tarifarios text-center">
      <h2 className="small-title tarifario-title">
        MEGA internet simétrico y completamente ilimitado
      </h2>
      <p className="big-title mb-5 title-especial">
        Elige tu paquete ideal ¡Te instalamos sin costo!<sup>*</sup>
      </p>

      <div className="d-flex justify-content-center mb-3 btn-container">
        <button
          type="button"
          className={`pack-btn ${selectedPack === "triple" ? "pack-btn-active" : "pack-btn-inactive"} btn-lg mx-2`}
          onClick={() => setSelectedPack("triple")}
        >
          TRIPLE PACK
          <br />
          <span>INTERNET + TV + TELEFONÍA</span>
        </button>
        <button
          type="button"
          className={`pack-btn ${selectedPack === "doble" ? "pack-btn-active" : "pack-btn-inactive"} btn-lg mx-2`}
          onClick={() => setSelectedPack("doble")}
        >
          DOBLE PACK
          <br />
          <span>INTERNET + TELEFONÍA</span>
        </button>
      </div>
      <div className="d-flex justify-content-center mb-3">
        <p>(Cliente nuevo)</p>
      </div>

      <div className="position-relative">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".packs-prev",
            nextEl: ".packs-next",
          }}
          slidesPerView={1}
          centeredSlides={paquetes.length === 1}
          spaceBetween={20}
          breakpoints={{
            768: {
              slidesPerView: 2,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 3,
              centeredSlides: false,
            },
          }}
          className="carousel slide"
        >
          {paquetes.map((paquete, index) => (
            <SwiperSlide key={index}>
              <div className="icons-pack-container d-flex justify-content-center">
                <img
                  className="icon-card-packs internet-icon d-md-block"
                  src="/icons/internet-icon.png"
                  alt="Icono Internet"
                />
                {selectedPack !== "doble" && (
                  <img
                    className="icon-card-packs tv-icon d-md-block"
                    src="/icons/tv-icon.png"
                    alt="Icono TV"
                  />
                )}
                <img
                  className={`icon-card-packs d-md-block telefonia-icon ${selectedPack === "doble" ? "telefonia-icon-doble" : ""}`}
                  src="/icons/telefonia-icon.png"
                  alt="Icono Telefonía"
                />
              </div>

              <div className="d-flex justify-content-center container-packs-swiper h-100">
                <div
                  className={`paquete-item paquete-general-item card ${selectedPack === "doble" ? "paquete-item-doble" : "paquete-item-triple"}`}
                  style={{ width: "100%", maxWidth: "340px" }}
                >
                  <div className="card-body">
                    <div className="paquete-header">
                      <h2 className="card-title">
                        {paquete.idTipoRed == 3
                          ? "INTERNET SIMÉTRICO"
                          : "INTERNET ILIMITADO"}
                      </h2>
                      <p className="card-text velocidadPromo">
                        {paquete.velocidadPromo === 0
                          ? paquete.velocidadInternet
                          : paquete.velocidadPromo}{" "}
                        MEGAS
                      </p>
                      {paquete.tiempoVelocidaPromo > 0 ? (
                        <p className="card-text tiempoVelocidadPromo">
                          x {paquete.tiempoVelocidaPromo} meses<sup>*</sup>
                        </p>
                      ) : (
                        <p className="card-text tiempoVelocidadPromo"></p>
                      )}

                      {(paquete.velocidadPromo === 0
                        ? paquete.velocidadInternet
                        : paquete.velocidadPromo) >= 200 ? (
                        <img
                          src="/img/extensor_wifi_ultra.png"
                          alt="Extensor Wifi Ultra Incluido"
                          style={{ height: "40px", marginBlockStart: "10px" }}
                        />
                      ) : (
                        <p
                          className="card-title"
                          style={{ marginBlockStart: "10px" }}
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
                              {paquete.nameServicioCable.includes("HD") ? (
                                <>
                                  <p className="card-servicio-txt">
                                    Televisión HD
                                  </p>
                                  <p className="card-text">
                                    {paquete.textoServicioCable}
                                  </p>
                                </>
                              ) : (
                                <>
                                  <p className="card-servicio-txt">
                                    Televisión
                                  </p>
                                  <p className="card-text">
                                    {paquete.textoServicioCable}
                                  </p>
                                </>
                              )}
                            </>
                          ) : (
                            (paquete.idTipoPaquete === 3 ||
                              paquete.idTipoPaquete === 4) && (
                              <>
                                <p>
                                  <img
                                    src={`/img/${paquete.logo}`}
                                    alt="TV INTERACTIVA"
                                    style={{ height: "60px" }}
                                  />
                                </p>
                                <p className="card-text">Más de 130 canales </p>
                                <p className="card-text">+ De 30,000 horas</p>
                                <p className="card-text">
                                  de peliculas y series
                                </p>
                              </>
                            )
                          )}
                        </div>
                      )}

                      <p className="card-servicio-txt servicio-m">
                        + Telefonía Fija
                      </p>
                      <div className="promoExtra">
                        {promos
                          .filter(
                            (promo) =>
                              promo.dondeAplica === 1 ||
                              (promo.dondeAplica === 2 &&
                                selectedPack === "doble") ||
                              (promo.dondeAplica === 3 &&
                                selectedPack === "triple")
                          )
                          .map((promo, index) => (
                            <img
                              key={index}
                              src={`/uploads/cardTarifarioStreaming/${promo.logo}`}
                              alt={promo.nameStreaming}
                              style={{ height: "50px" }}
                            />
                          ))}
                        <p className="card-text price-card">
                          <span className="price-mxn">$</span>
                          {Math.round(
                            Number(paquete.tarifaPromocional) +
                            Number(
                              promos.reduce(
                                (acc, promo) => acc + promo.costoMensualPromo,
                                promoValue
                              )
                            )
                          )}
                          <sup>*</sup>
                          <span className="time-crd">/mes</span>
                        </p>
                        {paquete.tarifaPromocionalTemp > 0 && (
                          <p className="card-text">
                            x {paquete.tarifaPromocionalTemp} meses
                          </p>
                        )}
                      </div>
                      {SUCURSALES_PERMITIDAS.includes(Number(currentLocation?.idSucursal)) ? (
                        <button
                          className="btn btn-packs btn-pack-card"
                          onClick={() =>
                            handleButtonClick(
                              paquete.idContrata,
                              paquete.tarifaPromocional,
                              currentLocation?.idSucursal,
                              currentLocation?.sucursalName
                            )
                          }
                        >
                          ¡Lo quiero!
                        </button>
                      ) : (
                        <button
                          className="btn btn-packs btn-pack-card"
                          onClick={handleContrataAhora}
                        >
                          Contrata ahora
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="carousel-control-prev packs-prev" type="button">
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next packs-next" type="button">
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {isFullConnectedVisible && (
        <div className="d-flex justify-content-center full-connected-container">
          <p>
            <img
              src="/img/home/full_connected_home.png"
              alt="Full Connected Home"
              className="img-fluid fullconnect-img"
            />
          </p>
          <button className="btn btn-packs btn-pack-card">
            ¡Quiero fullconnect!
          </button>
        </div>
      )}

      <div className="container packs-terminos mt-5">
        <p className="promo-xview">
          Incluyen <span>más de 30,000 hrs de contenido</span> en Xview+
        </p>
        <p>
          Nota: Promoción válida domiciliando el pago a tarjeta. Los paquetes mostrados incluyen max básico con anuncios. <a href="/files/ift/Folios_de_Registros_DAC.xlsx">Tarifas registradas ante el IFT</a>. Aplican restricciones. Consulta términos y condiciones <a href="">aquí.</a>
        </p>
      </div>

      {showModal && (
        <div className="modal-backdrop" style={{
          position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
          background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999
        }}>
          <div className="modal-content" style={{
            background: "#fff", padding: 24, borderRadius: 8, minWidth: 300
          }}>
            <h4>Déjanos tu teléfono</h4>
            <form onSubmit={handleModalSubmit}>
              <input
                type="tel"
                className="form-control mb-3"
                placeholder="Tu teléfono"
                value={telefonoModal}
                onChange={e => setTelefonoModal(e.target.value)}
                disabled={isSubmitting}
                required
              />
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar'}
              </button>
              <button 
                type="button" 
                className="btn btn-secondary ms-2" 
                onClick={() => setShowModal(false)}
                disabled={isSubmitting}
              >
                Cancelar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaquetesTarifarios;