import React, { useState } from "react";
import ActivarCuenta from "./ActivarCuenta";
import "./ActivaDisneyplus.css";

const ActivaDisneyplus = () => {
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive(!isActive);
  };

  return (
    <ActivarCuenta title="DISNEY+">
      <div className="container pt-5">
        <Header />
        <ActivationSteps isActive={isActive} handleButtonClick={handleButtonClick} />
      </div>

      <AccountActivationForm />

      <TutorialSection />
    </ActivarCuenta>
  );
};

// Componente para el encabezado
const Header = () => (
  <div className="text-center">
    <h2 className="small-title-services">Activa Tu Cuenta Disney+</h2>
    <h3 className="big-title-services big-title-container-sm">
      Ingresa tus datos de servicios en línea para activar tu cuenta de Disney+
    </h3>
  </div>
);

// Componente para los pasos de activación
const ActivationSteps = ({ isActive, handleButtonClick }) => (
  <>
    <div className="text-center mt-5">
      <button
        onClick={handleButtonClick}
        className={`recommendations-button pasos-atc-button ${isActive ? "active" : ""}`}
      >
        Sigue estos pasos para activar tu cuenta
        <span className={`transition-icon ${isActive ? "rotate" : ""}`}></span>
      </button>
    </div>

    {isActive && (
      <div className="contenido-despegable-velocidad visible mt-5 pda-info-card pt-5">
        {stepsData.map((step, index) => (
          <Step key={index} number={index + 1} text={step} />
        ))}
        <p>
          Si necesitas ayuda personalizada comunícate con nosotros al número{" "}
          <b>33 9690 0000</b> o envíanos un Whatsapp al{" "}
          <a href="https://api.whatsapp.com/send?phone=523396900001" target="_blank" rel="noopener noreferrer">
            33 9690 0001
          </a>
        </p>
      </div>
    )}
  </>
);

// Componente para un paso individual
const Step = ({ number, text }) => (
  <div className="pda-info-content">
    <span>{number}</span>
    <p>{text}</p>
  </div>
);

// Datos de los pasos
const stepsData = [
  "Suscríbete a Disney+ agregándolo a tu paquete de Megacable.",
  "Ingresa a la página de activación y coloca tu cuenta de Mega. Si no conoces tus datos, comunícate con nosotros al 33 9690 0000.",
  "Después de colocar tu usuario y contraseña, selecciona “Enviar” y serás re-direccionado a una página de Disney+.",
  "Dentro de la página de Disney+ necesitas una cuenta (usuario y contraseña) para usar la App. Si ya tienes una, coloca tu cuenta actual, de lo contrario, llena la información solicitada y crea una nueva.",
  "Descarga la app en tus dispositivos móviles y disfruta del mejor contenido. Y si tienes Xview+ también podrás ver el contenido a través de tu convertidor.",
];

// Componente para el formulario de activación de cuenta
const AccountActivationForm = () => (
  <div className="activar-cuenta-container">
    <div className="container">
      <div className="text-center activar-cuenta-logo">
        <img src="/img/streamings/disneyplus/mega-disney-logo.png" alt="Disney+ Logo" />
        <p className="mt-4">
          Tu usuario y contraseña lo encontrarás en el SMS o mail que recibiste
        </p>
      </div>
      <div className="activar-cuenta_form mt-5">
        <form>
          <InputField
            imgSrc="/img/general/user-icon.png"
            type="text"
            placeholder="Correo Electrónico / Celular"
          />
          <InputField
            imgSrc="/img/general/pass-icon.png"
            type="password"
            placeholder="Contraseña"
          />
          <input className="btn-action" type="submit" value="Activar" />
        </form>
      </div>
    </div>
  </div>
);

// Componente para un campo de entrada
const InputField = ({ imgSrc, type, placeholder }) => (
  <div className="activar-cuenta_input">
    <img src={imgSrc} alt="Input Icon" />
    <input type={type} placeholder={placeholder} />
  </div>
);

// Componente para la sección del tutorial
const TutorialSection = () => (
  <div className="container mt-5">
    <div className="text-center">
      <h3 className="small-title-services">Tutorial</h3>
      <h2 className="big-title-services">Activa tu cuenta de Disney+ con Mega</h2>
    </div>
    <div className="activar-cuenta_tutorial">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/BuoG66Us7Tg?si=tHkwrzxtDHdAy1tF"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  </div>
);

export default ActivaDisneyplus;