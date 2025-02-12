import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./XVPTutoriales.css";
import "./Globales.css";

const funcionalidades = [
  {
    id: "descubre",
    nombre: "Descubre",
    tipo: "video",
    videoUrl: "https://www.youtube.com/watch?v=rUtL41OwLk8&t=1s",
    img: "../src/assets/icons/servicios/tv-interactiva/xviewb-logo.png",
  },
  {
    id: "regresa",
    nombre: "Regresa",
    tipo: "video",
    videoUrl: "https://www.youtube.com/watch?v=L0gqpdb9o0Y",
    img: "../src/assets/icons/servicios/tv-interactiva/xviewb-regresa-wh.png",
  },
  {
    id: "regresaPausa",
    nombre: "Regresa/Pausa",
    tipo: "video",
    videoUrl: "https://www.youtube.com/watch?v=M8rj9z0JVCU",
    img: "../src/assets/icons/servicios/tv-interactiva/xviewb-pausa.png",
  },
  {
    id: "graba",
    nombre: "Graba",
    tipo: "video",
    videoUrl: "https://www.youtube.com/watch?v=mzUf3NJoqv0",
    img: "../src/assets/icons/servicios/tv-interactiva/xviewb-graba.png",
  },
  {
    id: "seriesPeliculas",
    nombre: "Series y Películas",
    tipo: "video",
    videoUrl: "https://www.youtube.com/watch?v=fhKrsjRQixw",
    img: "../src/assets/icons/servicios/tv-interactiva/xviewb-vod.png",
  },
  {
    id: "configuracionGmail",
    nombre: "Configuración Cuenta Gmail",
    tipo: "pdf",
    archivoUrl: "../src/assets/files/servicios/tv-interactiva/configuracion-gmail.pdf",
    img: "../src/assets/icons/servicios/tv-interactiva/xviewb-gmail.png",
  },
  {
    id: "controlVoz",
    nombre: "Control de Voz",
    tipo: "video",
    videoUrl: "https://www.youtube.com/watch?v=HtgZwBUWlMg",
    img: "../src/assets/icons/servicios/tv-interactiva/xviewb-voz.png",
  },
  {
    id: "motorBusqueda",
    nombre: "Motor de Búsqueda",
    tipo: "video",
    videoUrl: "https://www.youtube.com/watch?v=hAWQUTPrsG8",
    img: "../src/assets/icons/servicios/tv-interactiva/xviewb-busqueda.png",
  },
  {
    id: "descargaApps",
    nombre: "Descarga de Apps",
    tipo: "video",
    videoUrl: "https://www.youtube.com/watch?v=lkI56nla0O8",
    img: "../src/assets/icons/servicios/tv-interactiva/xviewb-apps.png",
  },
  {
    id: "appMovil",
    nombre: "App Xview+ Móvil",
    tipo: "video",
    videoUrl: "https://www.youtube.com/watch?v=qH76P7jI8YA",
    img: "../src/assets/icons/servicios/tv-interactiva/xviewb-appm.png",
  },
  {
    id: "perfiles",
    nombre: "Perfiles",
    tipo: "video",
    videoUrl: "https://www.youtube.com/watch?v=9B1KpKgvc40",
    img: "../src/assets/icons/servicios/tv-interactiva/xviewb-perfiles.png",
  },
  {
    id: "controles",
    nombre: "Controles",
    tipo: "pdf", // Este elemento es un PDF
    archivoUrl: "../src/assets/files/servicios/tv-interactiva/control-xview.pdf",
    img: "../src/assets/icons/servicios/tv-interactiva/xviewb-controles.png",
  },
];

const XVPTutoriales = () => {
  const [videoActual, setVideoActual] = useState("");
  const [funcionalidadActiva, setFuncionalidadActiva] = useState("");

  const convertirAFormatoEmbed = (url) => {
    const videoId = url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  useEffect(() => {
    // Cargar el primer video al montar el componente
    const primerVideo = funcionalidades.find((f) => f.tipo === "video");
    if (primerVideo) {
      setVideoActual(convertirAFormatoEmbed(primerVideo.videoUrl));
      setFuncionalidadActiva(primerVideo.id);
    }
  }, []);

  const cambiarVideoOArchivo = (funcionalidad) => {
    if (funcionalidad.tipo === "video") {
      setVideoActual(convertirAFormatoEmbed(funcionalidad.videoUrl));
    } else if (funcionalidad.tipo === "pdf") {
      window.open(funcionalidad.archivoUrl, "_blank");
    }
    setFuncionalidadActiva(funcionalidad.id);
  };

  return (
    <div className="container-fluid general-tabs-container funcionalidades-container-general">
      <div className="container">
        <div className="text-center">
          <h3 className="small-title-services">Xview+</h3>
          <h2 className="big-title-services content-title-sm">
            TUTORIALES DE USO
          </h2>
          <p className="content-txt-sm mt-5 mb-5">
            Haz clic en la funcionalidad de tu interés para ver el tutorial al
            instante
          </p>
        </div>

        {/* Contenedor del video */}
        {videoActual && (
          <div className="video-container mb-5">
            <iframe
              key={videoActual}
              src={videoActual}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy" // Mejora el rendimiento
            ></iframe>
          </div>
        )}

        {/* Contenedor de las funcionalidades */}
        <div className="funcionalidades-container d-flex justify-content-center flex-wrap">
          {funcionalidades.map((funcionalidad) => (
            <div
              key={funcionalidad.id}
              className={`funcionalidad-content d-flex flex-column align-items-center justify-content-between ${
                funcionalidadActiva === funcionalidad.id
                  ? "funcionalidad-activa"
                  : ""
              }`}
              onClick={() => cambiarVideoOArchivo(funcionalidad)}
            >
              <h3>{funcionalidad.nombre}</h3>
              <img src={funcionalidad.img} alt={funcionalidad.nombre} />
              <div className="btn-video-container">
                <img
                  className="btn-video"
                  src="../src/assets/icons/acordeon-inactive.png"
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default XVPTutoriales;
