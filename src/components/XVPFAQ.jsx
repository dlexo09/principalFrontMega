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
    question: "¿Cuál es la diferencia entre Xview y Xview Plus?",
    answer: (
      <p>
        Xview es la forma interactiva de ver la guía de programación en vivo, ya
        que puedes pausar, regresar, reiniciar o grabar un cualquier programa en
        vivo de un canal interactivo. Con Xview también podrás tener acceso a
        contenido On Demand para ver miles de series y películas sin costo en el
        momento que quieras.
        <br />
        <br /> Xview Plus es la evolución de Xview ya que tiene todas las
        bondades de Xview de pausar, reiniciar, regresar o grabar un programa en
        vivo, agregando más beneficios. Con la nueva caja de Xview Plus tu TV se
        convierte en Smart TV. Podrás descargar y acceder a tus aplicaciones
        favoritas, controlar y darle indicaciones a la TV con tu voz, buscar tus
        series y películas de una manera más fácil y rápida en todas tus
        aplicaciones sin necesidad de salir de la caja.
      </p>
    ),
  },
  {
    question: "¿Cuánto cuesta Xview Plus?",
    answer: (
      <p>
        Xview Plus tiene un costo de $50 pesos al mes.
        <br />
        <br />
        *Es indispensable tener el servicio de HD contratado para disfrutar del
        este servicio. El servicio de HD tiene un costo de $50 pesos adicionales
        al mes.
      </p>
    ),
  },
  {
    question: "¿Cómo configuro mi control remoto con mi caja?",
    answer: (
      <p>
        Cuando inicias por primera vez tu caja Xview Plus, aparecerá una
        pantalla para realizar la configuración y deberás de seleccionar
        “Conectar”, presionar el botón “X” de Xview y Volumen+ (V+)
        simultáneamente durante 6 segundos y aparecerá un mensaje de vinculación
        exitosa.
      </p>
    ),
  },
  {
    question: "¿Cómo obtengo un control remoto de voz?",
    answer: (
      <p>
        Si tu equipo no viene con un control remoto por voz, podrás adquirirlo
        en tu CIS más cercano a un precio muy accesible
      </p>
    ),
  },
  {
    question: "¿Cómo conecto mi caja Xview Plus a internet?",
    answer: (
      <p>
        Lo puedes conectar de 2 formas
        <br />
        <br />
        WIFI:
        <br />
        <br />
        Al iniciar tu caja de Xview Plus por primera vez aparecerá una pantalla
        donde te dará la opción de conectar tu caja a wifi. Deberás seleccionar
        tu red de internet, colocar tu contraseña y seleccionar conectar.
        <br />
        <br />
        Si al iniciar tu caja no realizaste el proceso, ingresa a Ajustes,
        selecciona Ajustes de Android, Configuración, internet y red,
        seleccionas tu red, coloca tu contraseña y presiona el botón OK.
        <br />
        <br />
        CABLE ETHERNET:
        <br />
        <br />
        Conecta el cable Ethernet a tu módem de Internet que viene dentro de la
        caja de cartón a la caja de Xview Plus.
      </p>
    ),
  },
  {
    question: "¿Cómo configuro mi cuenta de Gmail a mi caja de Xview Plus?",
    answer: (
      <p>
        Para configurar tu cuenta de Gmail a tu caja ingresa a ajustes, ajustes
        de Android, configuración, cuentas y acceso, agregar tu cuenta actual de
        Gmail. Solo podrás vincular una cuenta de Gmail, si aún no tienes cuenta
        crea una en la página internet de Gmail.
      </p>
    ),
  },
  {
    question:
      "¿Cómo le doy indicaciones a mi caja de Xview Plus con mi control remoto por voz?",
    answer: (
      <p>
        Si cuentas con un control remoto de voz podrás darle indicaciones
        pulsando el botón del centro con bolitas de colores que se encuentra en
        el centro de tu control remoto. Presiónalo una vez y pídele el clima o
        que vaya a algún canal.
      </p>
    ),
  },
  {
    question: "¿Cómo puedo descargar aplicaciones en mi caja de Xview Plus?",
    answer: (
      <p>
        Si deseas descargar más aplicaciones de las que vienen integradas en tu
        caja de Xview Plus, es muy sencillo hacerlo. Una vez que tengas
        configurada tu cuenta de Gmail en la caja, ingresa a la sección de Apps
        y accede a Play Store, busca la aplicación que deseas descargar y da
        click en descargar, una vez descargada ya podrás utilizarla y tenerla
        disponible en tu caja.
        <br />
        <br />
        Puede que algunas aplicaciones que busques no estén disponibles para
        Android TV y algunas de ellas pueden tener costo adicional que será
        cobrado directamente por parte de Android.
      </p>
    ),
  },
  {
    question: "¿Cómo ingreso a mis apps?",
    answer: (
      <p>
        Para ingresar a tus aplicaciones favoritas, ve a la sección de apps,
        selecciona la aplicación a la que deseas acceder y coloca tu usuario y
        contraseña actual.
        <br />
        <br />
        La suscripción de las membresías de las aplicaciones no están incluidas
        en la mensualidad de Xview Plus.
      </p>
    ),
  },
  {
    question: "¿Cómo creo perfiles?",
    answer: (
      <p>
        Si deseas crear un perfil para cada miembro de tu familia ingresa a
        ajustes, perfiles y agregar nuevo perfil. Es importante que esta
        configuración la lleves a cabo desde el perfil del administrador ya que
        es el único que puede realizarlo. Durante la configuración del nuevo
        perfil deberás seleccionar una imagen, colocar el nombre y configurar el
        control de padres y el saldo para las compras dentro de la caja.
      </p>
    ),
  },
  {
    question:
      "¿Qué son las funciones interactivas de Xview Plus y cómo se usan?",
    answer: (
      <>
        <p>
          Xview Plus tiene varias funciones interactivas disponibles para ti:
        </p>
        <br />
        <ul>
          <li>
            PAUSAR Pausa un programa en vivo con el botón de tu control remoto
          </li>
          <li>
            REGRESAR Regresa un canal hasta 48 horas atrás para ver un programa
            que ya pasó
          </li>
          <li>
            REINICIAR Podrás reiniciar un programa ya empezado en la televisión
            en vivo
          </li>
        </ul>
      </>
    ),
  },
];

// Componente principal
const XVPFAQ = () => {
  return (
    <>
      <Helmet>
      <title>Preguntas Frecuentes Xview+ | Megacable | Soluciona tus dudas</title>
      <meta name="description" content="Consulta las preguntas frecuentes sobre Xview+ y resuelve tus dudas sobre configuración, control remoto, aplicaciones y más. ¡Obtén toda la información que necesitas para disfrutar de Xview+ al máximo!" />
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

export default XVPFAQ;
