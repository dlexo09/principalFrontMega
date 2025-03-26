import React from "react";
import { Helmet } from "react-helmet-async";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./XVPFAQ.css";
import "./Globales.css";
import FAQSoporte from "./FAQSoporte"; // Ajusta la ruta según tu estructura de archivos

// Definimos todas las preguntas frecuentes en una sola lista
const faqXview = [
  {
    question: "¿Qué es Xview?",
    answer: (
      <p>
        Xview es la forma interactiva de ver la guía de programación en vivo, ya
        que puedes pausar, regresar, reiniciar o grabar un cualquier programa en
        vivo de un canal interactivo. Con Xview también podrás tener acceso a
        contenido On Demand para ver miles de series y películas sin costo en el
        momento que quieras.
      </p>
    ),
  },
  {
    question: "¿Cómo puedo contratar Xview?",
    answer: (
      <p>
        Para contratar Xview, solo necesitas ser cliente de Megacable. Puedes
        hacerlo fácilmente a través de nuestro sitio web, donde encontrarás los
        planes disponibles. También puedes comunicarte con nuestro centro de
        atención al cliente para recibir más información y asistencia durante el
        proceso de contratación. Una vez contratado, podrás acceder a la
        plataforma de inmediato y comenzar a disfrutar de todos los beneficios
        de Xview.
      </p>
    ),
  },

  {
    question: "¿Cuáles son los requisitos para usar Xview?",
    answer: (
      <p>
        Para disfrutar de Xview, necesitas tener una conexión a internet
        estable, preferiblemente de alta velocidad para asegurar una experiencia
        de visualización fluida.
      </p>
    ),
  },
  {
    question: "¿Xview tiene opciones de grabación?",
    answer: (
      <p>
        Sí, Xview cuenta con funciones de grabación para que puedas guardar tus
        programas y series favoritas. Con esta opción, podrás ver tu contenido
        grabado en el momento que prefieras, incluso si no estás disponible para
        verlo en vivo.
      </p>
    ),
  },
  {
    question: "¿Xview ofrece contenido exclusivo?",
    answer: (
      <p>
        Sí, Xview tiene una amplia oferta de contenido exclusivo, incluyendo
        series originales, películas, documentales y eventos especiales que no
        están disponibles en otras plataformas. Además, puedes acceder a
        estrenos y contenidos de canales de paga antes que en otras plataformas,
        lo que hace que tu experiencia con Xview sea aún más única y
        emocionante.
      </p>
    ),
  },
  {
    question: "¿Puedo ver Xview en mi celular?",
    answer: (
      <p>
        Sí, puedes descargar la app Xview en tu móvil y ver programación en vivo
        y contenido On Demand.
      </p>
    ),
  },
  {
    question: "¿Xview tiene contenido de deportes en vivo?",
    answer: (
      <p>
        Sí, Xview ofrece una variedad de canales de deportes en vivo, incluyendo
        eventos nacionales e internacionales.
      </p>
    ),
  },
  {
    question: "¿Puedo pausar o retroceder contenido en vivo con Xview?",
    answer: (
      <p>
        Sí, con Xview puedes pausar, retroceder y reanudar contenido en vivo, lo
        que te da flexibilidad para ver lo que te gusta a tu propio ritmo.
      </p>
    ),
  },

  {
    question: "¿Qué hago si tengo problemas con Xview?",
    answer: (
      <p>
        Puedes reportar una falla llamando al 33 9690 0000 o a traves nuestro
        WhatssApp{" "}
        <a
          href="https://api.whatsapp.com/send?phone=523396900001"
          target="_blank"
        >
          33 9690 0001
        </a>
        . Si el fallo requiere atención técnica, el equipo de soporte agendará
        una visita para revisar tu equipo.
      </p>
    ),
  },
];

// Componente principal
const XVFAQ = () => {
  return (
    <>
      <Helmet>
        <title>
          Preguntas Frecuentes Xview | Megacable | Soluciona tus dudas
        </title>
        <meta
          name="description"
          content="Consulta las preguntas frecuentes sobre Xview y resuelve tus dudas sobre configuración, control remoto, y más. ¡Obtén toda la información que necesitas para disfrutar de Xview al máximo!"
        />
      </Helmet>

      <div className="general-tabs-container">
        <div className="text-center">
          <h3 className="small-title-services">CONSULTA NUESTRA GUÍA</h3>
          <h2 className="big-title-services">Preguntas frecuentes</h2>
        </div>

        {/* Mostrar todas las preguntas frecuentes */}
        <div className="container-fluid p-0 mt-5">
          <FAQSoporte faqs={faqXview} />
        </div>
      </div>
    </>
  );
};

export default XVFAQ;
