import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FAQStrNetflix.css';

const FAQStrNetflix = () => {
  return (
    <>
    <div className="container faq-scontainer">
    <h3 className='small-title text-center txt-netflix-color'>CONOCE NUESTRAS</h3>
      <h2 className="big-title text-center">Preguntas Frecuentes</h2>
      <div className="accordion faq-global-accordion netflix-accordion" id="faqAccordion">
      <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              ¿Cómo asocio mi cuenta de Netflix a mi nuevo paquete de Mega?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
                <p>Posterior a su contratación recibirá un link que lo re-direccionará a una página de Netflix para asociar su cuenta actual o crear una nueva cuenta.</p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              ¿Si tengo una cuenta de Netflix puedo contratar y asociar el servicio a través de Mega?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
                <p>Usted podrá asociar y conservar su cuenta actual ingresando su usuario y contraseña de Netflix al momento de la activación del paquete Mega + Netflix.</p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              ¿Mi cuenta actual de Netflix se asocia automáticamente a mi nuevo paquete de Mega + Netflix?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
             <p>No, la vinculación del paquete de Mega con su cuenta actual de Netflix se realiza de forma manual mediante el proceso inicial de la activación del paquete Mega + Netflix.</p>
              <br />
              <p>Es responsabilidad total del cliente vincular su cuenta actual para evitar cargos duplicados con Netflix y con Mega.</p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              ¿Cómo cambio de paquete de Netflix?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
             <p>Podrá cambiar de paquete de Netflix en la página de internet de Netflix accediendo a su cuenta y dando click en “Cambiar plan” o puede cambiar de plan comunicándose al Call Center de Mega.</p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              ¿Qué pasa con mi cuenta de Netflix si cancelo o cambio de paquete de Mega?
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
             <p>Si usted cancela, suspende o cambia el servicio de Mega se podrán presentar dos situaciones:</p>
             <br />
             <ul>
              <li>La mensualidad pendiente con Netflix se cargará al segundo método de pago registrado en su perfil.</li>
              <li>En dado caso de no tener un segundo método de pago deberá agregar un nuevo método de pago para realizar el pago correspondiente para que pueda seguir disfrutando de Netflix.</li>
             </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSix">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              ¿Qué va a pasar con mis perfiles existentes e historial de visualizaciones de Star+? ¿Los van a migrar?
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
             <p>Deberá de comunicarse al Call Center de Netflix que lo asesorarán para vincular la cuenta correcta.</p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSeven">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
            >
              Tengo problemas para vincular mi cuenta actual de Netflix con el paquete de Mega
            </button>
          </h2>
          <div
            id="collapseSeven"
            className="accordion-collapse collapse"
            aria-labelledby="headingSeven"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
             <p>Si conoce el correo electrónico con la que está registrada su cuenta visite netflix.com/LoginHelp para re-establecer su contraseña.</p>
              <br />
              <p>Si usted está conectado a Netflix en otro dispositivo puede actualizar la información de su cuenta en “Configuraciones”. Si necesita soporte adicional podrá comunicarse a Servicio a Clientes de Netflix.</p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingEight">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEight"
              aria-expanded="false"
              aria-controls="collapseEight"
            >
             ¿Cómo recupero mi usuario y contraseña de Netflix si lo olvidé?
            </button>
          </h2>
          <div
            id="collapseEight"
            className="accordion-collapse collapse"
            aria-labelledby="headingEight"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
             <p>Verifique si está conectado al dispositivo que utilizó para vincular su cuenta, ya que podrá acceder a los detalles de su cuenta y consultar la información.</p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingNine">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseNine"
              aria-expanded="false"
              aria-controls="collapseNine"
            >
             ¿En dónde podré ver el contenido de Netflix?
            </button>
          </h2>
          <div
            id="collapseNine"
            className="accordion-collapse collapse"
            aria-labelledby="headingNine"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
             <p>Podrá ver todo el contenido de Netflix en muchos dispositivos conectados a internet, tales como: decodificadores Xview y Xview+, Smart TVs, computadoras, consolas de videojuegos, smartphones y Tablets. Para obtener la lista completa visite: devices.netflix.com.</p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTen">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTen"
              aria-expanded="false"
              aria-controls="collapseNine"
            >
             ¿En cuántas pantallas puedo ver Netflix simultáneamente?
            </button>
          </h2>
          <div
            id="collapseTen"
            className="accordion-collapse collapse"
            aria-labelledby="headingTen"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
             <p>El número de pantallas que puede ver simultáneamente dependerá del paquete de Mega + Netflix que tenga contratado:</p>
             <br />
             <ul>
              <li>El plan Básico podrá acceder en un dispositivo</li>
              <li>El plan Estándar podrá acceder en dos dispositivos</li>
              <li>El plan Estándar con anuncios podrá acceder en dos dispositivos</li>
              <li>El plan Premium podrá acceder en cuatro dispositivos</li>
             </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingEleven">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEleven"
              aria-expanded="false"
              aria-controls="collapseEleven"
            >
             ¿Cómo configuro mi cuenta de Netflix?
            </button>
          </h2>
          <div
            id="collapseEleven"
            className="accordion-collapse collapse"
            aria-labelledby="headingEleven"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
             <p>Usted puede administrar los detalles de su cuenta de Netflix en la siguiente liga netflix.com/Account, incluyendo:</p>
             <br />
             <ul>
              <li>Configuración del Control Parental</li>
              <li>Ajustar los Subtítulos</li>
              <li>Actualizar la información de inicio de sesión de Netflix</li>
              <li>Cambiar la configuración de idioma de Netflix</li>
              <li>Administrar perfiles de Netflix</li>
              <li>Administrar la configuración de reproducción</li>
             </ul>
             <br />
             <p>Para soporte o mayor información de las configuraciones de Netflix visite <a target='_blank' href="https://help.netflix.com/es">help.netflix.com</a></p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwelve">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwelve"
              aria-expanded="false"
              aria-controls="collapseNine"
            >
             ¿Cómo busco un título de programación en Netflix?
            </button>
          </h2>
          <div
            id="collapseTwelve"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwelve"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
             <p>Es importante tener en cuenta que el contenido disponible en Netflix varía de un lugar a otro ya que Netflix trabaja con terceros para transmitir su contenido en la plataforma. En dado caso de que algún contenido no esté disponible en Netflix se puede deber a que los derechos de transmisión pueden no estar disponibles para su compra o pueden ser retenidos exclusivamente por otra compañía.</p>
             <br />
             <p>Aunque no hay un calendario establecido para adquirir nuevo contenido, Netflix constantemente esta adicionando nuevos títulos para que sus miembros puedan disfrutarlo.</p>
            </div>
          </div>
        </div>

        <div className="mt-5 text-center">
        <p>Para soporte o mayor información de las configuraciones de Netflix visite <a className='txt-netflix-color' target='_blank' href="https://help.netflix.com/es">help.netflix.com</a></p>
    </div>
      </div>
    </div>

    <div className="faq-legal text-center">
        <p>Ponemos a su disposición la actualización de nuestro aviso de privacidad <a className='txt-netflix-color' target='_blank' href="https://www.megacable.com.mx/aviso-de-privacidad">Aquí</a></p>
    </div>

    </>
  );
};

export default FAQStrNetflix;
