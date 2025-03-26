import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./SoporteOnline.css";
import "./Globales.css";
import FAQSoporte from "./FAQSoporte";

const faqGeneral = [
  {
    question:
      "¿Qué documentos necesito y cómo puedo contratar los servicios de Megacable?",
    answer: (
      <>
        <p>
          Para contratar los servicios de Megacable, necesitas presentar una
          identificación oficial vigente (INE, pasaporte, licencia de manejo o
          cédula profesional) y un comprobante de domicilio con menos de 3 meses
          de antigüedad (como un recibo de luz o agua). Puedes contratar de las
          siguientes formas:
        </p>
        <br />
        <ul>
          <li><b>Página web:</b> Ingresa a <a href="megacable.com.mx">mega.mx</a> megacable.com.mx, elige un paquete, deja tus datos y un asesor te contactará para completar el proceso.</li>
        <li><b>Visita de un asesor a domicilio: </b>Un asesor te visitará con los planes y promociones vigentes, y podrás firmar el contrato y realizar el pago en tu domicilio.</li>
        <li><b>Centro Integral de Servicios (CIS) o punto de venta:</b> Acude a la sucursal más cercana con tus documentos, donde un asesor te ayudará a elegir un plan, firmar el contrato y realizar el pago.</li>

        </ul>
      </>
    ),
  },
  {
    question:
      "¿Qué opciones de identificación oficial y comprobante de domicilio son válidas?",
    answer: (
      <>
       <p>Como identificación oficial, puedes presentar cualquiera de los siguientes documentos, siempre y cuando estén vigentes:</p>
      <br />
      <ul>
        <li>INE (credencial para votar).</li>
        <li>Pasaporte.</li>
        <li>Licencia de manejo.</li>
        <li>Cédula profesional.</li>
      </ul>
      
      </>
    ),
  },
  {
    question:
      "¿Qué debo hacer si contrato a través de la página web o con un asesor a domicilio?",
    answer: (
      <>
       <ul>
        <li><b>Contratación en página web:</b> Debes ser mayor de edad, tener tu identificación oficial y comprobante de domicilio a mano, llenar el folio de venta, firmar el contrato y realizar el pago (si aplica). Después de dejar tus datos, un asesor te contactará para continuar con el proceso.</li>
        <li><b>Contratación con asesor a domicilio:</b> El asesor te visitará con los planes y promociones vigentes. Deberás mostrar tu identificación y comprobante de domicilio, elegir un plan, firmar el contrato y realizar el pago (si aplica). Luego, se agendará la visita del instalador.</li>
       </ul>
      </>
    ),
  },
  {
    question:
      "¿Qué debo hacer para cancelar un servicio de Megacable?",
    answer: (
      <>
       <p>Para cancelar un servicio de Megacable, debes acudir al Centro Integral de Servicios (CIS) de tu preferencia. Un ejecutivo te recibirá y solicitará los siguientes requisitos:</p>
        <br />
        <ul>
          <li><b>No tener adeudos:</b> El servicio a suspender debe estar al corriente de pago.</li>
          <li><b>Entregar todos los equipos completos:</b> Esto incluye fuentes de poder, control remoto y cualquier otro equipo relacionado con el servicio que vas a suspender.</li>
          <li><b>Identificación oficial vigente:</b> Puedes presentar INE, pasaporte, licencia de manejo o cédula profesional.</li>
        </ul>
      
      </>
    ),
  },
  {
    question:
      "¿Qué sucede si no puedo presentarme personalmente a cancelar el servicio?",
    answer: (
      <>
       <p>Si no puedes presentarte personalmente a cancelar el servicio, un tercero puede realizar el trámite en tu nombre, siempre y cuando presente:</p>
      <br />
      <ul>
        <li>Una <b>carta poder simple</b> firmada por el titular del servicio.</li>
        <li>Copias de la <b>identificación oficial</b> tanto del titular como del tercero.</li>
      </ul>
      </>
    ),
  },
  {
    question:
      " ¿Qué información se incluye en el cuestionario de suspensión?",
    answer: (
      <>
       <p>El cuestionario de suspensión incluye las siguientes preguntas:</p>
       <br />
       <ul>
        <li>¿Qué servicios desea suspender?</li>
        <li>¿Cuál es el motivo por el cual desea cancelar el servicio?</li>
        <li>¿El promotor le ofreció alguna alternativa a su servicio?</li>
        <li>Calificación general de los servicios brindados por Megacable.</li>
        <li>¿Desea agregar algún comentario final?</li>
       </ul>
       <br />
       <p>Este documento, una vez firmado por el cliente y el promotor, sirve como comprobante de que los servicios han sido suspendidos y que los equipos de Megacable han sido devueltos.</p>
      </>
    ),
  },
  {
    question:
      "¿Qué pasa durante el proceso de cancelación en el CIS?",
    answer: (
      <>
       <p>Durante el proceso de cancelación en el CIS:</p>
       <br />
       <ul>
        <li>El ejecutivo revisará que los equipos (como control remoto, módem, teléfono, etc.) estén en buen estado. Si falta algún equipo o está dañado, se generará un costo adicional.</li>
        <li>El ejecutivo realizará un <b>cuestionario de suspensión</b>, que se captura automáticamente en el sistema y se imprime para que lo firmes.</li>
        <li>Una vez firmado el cuestionario, se procesará la cancelación en el sistema.</li>
        <li>Recibirás un <b>comprobante de suspensión de servicios</b> y un recibo de equipo recuperado, que avala que los equipos fueron entregados correctamente.</li>
       </ul>
      </>
    ),
  },
  {
    question:
      "¿En qué casos puedo solicitar una compensación o bonificación por interrupción del servicio?",
    answer: (
      <>
       <p>Puedes solicitar una compensación o bonificación si experimentas una interrupción del servicio por más de 24 horas después de haberlo reportado. Esto aplica en los siguientes casos:</p>
      <br />
      <ul>
        <li><b>Causas atribuibles al operador:</b> Fallas técnicas o errores del proveedor.</li>
        <li><b>Casos fortuitos o de fuerza mayor:</b> Situaciones imprevistas como desastres naturales.</li>
        <li><b>Causas previsibles que afecten de manera generalizada:</b> Problemas que impacten significativamente la prestación del servicio.</li>
      </ul>
      <br />
      <p>Una vez que se revisa tu solicitud, si procede, recibirás la compensación y/o bonificación correspondiente.</p>
      </>
    ),
  },
  {
    question:
      "¿Cuándo y cómo se aplica la compensación o bonificación?",
    answer: (
      <>
       <ul>
        <li><b>¿Cuándo?:</b> La compensación o bonificación se aplicará en la siguiente fecha de corte.</li>
        <li><b>¿Cómo?: </b>Se reflejará en tu estado de cuenta, factura o recarga, dependiendo del esquema de pago:</li>
       <ul>
        <li><b>Esquema pospago:</b> La compensación se efectuará por los medios que pacten las partes.</li>
        <li><b>Esquema prepago:</b> La bonificación se realizará directamente en el servicio, y el operador te informará a través de medios electrónicos, digitales o cualquier otra tecnología disponible.</li>
       </ul>
       </ul>
      </>
    ),
  },
  {
    question:
      "¿Qué debo hacer para iniciar el proceso de compensación?",
    answer: (
      <>
       <p>Para iniciar el proceso de compensación, debes contactar al operador vía telefónica y reportar el inconveniente (ya sea una interrupción del servicio por más de 24 horas o cargos indebidos). El operador revisará tu solicitud y determinará si procede la compensación o bonificación.</p>
      </>
    ),
  },
  {
    question:
      "¿Qué debo hacer si me roban el equipo o sufre algún siniestro?",
    answer: (
      <>
       <p>Si tu equipo fue robado o sufrió algún siniestro, debes:</p>
       <br />
       <ul>
        <li><b>Dar aviso inmediato a Megacable</b> en un plazo no mayor a 24 horas después del evento para solicitar la reposición del equipo y suspender el cobro del servicio hasta que tengas otro equipo.</li>
        <li><b>Realizar la denuncia correspondiente</b> ante una autoridad competente.</li>
        <li>Presentar los siguientes documentos:</li>
        <ul>
          <li>Original y copia de la constancia de robo o siniestro emitida por la autoridad.</li>
          <li>Número de cliente.</li>
          <li>Copia de la identificación oficial del cliente (o del titular y de quien recibirá el equipo, si no es el titular).</li>
        </ul>
       </ul>
       <br />
       <p>Un asesor de atención al cliente revisará la solicitud. Si procede, se realizará la reposición del equipo; de lo contrario, se aplicará el cargo correspondiente.</p>
      </>
    ),
  },
  {
    question:
      "¿Qué debo hacer si necesito cambiar mi domicilio?",
    answer: (
      <>
       <p>Para solicitar un cambio de domicilio, debes:</p>
       <br />
       <ul>
        <li>Verificar si hay cobertura en el nuevo domicilio.</li>
        <li>Pagar los días transcurridos de tu plan actual hasta el día del trámite, más $300 pesos para cubrir el costo de la instalación.</li>
        <li>Se agendará una visita para la instalación en el nuevo domicilio, y un técnico instalador acudirá en la fecha acordada.</li>
       </ul>
      </>
    ),
  },
  {
    question:
      "¿Qué otros gastos están relacionados con la prestación del servicio?",
    answer: (
      <>
       <p>Algunos de los otros gastos relacionados con la prestación del servicio incluyen:</p>
       <br />
       <ul>
        <li><b>Cobro de instalación de TV adicional:</b> $100.00.</li>
        <li><b>Cambio de lugar de TV y/o cable módem:</b> $200.00.</li>
        <li><b>Cambio de número telefónico:</b> $50.00.</li>
        <li><b>Línea telefónica residencial adicional:</b> $100.00.</li>
        <li><b>Línea telefónica empresarial adicional:</b> $200.00.</li>
        <li><b>Extensión telefónica:</b> $230.00.</li>
        <li><b>Cobro por pago tardío:</b> $70.00.</li>
        <li><b>Cobro por cambio de domicilio:</b> $300.00.</li>
       </ul>
      </>
    ),
  },
  {
    question:
      "¿Qué pasa si no doy aviso de robo o siniestro dentro de las 24 horas?",
    answer: (
      <>
       <p>Si no das aviso a Megacable dentro de las 24 horas posteriores al robo o siniestro, es posible que no se suspenda el cobro del servicio ni se proceda con la reposición del equipo. Por lo tanto, es crucial reportar el incidente de manera inmediata.</p>
      </>
    ),
  },
  {
    question:
      "¿Qué documentos necesito para solicitar la reposición de equipo por robo o siniestro?",
    answer: (
      <>
       <p>Para solicitar la reposición de equipo por robo o siniestro, necesitas presentar:</p>
       <br />
       <ul>
        <li>Original y copia de la constancia de robo o siniestro emitida por una autoridad competente.</li>
        <li>Número de cliente.</li>
        <li>Copia de la identificación oficial del cliente (o del titular y de quien recibirá el equipo, si no es el titular).</li>
       </ul>
      </>
    ),
  },
  {
    question:
      "¿Cómo se realiza el proceso de instalación de los servicios de Megacable?",
    answer: (
      <>
       <p>El proceso de instalación de los servicios de Megacable incluye los siguientes pasos:</p>
       <br />
       <ul>
        <li>Recibirás una llamada para agendar la fecha de instalación.</li>
        <li>En la fecha acordada, un técnico instalador te visitará para realizar la instalación.</li>
        <li>El técnico te informará sobre la ruta del cableado y te pedirá que autorices la instalación o indiques los cambios de servicio y equipos deseados.</li>
        <li>Finalmente, firmarás un documento de conformidad y contestarás una breve encuesta. Después de esto, podrás disfrutar del mejor servicio interactivo.</li>
       </ul>
       </>
    ),
  },
  {
    question:
      "¿En qué horarios se realizan las visitas de instalación?",
    answer: (
      <>
       <p>Las visitas de instalación se realizan en la fecha acordada durante los siguientes horarios:</p>
        <br />
        <ul>
          <li><b>De lunes a sábado:</b> De 9:00 a 19:00 horas.</li>
          <li><b>Domingos:</b> de 9:00 a 16:00 horas.</li>
        </ul>
      </>
    ),
  },
  {
    question:
      "¿Qué debo hacer durante la visita del técnico instalador?",
    answer: (
      <>
       <p>Durante la visita del técnico instalador, debes:</p>
       <br />
       <ul>
        <li>Autorizar la instalación del cableado o indicar los cambios de servicio y equipos que desees.</li>
        <li>Firmar un documento de conformidad una vez que la instalación esté completa.</li>
        <li>Contestar una breve encuesta sobre el servicio recibido.</li>
       </ul>
      </>
    ),
  },
];

