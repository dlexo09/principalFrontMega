import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./SoporteOnline.css";
import "./Globales.css";
import FAQSoporte from './FAQSoporte'; // Ajusta la ruta según tu estructura de archivos

// Definimos el contenido de cada opción
const faqTelevision = [
  {
    question: "¿Por qué no tengo señal en mi televisión?",
    answer: (
      <p>Primero, revisa que el cable coaxial esté bien conectado al decodificador y a la entrada de la televisión. Verifica también que el televisor esté en la entrada correcta (HDMI o AV). Si todo está conectado correctamente y sigue sin haber señal, prueba desconectar el decodificador de la corriente durante 30 segundos y vuelve a conectarlo. Si aún no tienes señal, verifica si hay interrupciones de servicio en tu área o comunícate con soporte técnico.</p>
    ),
  },
  {
    question: "¿Cómo reinicio mi decodificador?",
    answer: (
      <p>Para reiniciar el decodificador, desconéctalo de la corriente eléctrica y espera unos 30 segundos. Después, vuelve a enchufarlo y espera a que termine el proceso de inicio, lo que puede tardar entre 2 y 5 minutos. Durante este tiempo, el decodificador puede mostrar mensajes o luces que indican que está cargando el sistema. Si el reinicio no soluciona el problema, prueba restablecerlo desde el menú de configuración.</p>
    ),
  },
  {
    question: "¿Qué hago si mi servicio de Xview+ se congela constantemente?",
    answer: (
      <p>Cuando el servicio se congela, es probable que sea un problema de conexión a internet. Revisa la velocidad de tu red; para Xview+ se recomienda al menos 20 Mbps. Si estás conectado por Wi-Fi, considera usar cable Ethernet para mayor estabilidad. Reinicia tanto el módem como el decodificador. Si el problema sigue, verifica que no haya otros dispositivos consumiendo mucho ancho de banda en tu red.</p>
    ),
  },
  {
    question: "¿Por qué no puedo ver mis grabaciones en Xview+?",
    answer: (
      <p>Primero, asegúrate de que el decodificador tenga suficiente espacio disponible para almacenar las grabaciones. Si aparece un mensaje de error, puede que la grabación haya fallado. Intenta reiniciar el decodificador para actualizar la lista de grabaciones. Si el problema persiste, verifica si el dispositivo de almacenamiento está conectado correctamente o si necesita ser formateado desde el menú de configuración.</p>
    ),
  },
  {
    question: "¿Qué hago si no escucho sonido en algunos canales?",
    answer: (
      <p>Revisa que el volumen esté activado tanto en el decodificador como en el televisor. Cambia a otros canales para comprobar si el problema ocurre solo en uno. Si no escuchas sonido en ninguno, verifica las conexiones de audio. Si estás usando un sistema de sonido externo, revisa las configuraciones del dispositivo. También puedes restablecer el audio desde el menú del decodificador.</p>
    ),
  },
  {
    question: "¿Cómo soluciono problemas de conexión en la app Xview+?",
    answer: (
      <p>Primero, verifica que tu dispositivo esté conectado a una red Wi-Fi estable. Cierra la app y vuelve a abrirla. Si sigue sin funcionar, asegúrate de que tienes la versión más reciente instalada. Si el problema persiste, desinstala la aplicación y vuelve a instalarla desde la tienda de aplicaciones. También puedes probar reiniciando tu módem y el dispositivo donde usas la app.</p>
    ),
  },
  {
    question: "¿Qué hago si la guía de programación no carga o está desactualizada?",
    answer: (
      <p>Reinicia el decodificador para que la guía se actualice. Esto puede tardar unos minutos. Si sigue sin cargarse, verifica que el decodificador esté conectado a internet. En algunos casos, es necesario restablecer la configuración de red del decodificador para resolver el problema. Si esto no funciona, comunícate con soporte técnico para recibir asistencia.</p>
    ),
  },
  {
    question: "¿Por qué mi control remoto no responde?",
    answer: (
      <p>Cambia las baterías por unas nuevas y asegúrate de que estén bien colocadas. Si el control sigue sin responder, intenta sincronizarlo nuevamente con el decodificador siguiendo las instrucciones del manual. En algunos modelos, es necesario presionar simultáneamente ciertos botones para sincronizarlo. Si esto no funciona, contacta a soporte para obtener un control remoto de reemplazo.</p>
    ),
  },
  {
    question: "¿Cómo reporto una falla técnica en mi servicio de televisión?",
    answer: (
      <p>Puedes reportar una falla llamando al 33 9690 0000 o a traves nuestro WhatssApp <a href="https://api.whatsapp.com/send?phone=523396900001" target="_blank">33 9690 0001</a>. Si el fallo requiere atención técnica, el equipo de soporte agendará una visita para revisar tu equipo.</p>
    ),
  },
  {
    question: "¿Qué debo hacer si la imagen se ve distorsionada o pixelada?",
    answer: (
      <p>La imagen distorsionada suele deberse a una señal débil o interferencias. Revisa que los cables estén bien conectados y no tengan daños visibles. Si estás usando un divisor de señal (splitter), intenta conectar el cable directamente al decodificador. Reinicia el equipo para restablecer la señal. Si el problema persiste, solicita asistencia técnica.</p>
    ),
  },
  
];

