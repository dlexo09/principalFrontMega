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
    question: "¿Por qué mi internet de Megacable está lento?",
    answer: (
      <p>Revisa si hay muchos dispositivos conectados a la red al mismo tiempo, ya que esto puede reducir la velocidad. También verifica tu velocidad en <a href="https://www.speedtest.net/es" target="_blank">speedtest.net</a> para asegurarte de que corresponda con el plan contratado. Si la velocidad es baja, reinicia el módem desconectándolo por 30 segundos. Si el problema persiste, contacta a soporte técnico para revisar la conexión.</p>
    ),
  },
  {
    question: "¿Cómo reinicio mi módem?",
    answer: (
      <p>Desconecta el módem de la corriente eléctrica y espera al menos 30 segundos antes de volver a conectarlo. Espera unos minutos a que las luces del módem se estabilicen. Si el problema persiste después del reinicio, revisa las luces del módem; si alguna parpadea en rojo, puede indicar un fallo en la conexión.</p>
    ),
  },
  {
    question: "¿Por qué se corta mi conexión de internet con frecuencia?",
    answer: (
      <p>Los cortes de conexión pueden deberse a interferencias en la señal Wi-Fi, especialmente si el módem está lejos de tus dispositivos. Acércate al módem o usa un cable Ethernet para mayor estabilidad. Si la conexión sigue fallando, verifica si hay mantenimiento en tu área o contacta a soporte técnico.</p>
    ),
  },
  {
    question: "¿Cómo cambio la contraseña de mi red Wi-Fi?",
    answer: (
      <p>Accede a la configuración del módem escribiendo 192.168.0.1 en el navegador. Inicia sesión con tu usuario y contraseña de administrador (revisa la etiqueta del módem si no la sabes). En la sección de configuración inalámbrica, busca la opción para cambiar la contraseña y asegúrate de guardar los cambios.</p>
    ),
  },
  {
    question: "¿Por qué no puedo conectarme a mi red Wi-Fi?",
    answer: (
      <p>Primero, verifica que el módem esté encendido y funcionando correctamente. Revisa las luces del módem; si la de internet está apagada o en rojo, puede haber un fallo en el servicio. Si todo parece estar bien, olvida la red en tu dispositivo y vuelve a conectarte introduciendo la contraseña.</p>
    ),
  },
  {
    question: "¿Qué hago si mi módem no enciende?",
    answer: (
      <p>Asegúrate de que el módem esté correctamente conectado a la corriente. Prueba con otro enchufe para descartar que el problema sea el toma corriente. Si el módem sigue sin encender, es probable que el equipo necesite reemplazo. Comunícate con soporte técnico para solicitar asistencia.</p>
    ),
  },
  {
    question: "¿Cómo puedo mejorar la señal Wi-Fi en mi casa?",
    answer: (
      <p>Coloca el módem en una zona central, lejos de paredes gruesas o electrodomésticos que puedan causar interferencias. Si tu casa es grande, considera usar repetidores Wi-Fi o dispositivos Mesh para extender la señal. También verifica que no haya dispositivos desconocidos conectados a tu red.</p>
    ),
  },
  {
    question: "¿Por qué mi internet funciona solo en algunos dispositivos?",
    answer: (
      <p>Esto puede ocurrir si el dispositivo no está bien configurado o si la red asigna direcciones IP limitadas. Reinicia el módem y verifica si el dispositivo se conecta nuevamente. También asegúrate de que el dispositivo no tenga restricciones de red activadas.

</p>
    ),
  },
  {
    question: "¿Cómo configuro el control parental en mi red Wi-Fi?",
    answer: (
      <p>Accede a la configuración del módem escribiendo 192.168.0.1 en tu navegador. En el menú de configuración, busca la opción de control parental. Desde ahí, puedes establecer horarios de acceso a internet y bloquear ciertas páginas para dispositivos específicos.</p>
    ),
  },
  {
    question: "¿Cómo reporto una falla en mi servicio de internet?",
    answer: (
      <p>Puedes reportar una falla llamando al 33 9690 0000 o a traves nuestro WhatssApp <a href="https://api.whatsapp.com/send?phone=523396900001" target="_blank">33 9690 0001</a>. Si el fallo requiere atención técnica, el equipo de soporte agendará una visita para revisar tu equipo.</p>
    ),
  },
  
 
];

