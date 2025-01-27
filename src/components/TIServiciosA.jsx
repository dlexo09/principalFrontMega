import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation"; // Importar estilos de navegación
import { EffectCoverflow, Navigation } from "swiper/modules";
import "./TIServiciosA.css";
import "./Globales.css";

const TIServiciosA = () => {
  const [activeService, setActiveService] = useState(null); // Estado para controlar el popup

  // Información para cada servicio (solo información básica)
  const servicesInfo = [
    {
      id: 1,
      title: "Identificador de Llamadas",
      description: "Sabes quién te llama y quién llamó mientras no estabas.",
      image: "../src/assets/icons/servicios/servicios-adicionales/identificador-llamadas.png",
    },
    {
      id: 2,
      title: "Desvío de Llamadas",
      description: "Transfiere todas las llamadas de entrada de tu línea de Telefonía Fija Megacable a otro número telefónico, no importa si es de otra compañía, celular o larga distancia nacional e internacional.",
      image: "../src/assets/icons/servicios/servicios-adicionales/identificador-llamadas.png",
    },
    {
      id: 3,
      title: "Llamada Tripartita",
      description: "Incluye a una tercera persona en una conversación telefónica.",
      image: "../src/assets/icons/servicios/servicios-adicionales/identificador-llamadas.png",
    },
    {
      id: 4,
      title: "Marcación Rápida",
      description: "Marca de una manera abreviada hasta a 8 destinos, estos pueden ser programados por el suscriptor.",
      image: "../src/assets/icons/servicios/servicios-adicionales/identificador-llamadas.png",
    },
    {
      id: 5,
      title: "Número Privado",
      description: "Cuando realices llamadas desde tu número de Telefonía Fija Megacable en el identificador de llamadas del teléfono de destino no aparecerá el número.",
      image: "../src/assets/icons/servicios/servicios-adicionales/identificador-llamadas.png",
    },
    {
      id: 6,
      title: "Opción Número Privado",
      description: "Si tienes configurado el servicio 'Número Privado', haz visible tu número a los destinatarios que tú elijas marcando al: *82.",
      image: "../src/assets/icons/servicios/servicios-adicionales/identificador-llamadas.png",
    },
    {
      id: 7,
      title: "Bloqueo de Llamadas Anónimas",
      description: "Ya no se preocupe de esas llamadas anónimas, con este servicio no recibirá llamadas de números no identificados (anónimos), de esta manera el teléfono no sonara en lo absoluto.",
      image: "../src/assets/icons/servicios/servicios-adicionales/identificador-llamadas.png",
    },
    {
      id: 8,
      title: "Bloqueo de Llamadas Entrantes",
      description: "La persona que llame a una línea de Telefonía Fija Megacable escuchara tono de ocupado, por lo tanto, no sonará el teléfono del cliente.",
      image: "../src/assets/icons/servicios/servicios-adicionales/identificador-llamadas.png",
    },
    {
      id: 9,
      title: "Llamada en Espera",
      description: "Cuando tengas ocupada tu línea podrás contestar otra presionando el botón FLASH de tu aparato telefónico y podrás cambiar entre una y otra llamada las veces que quieras.",
      image: "../src/assets/icons/servicios/servicios-adicionales/identificador-llamadas.png",
    },
    {
      id: 10,
      title: "Bloqueo de Destinos",
      description: "Evita que se realicen llamadas no deseadas de tu línea telefónica bloqueando las llamadas a celular con prefijo 044 y 045 así como las llamadas de larga distancia.",
      image: "../src/assets/icons/servicios/servicios-adicionales/identificador-llamadas.png",
    },
    {
      id: 11,
      title: "Línea Adicional",
      description: "Puedes contar con una 2da.",
      image: "../src/assets/icons/servicios/servicios-adicionales/identificador-llamadas.png",
    },
  ];

  // Información adicional que será mostrada solo en el popup
  const popupContent = {
    1: {
      title: "Identificador de Llamadas",
      content: <>
      <p className="text-center">Todas las líneas incluyen este Servicio sin costo adicional. Podrás ver qué número telefónico te están marcando antes de contestar. Este servicio ya está activo en tu Megafón, sin ningún costo.</p>
      </>,
    },
    2: {
      title: "Desvío de llamadas",
      content: 
      <>
      <p>Con esta característica, transfieres las llamadas que entren a tu línea Megafón a otro número telefónico.</p>
      <p className="pop-subtitles">Desvío permanente</p>
      <p>Todas las llamadas entrantes se transfieren. <br />

        <span className="pop-simbol">+</span> Para activar marca *72 y enseguida el número telefónico donde deseas recibir las llamadas y la tecla #
          Escuchara la siguiente grabación "El servicio adicional ha sido activado con éxito".
          <br />
        <span className="pop-simbol">-</span> Para desactivar, marca #72
        Escuchara la siguiente grabación: "El servicio adicional ha sido desactivado".</p>

        <p className="pop-subtitles">Desvío Línea ocupada</p>
        <p>Entra en operación si estas utilizando tu línea Megafón y entra una llamada.
          <br />
          <span className="pop-simbol">+</span> Para activar marca *73 y enseguida el número telefónico donde deseas recibir las llamadas y la tecla #.
          Escuchará la siguiente grabación: "El servicio adicional ha sido activado con éxito".
          <br />
          <span className="pop-simbol">-</span> Para desactivar, marca #73
          Escuchará la siguiente grabación: “El servicio adicional ha sido desactivado”.</p>

          <p className="pop-subtitles">Desvío no contesta</p>
          <p>Las llamadas de entrada NO contestadas a los 20 segundos serán transferidas.
          <br />
          <span className="pop-simbol">+</span> Para activar marca *74 y enseguida el número telefónico donde deseas recibir las llamadas y la tecla #.
          Escuchará la siguiente grabación: “El servicio adicional ha sido activado con éxito”.
          <br />
          <span className="pop-simbol">-</span> Para desactivar, marca #74
          Escuchará la siguiente grabación: “El servicio adicional ha sido desactivado”.</p>
      </>,
    },
    3: {
      title: "Información Adicional para Paramount",
      content: "Información sobre contenido exclusivo y cómo disfrutarlo al máximo.",
    },
    4: {
      title: "Información Adicional para Prime Video",
      content: "Contenido exclusivo de Prime Video, incluyendo películas y series recomendadas.",
    },
    5: {
      title: "Información Adicional para Max",
      content: "Guía de contenido premium de Max, con recomendaciones personalizadas.",
    },
  };

  const handleOpenPopup = (serviceId) => {
    setActiveService(serviceId); // Solo pasamos el ID del servicio al popup
  };

  const handleClosePopup = () => {
    setActiveService(null); // Cerrar el popup
  };

  return (
    <>
      <div className="general-tabs-container">
        <div className="text-center titles-adserv">
          <h3 className="small-title-services">Conoce nuestro servicio</h3>
          <h2 className="big-title-services">SERVICIOS ADICIONALES</h2>
          <p className="mt-5">
            Complementa tu servicio de Telefonía Fija Mega con las soluciones digitales que tenemos para ti.
          </p>
        </div>

        <div className="container swiper-adservices mt-5">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={3}
            spaceBetween={-60}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 100,
              depth: 200,
              modifier: 1.5,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Navigation]}
            className="swiper_container"
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: -200,
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: -60,
              },
            }}
          >
            {servicesInfo.map((service) => (
              <SwiperSlide key={service.id}>
                <div className="swiper-adservices-content sa-item">
                  <div className="text-center swiper-adservices-conten d-flex align-items-center flex-column justify-content-center">
                    <img src={service.image} alt={service.title} />
                    <h4 className="mt-4" >{service.title}</h4> {/* Título de la tarjeta */}
                    <p className="mt-2">{service.description}</p> {/* Descripción de la tarjeta */}
                    <button
                      className="mt-4 hidden-button btn-action"
                      onClick={() => handleOpenPopup(service.id)} // Abrir el popup con el ID del servicio
                    >
                      Más información
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Botones de navegación */}
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>

      {/* Popup */}
      {activeService !== null && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div
            className="popup-addserv-content"
            onClick={(e) => e.stopPropagation()} // Evitar cerrar el popup al hacer clic en el contenido
          >
            <h3 className="mb-4">{popupContent[activeService].title}</h3>
            <p className="mb-4">{popupContent[activeService].content}</p>
            <button className="btn-action btn-pop-addserv" onClick={handleClosePopup}>
              Cerrar
            </button>
            {/* Puedes agregar más contenido aquí si lo deseas */}
          </div>
        </div>
      )}
    </>
  );
};

export default TIServiciosA;
