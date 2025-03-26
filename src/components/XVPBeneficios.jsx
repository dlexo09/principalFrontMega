import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "./XVPBeneficios.css";
import VideoPopup from "./VideoPopup"; // Importa el componente VideoPopup
import FAQSoporte from "./FAQSoporte";

const XVPBeneficios = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  // Función para convertir la URL de YouTube
  const convertYouTubeUrlToEmbed = (url) => {
    const videoId = url.split("v=")[1].split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  // Función para abrir el popup
  const openPopup = (url) => {
    const embedUrl = convertYouTubeUrlToEmbed(url); // Convertir la URL
    setVideoUrl(embedUrl);
    setIsPopupOpen(true);
  };

  // Función para cerrar el popup
  const closePopup = () => {
    setIsPopupOpen(false);
    setVideoUrl("");
  };

  {
    /* Movil */
  }
  const faqXview = [
    {
      question: "VOD",
      answer: (
        <div className="faq-answer">
          <p>
            Accede a más de 20,000 horas de series, películas, novelas, deportes
            y más, para verlos en el momento que tú quieras.
          </p>
          <iframe
            src="https://www.youtube.com/embed/fhKrsjRQixw?si=F5Ceb9-_TFUMySPd"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      ),
    },
    {
      question: "Control de Voz",
      answer: (
        <div className="faq-answer">
          <p>
            Con tu nuevo control remoto de voz de Xview Plus podrás realizar
            búsquedas integradas de contenidos, así como sintonizar canales o ir
            a alguna sección solo con decirlo.
          </p>
          <iframe
            src="https://www.youtube.com/embed/HtgZwBUWlMg?si=nqizd_eZNV-MZtAm"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      ),
    },
    {
      question: "Motor de Búsqueda",
      answer: (
        <div className="faq-answer">
          <p>
            Con una sola consulta, Xview Plus buscará en las principales Apps el
            contenido que desees y te indicará en donde puedes disfrutarlo.
          </p>
          <iframe
            src="https://www.youtube.com/embed/hAWQUTPrsG8?si=xtfcXYIRUx_sUjbt"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      ),
    },
    {
      question: "Perfiles",
      answer: (
        <div className="faq-answer">
          <p>
            Crea hasta 10 perfiles para cada miembro de tu familia para recibir
            recomendaciones personalizadas de contenido.
          </p>
          <iframe
            src="https://www.youtube.com/embed/9B1KpKgvc40?si=pCR3J43Y5oZDvrNg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      ),
    },
    {
      question: "Pausa y reinicia",
      answer: (
        <div className="faq-answer">
          <p>
            Detén tu programa en vivo y retómalo justo donde te quedaste, en el
            momento que quieras para que no te pierdas ningún detalle. Empieza a
            ver un programa desde el inicio, aunque ya haya comenzado.
          </p>
          <iframe
            src="https://www.youtube.com/embed/M8rj9z0JVCU?si=cbWMitPAVWD1QP_X"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      ),
    },
    {
      question: "App Xview+ Móvil",
      answer: (
        <div className="faq-answer">
          <p>
            Descarga la nueva app de Xview Plus y lleva tu programación en vivo
            con funciones interactivas y el contenido On Demand.
          </p>
          <iframe
            src="https://www.youtube.com/embed/qH76P7jI8YA?si=JV-b7OlLXXZ66j_2"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      ),
    },
    {
      question: "Descarga Apps",
      answer: (
        <div className="faq-answer">
          <p>
            Con Xview Plus podrás descargar tus aplicaciones favoritas a través
            de la tienda de Google Play integrada en tu caja y verlas en tu TV.
          </p>
          <iframe
            src="https://www.youtube.com/embed/lkI56nla0O8?si=Pu5MhE5olkC1v9fL"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      ),
    },
    {
      question: "Regresa",
      answer: (
        <div className="faq-answer">
          <p>
            Regresa hasta 48 hrs. tus canales interactivos favoritos para
            disfrutar de un programa que ya pasó.
          </p>
          <iframe
            src="https://www.youtube.com/embed/L0gqpdb9o0Y?si=1U21EX8t-0b4Ih7Q"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      ),
    },
    {
      question: "Graba",
      answer: (
        <div className="faq-answer">
          <p>
            Graba los programas en vivo de los canales interactivos (Función
            disponible a partir de Básico)
          </p>
          <iframe
            src="https://www.youtube.com/embed/mzUf3NJoqv0?si=2XHUo9G0uNIdg6ie"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      ),
    },
  ];

  return (
    <>
      <Helmet>
      <title>Beneficios de Xview+ | Megacable | VOD, Control de Voz, Grabación y Más</title>
      <meta name="description" content="Descubre los beneficios de Xview+: Accede a más de 20,000 horas de contenido, controla tu TV con voz, graba programas y disfruta de una experiencia personalizada con perfiles y la app móvil. ¡Lleva el entretenimiento a otro nivel con Megacable!" />
      </Helmet>
      {/* FUNCIONALIDADES PC */}
      <div className="container general-tabs-container pe-3 ps-3 pe-md-0 ps-md-0 d-none d-md-block">
        <div className="text-center">
          <h3 className="small-title-services">TV Interactiva</h3>
          <h2 className="big-title-services">Conoce las funcionalidades</h2>
        </div>

        <div className="xview-beneficios-container">
          <div className="xview-beneficio xviewb-vod">
            <div className="xview-beneficio-content">
            <img
              src="/icons/servicios/tv-interactiva/xviewb-vod.png"
              alt="VOD"
            />
            <h3>VOD</h3>
            <p>
              Accede a más de 20,000 horas de series, películas, novelas,
              deportes y más, para verlos en el momento que tú quieras.
            </p>
            <button
                className="btn btn-action btn-tutorial mt-4"
                onClick={() =>
                  openPopup("https://www.youtube.com/watch?v=fhKrsjRQixw")
                }
              >
                Ver tutorial <span className="open-page-icon"></span>
              </button>
            </div>
          </div>

          <div className="xview-beneficio xviewb-voz">
            <div className="xview-beneficio-content">
              <img
                src="/icons/servicios/tv-interactiva/xviewb-voz.png"
                alt="Control de Voz"
              />
              <h3>Control de Voz</h3>
              <p>
                Con tu nuevo control remoto de voz de Xview Plus podrás realizar
                búsquedas integradas de contenidos, así como sintonizar canales
                o ir a alguna sección solo con decirlo.
              </p>
              <button
                className="btn btn-action btn-tutorial mt-4"
                onClick={() =>
                  openPopup("https://www.youtube.com/watch?v=HtgZwBUWlMg")
                }
              >
                Ver tutorial <span className="open-page-icon"></span>
              </button>
            </div>
          </div>

          <div className="xview-beneficio xviewb-busqueda">
            <div className="xview-beneficio-content">
              <img
                src="/icons/servicios/tv-interactiva/xviewb-busqueda.png"
                alt="Motor de Búsqueda"
              />
              <h3>Motor de Búsqueda</h3>
              <p>
                Con una sola consulta, Xview Plus buscará en las principales
                Apps el contenido que desees y te indicará en donde puedes
                disfrutarlo.
              </p>
              <button
                className="btn btn-action btn-tutorial mt-5"
                onClick={() =>
                  openPopup("https://www.youtube.com/watch?v=hAWQUTPrsG8")
                }
              >
                Ver tutorial <span className="open-page-icon"></span>
              </button>
            </div>
          </div>

          <div className="xview-beneficio xviewb-pausa">
            <div className="xview-beneficio-content">
              <img
                src="/icons/servicios/tv-interactiva/xviewb-pausa.png"
                alt="Pausa y reinicia"
              />
              <h3>Pausa y reinicia</h3>
              <p>
                Detén tu programa en vivo y retómalo justo donde te quedaste, en
                el momento que quieras para que no te pierdas ningún detalle.
                Empieza a ver un programa desde el inicio, aunque ya haya
                comenzado.
              </p>
              <button
                className="btn btn-action btn-tutorial mt-4"
                onClick={() =>
                  openPopup("https://www.youtube.com/watch?v=M8rj9z0JVCU")
                }
              >
                Ver tutorial <span className="open-page-icon"></span>
              </button>
            </div>
          </div>

          <div className="xview-beneficio xviewb-perfiles">
            <div className="xview-beneficio-content">
              <img
                src="/icons/servicios/tv-interactiva/xviewb-perfiles.png"
                alt="Perfiles"
              />
              <h3>Perfiles</h3>
              <p>
                Crea hasta 10 perfiles para cada miembro de tu familia para
                recibir recomendaciones personalizadas de contenido.
              </p>
              <button
                className="btn btn-action btn-tutorial mt-4"
                onClick={() =>
                  openPopup("https://www.youtube.com/watch?v=9B1KpKgvc40")
                }
              >
                Ver tutorial <span className="open-page-icon"></span>
              </button>
            </div>
          </div>

          <div className="xview-beneficio xviewb-appm">
            <div className="xview-beneficio-content">
              <img
                src="/icons/servicios/tv-interactiva/xviewb-appm.png"
                alt="App Xview+ Móvil"
              />
              <h3>App Xview+ Móvil</h3>
              <p>
                Descarga la nueva app de Xview Plus y lleva tu programación en
                vivo con funciones interactivas y el contenido On Demand
              </p>
              <button
                className="btn btn-action btn-tutorial mt-4"
                onClick={() =>
                  openPopup("https://www.youtube.com/watch?v=qH76P7jI8YA")
                }
              >
                Ver tutorial <span className="open-page-icon"></span>
              </button>
            </div>
          </div>

          <div className="xview-beneficio xviewb-regresa">
            <div className="xview-beneficio-content">
              <img
                src="/icons/servicios/tv-interactiva/xviewb-regresa.png"
                alt="Regresa"
              />
              <h3>Regresa</h3>
              <p>
                Regresa hasta 48 hrs. tus canales interactivos favoritos para
                disfrutar de un programa que ya pasó.
              </p>
              <button
                className="btn btn-action btn-tutorial mt-4"
                onClick={() =>
                  openPopup("https://www.youtube.com/watch?v=L0gqpdb9o0Y")
                }
              >
                Ver tutorial <span className="open-page-icon"></span>
              </button>
            </div>
          </div>

          <div className="xview-beneficio xviewb-graba">
            <div className="xview-beneficio-content">
              <img
                src="/icons/servicios/tv-interactiva/xviewb-graba.png"
                alt="Graba"
              />
              <h3>Graba</h3>
              <p>
                Graba los programas en vivo de los canales interactivos (Función
                disponible a partir de Básico)
              </p>
              <button
                className="btn btn-action btn-tutorial mt-5"
                onClick={() =>
                  openPopup("https://www.youtube.com/watch?v=mzUf3NJoqv0")
                }
              >
                Ver tutorial <span className="open-page-icon"></span>
              </button>
            </div>
          </div>

          <div className="xview-beneficio xviewb-apps">
            <div className="xview-beneficio-content">
              <img
                src="/icons/servicios/tv-interactiva/xviewb-apps.png"
                alt="Descarga Apps"
              />
              <h3>Descarga Apps</h3>
              <p>
                Con Xview Plus podrás descargar tus aplicaciones favoritas a
                través de la tienda de Google Play integrada en tu caja y verlas
                en tu TV
              </p>
              <button
                className="btn btn-action btn-tutorial mt-4"
                onClick={() =>
                  openPopup("https://www.youtube.com/watch?v=lkI56nla0O8")
                }
              >
                Ver tutorial <span className="open-page-icon"></span>
              </button>
            </div>
          </div>
        </div>
        {isPopupOpen && <VideoPopup videoUrl={videoUrl} onClose={closePopup} />}
      </div>

      {/* FUNCIONALIDADES MOVIL */}
      <div className="general-tabs-container d-md-none">
        <div className="text-center">
          <h3 className="small-title-services">TV Interactiva</h3>
          <h2 className="big-title-services">Conoce las funcionalidades</h2>
        </div>

        {/* Mostrar todas las preguntas frecuentes */}
        <div className="container-fluid p-0 mt-5">
          <FAQSoporte faqs={faqXview} />
        </div>
      </div>
    </>
  );
};

export default XVPBeneficios;
