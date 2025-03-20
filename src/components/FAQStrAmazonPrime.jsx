import React from "react";
import "./FAQStrAmazonPrime.css";

const FAQStrAmazonPrime = () => {
  return (
    <>
      <div className="container faq-scontainer">
        <h3 className="small-title text-center txt-prime-color">
          CONOCE NUESTRAS
        </h3>
        <h2 className="big-title text-center">Preguntas Frecuentes</h2>
        <div
          className="accordion faq-global-accordion prime-accordion"
          id="faqAccordion"
        >
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
                1. ¿Qué es Amazon Prime?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                <p>
                  La suscripción a Amazon Prime ofrece lo mejor de las compras y
                  el entretenimiento. Los miembros de Prime disfrutan de
                  entregas rápidas y gratuitas de millones de artículos.
                </p>
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
                2. ¿Cuáles son las ventajas de ser miembro de Amazon Prime?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                <p>
                  Los miembros de Amazon Prime pueden disfrutar de las
                  siguientes ventajas:
                </p>
                <br />
                <ul>
                  <li>
                    <b>Compras y entregas: </b>Acceso anticipado a las ofertas
                    flash y opciones de entrega rápida, gratuita y flexible que
                    se adaptan a su vida.
                  </li>
                  <li>
                    <b>Amazon Prime Video: </b>Vea y descargue miles de
                    películas y series de televisión, incluidos contenidos
                    originales de Amazon premiados, sin anuncios, hasta en tres
                    dispositivos al mismo tiempo.
                  </li>
                  <li>
                    <b>Amazon Music: </b>Acceso a más de 2 millones de canciones
                    seleccionadas a mano incluido con Prime. Podrá escucharlas
                    sin anuncios, con cambios de canción ilimitados y sin
                    conexión.
                  </li>
                  <li>
                    <b>Prime Gaming: </b>Acceso a juegos, suscripciones a
                    canales y contenido exclusivo gratis en la plataforma líder
                    mundial de transmisión en directo por Internet para
                    jugadores.
                  </li>
                </ul>
                <br />
                <p>
                  Puede informarse sobre estas y otras ventajas en{" "}
                  <a
                    target="_blank"
                    href="https://www.amazon.com.mx/amazonprime"
                  >
                    https://www.amazon.com.mx/amazonprime
                  </a>
                </p>
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
                3. Si ya estoy dado de alta en una aplicación de música ¿por qué
                necesitaría Amazon Music?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                <p>
                  Mientras que muchas suscripciones a servicios de transmisión
                  por Internet solo ofrecen escuchar sin anuncios en las
                  categorías Premium, Amazon Music, incluido con Prime, ofrece
                  eso mismo, junto con cambios de canciones ilimitados, para
                  todo el mundo. Además, si tiene un dispositivo de Amazon con
                  Alexa, tendrá una mejor experiencia de escucha sin utilizar
                  las manos esté donde esté. Y no olvide que Amazon Music está
                  incluido en su suscripción de Prime sin costo adicional.
                </p>
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
                4. Si ya estoy dado de alta en un servicio video, ¿por qué
                necesitaría Prime Video?
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                <p>
                  Amazon Prime Video le permite acceder a una variedad de series
                  de televisión y películas que no están disponibles en otros
                  servicios de transmisión, incluidas series y películas
                  originales de Amazon premiadas y a miles de series de
                  televisión y películas más, funciones exclusivas como X-Ray, y
                  la posibilidad de ver contenidos hasta en 3 dispositivos
                  simultáneamente o descargarlos para verlos sin conexión en
                  dispositivos compatibles.
                </p>
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
                5. ¿Cómo activo los subtítulos en los títulos compatibles de
                Amazon Prime Video?
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                <p>
                  Cuando un título que incluye subtítulos se esté reproduciendo,
                  seleccione el icono o , escoja el idioma de subtítulos que
                  desee utilizar y, si hay subtítulos disponibles, se indicará
                  mediante el ícono.
                </p>
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
                6. ¿Cómo cambio el idioma de audio en los títulos compatibles de
                Amazon Prime Video?
              </button>
            </h2>
            <div
              id="collapseSix"
              className="accordion-collapse collapse"
              aria-labelledby="headingSix"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                <p>
                  Cuando esté reproduciendo un título, seleccione el icono . A
                  continuación, seleccione la pista de audio que desea escuchar.
                  Las pistas de audio descriptivo llevan el texto [Audio
                  descriptivo] en su nombre. Nota: no todos los títulos de Prime
                  Video incluyen pistas alternativas o audio descriptivo, ni
                  todos los dispositivos son compatibles con pistas de audio
                  alternativas.
                </p>
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
                7. ¿Puedo acceder a todo el contenido de vídeo que ofrece Prime
                Video con mi suscripción a Amazon Prime?
              </button>
            </h2>
            <div
              id="collapseSeven"
              className="accordion-collapse collapse"
              aria-labelledby="headingSeven"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                <p>
                  Con su suscripción a Amazon Prime, puede acceder a todo el
                  contenido original de Amazon, así como a miles de series de
                  televisión y películas de gran popularidad. Además, puede
                  acceder a Twitch Prime.
                </p>
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
                8. ¿Qué es Prime Gaming?
              </button>
            </h2>
            <div
              id="collapseEight"
              className="accordion-collapse collapse"
              aria-labelledby="headingEight"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                <p>
                  Prime Gaming es el hogar que Amazon Prime ofrece a los
                  jugadores. Conecte sus cuentas de Twitch y Amazon Prime para
                  disfrutar de las ventajas de Prime Gaming, como juegos gratis
                  todos los meses, recompensas en algunos de los juegos más
                  populares, una suscripción a un canal de Twitch cada mes sin
                  costo adicional, y emotes e insignias de chat exclusivas en
                  Twitch. Visite www.twitchprime.com.
                </p>
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
                9. ¿Cómo me doy de alta en Prime Gaming?
              </button>
            </h2>
            <div
              id="collapseNine"
              className="accordion-collapse collapse"
              aria-labelledby="headingNine"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                <p>
                  Para aprovechar las ventajas de Prime Gaming, tiene que
                  vincular su cuenta de Amazon con una cuenta de Twitch. Entre
                  en www.twitchprime.com y haga clic en el botón "Probar Prime"
                  para ver instrucciones adicionales.
                </p>
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
                aria-controls="collapseTen"
              >
                10. ¿Cómo conecto mis cuentas de Twitch y de Amazon Prime/Amazon
                Prime Video?
              </button>
            </h2>
            <div
              id="collapseTen"
              className="accordion-collapse collapse"
              aria-labelledby="headingTen"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                <p>
                  Las instrucciones para vincular su cuenta de Twitch variarán
                  en función de su ubicación geográfica y el estado de su
                  suscripción. Consulte las instrucciones en este enlace:{" "}
                  <a
                    target="_blank"
                    href="https://help.twitch.tv/s/article/twitch-prime-guide?language=es_ES"
                  >
                    https://help.twitch.tv/s/article/twitch-prime-guide?language=es_ES
                  </a>
                </p>
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
                11. ¿Qué aplicaciones móviles debo descargar para disfrutar de
                las ventajas de Amazon Prime?
              </button>
            </h2>
            <div
              id="collapseEleven"
              className="accordion-collapse collapse"
              aria-labelledby="headingEleven"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                <p>
                  Puede descargar las siguientes aplicaciones móviles desde App
                  Store o Play Store:
                </p>
                <br />
                <ul>
                  <li>Amazon</li>
                  <li>Amazon Prime Video</li>
                  <li>Amazon Music</li>
                  <li>Twitch</li>
                </ul>
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
                aria-controls="collapseTwelve"
              >
                12. ¿Cómo puedo contratar Amazon Prime en de Megacable?
              </button>
            </h2>
            <div
              id="collapseTwelve"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwelve"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                <p>
                  Contratando un plan bundle de Megacable + Amazon Prime. Al
                  activar su nuevo plan, Megacable le enviará un mensaje de
                  texto y/o mail con un enlace para que cree una cuenta de
                  Amazon y active su suscripción a Amazon Prime. Si no tiene el
                  mensaje de texto, entre en
                  <a
                    target="_blank"
                    href="https://serviciosenlinea.megacable.com.mx/"
                  >
                    https://serviciosenlinea.megacable.com.mx/
                  </a>{" "}
                  para registrarse.
                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThirteen">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThirteen"
                aria-expanded="false"
                aria-controls="collapseThirteen"
              >
                13. ¿Cuánto dura la membresía de Amazon Prime en Megacable?
              </button>
            </h2>
            <div
              id="collapseThirteen"
              className="accordion-collapse collapse"
              aria-labelledby="headingThirteen"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                <p>
                  Mientras tenga un paquete Bundle con Megacable + Amazon Prime,
                  su acceso a Amazon Prime estará cubierto y no tendrá que pagar
                  nada más por la suscripción.
                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFourteen">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFourteen"
                aria-expanded="false"
                aria-controls="collapseFourteen"
              >
                14. ¿Qué ocurre con mi cuenta de Amazon Prime si en algún
                momento cambio de proveedor?
              </button>
            </h2>
            <div
              id="collapseFourteen"
              className="accordion-collapse collapse"
              aria-labelledby="headingFourteen"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                <p>
                  Si se da de baja como cliente de Megacable o cambia de paquete
                  bundle sin Amazon Prime, su suscripción se cancelará
                  automáticamente.
                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFifteen">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFifteen"
                aria-expanded="false"
                aria-controls="collapseFifteen"
              >
                15. ¿Qué pasa si ya tengo una suscripción a Amazon Prime?
              </button>
            </h2>
            <div
              id="collapseFifteen"
              className="accordion-collapse collapse"
              aria-labelledby="headingFifteen"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                <p>
                  Podrá activar la membresía de Amazon Prime de Megacable en
                  cuanto termine su suscripción actual en Amazon Prime.
                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSixteen">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSixteen"
                aria-expanded="false"
                aria-controls="collapseSixteen"
              >
                16. ¿Cómo se cancela una suscripción a Amazon Prime que haya
                sido activada a través de la oferta del plan bundle de Megacable
                + Amazon Prime?
              </button>
            </h2>
            <div
              id="collapseSixteen"
              className="accordion-collapse collapse"
              aria-labelledby="headingSixteen"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                <p>
                  Amazon Prime está incluido en su paquete bundle de Megacable +
                  Amazon Prime pero, si desea cancelar las ventajas de Amazon
                  Prime, entre en la página "Gestionar su suscripción a Prime”{" "}
                  <a
                    target="_blank"
                    href="https://www.amazon.com.mx/gp/css/css-amazon/homepage.html?ref_=nav_AccountFlyout_ya"
                  >
                    https://www.amazon.com.mx/gp/css/css-amazon/homepage.html?ref_=nav_AccountFlyout_ya
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSeventeen">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSeventeen"
                aria-expanded="false"
                aria-controls="collapseSeventeen"
              >
                17. ¿Qué ocurre con las ventajas de Amazon Prime si Megacable
                suspende mi cuenta?
              </button>
            </h2>
            <div
              id="collapseSeventeen"
              className="accordion-collapse collapse"
              aria-labelledby="headingSeventeen"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                <p>
                  Si su doble o triple con Megacable queda suspendido, las
                  ventajas de Amazon Prime también quedarán suspendidas. Cuando
                  haya pagado la factura de Megacable, las ventajas de Amazon
                  Prime se reanudarán posterior a la reactivación de su cuenta.
                  Deberá llevar a cabo nuevamente el proceso de activación de su
                  cuenta.
                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingEighteen">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEighteen"
                aria-expanded="false"
                aria-controls="collapseEighteen"
              >
                18. ¿Qué ocurre con las ventajas de Amazon Prime si Megacable
                cancela mi cuenta?
              </button>
            </h2>
            <div
              id="collapseEighteen"
              className="accordion-collapse collapse"
              aria-labelledby="headingEighteen"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                <p>
                  Si no paga la factura de Megacable antes del siguiente ciclo
                  de facturación y, en consecuencia, se cancela su cuenta,
                  también perderá el acceso a las ventajas de Amazon Prime. Las
                  ventajas de Amazon Prime se reanudarán cuando pague la factura
                  de Megacable y reactive un plan apto para recibirlas.
                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingNineteen">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseNineteen"
                aria-expanded="false"
                aria-controls="collapseNineteen"
              >
                19. ¿Cómo puedo comprobar que bundle de Megacable + Amazon Prime
                está pagando mi suscripción a Amazon Prime?
              </button>
            </h2>
            <div
              id="collapseNineteen"
              className="accordion-collapse collapse"
              aria-labelledby="headingNineteen"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                <p>
                  Puede visitar la página "Gestionar su suscripción a Prime"
                  <a
                    target="_blank"
                    href="https://www.amazon.com.mx/gp/css/css-amazon/homepage.html?ref_=nav_AccountFlyout_ya"
                  >
                    {" "}
                    https://www.amazon.com.mx/gp/css/css-amazon/homepage.html?ref_=nav_AccountFlyout_ya
                  </a>
                  , donde figura su método de pago actual en la parte superior
                  izquierda de la pantalla, dentro de la sección Facturación.
                  También puede consultar al servicio de atención al cliente de
                  Megacable para comprobar si su plan tarifario incluye Amazon
                  Prime.
                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwenty">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwenty"
                aria-expanded="false"
                aria-controls="collapseTwenty"
              >
                20. ¿Cómo me pongo en contacto con el servicio de atención al
                cliente de Megacable?
              </button>
            </h2>
            <div
              id="collapseTwenty"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwenty"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                <p>
                  Póngase en contacto con el servicio de atención al cliente de
                  Megacable en el número GDL 33 9690 0000 o resto del país (CLD)
                  690 0000
                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwentyone">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwentyone"
                aria-expanded="false"
                aria-controls="collapseTwentyone"
              >
                21. ¿Cómo puedo obtener asistencia para Amazon Prime?
              </button>
            </h2>
            <div
              id="collapseTwentyone"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwentyone"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                <p>
                  Puede entrar en la página de Ayuda y atención al cliente{" "}
                  <a
                    target="_blank"
                    href="https://www.amazon.com/gp/help/customer/display.html?nodeId=201376320"
                  >
                    https://www.amazon.com/gp/help/customer/display.html?nodeId=201376320
                  </a>
                  de Amazon Prime.
                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwentytwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwentytwo"
                aria-expanded="false"
                aria-controls="collapseTwentytwo"
              >
                22. ¿Cómo asocio mi cuenta actual de Amazon Prime a mi nuevo
                paquete de Megacable?
              </button>
            </h2>
            <div
              id="collapseTwentytwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwentytwo"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                <p>
                  Valide que actualmente no tenga un método de pago activo en
                  Amazon Prime, de lo contrario, deberá cancelarlo. La
                  activación de la membresía que adquirió con Megacable la podrá
                  realizar una vez que haya concluido el ciclo de facturación
                  con Amazon Prime. Posterior a su contratación recibirá un link
                  que lo re-direccionará a una página de Amazon Prime para
                  asociar su cuenta actual o si lo desea, crear una nueva
                  cuenta.
                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwentythree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwentythree"
                aria-expanded="false"
                aria-controls="collapseTwentythree"
              >
                23. ¿Puedo usar mi cuenta actual de Amazon Prime en el paquete
                que adquirí con Megacable?
              </button>
            </h2>
            <div
              id="collapseTwentythree"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwentythree"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                <p>
                  Podrá conservar su cuenta actual, validando que no tenga
                  ningún método de pago activo en esa cuenta. Una vez validado,
                  deberá ingresar su usuario y contraseña de Amazon Prime al
                  momento de la activación del paquete Megacable + Amazon Prime
                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwentyfour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwentyfour"
                aria-expanded="false"
                aria-controls="collapseTwentyfour"
              >
                24. ¿En dónde puedo ver el contenido de Amazon Prime?
              </button>
            </h2>
            <div
              id="collapseTwentyfour"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwentyfour"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                <p>
                  Podrá ver todo el contenido de Amazon Prime en los
                  dispositivos conectados a internet como: Smart TVs, en Xview
                  Plus, computadoras, consolas de videojuegos, smartphones y
                  Tablets.
                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwentyfive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwentyfive"
                aria-expanded="false"
                aria-controls="collapseTwentyfive"
              >
                25. ¿Cómo canjeo mi Gift Card (tarjeta de regalo) incluida en mi
                paquete contratado?
              </button>
            </h2>
            <div
              id="collapseTwentyfive"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwentyfive"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                <p>
                  1) Haga clic en el enlace proporcionado por correo electrónico
                  o notificación en tu Amazon app para reclamar el saldo Nota:
                  No habrá un código de reclamo en las entregas de correo
                  electrónico, pero se puede canjear haciendo clic en el enlace.
                </p>
                <br />
                <p>
                  2) Inicie sesión en su cuenta o seleccione Aplicar a su saldo.
                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwentysix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwentysix"
                aria-expanded="false"
                aria-controls="collapseTwentysix"
              >
                26. ¿Dónde puedo hacer uso de mi Gift Card (tarjeta de regalo)?
              </button>
            </h2>
            <div
              id="collapseTwentysix"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwentysix"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                <p>
                  La tarjeta de regalo podrá usarse para realizar compras
                  únicamente desde la tienda de Amazon: www.amazon.com.mx, por
                  un monto igual, menor o mayor del que fue otorgado. Cuando
                  canjea una tarjeta de regalo de Amazon.com, los fondos se
                  almacenan en su cuenta y se aplicarán automáticamente a su
                  próximo pedido elegible
                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwentyseven">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwentyseven"
                aria-expanded="false"
                aria-controls="collapseTwentyseven"
              >
                27. ¿Cuál es la vigencia de mi Gift Card (tarjeta de regalo)?
              </button>
            </h2>
            <div
              id="collapseTwentyseven"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwentyseven"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                <p>La vigencia es de 5 años</p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwentyeight">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwentyeight"
                aria-expanded="false"
                aria-controls="collapseTwentyeight"
              >
                28. ¿La Gift Card (tarjeta de regalo) es acumulable?
              </button>
            </h2>
            <div
              id="collapseTwentyeight"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwentyeight"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                <p>
                  Si desea conservar el saldo de su tarjeta de regalo de
                  Amazon.com para gastarlo en otra ocasión, puede pagar sin usar
                  el saldo de su tarjeta de regalo.
                </p>
                <br />
                <p>
                  Para pagar sin usar el saldo de su tarjeta de regalo: <br />
                  1) Pasar por la caja. <br />
                  2) Desmarque la casilla junto a Use su regalo de $ X.XX y
                  saldo promocional. <br />
                  Nota: Si no ve esta pantalla durante el pago, puede
                  seleccionar Cambiar en el encabezado Método de pago en la
                  página final antes de realizar su pedido.
                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwentynine">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseheadingTwentynine"
                aria-expanded="false"
                aria-controls="collapseheadingTwentynine"
              >
                29. ¿Qué hacer si tengo problemas para redimir/canjear mi Gift
                Card (tarjeta de regalo)?
              </button>
            </h2>
            <div
              id="collapseheadingTwentynine"
              className="accordion-collapse collapse"
              aria-labelledby="headingheadingTwentynine"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                <p>
                  Si tiene problemas para canjear su tarjeta de regalo, visite
                  los Términos y condiciones de la tarjeta de regalo de Amazon
                  para asegurarse de que su pedido cumpla con las reglas y
                  restricciones para pagar con una tarjeta de regalo. También
                  puede visitar la sección de ayuda en:
                  <a
                    target="_blank"
                    href=" https://www.amazon.com.mx/hz/contact-us"
                  >
                    {" "}
                    https://www.amazon.com.mx/hz/contact-us{" "}
                  </a>{" "}
                  Las tarjetas de regalo de Amazon.com solo se pueden usar en
                  Amazon.com. Si la tarjeta de regalo es de un minorista que no
                  sea Amazon.com, comuníquese con ese minorista para obtener
                  ayuda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="faq-legal text-center">
        <p>
          Ponemos a su disposición la actualización de nuestro aviso de
          privacidad{" "}
          <a
            className="txt-prime-color"
            target="_blank"
            href="https://www.megacable.com.mx/aviso-de-privacidad"
          >
            Aquí
          </a>
        </p>
      </div>
    </>
  );
};

export default FAQStrAmazonPrime;
