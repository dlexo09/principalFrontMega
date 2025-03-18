import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { serverAPILambda } from "../config";
import { LocationContext } from "../LocationContext";
import "./PaquetesTarifarios.css";

const PaquetesTarifariosNetflix = () => {
  const { currentLocation } = useContext(LocationContext);
  const [paquetes, setPaquetes] = useState([]);
  const [selectedPack, setSelectedPack] = useState("triple");
  const [chunkSize, setChunkSize] = useState(4);
  const [extraPromos, setExtraPromos] = useState([]);
  const [selectedPromo, setSelectedPromo] = useState({});
  const navigate = useNavigate();

  // Fetch paquetes
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

  // Fetch extra promos
  useEffect(() => {
    const fetchExtraPromos = async () => {
      try {
        const response = await fetch(`${serverAPILambda}api/extraPromoNetflix`);
        const data = await response.json();
        setExtraPromos(data);

        // Set default promo (cheapest)
        const initialSelectedPromo = {};
        paquetes.forEach((paquete, i) => {
          const uniqueId = `${paquete.id}-${i}`;
          const cheapestPromo = data.reduce(
            (prev, curr) =>
              prev.costoMensual < curr.costoMensual ? prev : curr,
            data[0]
          );
          initialSelectedPromo[uniqueId] = cheapestPromo;
        });
        setSelectedPromo(initialSelectedPromo);
      } catch (error) {
        console.error("Error fetching extra promos:", error);
      }
    };
    fetchExtraPromos();
  }, [paquetes]);

  // Update chunk size based on screen width
  useEffect(() => {
    const updateChunkSize = () => {
      if (window.innerWidth < 768) setChunkSize(1);
      else if (window.innerWidth < 1024) setChunkSize(2);
      else if (window.innerWidth < 1400) setChunkSize(3);
      else setChunkSize(4);
    };
    updateChunkSize();
    window.addEventListener("resize", updateChunkSize);
    return () => window.removeEventListener("resize", updateChunkSize);
  }, []);

  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  const chunkedPaquetes = chunkArray(paquetes, chunkSize);

  const handlePromoChange = (uniqueId, promo) => {
    setSelectedPromo((prevState) => ({
      ...prevState,
      [uniqueId]: promo,
    }));
  };

  const handleButtonClick = (idContrata) => {
    navigate(`/detallePaquete/${idContrata}`);
  };

  return (
    <div className="container paquetes-tarifarios text-center">
      <Header selectedPack={selectedPack} setSelectedPack={setSelectedPack} />
      <Carousel
        chunkedPaquetes={chunkedPaquetes}
        extraPromos={extraPromos}
        selectedPromo={selectedPromo}
        handlePromoChange={handlePromoChange}
        handleButtonClick={handleButtonClick}
      />
      <Footer selectedPack={selectedPack} />
    </div>
  );
};

// Header Component
const Header = ({ selectedPack, setSelectedPack }) => (
  <>
    <div className="d-flex justify-content-center mb-3 btn-container">
      <button
        type="button"
        className={`pack-btn ${
          selectedPack === "triple"
            ? "pack-btn-active netflix-btn-color"
            : "pack-btn-inactive"
        } btn-lg mx-2`}
        onClick={() => setSelectedPack("triple")}
      >
        TRIPLE PACK<br />
        <span>INTERNET + TV + TELEFONÍA</span>
      </button>
      <button
        type="button"
        className={`pack-btn ${
          selectedPack === "doble"
            ? "pack-btn-active netflix-btn-color"
            : "pack-btn-inactive"
        } btn-lg mx-2`}
        onClick={() => setSelectedPack("doble")}
      >
        DOBLE PACK<br />
        <span>INTERNET + TELEFONÍA</span>
      </button>
    </div>
    <div className="d-flex justify-content-center mb-3">
      <p>(Cliente nuevo)</p>
    </div>
  </>
);

