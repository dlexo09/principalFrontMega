import React, { useState } from "react";
import PaquetesTarifariosAmazonPrime from "./PaquetesTarifariosAmazonPrime";
import "./PackStrAmazonPrime.css";

const PackStrAmazonPrime = () => {
  const [isCliente, setIsCliente] = useState(false); // Estado para "¿Eres cliente?"

  return (
    <>
    <div className="container paquetes-tarifarios text-center paquetes-tarifarios-strm">
      <Header isCliente={isCliente} setIsCliente={setIsCliente} />
      {isCliente ? (
        <ClienteBenefits />
      ) : (
        <>
          <PaquetesTarifariosAmazonPrime />
          <NonClienteMessage />
        </>
      )} 
    </div>
  </>  
  );
};

// Componente para el encabezado y botones de cliente
const Header = ({ isCliente, setIsCliente }) => (
  <div className="cliente-question mb-4">
    <h3 className="small-title txt-prime-color">EL MEJOR PLAN PARA TI</h3>
    <h3 className="big-title mb-5">¿Ya eres cliente Mega?</h3>
    <div className="btn-container">
      <button
        className={`pack-btn btn-lg mx-2 prime-cliente-btn ${
          isCliente ? "pack-btn-active prime-btn-color" : "pack-btn-inactive"
        }`}
        onClick={() => setIsCliente(true)}
      >
        Sí
      </button>
      <button
        className={`pack-btn btn-lg mx-2 prime-cliente-btn ${
          !isCliente ? "pack-btn-active prime-btn-color" : "pack-btn-inactive"
        }`}
        onClick={() => setIsCliente(false)}
      >
        No
      </button>
    </div>
  </div>
);

// Componente para los beneficios del cliente
const ClienteBenefits = () => (
  <>
    <div className="mt-4">
      <p className="cliente-info cliente-info-prime mt-5">
        <span>Agrega Amazon Prime a tu paquete </span>y recibe grandes
        beneficios como:
      </p>
    </div>

    <div className="container table-str-clients table-prime-clients">
      <div className="plans-contrata-prime d-flex justify-content-center">
        <div className="prime-icon-container">
          <img
            className="prime-icon"
            src="/icons/amazon/strm-icon.png"
            alt="Amazon Prime Icon"
          />
        </div>
        <div className="row d-flex plan-content-prime">
          <PrimeFeature
            imgSrc="/img/streamings/amazon/amazon-compras.png"
            title="Amazon Compras"
            description="Compra miles de artículos con envíos gratis y entregas más rápidas además de ofertas exclusivas."
          />
          <PrimeFeature
            imgSrc="/img/streamings/amazon/prime-video.png"
            title="Prime Video"
            description="Las mejores series, películas y contenido exclusivo; además descárgalos y disfrútalos cuando quieras."
          />
          <PrimeFeature
            imgSrc="/img/streamings/amazon/la-casa-de-chivas.png"
            title="La Casa de las Chivas"
            description="Disfruta de todos los partidos de local de las chivas."
          />
        </div>

        <div className="row d-flex plan-content-prime">
          <PrimeFeature
            imgSrc="/img/streamings/amazon/amazon-music.png"
            title="Amazon Music"
            description="Escucha más de dos millones de canciones y podcast sin interrupciones y descargas ilimitadas."
          />
          <PrimeFeature
            imgSrc="/img/streamings/amazon/prime-gamming.png"
            title="Prime Gaming"
            description="¡Juegos gratis cada mes! recompensas exclusivas y una suscripción a Twitch."
          />
          <PrimeFeature
            imgSrc="/img/streamings/amazon/rappi-pro.png"
            title="Rappi Pro"
            description="12 meses de envíos con descuentos exclusivos en restaurantes y supermercados."
          />
        </div>

        <div className="d-flex plan-content-prime align-items-center justify-content-center">
          <PrimeBenefit text="10 MB adicionales durante toda la permanencia con el servicio activo*" />
          <PrimeBenefit text="Realiza tus pagos con un solo proveedor" />
          <PrimeBenefit text="Tarifa preferencial en tu membresía" />
        </div>

        <a href="#" className="btn-packs prime-btn-color prime-btn-contrata">
          ¡Lo quiero!
        </a>
      </div>
    </div>

    <LegalDisclaimer />
  </>
);

// Componente para mostrar un mensaje cuando no es cliente
const NonClienteMessage = () => (
  <div className="mt-5">
    <p className="cliente-info">
      Para disfrutar de los beneficios de Amazon Prime, primero debes ser
      cliente Mega. ¡Contáctanos para más información!
    </p>
  </div>
);

// Componente para una característica de Amazon Prime
const PrimeFeature = ({ imgSrc, title, description }) => (
  <div className="col-md-4">
    <img src={imgSrc} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

// Componente para un beneficio adicional
const PrimeBenefit = ({ text }) => (
  <div className="beneficio-prime-mega">
    <p>{text}</p>
  </div>
);

// Componente para el aviso legal
const LegalDisclaimer = () => (
  <div className="pack-client-legal mt-5">
    <p className="pt-lg-5">
      *Aplican restricciones. Consulta términos y condiciones{" "}
      <a href="/aviso-de-privacidad">aquí</a>
    </p>
  </div>
);

export default PackStrAmazonPrime;