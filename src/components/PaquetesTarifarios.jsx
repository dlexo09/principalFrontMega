import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { serverAPILambda } from "../config";
import { LocationContext } from "../LocationContext";
import { cifrarAES } from "../utils/AES";

import "./PaquetesTarifarios.css";

// Importaciones de Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const AES_KEY =
  "9e3f2b1a4c6d8e7f0a1b2c3d4e5f6789a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5"; // Define aquí la clave y compártela

const PaquetesTarifarios = () => {
  const { currentLocation } = useContext(LocationContext);
  const [paquetes, setPaquetes] = useState([]);
  const [selectedPack, setSelectedPack] = useState("triple");
  const [fullConnectedData, setFullConnectedData] = useState([]);
  const [promos, setPromos] = useState([]);
  const promoValue = 0;
  const idSucursal = currentLocation?.idSucursal;
  const nombreSucursal = currentLocation?.sucursalName || ""; // <-- Asegura que tienes el nombre

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPaquetes = async () => {
      if (currentLocation) {
        try {
          const response = await fetch(
            `${serverAPILambda}api/${selectedPack}Pack/${currentLocation.idSucursal}`
          );
          const data = await response.json();
          setPaquetes(data);
        } catch (error) {
          console.error("Error fetching paquetes:", error);
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

  useEffect(() => {
    const ajustarAlturas = () => {
      const items = document.querySelectorAll(".swiper .paquete-item");
      let maxHeight = 0;

      // Reset heights
      items.forEach((item) => {
        item.style.height = "auto"; // Resetea la altura
      });

      // Get max height
      items.forEach((item) => {
        const height = item.offsetHeight;
        if (height > maxHeight) maxHeight = height;
      });

      // Apply max height
      items.forEach((item) => {
        item.style.height = `${maxHeight}px`; // Ajusta la altura de todos al máximo
      });
    };

    // Ejecutar al montar y cuando cambien los paquetes
    setTimeout(() => {
      ajustarAlturas();
    }, 100); // delay para asegurar que el DOM ya esté pintado

    // Opcional: ajustar al redimensionar la ventana
    window.addEventListener("resize", ajustarAlturas);
    return () => window.removeEventListener("resize", ajustarAlturas);
  }, [paquetes, selectedPack]);

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
          className={`pack-btn ${
            selectedPack === "triple" ? "pack-btn-active" : "pack-btn-inactive"
          } btn-lg mx-2`}
          onClick={() => setSelectedPack("triple")}
        >
          TRIPLE PACK
          <br />
          <span>INTERNET + TV + TELEFONÍA</span>
        </button>
        <button
          type="button"
          className={`pack-btn ${
            selectedPack === "doble" ? "pack-btn-active" : "pack-btn-inactive"
          } btn-lg mx-2`}
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

      {/* Carrusel con Swiper manteniendo las clases originales */}
      <div className="position-relative ">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".packs-prev",
            nextEl: ".packs-next",
          }}
          slidesPerView={1}
          centeredSlides={paquetes.length === 1} // Centrar solo si hay 1 item
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
          className="carousel slide "
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
                    className="icon-card-packs tv-icon  d-md-block"
                    src="/icons/tv-icon.png"
                    alt="Icono TV"
                  />
                )}
                <img
                  className={`icon-card-packs  d-md-block telefonia-icon ${
                    selectedPack === "doble" ? "telefonia-icon-doble" : ""
                  }`}
                  src="/icons/telefonia-icon.png"
                  alt="Icono Telefonía"
                />
              </div>

              <div className="d-flex justify-content-center container-packs-swiper h-100">
                <div
                  className={`paquete-item paquete-general-item card ${
                    selectedPack === "doble"
                      ? "paquete-item-doble"
                      : "paquete-item-triple"
                  }`}
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
    </div>
  );
};

export default PaquetesTarifarios;
