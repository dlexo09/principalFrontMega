import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Helmet } from "react-helmet-async";
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
      image:
        "../src/assets/icons/servicios/servicios-adicionales/identificador-llamadas.png",
    },
    {
      id: 2,
      title: "Desvío de Llamadas",
      description:
        "Transfiere todas las llamadas de entrada de tu línea de Telefonía Fija Megacable a otro número telefónico, no importa si es de otra compañía, celular o larga distancia nacional e internacional.",
      image:
        "../src/assets/icons/servicios/servicios-adicionales/identificador-llamadas.png",
    },
    {
      id: 3,
      title: "Llamada Tripartita",
      description:
        "Incluye a una tercera persona en una conversación telefónica.",
      image:
        "../src/assets/icons/servicios/servicios-adicionales/identificador-llamadas.png",
    },
    {
      id: 4,
      title: "Marcación Rápida",
      description:
        "Marca de una manera abreviada hasta a 8 destinos, estos pueden ser programados por el suscriptor.",
      image:
        "../src/assets/icons/servicios/servicios-adicionales/identificador-llamadas.png",
    },
    {
      id: 5,
      title: "Número Privado",
      description:
        "Cuando realices llamadas desde tu número de Telefonía Fija Megacable en el identificador de llamadas del teléfono de destino no aparecerá el número.",
      image:
        "../src/assets/icons/servicios/servicios-adicionales/identificador-llamadas.png",
    },
    {
      id: 6,
      title: "Opción Número Privado",
      description:
        "Si tienes configurado el servicio 'Número Privado', haz visible tu número a los destinatarios que tú elijas marcando al: *82.",
      image:
        "../src/assets/icons/servicios/servicios-adicionales/identificador-llamadas.png",
    },
    {
      id: 7,
      title: "Bloqueo de Llamadas Anónimas",
      description:
        "Ya no se preocupe de esas llamadas anónimas, con este servicio no recibirá llamadas de números no identificados (anónimos), de esta manera el teléfono no sonara en lo absoluto.",
      image:
        "../src/assets/icons/servicios/servicios-adicionales/identificador-llamadas.png",
    },
    {
      id: 8,
      title: "Bloqueo de Llamadas Entrantes",
      description:
        "La persona que llame a una línea de Telefonía Fija Megacable escuchara tono de ocupado, por lo tanto, no sonará el teléfono del cliente.",
      image:
        "../src/assets/icons/servicios/servicios-adicionales/identificador-llamadas.png",
    },
    {
      id: 9,
      title: "Llamada en Espera",
      description:
        "Cuando tengas ocupada tu línea podrás contestar otra presionando el botón FLASH de tu aparato telefónico y podrás cambiar entre una y otra llamada las veces que quieras.",
      image:
        "../src/assets/icons/servicios/servicios-adicionales/identificador-llamadas.png",
    },
    {
      id: 10,
      title: "Bloqueo de Destinos",
      description:
        "Evita que se realicen llamadas no deseadas de tu línea telefónica bloqueando las llamadas a celular con prefijo 044 y 045 así como las llamadas de larga distancia.",
      image:
        "../src/assets/icons/servicios/servicios-adicionales/identificador-llamadas.png",
    },
    {
      id: 11,
      title: "Línea Adicional",
      description: "Puedes contar con una 2da.",
      image:
        "../src/assets/icons/servicios/servicios-adicionales/identificador-llamadas.png",
    },
  ];

  // Información adicional que será mostrada solo en el popup
  const popupContent = {
    1: {
      title: "Identificador de Llamadas",
      content: (
        <>
          <p>
            Todas las líneas incluyen este Servicio sin costo adicional. Podrás
            ver qué número telefónico te están marcando antes de contestar. Este
            servicio ya está activo en tu Megafón, sin ningún costo.
          </p>
        </>
      ),
    },
    2: {
      title: "Desvío de llamadas",
      content: (
        <>
          <p>
            Con esta característica, transfieres las llamadas que entren a tu
            línea Megafón a otro número telefónico.
          </p>
          <p className="pop-subtitles">Desvío permanente</p>
          <p>
            Todas las llamadas entrantes se transfieren. <br />
            <span className="pop-simbol">+</span> Para activar marca *72 y
            enseguida el número telefónico donde deseas recibir las llamadas y
            la tecla # Escuchara la siguiente grabación "El servicio adicional
            ha sido activado con éxito".
            <br />
            <span className="pop-simbol">-</span> Para desactivar, marca #72
            Escuchara la siguiente grabación: "El servicio adicional ha sido
            desactivado".
          </p>

          <p className="pop-subtitles">Desvío Línea ocupada</p>
          <p>
            Entra en operación si estas utilizando tu línea Megafón y entra una
            llamada.
            <br />
            <span className="pop-simbol">+</span> Para activar marca *73 y
            enseguida el número telefónico donde deseas recibir las llamadas y
            la tecla #. Escuchará la siguiente grabación: "El servicio adicional
            ha sido activado con éxito".
            <br />
            <span className="pop-simbol">-</span> Para desactivar, marca #73
            Escuchará la siguiente grabación: “El servicio adicional ha sido
            desactivado”.
          </p>

          <p className="pop-subtitles">Desvío no contesta</p>
          <p>
            Las llamadas de entrada NO contestadas a los 20 segundos serán
            transferidas.
            <br />
            <span className="pop-simbol">+</span> Para activar marca *74 y
            enseguida el número telefónico donde deseas recibir las llamadas y
            la tecla #. Escuchará la siguiente grabación: “El servicio adicional
            ha sido activado con éxito”.
            <br />
            <span className="pop-simbol">-</span> Para desactivar, marca #74
            Escuchará la siguiente grabación: “El servicio adicional ha sido
            desactivado”.
          </p>
        </>
      ),
    },
    3: {
      title: "Llamada tripartita",
      content: (
        <>
          <p>
            Podrás conectar llamadas a teléfonos de otras compañías, a celulares
            y de larga distancia nacional e internacional. Deseas incorporar a
            una tercera persona en una conversación telefónica, solo sigue los
            siguientes pasos.
          </p>
          <p className="pop-subtitles">Pasos</p>
          <ol>
            <li>Establece una primera llamada telefónica.</li>
            <li>Presiona FLASH y marca el teléfono de la segunda llamada.</li>
            <li>
              Una vez establecida la segunda llamada, marca nuevamente FLASH y
              luego pulsa la tecla 3.
            </li>
          </ol>

          <p>
            ¡Listo! La conferencia entre las 3 personas quedara establecida.
            Para terminar con la conferencia, simplemente cuelga. Este servicio
            ya está activo en tu Megafón, sin costo…¡Úsalo!
          </p>
        </>
      ),
    },
    4: {
      title: "Marcación Rápida",
      content: (
        <>
          <p>
            Esta característica otorga al suscriptor la capacidad de marcar de
            una manera abreviada hasta 8 destinos. Los 8 destinos pueden ser
            programados por el propio suscriptor desde su línea y podrá utilizar
            un solo dígito (del 2 al 9) para elegir el destino abreviado.
          </p>
          <p className="pop-subtitles">Activación del servicio</p>
          <ol>
            <li>Marque desde su línea Megafón *84.</li>
            <li>Marque * + el número que desee asignar con marcación corta.</li>
            <li>
              Marque ahora el número al cual le desea asignar la marcación
              corta.
              <br />
              (Escucharas dos tonos que indican la configuración correcta)
              Terminado el proceso anterior escuchará el siguiente mensaje: "Su
              nuevo servicio ha sido activado con éxito y está listo para ser
              utilizado"
            </li>
          </ol>
          <p>
            Cuelgue su auricular para terminar el proceso. Nota: en caso de no
            efectuar correctamente su activación, escuchara "Lo sentimos, su
            servicio no fue activado de manera correcta. Intente nuevamente".
            Estos pasos se deben repetir cada vez que desee configurar un nuevo
            número con marcación rápida.
          </p>
          <p className="pop-subtitles">Desactivación del servicio</p>
          <ol>
            <li>Para borrar alguna de las marcaciones cortas marque #84</li>
            <li>
              Inmediatamente después marque * seguido del número de marcación
              rápida que desee borrar (un ejemplo de marcación para desactivar
              este servicio seria: #84*2).
              <br />
              Terminado el proceso anterior escuchara el siguiente mensaje: "Su
              servicio adicional ha sido desactivado. Gracias" Cuelgue su
              auricular para terminar el proceso.
            </li>
          </ol>
          <p>
            Para borrar las marcaciones cortas marque #84# Terminado el proceso
            anterior escuchara el siguiente mensaje: "El servicio adicional ha
            sido desactivado". Cuelgue su auricular para terminar el proceso.
          </p>
          <br />
          <p>
            Nota: en caso de no efectuar correctamente su activación escuchara:
            "Lo sentimos, usted no ha podido desactivar el servicio adicional
            indicado; inténtelo nuevamente". Estos pasos se deben repetir cada
            vez que desee borrar un número con marcación rápida.
          </p>
        </>
      ),
    },
    5: {
      title: "Número privado",
      content: (
        <>
          <p>
            Tu número no aparecerá en el identificador de llamadas del teléfono
            destino cuando realices llamadas desde tu línea Megafón.
          </p>
          <p className="pop-subtitles">Activación del servicio</p>
          <ol>
            <li>Marque desde su línea Megafón #81#</li>
            <li>
              Escuchará el siguiente mensaje "Su servicio adicional ha sido
              desactivado, gracias". <br />
              Cuelgue su auricular para terminar el proceso.
            </li>
          </ol>
          <p>
            Nota: En caso de no efectuar correctamente su activación, escuchará
            "Lo sentimos, usted no ha podido desactivar el servicio adicional
            indicado. Intentelo nuevamente"
          </p>
          <br />
          <p>
            Es posible que al tener activo este servicio, al realizar una
            llamada al extranjero, el operador receptor de la llamada no la
            acepte. Si es el caso, se recomienda la desactivación de este
            servicio y realizar la llamada nuevamente.
          </p>
        </>
      ),
    },
    6: {
      title: "Opción Número Privado",
      content: (
        <>
          <ul>
            <li>
              Si desea que la persona a quien llama, vea en su identificador de
              llamadas su número Megafón, marque *82 seguido inmediatamente del
              teléfono que desea llamar.
            </li>
            <li>Cuelgue su auricular para terminar el proceso.</li>
            <li>
              Esta función es por llamada, si no marca antes *82, su número
              telefónico no será visible para las personas que llame.
            </li>
          </ul>
        </>
      ),
    },
    7: {
      title: "Bloqueo de Llamadas Anónimas",
      content: (
        <>
          <p className="pop-subtitles">Activación del servicio</p>
          <ol>
            <li>Marque desde su línea Megafón *87</li>
            <li>
              Escuchara el siguiente mensaje "Su nuevo servicio ha sido activado
              con éxito y está listo para ser utilizado". <br />
              Cuelgue el auricular para terminar el proceso.
            </li>
          </ol>
          <p>
            Nota: en caso de no efectuar correctamente su activación, escuchara:
            "Lo sentimos, su servicio no fue activado de manera correcta.
            Intente nuevamente".
          </p>
          <p className="pop-subtitles">Desactivación del servicio</p>
          <ol>
            <li>Marque desde su línea Megafón #87</li>
            <li>
              Escuchara el siguiente mensaje "Su servicio adicional ha sido
              desactivado. Gracias". <br />
              Cuelgue su auricular para terminar el proceso.
            </li>
          </ol>
          <p>
            Nota: En caso de no efectuar correctamente su activación, escuchara
            "Lo sentimos, usted no ha podido desactivar el servicio adicional
            indicado; inténtelo nuevamente".
          </p>
          <br />
        </>
      ),
    },
    8: {
      title: "Bloqueo de Llamadas Entrantes",
      content: (
        <>
          <p>
            Con esta característica cuando alguien llame a su línea escuchará
            tono de ocupado y su aparato nunca timbrará, esta función queda
            activa de manera permanente hasta que sea desactivada.
          </p>
          <p className="pop-subtitles">Activación del servicio</p>
          <ol>
            <li>Marque desde su línea Megafón *78</li>
            <li>
              Escuchara el siguiente mensaje "Su nuevo servicio ha sido activado
              con éxito y está listo para ser utilizado". <br />
              Cuelgue el auricular para terminar el proceso.
            </li>
          </ol>
          <p>
            Nota: en caso de no efectuar correctamente su activación, escuchara:
            "Lo sentimos, su servicio no fue activado de manera correcta.
            Intente nuevamente".
          </p>
          <p className="pop-subtitles">Desactivación del servicio</p>
          <ol>
            <li>Marque desde su línea Megafón #78</li>
            <li>
              Escuchara el siguiente mensaje "Su servicio adicional ha sido
              desactivado. Gracias" <br />
              Cuelgue su auricular para terminar el proceso.
            </li>
          </ol>
          <p>
            Nota: En caso de no efectuar correctamente su activación, escuchara
            "Lo sentimos, usted no ha podido desactivar el servicio adicional
            indicado; inténtelo nuevamente".
          </p>
        </>
      ),
    },
    9: {
      title: "Llamada en espera",
      content: (
        <>
          <ul>
            <li>
              Cuando tengas ocupada tu línea podrás contestar otra llamada.
            </li>
            <li>
              Tomar la llamada entrante sin cortar la primera: Presiona FLASH +
              el número 2
            </li>
            <li>
              Regresar la primera llamada sin cortar la segunda: Vuelva a
              presionar FLASH + el número 2.
            </li>
            <li>
              Cortar la primera llamada y quedarse solo con la entrante: Vuelva
              a presionar FLASH + el número 1.
            </li>
            <li>
              Para ACTIVAR el servicio, solicítelo marcando al 050 desde tu
              línea.
            </li>
            <li>Para desactivarlo acude a cualquiera de nuestros CIS.</li>
          </ul>
        </>
      ),
    },
    10: {
      title: "Bloqueo de destinos",
      content: (
        <>
          <ul>
            <li>
              Bloquea las llamadas a celular con prefijo 044 y 045 así como las
              llamadas de Larga Distancia Nacional y/o Internacional; sin ningún
              costo.
            </li>
            <li>
              Para activar el servicio Solicítalo marcando 050 desde tu línea.
            </li>
          </ul>
        </>
      ),
    },
    11: {
      title: "Línea Adicional",
      content: (
        <>
          <p>
            Línea telefónica con número independiente con una mensualidad
            adicional de $65 pesos.
          </p>
        </>
      ),
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
      <Helmet>
        <title>
          Servicios Adicionales | Megacable | Mejora Tu Telefonía Ilimitada
        </title>
        <meta
          name="description"
          content="Complementa tu servicio de Telefonía Ilimitada Mega con funciones avanzadas y soluciones digitales. Descubre servicios adicionales que mejoran tu experiencia de llamadas."
        />
      </Helmet>
      <div className="general-tabs-container ps-3 pe-3 ps-md-none pe-md-none">
        <div className="text-center titles-adserv">
          <h3 className="small-title-services">Conoce nuestro servicio</h3>
          <h2 className="big-title-services">SERVICIOS ADICIONALES</h2>
          <p className="mt-4">
            Complementa tu servicio de Telefonía Fija Mega con las soluciones
            digitales que tenemos para ti.
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
                    <h4 className="mt-4">{service.title}</h4>{" "}
                    {/* Título de la tarjeta */}
                    <p className="mt-2">{service.description}</p>{" "}
                    {/* Descripción de la tarjeta */}
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
          <div className="swiper-button-prev serv-prev carousel-control-prev"></div>
          <div className="swiper-button-next serv-next carousel-control-next"></div>
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
            <button
              className="btn-action btn-pop-addserv"
              onClick={handleClosePopup}
            >
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
