import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./SOPPago.css";
import "./Globales.css";

// Datos de los comercios
const comercios = [
  {
    id: 1,
    name: "Soriana",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio1.png",
    tipo: "conEstado",
  },

];

// Componente para mostrar las imágenes de los comercios
const ComerciosList = ({ tipo }) => {
  // Filtrar los comercios según el tipo
  const comerciosFiltrados = comercios.filter(
    (comercio) => comercio.tipo === tipo
  );

  return (
    <div className=" mt-4 d-flex comercio-logo-container justify-content-center align-items center">
      {comerciosFiltrados.map((comercio) => (
        <div key={comercio.id}>
          <img
            src={comercio.image}
            alt={comercio.name}
            className="img-fluid comercio-logo"
          />
        </div>
      ))}
    </div>
  );
};

// Definimos el contenido de cada opción
const options = {
  app: {
    label: "App",
    content: (
      <div className="container-fluid p-0 wave-bg-fdpago">
        <div className="container">
          <div className="row fdpago-app-container align-items-center justify-content-center">
            <div className="col-lg-3 text-center">
              <img
                src="../src/assets/images/soporte/formas-de-pago/app-megacable.png"
                alt="Megacable App"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="secondary-title mb-4">
                Descarga la<span> Megacable App!</span>
              </h2>
              <p>
                Regístrate y realiza tu pago sin hacer filas, directamente desde
                tu celular. Además recuerda que si domicilias tu pago a tarjeta
                de crédito o débito, obtienes 10 Mbps adicionales en el internet
                de tu casa.
              </p>
              <div className="btn-mega-apps mt-5 d-flex flex-md-row flex-column">
                <button
                  onClick={() =>
                    window.open(
                      "https://apps.apple.com/mx/app/megacable-app/id1466002118",
                      "_blank"
                    )
                  }
                  className="btn-packs"
                >
                  IOS
                </button>
                <button
                  onClick={() =>
                    window.open(
                      "https://play.google.com/store/apps/details?id=mx.com.megacable&hl=es_MX",
                      "_blank"
                    )
                  }
                  className="btn-packs"
                >
                  Google Play
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  comercios: {
    label: "Comercios",
    content: (
      <div className="container sop-general-container">
        <h2 className="text-center small-secondary-title mb-4">
          Para tu comodidad y para que ahorres tiempo, contamos con más de{" "}
          <span>10,000 opciones</span> donde puedes realizar tu{" "}
          <span>pago mensual</span> como:
        </h2>

        {/* Comercios con estado de cuenta */}
        <h3 className="text-center small-title mt-5">Con estado de cuenta</h3>
        <ComerciosList tipo="conEstado" />

        {/* Comercios sin estado de cuenta */}
        <h3 className="text-center small-title mt-5">Sin estado de cuenta</h3>
        <ComerciosList tipo="sinEstado" />
      </div>
    ),
  },
  cargoAutomatico: {
    label: "Cargo Automático",
    content: (
      <div className="container-fluid p-0 wave-bg-fdpago">
        <div className="container">
          <div className="row fdpago-ca-container align-items-center justify-content-center">
            <div className="col-md-7 col-lg-4 text-center">
              <img
                className="fdpago-ca-img"
                src="../src/assets/images/soporte/formas-de-pago/cargo-automatico.png"
                alt="Megacable App"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="secondary-title mb-4">
                <span>Cargo Automático</span> a tu Tarjeta de Crédito o Débito
              </h2>
              <p>
                Visita tu CIS más cercano o llama por teléfono, proporciona los
                datos de tu tarjeta y mensualmente se te procesará tu pago de
                forma automática y segura.
              </p>
              <div className="cc-cargo-autom mt-4 d-flex flex-md-row flex-column">
                <img
                  src="../src/assets/images/home/pagos-tarjetas-img.png"
                  alt="Paypal, Visa, Master Card"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  bancos: {
    label: "Bancos",
    content: (
      <>
        <div className="container-fluid bancos-fdp-container">
          <div className="container">
            <h3 className="text-center mb-5 secondary-title">
              Nuestros Convenios
            </h3>
            <div className="bancos-conv-container d-flex align-items-center justify-content-center">
              <div className="banco-conv">
                <img
                  src="../src/assets/images/soporte/formas-de-pago/bancos/santander-logo.png"
                  alt=""
                />
                <h5 className="conv-num">1332</h5>
              </div>
              <div className="banco-conv">
                <img
                  src="../src/assets/images/soporte/formas-de-pago/bancos/scotiabank-logo.png"
                  alt=""
                />
                <h5 className="conv-num">3356</h5>
              </div>
              <div className="banco-conv">
                <img
                  src="../src/assets/images/soporte/formas-de-pago/bancos/hsbc-logo.png"
                  alt=""
                />
                <h5 className="conv-num">3535</h5>
              </div>
              <div className="banco-conv">
                <img
                  src="../src/assets/images/soporte/formas-de-pago/bancos/bbva-logo.png"
                  alt=""
                />
                <h5 className="conv-num">801720</h5>
              </div>
              <div className="banco-conv">
                <img
                  src="../src/assets/images/soporte/formas-de-pago/bancos/citibanamex-logo.png"
                  alt=""
                />
                <h5 className="conv-num">
                  <br />
                </h5>
              </div>
            </div>

            <div className="row consulta-saldo-container justify-content-center align-items-center">
              <div className="col-lg-6 order-2 order-lg-1 text-md-center text-lg-start">
                <p className="saldo-title">Puede consultar su saldo en:</p>
                <p className="saldo-subtitle">Mega App | Servicios en Línea</p>
                <p className="saldo-title mt-5">Tambien puede llamarnos a:</p>
                <p className="saldo-subtitle">tel: 33 9690 2222 | cc: 33 9690 0000</p>

              </div>
              <div className="col-md-6 col-lg-3 order-1 order-lg-2  text-center mb-5 mb-lg-0">
                <img src="../src/assets/images/soporte/formas-de-pago/app-mega.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </>
    ),
  },
  pagoLinea: {
    label: "Pago en Línea",
    content: (
      <>
        <div className="container sop-general-container">
          <h2 className="text-center secondary-title">Paga en Línea tus servicios de Mega</h2>

          <div className="d-flex justify-content-center pagol-pasos-container">
            <div className="speed-pasos-crd">
              <span>1</span>
              <p>
                Haz click <a target="_blank" href="https://pagoenlinea.megacable.com.mx/">aquí</a> o en el botón "Pago en Línea" para ingresar a la plataforma de pagos.
              </p>
            </div>
            <div className="speed-pasos-crd">
              <span>2</span>
              <p>
                Ingresa tu número de contrato de 10 dígitos y completa el captcha de seguridad.
              </p>
            </div>
            <div className="speed-pasos-crd">
              <span>3</span>
              <p>
                Proporciona los datos de tu tarjeta de crédito o débito para realizar el pago.
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-5">
          <button
                  onClick={() =>
                    window.open(
                      "https://pagoenlinea.megacable.com.mx/",
                      "_blank"
                    )
                  }
                  className="btn-action"
                >
                  Pago en Línea <span className="open-page-icon"></span>
                </button>
          </div>
        </div>
      </>
    ),
  },
};

// Componente para los botones del switch
const SwitchButton = ({
  option,
  selectedOption,
  handleOptionChange,
  label,
}) => (
  <button
    type="button"
    className={`switch-general-btn switch-fdpago-btn ${selectedOption === option ? "pack-btn-active" : "pack-btn-inactive"
      } btn-lg mx-2`}
    onClick={() => handleOptionChange(option)}
  >
    {label}
  </button>
);

// Componente principal
const SOPPago = () => {
  const [selectedOption, setSelectedOption] = useState("app");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="general-tabs-container">
      <div className="text-center">
        <h3 className="small-title-services">CONOCE NUESTRAS</h3>
        <h2 className="big-title-services">Formas de pago</h2>
      </div>

      {/* Switch */}
      <div className="container d-flex flex-column flex-md-row justify-content-center align-items-center mt-5 btn-container-sop">
        {Object.entries(options).map(([option, { label }]) => (
          <SwitchButton
            key={option}
            option={option}
            selectedOption={selectedOption}
            handleOptionChange={handleOptionChange}
            label={label}
          />
        ))}
      </div>

      {/* Mostrar información dependiendo de la opción seleccionada */}
      <div className="mt-5">{options[selectedOption].content}</div>
    </div>
  );
};

export default SOPPago;
