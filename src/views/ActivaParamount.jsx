import React, { useState } from "react";
import ActivarCuenta from "./ActivarCuenta";

const ActivaParamount = () => {
  const [isActive, setIsActive] = useState(true);

  const handleButtonClick = () => {
    setIsActive(!isActive);
  };

  return (
    <ActivarCuenta title="PARAMOUNT+">
      <div className="container pt-5">
        <div className="text-center">
          <h2 className="small-title-services">Activa Tu Cuenta Paramount+</h2>
          <h3 className="big-title-services big-title-container-sm">
            Si tienes xview o xview+ por Mega Tienes Paramount + Incluido en tu
            paquete
          </h3>
        </div>

        {/* Botón con icono giratorio */}
        <div className="text-center mt-5">
          <button
            onClick={handleButtonClick}
            className={`recommendations-button pasos-atc-button ${
              isActive ? "active" : ""
            }`}
          >
            Sigue estos pasos para activar tu cuenta
            <span
              className={`transition-icon ${isActive ? "rotate" : ""}`}
            ></span>
          </button>
        </div>

        {/* Contenido que se despliega/oculta */}
        <div
          className={`contenido-despegable-velocidad ${
            isActive ? "visible" : "hidden"
          }`}
        >
          <div className="mt-5 pda-info-card pt-5">
            <div className="pda-info-content">
              <span>1</span>
              <p>
                Ingresa a{" "}
                <a
                  href="https://www.paramountplus.com/mx/partner/"
                  target="_blank"
                >
                  https://www.paramountplus.com/mx/partner/
                </a>
              </p>
            </div>
            <div className="pda-info-content">
              <span>2</span>
              <p>Selecciona “Inicia sesión con tu proveedor”.</p>
            </div>
            <div className="pda-info-content">
              <span>3</span>
              <p>Elige a Mega como tu proveedor.</p>
            </div>
            <div className="pda-info-content">
              <span>4</span>
              <p>
                Coloca tu usuario y contraseña de Servicios en Línea de Mega.
              </p>
            </div>
            <div className="pda-info-content">
              <span>5</span>
              <p>
                A partir de ese momento ya podrás acceder a todo el contenido de
                Paramount+
              </p>
            </div>

            <p>Si necesitas ayuda personalizada comunícate con nosotros al número <b>33 9690 0000</b> o envíanos un Whatsapp al <a href="https://api.whatsapp.com/send?phone=523396900001" target="_blank">33 9690 0001</a></p>
          </div>
        </div>
      </div>

      <div className="container activar-cuenta_tutorial-sinform">
        <div className="text-center">
          <h3 className="small-title-services">Tutorial</h3>
          <h2 className="big-title-services ">
            Activa tu cuenta de Paramount+ con Mega
          </h2>
        </div>

        <div className="activar-cuenta_tutorial">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/RU4eRrrJepw?si=Qa7NdOftTnsFCofm"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </ActivarCuenta>
  );
};

export default ActivaParamount;
