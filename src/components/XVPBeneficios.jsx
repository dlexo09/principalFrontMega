import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./XVPBeneficios.css";
import "./Globales.css";
import VideoPopup from "./VideoPopup"; // Importa el componente VideoPopup




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


  return (
    <>
      <div className="container general-tabs-container">
        <div className="text-center">
          <h3 className="small-title-services">TV Interactiva</h3>
          <h2 className="big-title-services">Conoce las funcionalidades</h2>
        </div>

        <div className="xview-beneficios-container">
          <div className="xview-beneficio xviewb-vod">
            <div className="xview-beneficio-content">
            <img
              src="../src/assets/icons/servicios/tv-interactiva/xviewb-vod.png"
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
                src="../src/assets/icons/servicios/tv-interactiva/xviewb-voz.png"
                alt="Control de Voz"
              />
              <h3>Control de Voz</h3>
              <p>
                Con tu nuevo control remoto de voz de Xview Plus podrás realizar
                búsquedas integradas de contenidos, así como sintonizar canales
                o ir a alguna sección solo con decirlo.
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
                src="../src/assets/icons/servicios/tv-interactiva/xviewb-busqueda.png"
                alt="Motor de Búsqueda"
              />
              <h3>Motor de Búsqueda</h3>
              <p>
                Con una sola consulta, Xview Plus buscará en las principales
                Apps el contenido que desees y te indicará en donde puedes
                disfrutarlo.
              </p>
              <button
                className="btn btn-action btn-tutorial mt-4"
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
                src="../src/assets/icons/servicios/tv-interactiva/xviewb-pausa.png"
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
                src="../src/assets/icons/servicios/tv-interactiva/xviewb-perfiles.png"
                alt="Perfiles"
              />
              <h3>Perfiles</h3>
              <p>
                Crea hasta 10 perfiles para cada miembro de tu familia para
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
                src="../src/assets/icons/servicios/tv-interactiva/xviewb-appm.png"
                alt="App Xview+ Móvil"
              />
              <h3>App Xview+ Móvil</h3>
              <p>
                Descarga la nueva app de Xview Plus y lleva tu programación en
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
                src="../src/assets/icons/servicios/tv-interactiva/xviewb-regresa.png"
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
                src="../src/assets/icons/servicios/tv-interactiva/xviewb-graba.png"
                alt="Graba"
              />
              <h3>Graba</h3>
              <p>
                Graba los programas en vivo de los canales interactivos (Función
                disponible a partir de Básico)
              </p>
              <button
                className="btn btn-action btn-tutorial mt-4"
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
                src="../src/assets/icons/servicios/tv-interactiva/xviewb-apps.png"
                alt="Descarga Apps"
              />
              <h3>Descarga Apps</h3>
              <p>
                Con Xview Plus podrás descargar tus aplicaciones favoritas a
                través de la tienda de Google Play integrada en tu caja y verlas
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
      </div>
      {isPopupOpen && <VideoPopup videoUrl={videoUrl} onClose={closePopup} />}
    </>
  );
};

export default XVPBeneficios;
