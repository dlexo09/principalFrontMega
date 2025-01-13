import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FAQStrDisney.css';

const FAQStrDisney = () => {
  return (
    <>
    <div className="container faq-scontainer">
    <h3 className='small-title text-center txt-disney-color'>CONOCE NUESTRAS</h3>
      <h2 className="big-title text-center">Preguntas Frecuentes</h2>
      <div className="accordion faq-global-accordion disney-accordion" id="faqAccordion">
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
              ¿Qué incluye Disney+ Estándar?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
                <p>Disney+ Estándar te trae Disney, Pixar, Marvel, Star Wars, National Geographic, ESPN y Star.</p>
                <br />
                <ul>
                    <li>Acceso a los contenidos de los canales ESPN e ESPN3</li>
                    <li>Video alta definición (1080p)</li>
                    <li>Audio Stereo 5.1</li>
                    <li>2 reproducciones simultáneas</li>
                    <li>Con descarga de contenido</li>
                    <li>7 perfiles personalizables</li>
                    <li>Hasta 10 dispositivos</li>
                </ul>
                <br />
                <p>*Los eventos en directo y deportivos incluyen publicidad como parte de cada transmisión, independientemente de tu plan.</p>
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
              ¿Qué incluye Disney+ Premium?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
                <p>Disney+ Premium te trae todo Disney, Pixar, Marvel, Star Wars, National Geographic, ESPN y Star.</p>
                <br />
                <ul>
                    <li>Todos los canales de ESPN, torneos y eventos deportivos exclusivos.</li>
                    <li>Video UHD/HDR</li>
                    <li>Audio Atmos</li>
                    <li>4 reproducciones simultáneas</li>
                    <li>Con descarga de contenido</li>
                    <li>7 perfiles personalizables</li>
                    <li>Hasta 10 dispositivos</li>
                </ul>
                <br />
                <p>*Los eventos en directo y deportivos incluyen publicidad como parte de cada transmisión, independientemente de tu plan.</p>
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
              ¿Dónde puedo ver Disney+?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
             <p>La aplicación de Disney+ está disponible en tu dispositivo móvil, navegador web, consola de videojuegos, decodificador y Smart TV. Puedes ver la lista completa de dispositivos compatibles en el <a target='_blank' href="https://help.disneyplus.com/es-MX/article/disneyplus-devices-supported">Centro de ayuda Disney</a></p>
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
              ¿Cómo funcionan los controles parentales de Disney+?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
             <p>Disney+ cuenta con varios controles parentales que los suscriptores pueden configurar para garantizar que cada perfil tenga una experiencia apropiada de acuerdo con la clasificación de contenido. Además, se puede configurar un PIN de perfil de 4 dígitos para restringir el acceso de otras personas a un determinado perfil. Los perfiles “Modo Junior” ofrecen una interfaz fácil de navegar que solo incluye contenido apto para todas las edades.</p>
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
              ¿Qué pasará con Star+?
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
             <p>Desde el 26 de junio de 2024, el catálogo completo de Star+ pasará a Disney+. Los deportes de ESPN, las películas y series de Star+ y las historias de Disney+, todo en un solo lugar para aprovechar al máximo. Podrás usar Star+ hasta el 24 de julio de 2024; luego dejará de estar disponible pero recuerda que todo lo encontrarás en Disney+.</p>
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
             <p>Ten en cuenta que los perfiles, Mi lista y el historial de visualización de Star+ no estarán disponibles en la aplicación de Disney+.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="faq-legal text-center">
        <p>Ponemos a su disposición la actualización de nuestro aviso de privacidad <a className='txt-disney-color' target='_blank' href="https://www.megacable.com.mx/aviso-de-privacidad">Aquí</a></p>
    </div>

    </>
  );
};

export default FAQStrDisney;
