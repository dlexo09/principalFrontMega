import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "./TIPortabilidad.css";

const TIPortabilidad = () => {
  const [selectedOption, setSelectedOption] = useState("fisica"); // Estado para manejar la selección

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <Helmet>
        <title>
          Portabilidad Megacable | Conserva tu Número y Disfruta de nuestra Telefonía
          Ilimitada
        </title>
        <meta
          name="description"
          content="Cambia a Megacable y conserva tu número fijo sin complicaciones. Disfruta de telefonía ilimitada con llamadas a celular, nacionales e internacionales. ¡Haz tu portabilidad hoy!"
        />
      </Helmet>

      <div className="general-tabs-container">
        <div className="text-center">
          <h1 className="small-title-services">Portabilidad</h1>
          <h2 className="big-title-services">CONOCE NUESTROS SERVICIOS</h2>
          <p className="mt-4 container txt-portabilidad">
            Sin importar de qué compañía vengas, conserva tu actual número
            telefónico al realizar tu cambio a Telefonía Fija Mega, obteniendo
            los mejores beneficios y promociones.
          </p>
        </div>

        {/* Switch para seleccionar entre Persona Física y Persona Moral */}
        <h3 className="text-center mt-5 text-uppercase">Requisitos</h3>
        <div className="d-flex justify-content-center align-items-center mt-4 btn-container">
          <button
            type="button"
            className={`switch-general-btn ${
              selectedOption === "fisica" ? "pack-btn-active" : "pack-btn-inactive"
            } btn-lg mx-2`}
            onClick={() => handleOptionChange("fisica")}
          >
            Persona Física
          </button>
          <button
            type="button"
            className={`switch-general-btn ${
              selectedOption === "moral" ? "pack-btn-active" : "pack-btn-inactive"
            } btn-lg mx-2`}
            onClick={() => handleOptionChange("moral")}
          >
            Persona Moral
          </button>
        </div>

        {/* Mostrar información dependiendo de la opción seleccionada */}
        <div className="mt-5">
          {selectedOption === "fisica" && (
            <div className="container ">
              <div className="text-center persona-select-container ps-2 pe-2 ps-md-none pe-md-none">
                <h3>Personas físicas</h3>
                <div className="requisitos-persona">
                  <p className="bg-blue-lth br-req-top">
                    <span>Solicitar tu NIP de Portabilidad</span>, marcando el{" "}
                    <span>051</span> desde su línea actual.
                  </p>
                  <p className="bg-gray-lth">
                    Llena el <span>formato de Solicitud de Portabilidad.</span>
                    <br />
                    <a
                      href="/files/servicios/telefonia-ilimitada/Formato_Portabilidad.pdf"
                      target="_blank"
                    >
                      Descarga aquí
                    </a>
                  </p>
                  <p className="bg-blue-lth">
                    <span>Copia de identificación oficial</span> (INE, Cartilla,
                    Pasaporte) o CURP.
                  </p>
                  <p className="bg-gray-lth br-req-bottom">
                    Envía todos estos documentos a:{" "}
                    <span>portabilidad@megacable.com.mx</span> o{" "}
                    <span>acude a un CIS Mega</span> a entregarla.
                  </p>
                </div>
              </div>
            </div>
          )}

          {selectedOption === "moral" && (
            <div className="container ">
              <div className="text-center persona-select-container ps-2 pe-2 ps-md-none pe-md-none">
                <h3>Personas morales</h3>
                <div className="requisitos-persona">
                  <p className="bg-blue-lth br-req-top">
                    Llena el formato de Solicitud de Portabilidad.
                    <br />
                    <a
                      href="/files/servicios/telefonia-ilimitada/Formato_Portabilidad.pdf"
                      target="_blank"
                    >
                      Descarga aquí
                    </a>
                  </p>
                  <p className="bg-gray-lth">
                    <span>Copia de identificación oficial</span> (INE, Cartilla,
                    Pasaporte).
                  </p>
                  <p className="bg-blue-lth">
                    <span>Copia de Escritura Pública</span> (Acta Constitutiva)
                    para validar Poder Otorgado.
                  </p>
                  <p className="bg-gray-lth">
                    <span>Nota:</span> Quien firma la solicitud tiene que ser la
                    misma persona que aparece en el Acta Constitutiva con
                    facultades Administrativas.
                  </p>
                  <p className="bg-blue-lth br-req-bottom">
                    Envía todos estos documentos a:{" "}
                    <span>portabilidad@megacable.com.mx</span> o{" "}
                    <span>acude a un CIS Mega</span> a entregarla.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="formato-descarga-btn d-flex justify-content-center text-center mt-5">
          <a
            href="/files/servicios/telefonia-ilimitada/Formato_Portabilidad.pdf"
            target="_blank"
            className="btn-action btn-action-requ"
          >
            Formato de portabilidad
          </a>
        </div>
      </div>
    </>
  );
};

export default TIPortabilidad;