const faqTelevision = [
  {
    question: "¿Por qué no tengo señal en mi televisión?",
    answer: (
      <p>
        Primero, revisa que el cable coaxial esté bien conectado al
        decodificador y a la entrada de la televisión. Verifica también que el
        televisor esté en la entrada correcta (HDMI o AV). Si todo está
        conectado correctamente y sigue sin haber señal, prueba desconectar el
        decodificador de la corriente durante 30 segundos y vuelve a conectarlo.
        Si aún no tienes señal, verifica si hay interrupciones de servicio en tu
        área o comunícate con soporte técnico.
      </p>
    ),
  },
  {
    question: "¿Cómo reinicio mi decodificador?",
    answer: (
      <p>
        Para reiniciar el decodificador, desconéctalo de la corriente eléctrica
        y espera unos 30 segundos. Después, vuelve a enchufarlo y espera a que
        termine el proceso de inicio, lo que puede tardar entre 2 y 5 minutos.
        Durante este tiempo, el decodificador puede mostrar mensajes o luces que
        indican que está cargando el sistema. Si el reinicio no soluciona el
        problema, prueba restablecerlo desde el menú de configuración.
      </p>
    ),
  },
  {
    question: "¿Qué hago si mi servicio de Xview+ se congela constantemente?",
    answer: (
      <p>
        Cuando el servicio se congela, es probable que sea un problema de
        conexión a internet. Revisa la velocidad de tu red; para Xview+ se
        recomienda al menos 20 Mbps. Si estás conectado por Wi-Fi, considera
        usar cable Ethernet para mayor estabilidad. Reinicia tanto el módem como
        el decodificador. Si el problema sigue, verifica que no haya otros
        dispositivos consumiendo mucho ancho de banda en tu red.
      </p>
    ),
  },
  {
    question: "¿Por qué no puedo ver mis grabaciones en Xview+?",
    answer: (
      <p>
        Primero, asegúrate de que el decodificador tenga suficiente espacio
        disponible para almacenar las grabaciones. Si aparece un mensaje de
        error, puede que la grabación haya fallado. Intenta reiniciar el
        decodificador para actualizar la lista de grabaciones. Si el problema
        persiste, verifica si el dispositivo de almacenamiento está conectado
        correctamente o si necesita ser formateado desde el menú de
        configuración.
      </p>
    ),
  },
  {
    question: "¿Qué hago si no escucho sonido en algunos canales?",
    answer: (
      <p>
        Revisa que el volumen esté activado tanto en el decodificador como en el
        televisor. Cambia a otros canales para comprobar si el problema ocurre
        solo en uno. Si no escuchas sonido en ninguno, verifica las conexiones
        de audio. Si estás usando un sistema de sonido externo, revisa las
        configuraciones del dispositivo. También puedes restablecer el audio
        desde el menú del decodificador.
      </p>
    ),
  },
  {
    question: "¿Cómo soluciono problemas de conexión en la app Xview+?",
    answer: (
      <p>
        Primero, verifica que tu dispositivo esté conectado a una red Wi-Fi
        estable. Cierra la app y vuelve a abrirla. Si sigue sin funcionar,
        asegúrate de que tienes la versión más reciente instalada. Si el
        problema persiste, desinstala la aplicación y vuelve a instalarla desde
        la tienda de aplicaciones. También puedes probar reiniciando tu módem y
        el dispositivo donde usas la app.
      </p>
    ),
  },
  {
    question:
      "¿Qué hago si la guía de programación no carga o está desactualizada?",
    answer: (
      <p>
        Reinicia el decodificador para que la guía se actualice. Esto puede
        tardar unos minutos. Si sigue sin cargarse, verifica que el
        decodificador esté conectado a internet. En algunos casos, es necesario
        restablecer la configuración de red del decodificador para resolver el
        problema. Si esto no funciona, comunícate con soporte técnico para
        recibir asistencia.
      </p>
    ),
  },
  {
    question: "¿Por qué mi control remoto no responde?",
    answer: (
      <p>
        Cambia las baterías por unas nuevas y asegúrate de que estén bien
        colocadas. Si el control sigue sin responder, intenta sincronizarlo
        nuevamente con el decodificador siguiendo las instrucciones del manual.
        En algunos modelos, es necesario presionar simultáneamente ciertos
        botones para sincronizarlo. Si esto no funciona, contacta a soporte para
        obtener un control remoto de reemplazo.
      </p>
    ),
  },
  {
    question: "¿Cómo reporto una falla técnica en mi servicio de televisión?",
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
  {
    question: "¿Qué debo hacer si la imagen se ve distorsionada o pixelada?",
    answer: (
      <p>
        La imagen distorsionada suele deberse a una señal débil o
        interferencias. Revisa que los cables estén bien conectados y no tengan
        daños visibles. Si estás usando un divisor de señal (splitter), intenta
        conectar el cable directamente al decodificador. Reinicia el equipo para
        restablecer la señal. Si el problema persiste, solicita asistencia
        técnica.
      </p>
    ),
  },
];

const faqInternet = [
  {
    question: "¿Por qué mi internet de Megacable está lento?",
    answer: (
      <p>
        Revisa si hay muchos dispositivos conectados a la red al mismo tiempo,
        ya que esto puede reducir la velocidad. También verifica tu velocidad en{" "}
        <a href="https://www.speedtest.net/es" target="_blank">
          speedtest.net
        </a>{" "}
        para asegurarte de que corresponda con el plan contratado. Si la
        velocidad es baja, reinicia el módem desconectándolo por 30 segundos. Si
        el problema persiste, contacta a soporte técnico para revisar la
        conexión.
      </p>
    ),
  },
  {
    question: "¿Cómo reinicio mi módem?",
    answer: (
      <p>
        Desconecta el módem de la corriente eléctrica y espera al menos 30
        segundos antes de volver a conectarlo. Espera unos minutos a que las
        luces del módem se estabilicen. Si el problema persiste después del
        reinicio, revisa las luces del módem; si alguna parpadea en rojo, puede
        indicar un fallo en la conexión.
      </p>
    ),
  },
  {
    question: "¿Por qué se corta mi conexión de internet con frecuencia?",
    answer: (
      <p>
        Los cortes de conexión pueden deberse a interferencias en la señal
        Wi-Fi, especialmente si el módem está lejos de tus dispositivos.
        Acércate al módem o usa un cable Ethernet para mayor estabilidad. Si la
        conexión sigue fallando, verifica si hay mantenimiento en tu área o
        contacta a soporte técnico.
      </p>
    ),
  },
  {
    question: "¿Cómo cambio la contraseña de mi red Wi-Fi?",
    answer: (
      <p>
        Accede a la configuración del módem escribiendo 192.168.0.1 en el
        navegador. Inicia sesión con tu usuario y contraseña de administrador
        (revisa la etiqueta del módem si no la sabes). En la sección de
        configuración inalámbrica, busca la opción para cambiar la contraseña y
        asegúrate de guardar los cambios.
      </p>
    ),
  },
  {
    question: "¿Por qué no puedo conectarme a mi red Wi-Fi?",
    answer: (
      <p>
        Primero, verifica que el módem esté encendido y funcionando
        correctamente. Revisa las luces del módem; si la de internet está
        apagada o en rojo, puede haber un fallo en el servicio. Si todo parece
        estar bien, olvida la red en tu dispositivo y vuelve a conectarte
        introduciendo la contraseña.
      </p>
    ),
  },
  {
    question: "¿Qué hago si mi módem no enciende?",
    answer: (
      <p>
        Asegúrate de que el módem esté correctamente conectado a la corriente.
        Prueba con otro enchufe para descartar que el problema sea el toma
        corriente. Si el módem sigue sin encender, es probable que el equipo
        necesite reemplazo. Comunícate con soporte técnico para solicitar
        asistencia.
      </p>
    ),
  },
  {
    question: "¿Cómo puedo mejorar la señal Wi-Fi en mi casa?",
    answer: (
      <p>
        Coloca el módem en una zona central, lejos de paredes gruesas o
        electrodomésticos que puedan causar interferencias. Si tu casa es
        grande, considera usar repetidores Wi-Fi o dispositivos Mesh para
        extender la señal. También verifica que no haya dispositivos
        desconocidos conectados a tu red.
      </p>
    ),
  },
  {
    question: "¿Por qué mi internet funciona solo en algunos dispositivos?",
    answer: (
      <p>
        Esto puede ocurrir si el dispositivo no está bien configurado o si la
        red asigna direcciones IP limitadas. Reinicia el módem y verifica si el
        dispositivo se conecta nuevamente. También asegúrate de que el
        dispositivo no tenga restricciones de red activadas.
      </p>
    ),
  },
  {
    question: "¿Cómo configuro el control parental en mi red Wi-Fi?",
    answer: (
      <p>
        Accede a la configuración del módem escribiendo 192.168.0.1 en tu
        navegador. En el menú de configuración, busca la opción de control
        parental. Desde ahí, puedes establecer horarios de acceso a internet y
        bloquear ciertas páginas para dispositivos específicos.
      </p>
    ),
  },
  {
    question: "¿Cómo reporto una falla en mi servicio de internet?",
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

const faqTelefonia = [
  {
    question:
      "¿Por qué no puedo hacer llamadas desde mi línea de teléfono fijo?",
    answer: (
      <p>
        Revisa que el teléfono esté correctamente conectado al módem y que el
        módem tenga encendida la luz de "Teléfono" o "Phone". Si la luz está
        apagada o parpadea, reinicia el módem. Desconéctalo durante 30 segundos
        y vuelve a conectarlo. Si el problema continúa, podría ser una falla en
        el servicio y debes comunicarte con soporte técnico.
      </p>
    ),
  },
  {
    question: "¿Cómo reinicio mi servicio de telefonía?",
    answer: (
      <p>
        Desconecta el módem de la corriente eléctrica y espera 30 segundos.
        Luego vuelve a conectarlo y espera unos minutos a que las luces se
        estabilicen. Verifica que la luz de "Teléfono" esté encendida. Si no
        funciona, contacta a soporte técnico para recibir asistencia.
      </p>
    ),
  },
  {
    question: "¿Por qué no recibo llamadas entrantes?",
    answer: (
      <p>
        Asegúrate de que el cable del teléfono esté bien conectado al puerto de
        "Teléfono" en el módem. Verifica también que el servicio no esté
        bloqueado por configuraciones de desvío de llamadas o restricciones. Si
        todo está bien, prueba reiniciando el módem.
      </p>
    ),
  },
  {
    question: "¿Cómo configuro el buzón de voz?",
    answer: (
      <p>
        Para configurar el buzón de voz, marca el número correspondiente en tu
        línea (verifícalo en el manual del servicio o llamando a soporte). Sigue
        las instrucciones para crear tu contraseña y grabar un mensaje
        personalizado. Una vez configurado, puedes acceder al buzón desde tu
        línea o de forma remota.
      </p>
    ),
  },
  {
    question: "¿Por qué mi teléfono no suena cuando me llaman?",
    answer: (
      <p>
        Revisa que el volumen del timbre no esté apagado o muy bajo. Verifica
        también que el teléfono esté correctamente conectado al módem y que el
        servicio esté activo. Si el problema persiste, prueba con otro teléfono
        para descartar que el equipo esté fallando.
      </p>
    ),
  },
  {
    question: "¿Cómo activo el servicio de llamada en espera?",
    answer: (
      <p>
        El servicio de llamada en espera generalmente está activado por defecto.
        Para utilizarlo, presiona el botón de "Flash" o cuelga rápidamente para
        atender la segunda llamada. Si no funciona, verifica en la configuración
        de tu servicio o comunícate con soporte para activarlo.
      </p>
    ),
  },
  {
    question: "¿Por qué escucho ruido o interferencia en la línea?",
    answer: (
      <p>
        El ruido puede deberse a interferencias o a un problema con el cableado.
        Verifica que los cables estén en buen estado y correctamente conectados.
        Si el problema continúa, reinicia el módem y prueba con otro teléfono.
        Si el ruido persiste, contacta a soporte técnico para revisar tu línea.
      </p>
    ),
  },
  {
    question: "¿Qué hago si mi módem no tiene la luz de 'Teléfono' encendida?",
    answer: (
      <p>
        Si la luz de "Teléfono" está apagada, significa que el servicio no está
        disponible. Reinicia el módem y espera unos minutos. Si la luz sigue
        apagada, puede tratarse de una falla en el servicio, y deberás
        comunicarte con el centro de atención para que revisen tu línea.
      </p>
    ),
  },
  {
    question: "¿Cómo desvío las llamadas a otro número?",
    answer: (
      <p>
        Para activar el desvío de llamadas, marca el código correspondiente
        desde tu teléfono (consulta el manual del servicio). Ingresa el número
        al que deseas desviar las llamadas y cuelga. Para desactivarlo, marca el
        código de cancelación.
      </p>
    ),
  },
  {
    question: "¿Cómo reporto una falla en mi línea de teléfono?",
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

const options = {
  FAQGeneral: {
    label: <div>
      <img className="sop-icon d-md-none" src="../src/assets/icons/soporte/general-icon.png" alt="" />
      <p className="d-none d-md-block">General</p>
    </div>,
    content: (
      <div className="container-fluid p-0">
        <FAQSoporte faqs={faqGeneral} />
      </div>
    ),
  },
  FAQTelevision: {
    label: <div>
          <img className="sop-icon d-md-none" src="../src/assets/icons/soporte/tv-icon.png" alt="" />
          <p className="d-none d-md-block">Televisión</p>
          </div>,
    content: (
      <div className="container-fluid p-0">
        <FAQSoporte faqs={faqTelevision} />
      </div>
    ),
  },
  FAQInternet: {
    label: <div>
      <img className="sop-icon d-md-none" src="../src/assets/icons/soporte/internet-icon.png" alt="" />
      <p className="d-none d-md-block">Internet</p>
      </div>,
    content: (
      <div className="container">
        <FAQSoporte faqs={faqInternet} />
      </div>
    ),
  },
  FAQTelefonia: {
    label: <div>
          <img className="sop-icon d-md-none" src="../src/assets/icons/soporte/telefonia-icon.png" alt="" />
          <p className="d-none d-md-block">Telefonía</p>
          </div>,
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
    className={`switch-general-btn switch-fdpago-btn ${
      selectedOption === option ? "pack-btn-active" : "pack-btn-inactive"
    } btn-lg mx-2`}
    onClick={() => handleOptionChange(option)}
  >
    {label}
  </button>
);

// Componente principal
const SoporteOnline = () => {
  const [selectedOption, setSelectedOption] = useState("FAQGeneral");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="general-tabs-container">
      <div className="text-center">
        <h1 className="small-title-services">CONSULTA NUESTRA GUÍA</h1>
        <h2 className="big-title-services">Soporte técnico</h2>
      </div>

      {/* Switch */}
      <div className="ps-3 pe-3 ps-md-0 pe-md-0">
      <div className="container d-flex justify-content-center align-items-center mt-5 btn-container-sop ">
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
      </div>
      {/* Mostrar información dependiendo de la opción seleccionada */}
      <div className="mt-5">{options[selectedOption].content}</div>
    </div>
  );
};

export default SoporteOnline;