const faqInternet = [
  {
    question: "¿Cómo puedo mejorar la velocidad de mi internet?",
    answer: (
      <p>Para mejorar la velocidad de tu internet, asegúrate de que el router esté en una ubicación central y libre de obstáculos.</p>
    ),
  },
  {
    question: "¿Qué debo hacer si no tengo conexión a internet?",
    answer: (
      <p>Reinicia el router y verifica que todos los cables estén correctamente conectados.</p>
    ),
  },
  // Agrega más preguntas y respuestas aquí
];

const faqTelefonia = [
  {
    question: "¿Cómo puedo solucionar problemas de llamadas no recibidas?",
    answer: (
      <p>Verifica que tu teléfono esté correctamente configurado y que no esté en modo avión.</p>
    ),
  },
  {
    question: "¿Qué debo hacer si no tengo señal en mi teléfono?",
    answer: (
      <p>Verifica que estés en un área con cobertura y que tu teléfono esté correctamente configurado.</p>
    ),
  },
  // Agrega más preguntas y respuestas aquí
];

const options = {
  app: {
    label: "Televisión",
    content: (
      <div className="container-fluid p-0">
        <FAQSoporte faqs={faqTelevision} />
      </div>
    ),
  },
  comercios: {
    label: "Internet",
    content: (
      <div className="container sop-general-container">
        <FAQSoporte faqs={faqInternet} />
      </div>
    ),
  },
  cargoAutomatico: {
    label: "Telefonía",
    content: (
      <div className="container-fluid p-0">
        <FAQSoporte faqs={faqTelefonia} />
      </div>
    ),
  },
};

// Componente para los botones del switch
const SwitchButton = ({
  option,
  selectedOption,
  handleOptionChange,
  label,
}) => (
  <button
    type="button"
    className={`switch-general-btn switch-fdpago-btn ${selectedOption === option ? "pack-btn-active" : "pack-btn-inactive"
      } btn-lg mx-2`}
    onClick={() => handleOptionChange(option)}
  >
    {label}
  </button>
);

// Componente principal
const SoporteOnline = () => {
  const [selectedOption, setSelectedOption] = useState("app");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="general-tabs-container">
      <div className="text-center">
        <h3 className="small-title-services">CONSULTA NUESTRA GUÍA</h3>
        <h2 className="big-title-services">Soporte técnico</h2>
      </div>

      {/* Switch */}
      <div className="container d-flex flex-column flex-md-row justify-content-center align-items-center mt-5 btn-container-sop">
        {Object.entries(options).map(([option, { label }]) => (
          <SwitchButton
            key={option}
            option={option}
            selectedOption={selectedOption}
            handleOptionChange={handleOptionChange}
            label={label}
          />
        ))}
      </div>

      {/* Mostrar información dependiendo de la opción seleccionada */}
      <div className="mt-5">{options[selectedOption].content}</div>
    </div>
  );
};

export default SoporteOnline;