import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
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
  {
    id: 2,
    name: "Chedraui",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio2.png",
    tipo: "conEstado",
  },
  {
    id: 3,
    name: "BanCoppel",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio3.png",
    tipo: "conEstado",
  },
  {
    id: 4,
    name: "Merza",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio4.png",
    tipo: "conEstado",
  },
  {
    id: 5,
    name: "Lagunitas",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio5.png",
    tipo: "conEstado",
  },
  {
    id: 6,
    name: "Alsuper",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio6.png",
    tipo: "conEstado",
  },
  {
    id: 7,
    name: "Ley",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio7.png",
    tipo: "conEstado",
  },

  {
    id: 8,
    name: "Financiera Bienestar",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio8.png",
    tipo: "sinEstado",
  },
  {
    id: 9,
    name: "7-Eleven",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio9.png",
    tipo: "sinEstado",
  },
  {
    id: 10,
    name: "Farmacias benavides",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio10.png",
    tipo: "sinEstado",
  },
  {
    id: 11,
    name: "Walmart",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio11.png",
    tipo: "sinEstado",
  },
  {
    id: 12,
    name: "Bodega Aurrera",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio12.png",
    tipo: "sinEstado",
  },
  {
    id: 13,
    name: "Suburbia",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio13.png",
    tipo: "sinEstado",
  },
  {
    id: 14,
    name: "Six",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio14.png",
    tipo: "sinEstado",
  },
  {
    id: 15,
    name: "Fundación Dondé",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio15.png",
    tipo: "sinEstado",
  },
  {
    id: 16,
    name: "Kiosko",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio16.png",
    tipo: "sinEstado",
  },
  {
    id: 17,
    name: "Waldo's",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio17.png",
    tipo: "sinEstado",
  },
  {
    id: 18,
    name: "Sam's Club",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio18.png",
    tipo: "sinEstado",
  },
  {
    id: 19,
    name: "Fasti",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio19.png",
    tipo: "sinEstado",
  },
  {
    id: 20,
    name: "MTC",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio20.png",
    tipo: "sinEstado",
  },
  {
    id: 21,
    name: "Oxxo",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio21.png",
    tipo: "sinEstado",
  },
  {
    id: 22,
    name: "Apin by Oxxo",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio22.png",
    tipo: "sinEstado",
  },
  {
    id: 23,
    name: "Farmacia Zamora Super",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio23.png",
    tipo: "sinEstado",
  },
  {
    id: 24,
    name: "Yastás",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio24.png",
    tipo: "sinEstado",
  },
  {
    id: 25,
    name: "Quiubo",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio25.png",
    tipo: "sinEstado",
  },
  {
    id: 26,
    name: "Sys Tienda",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio26.png",
    tipo: "sinEstado",
  },
  {
    id: 27,
    name: "Yomp",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio27.png",
    tipo: "sinEstado",
  },
  {
    id: 28,
    name: "Yza Farmacias",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio28.png",
    tipo: "sinEstado",
  },
  {
    id: 29,
    name: "FarmaCon",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio29.png",
    tipo: "sinEstado",
  },
  {
    id: 30,
    name: "Farmacias moderna",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio30.png",
    tipo: "sinEstado",
  },
  {
    id: 31,
    name: "Generix Farmacia",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio31.png",
    tipo: "sinEstado",
  },
  {
    id: 32,
    name: "Cashi",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio32.png",
    tipo: "sinEstado",
  },
  {
    id: 33,
    name: "Farmacias del ahorro",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio33.png",
    tipo: "sinEstado",
  },
  {
    id: 34,
    name: "San Pablo Farmacia",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio34.png",
    tipo: "sinEstado",
  },
  {
    id: 35,
    name: "Smart",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio35.png",
    tipo: "sinEstado",
  },
  {
    id: 36,
    name: "Aramak",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio36.png",
    tipo: "sinEstado",
  },
  {
    id: 37,
    name: "Punto de venta",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio37.png",
    tipo: "sinEstado",
  },
  {
    id: 38,
    name: "Abarrotes Dunosusa",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio38.png",
    tipo: "sinEstado",
  },
  {
    id: 39,
    name: "San Borja San Isidro Farmacia",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio39.png",
    tipo: "sinEstado",
  },
  {
    id: 40,
    name: "Neto",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio40.png",
    tipo: "sinEstado",
  },
  {
    id: 41,
    name: "Tony super papelerias",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio41.png",
    tipo: "sinEstado",
  },
  {
    id: 42,
    name: "Ya",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio42.png",
    tipo: "sinEstado",
  },
  {
    id: 43,
    name: "Paga Todo",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio43.png",
    tipo: "sinEstado",
  },
  {
    id: 44,
    name: "suBodega",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio44.png",
    tipo: "sinEstado",
  },
  {
    id: 45,
    name: "Walmart Express",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio45.png",
    tipo: "sinEstado",
  },
  {
    id: 46,
    name: "Go Mart",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio46.png",
    tipo: "sinEstado",
  },
  {
    id: 47,
    name: "Bankaool",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio47.png",
    tipo: "sinEstado",
  },
  {
    id: 48,
    name: "Pago Rápido",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio48.png",
    tipo: "sinEstado",
  },

  {
    id: 49,
    name: "Paynom",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio50.png",
    tipo: "sinEstado",
  },
  {
    id: 50,
    name: "Mavi",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio51.png",
    tipo: "sinEstado",
  },
  {
    id: 51,
    name: "Asturiano",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio52.png",
    tipo: "sinEstado",
  },
  {
    id: 52,
    name: "NetPay",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio53.png",
    tipo: "sinEstado",
  },
  {
    id: 53,
    name: "Circle",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio54.png",
    tipo: "sinEstado",
  },
  {
    id: 54,
    name: "Farmacias San Francisco de Asis",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio55.png",
    tipo: "sinEstado",
  },
  {
    id: 55,
    name: "Extra",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio56.png",
    tipo: "sinEstado",
  },
  {
    id: 56,
    name: "Union",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio57.png",
    tipo: "sinEstado",
  },
  {
    id: 57,
    name: "Farmatodo",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio58.png",
    tipo: "sinEstado",
  },
  {
    id: 58,
    name: "Ualá",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio59.png",
    tipo: "sinEstado",
  },
  {
    id: 59,
    name: "Plata",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio60.png",
    tipo: "sinEstado",
  },
  {
    id: 60,
    name: "Odessa",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio61.png",
    tipo: "sinEstado",
  },
  {
    id: 61,
    name: "Liverpool",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio63.png",
    tipo: "sinEstado",
  },
  {
    id: 62,
    name: "Mercado Pago",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio64.png",
    tipo: "sinEstado",
  },
  {
    id: 63,
    name: "Tiendas bbb",
    image:
      "../src/assets/images/soporte/formas-de-pago/comercios/comercio65.png",
    tipo: "sinEstado",
  },
];