// Carousel Component
const Carousel = ({
  chunkedPaquetes,
  extraPromos,
  selectedPromo,
  handlePromoChange,
  handleButtonClick,
}) => (
  <div id="carouselPaquetes" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      {chunkedPaquetes.map((chunk, index) => (
        <div
          key={index}
          className={`carousel-item ${index === 0 ? "active" : ""}`}
        >
          <div className="d-flex justify-content-center slider-gp">
            {chunk.map((paquete, i) => {
              const uniqueId = `${paquete.id}-${i}`;
              const selectedPromoCost =
                selectedPromo[uniqueId]?.costoMensual || 0;
              return (
                <Card
                  key={i}
                  paquete={paquete}
                  uniqueId={uniqueId}
                  extraPromos={extraPromos}
                  selectedPromo={selectedPromo}
                  selectedPromoCost={selectedPromoCost}
                  handlePromoChange={handlePromoChange}
                  handleButtonClick={handleButtonClick}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
    <CarouselControls />
  </div>
);

// Card Component
const Card = ({
  paquete,
  uniqueId,
  extraPromos,
  selectedPromo,
  selectedPromoCost,
  handlePromoChange,
  handleButtonClick,
}) => {
  const velocidad =
    paquete.velocidadPromo === 0 ? paquete.velocidadInternet : paquete.velocidadPromo;

  return (
    <div className="paquete-item paquete-item-netflix card m-2">
      <div className="card-body">
        <h2 className="card-title">
          {paquete.idTipoRed == 3 ? "INTERNET SIMÉTRICO" : "INTERNET ILIMITADO"}
        </h2>
        <p className="card-text velocidadPromo velocidadPromo-netflix">
          {velocidad} MEGAS
        </p>
        {paquete.tiempoVelocidaPromo > 0 && (
          <p className="card-text tiempoVelocidadPromo">
            x {paquete.tiempoVelocidaPromo} meses<sup>*</sup>
          </p>
        )}
        {velocidad >= 200 && (
          <p>
            <img
              src={`/img/extensor_wifi_ultra.png`}
              alt="IncluyeExtensor Wifi Ultra"
              style={{ height: "40px", marginTop: "20px" }}
            />
          </p>
        )}
        <div className="promoExtra">
          <div className="pack-str-container">
            <p className="card-servicio-txt servicio-m mb-2">SELECCIONA TU PLAN</p>
            <div className="pack-str-content d-flex flex-column justify-content-center">
              {extraPromos.map((promo) => (
                <button
                  key={promo.idStreaming}
                  className={`pack-btn-str ${
                    selectedPromo[uniqueId]?.idStreaming === promo.idStreaming
                      ? "netflix-btn-color"
                      : "pack-btn-inactive"
                  }`}
                  onClick={() => handlePromoChange(uniqueId, promo)}
                >
                  {promo.textButtonCard}
                </button>
              ))}
            </div>
          </div>
          <p className="card-text price-card">
            <span className="price-mxn">$</span>
            {paquete.tarifaPromocional + selectedPromoCost}
            <sup>*</sup>
            <span className="time-crd">/mes</span>
          </p>
        </div>
        <button
          className="btn btn-packs btn-pack-card"
          onClick={() => handleButtonClick(paquete.idContrata)}
        >
          ¡Lo quiero!
        </button>
      </div>
    </div>
  );
};

// Carousel Controls Component
const CarouselControls = () => (
  <>
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
  </>
);

// Footer Component
const Footer = ({ selectedPack }) => (
  <div className="container packs-terminos">
    {selectedPack !== "doble" && (
      <p className="promo-xview ">
        Incluyen{" "}
        <span className="txt-netflix-color">más de 30,000 hrs de contenido</span>{" "}
        en Xview+
      </p>
    )}
    <p>
      Nota: Promoción válida domiciliando el pago a tarjeta.{" "}
      <a className="txt-netflix-color" href="">
        Tarifas registradas ante el IFT.{" "}
      </a>
      Aplican restricciones. Consulta términos y condiciones{" "}
      <a
        className="txt-netflix-color"
        target="_blank"
        href="https://www.megacable.com.mx/terminos-y-condiciones"
      >
        aquí.
      </a>
    </p>
  </div>
);

export default PaquetesTarifariosNetflix;