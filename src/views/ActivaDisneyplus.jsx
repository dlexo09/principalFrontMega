import React, { useState } from 'react';
import ActivarCuenta from './ActivarCuenta';



const ActivaDisneyplus = () => {
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive(!isActive);
  };

  return (
    <ActivarCuenta title="DISNEY+">
      <div className="container pt-5">
        <div className="text-center">
          <h2 className="small-title-services">Activa Tu Cuenta Disney+</h2>
          <h3 className="big-title-services big-title-container-sm">
            Ingresa tus datos de servicios en línea para activar tu cuenta de Disney+
          </h3>
        </div>

        {/* Botón con icono giratorio */}
        <div className="text-center mt-5">
          <button
            onClick={handleButtonClick}
            className={`recommendations-button pasos-atc-button ${isActive ? "active" : ""}`}
          >
            Sigue estos pasos para activar tu cuenta
            <span
              className={`transition-icon ${isActive ? "rotate" : ""}`}
            ></span>
          </button>
        </div>

        {/* Contenido que se despliega/oculta */}
        <div
          className={`contenido-despegable-velocidad ${isActive ? "visible" : "hidden"
            }`}
        >
          <div className="mt-5 pda-info-card pt-5">
            <div className="pda-info-content">
              <span>1</span>
              <p>
              Suscríbete a Disney+ agregándolo a tu paquete de Megacable.
              </p>
            </div>
            <div className="pda-info-content">
              <span>2</span>
              <p>
              Ingresa a la página de activación y coloca tu cuenta de Mega. Si no conoces tus datos, comunícate con nosotros al 33 9690 0000.
              </p>
            </div>
            <div className="pda-info-content">
              <span>3</span>
              <p>
              Después de colocar tu usuario y contraseña, selecciona “Enviar” y serás re-direccionado a una página de Disney+.
              </p>
            </div>
            <div className="pda-info-content">
              <span>4</span>
              <p>
              Dentro de la página de Disney+ Necesitas una cuenta (usuario y contraseña) para usar la App. Si ya tienes una, coloca tu cuenta actual, de lo contrario, llena la información solicitada y crea una nueva.
              </p>
            </div>
            <div className="pda-info-content">
              <span>5</span>
              <p>
              Descarga la app en tus dispositivos móviles y disfruta del mejor contenido. Y si tienes Xview+ también podrás ver el contenido a través de tu convertidor.
              </p>
            </div>
            <p>Si necesitas ayuda personalizada comunícate con nosotros al número <b>33 9690 0000</b> o envíanos un Whatsapp al <a href="https://api.whatsapp.com/send?phone=523396900001" target="_blank">33 9690 0001</a></p>

          </div>
        </div>
      </div>


      <div className="activar-cuenta-container">
        <div className="container">
          <div className="text-center activar-cuenta-logo">
            <img src="../src/assets/images/streamings/disneyplus/mega-disney-logo.png" alt="" />
            <p className='mt-4'>Tu usuario y contraseña lo encontrarás en el SMS o mail que recibiste</p>

          </div>
          <div className="activar-cuenta_form mt-5">
            <form action="">
              <div className="activar-cuenta_input">
                <img src="../src/assets/images/general/user-icon.png" alt="" />
                <input type="text" placeholder="Correo Electrónico / Celular" />
              </div>
              <div className="activar-cuenta_input">
                <img src="../src/assets/images/general/pass-icon.png" alt="" />
                <input type="password" placeholder="Contraseña" />
              </div>

              <input className='btn-action' type="submit" value="Activar" />
            </form>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="text-center">
          <h3 className="small-title-services">Tutorial</h3>
          <h2 className="big-title-services ">Activa tu cuenta de Disney+ con Mega</h2>
        </div>
        
        <div className="activar-cuenta_tutorial">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/BuoG66Us7Tg?si=tHkwrzxtDHdAy1tF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

      </div>
    </ActivarCuenta>
  );
};

export default ActivaDisneyplus;