const faqTelefonia = [
  {
    question: "¿Por qué no puedo hacer llamadas desde mi línea de teléfono fijo?",
    answer: (
      <p>Revisa que el teléfono esté correctamente conectado al módem y que el módem tenga encendida la luz de "Teléfono" o "Phone". Si la luz está apagada o parpadea, reinicia el módem. Desconéctalo durante 30 segundos y vuelve a conectarlo. Si el problema continúa, podría ser una falla en el servicio y debes comunicarte con soporte técnico.</p>
    ),
  },
  {
    question: "¿Cómo reinicio mi servicio de telefonía?",
    answer: (
      <p>Desconecta el módem de la corriente eléctrica y espera 30 segundos. Luego vuelve a conectarlo y espera unos minutos a que las luces se estabilicen. Verifica que la luz de "Teléfono" esté encendida. Si no funciona, contacta a soporte técnico para recibir asistencia.</p>
    ),
  },
  {
    question: "¿Por qué no recibo llamadas entrantes?",
    answer: (
      <p>Asegúrate de que el cable del teléfono esté bien conectado al puerto de "Teléfono" en el módem. Verifica también que el servicio no esté bloqueado por configuraciones de desvío de llamadas o restricciones. Si todo está bien, prueba reiniciando el módem.</p>
    ),
  },
  {
    question: "¿Cómo configuro el buzón de voz?",
    answer: (
      <p>Para configurar el buzón de voz, marca el número correspondiente en tu línea (verifícalo en el manual del servicio o llamando a soporte). Sigue las instrucciones para crear tu contraseña y grabar un mensaje personalizado. Una vez configurado, puedes acceder al buzón desde tu línea o de forma remota.</p>
    ),
  },
  {
    question: "¿Por qué mi teléfono no suena cuando me llaman?",
    answer: (
      <p>Revisa que el volumen del timbre no esté apagado o muy bajo. Verifica también que el teléfono esté correctamente conectado al módem y que el servicio esté activo. Si el problema persiste, prueba con otro teléfono para descartar que el equipo esté fallando.</p>
    ),
  },
  {
    question: "¿Cómo activo el servicio de llamada en espera?",
    answer: (
      <p>El servicio de llamada en espera generalmente está activado por defecto. Para utilizarlo, presiona el botón de "Flash" o cuelga rápidamente para atender la segunda llamada. Si no funciona, verifica en la configuración de tu servicio o comunícate con soporte para activarlo.</p>
    ),
  },
  {
    question: "¿Por qué escucho ruido o interferencia en la línea?",
    answer: (
      <p>El ruido puede deberse a interferencias o a un problema con el cableado. Verifica que los cables estén en buen estado y correctamente conectados. Si el problema continúa, reinicia el módem y prueba con otro teléfono. Si el ruido persiste, contacta a soporte técnico para revisar tu línea.</p>
    ),
  },
  {
    question: "¿Qué hago si mi módem no tiene la luz de 'Teléfono' encendida?",
    answer: (
      <p>Si la luz de "Teléfono" está apagada, significa que el servicio no está disponible. Reinicia el módem y espera unos minutos. Si la luz sigue apagada, puede tratarse de una falla en el servicio, y deberás comunicarte con el centro de atención para que revisen tu línea.</p>
    ),
  },
  {
    question: "¿Cómo desvío las llamadas a otro número?",
    answer: (
      <p>Para activar el desvío de llamadas, marca el código correspondiente desde tu teléfono (consulta el manual del servicio). Ingresa el número al que deseas desviar las llamadas y cuelga. Para desactivarlo, marca el código de cancelación.</p>
    ),
  },
  {
    question: "¿Cómo reporto una falla en mi línea de teléfono?",
    answer: (
      <p>Puedes reportar una falla llamando al 33 9690 0000 o a traves nuestro WhatssApp <a href="https://api.whatsapp.com/send?phone=523396900001" target="_blank">33 9690 0001</a>. Si el fallo requiere atención técnica, el equipo de soporte agendará una visita para revisar tu equipo.</p>

    ),
  },
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