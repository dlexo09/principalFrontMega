import React, { useState } from "react";
import ActivarCuenta from "./ActivarCuenta";
import "./ActivaMax.css";

const ActivaMax = () => {
  const [isActive, setIsActive] = useState(true);

  const handleButtonClick = () => {
    setIsActive(!isActive);
  };

  return (
    <ActivarCuenta title="MAX">
      <div className="container pt-5">
        <Header />
        <ActivationSteps isActive={isActive} handleButtonClick={handleButtonClick} />
      </div>

      <TutorialSection />
    </ActivarCuenta>
  );
};

// Componente para el encabezado
const Header = () => (
  <div className="text-center">
    <h2 className="small-title-services">Activa Tu Cuenta Max</h2>
    <h3 className="big-title-services big-title-container-sm">
      Si tienes Xview o Xview+ por Mega, tienes Max incluido en tu paquete
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
          <Step key={index} number={index + 1} text={step.text} link={step.link} />
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
const Step = ({ number, text, link }) => (
  <div className="pda-info-content">
    <span>{number}</span>
    <p>
      {text}{" "}
      {link && (
        <a href={link.href} target="_blank" rel="noopener noreferrer">
          {link.text}
        </a>
      )}
    </p>
  </div>
);

// Datos de los pasos
const stepsData = [
  {
    text: "Da click",
    link: {
      href: "https://auth.max.com/login?_referrer=eyJlbGVtZW50IjoiQnV0dG9uIiwic2NyZWVuTmFtZSI6IlZlciBwZWzDrWN1bGFzIHkgc2VyaWVzIG9ubGluZSB8ICBNYXggIiwic2NyZWVuVVJJIjoiaHR0cHM6Ly93d3cubWF4LmNvbS9teC9lcyIsImxvY2F0aW9uIjoiSG9tZXBhZ2UvVmVyIHBlbMOtY3VsYXMgeSBzZXJpZXMgb25saW5lIHwgIE1heCB8YmFuZHwyMDY5MjUiLCJsb2NhdGlvblBvc2l0aW9uIjowLCJ0YXJnZXRUZXh0IjoiSW5ncmVzYSJ9",
      text: "aquí",
    },
  },
  {
    text: "En la opción Conecta al Proveedor, selecciona MEGA.",
  },
  {
    text: "Coloca tu cuenta de MEGA e INICIA SESIÓN. Si aún no tienes cuenta, regístrate en:",
    link: {
      href: "https://auth.megacable.com.mx/realms/mega/protocol/openid-connect/auth?client_id=sel&redirect_uri=https%3A%2F%2Fsel.megacable.com.mx%2F&state=1430546c-3b3c-4da6-88fe-a2ed494665bc&response_mode=fragment&response_type=code&scope=openid&nonce=d2d2f281-5e24-4c1f-838f-433a56a2dbbb",
      text: "Mi Cuenta MEGA",
    },
  },
  {
    text: "Crea una cuenta MAX. ¡Listo! Ahora podrás llevar el contenido de MAX a todos lados.",
  },
];

// Componente para la sección del tutorial
const TutorialSection = () => (
  <div className="container activar-cuenta_tutorial-sinform">
    <div className="text-center">
      <h3 className="small-title-services">Tutorial</h3>
      <h2 className="big-title-services">Activa tu cuenta de MAX con Mega</h2>
    </div>

    <div className="activar-cuenta_tutorial">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/0NTRQ9e8ceQ?si=Ab6acFYern_Mld0L"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  </div>
);

export default ActivaMax;