// Componente para mostrar las imágenes de los comercios
const ComerciosList = ({ tipo }) => {
  // Filtrar los comercios según el tipo
  const comerciosFiltrados = comercios.filter(
    (comercio) => comercio.tipo === tipo
  );

  return (
    <>
      <div className="mt-4 d-flex comercio-logo-container justify-content-center align-items-center">
        {comerciosFiltrados.map((comercio) => (
          <div key={comercio.id}>
            <img
              src={comercio.image}
              alt={`${comercio.name}`} // Usar el name dinámicamente como alt
              className="img-fluid comercio-logo"
            />
          </div>
        ))}
      </div>
    </>
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
            <div className="col-lg-3 text-center d-none d-lg-block">
              <img
                src="../src/assets/images/soporte/formas-de-pago/app-megacable.png"
                alt="Megacable App"
              />
            </div>
            <div className="col-lg-6 ps-3 pe-3 ps-md-0 pe-md-0">
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
            <div className="col-md-7 col-lg-4 text-center d-none d-lg-block">
              <img
                className="fdpago-ca-img"
                src="../src/assets/images/soporte/formas-de-pago/cargo-automatico.png"
                alt="Cargo automático a tu tarjeta de crédito o débito"
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
                  alt="Santander 1332"
                />
                <h5 className="conv-num">1332</h5>
              </div>
              <div className="banco-conv">
                <img
                  src="../src/assets/images/soporte/formas-de-pago/bancos/scotiabank-logo.png"
                  alt="Scotiabank 3356"
                />
                <h5 className="conv-num">3356</h5>
              </div>
              <div className="banco-conv">
                <img
                  src="../src/assets/images/soporte/formas-de-pago/bancos/hsbc-logo.png"
                  alt="HSBC 3535"
                />
                <h5 className="conv-num">3535</h5>
              </div>
              <div className="banco-conv">
                <img
                  src="../src/assets/images/soporte/formas-de-pago/bancos/bbva-logo.png"
                  alt="BBVA 801720"
                />
                <h5 className="conv-num">801720</h5>
              </div>
              <div className="banco-conv">
                <img
                  src="../src/assets/images/soporte/formas-de-pago/bancos/citibanamex-logo.png"
                  alt="Citibanamex"
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
                <p className="saldo-subtitle">
                  tel: 33 9690 2222 | cc: 33 9690 0000
                </p>
              </div>
              <div className="col-md-6 col-lg-3 order-1 order-lg-2  text-center mb-5 mb-lg-0 d-none d-lg-block">
                <img
                  src="../src/assets/images/soporte/formas-de-pago/app-mega.png"
                  alt="Mega App"
                />
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
          <h2 className="text-center secondary-title">
            Paga en Línea tus servicios de Mega
          </h2>

          <div className="d-flex justify-content-center pagol-pasos-container">
            <div className="speed-pasos-crd">
              <span>1</span>
              <p>
                Haz click{" "}
                <a target="_blank" href="https://pagoenlinea.megacable.com.mx/">
                  aquí
                </a>{" "}
                o en el botón "Pago en Línea" para ingresar a la plataforma de
                pagos.
              </p>
            </div>
            <div className="speed-pasos-crd">
              <span>2</span>
              <p>
                Ingresa tu número de contrato de 10 dígitos y completa el
                captcha de seguridad.
              </p>
            </div>
            <div className="speed-pasos-crd">
              <span>3</span>
              <p>
                Proporciona los datos de tu tarjeta de crédito o débito para
                realizar el pago.
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <button
              onClick={() =>
                window.open("https://pagoenlinea.megacable.com.mx/", "_blank")
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
    className={`switch-general-btn switch-fdpago-btn ${
      selectedOption === option ? "pack-btn-active" : "pack-btn-inactive"
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
    <>
          <Helmet>
        <title>
        Formas de Pago | Megacable | Opciones Disponibles para Pagar Tu Servicio
        </title>
        <meta
          name="description"
          content="Descubre las diversas formas de pago que Megacable ofrece: desde la app, en comercios, mediante cargo automático, en bancos y pago en línea. Facilita tus pagos y mantén tus servicios siempre activos."
        />
      </Helmet>
    
    <div className="general-tabs-container">
      <div className="text-center">
        <h1 className="small-title-services">Formas de Pago</h1>
        <h2 className="big-title-services title-wu">¿Cómo pagar tu servicio? Conoce todas las opciones</h2>
      </div>

      {/* Switch */}
      <div className="ps-3 pe-3 ps-md-0 pe-md-0">
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
      </div>

      {/* Mostrar información dependiendo de la opción seleccionada */}
      <div className="mt-5">{options[selectedOption].content}</div>
    </div>
    </>
  );
};

export default SOPPago;
