import React, { useState } from 'react';
import './Footer.css';

const AccordionItem = ({ id, title, content, link }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  if (link) {
    return (
      <div className="accordion-item accordion-item-footer">
        <h2 className="accordion-header" id={`heading-${id}`}>
          <a
            className="btn-footer"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a>
        </h2>
      </div>
    );
  }

  return (
    <div className="accordion-item accordion-item-footer">
      <h2 className="accordion-header" id={`heading-${id}`}>
        <button
          className={`accordion-button ${!isExpanded ? 'collapsed' : ''}`}
          type="button"
          onClick={toggleAccordion}
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${id}`}
          aria-expanded={isExpanded}
          aria-controls={`collapse-${id}`}
        >
          {title}
        </button>
      </h2>
      <div
        id={`collapse-${id}`}
        className={`accordion-collapse collapse ${isExpanded ? 'show' : ''}`}
        aria-labelledby={`heading-${id}`}
      >
        <div
          className="accordion-body"
          dangerouslySetInnerHTML={{ __html: content || '' }}
        ></div>
      </div>
    </div>
  );
};

const Footer = () => {
  const rows = [
    [
      {
        id: 1,
        title: 'Códigos de prácticas comerciales',
        link: `/files/Codigo_Practicas_Comerciales.pdf`,
      },
      {
        id: 2,
        title: 'Contrato servicios móviles',
        content: `
          <ul class="list-ct ejemplo">
            <li class="list-ct-title">POSTPAGO</li>
            <li class="list-ct-item"><a href="/files/telefonia-cable_pospago.pdf" target="_blank" rel="noopener noreferrer">Telefonía por Cable</a></li>
            <li class="list-ct-item"><a href="/files/servicio-equipo_pospago.pdf" target="_blank" rel="noopener noreferrer">Servicio y Equipo en Telefonía</a></li>
            <li class="list-ct-item"><a href="/files/mega_pospago.pdf" target="_blank" rel="noopener noreferrer">Mega Cable</a></li>
            <li class="list-ct-item"><a href="/files/myc-red_pospago.pdf" target="_blank" rel="noopener noreferrer">Myc Red</a></li>
          </ul>
          <ul class="list-ct">
            <li class="list-ct-title">PREPAGO</li>
            <li class="list-ct-item"><a href="/files/telefonia-cable_prepago.pdf" target="_blank" rel="noopener noreferrer">Telefonía por Cable</a></li>
            <li class="list-ct-item"><a href="/files/servicio-equipo_prepago.pdf" target="_blank" rel="noopener noreferrer">Servicio y Equipo en Telefonía</a></li>
            <li class="list-ct-item"><a href="/files/mega_prepago.pdf" target="_blank" rel="noopener noreferrer">Mega Cable</a></li>
            <li class="list-ct-item"><a href="/files/myc-red_prepago.pdf" target="_blank" rel="noopener noreferrer">Myc Red</a></li>
          </ul>
        `,
      },
      {
        id: 3,
        title: 'Legales',
        content: `
          <ul class="list-ct">
            <li class="list-ct-item"><a href="/terminos-y-condiciones/" rel="noopener noreferrer">Términos y Condiciones</a></li>
            <li class="list-ct-item"><a href="/TerminosYCondicionesInternet/" rel="noopener noreferrer">Términos y Condiciones de Internet</a></li>
            <li class="list-ct-item"><a href="/files/Netflix.pdf" target="_blank" rel="noopener noreferrer">Términos y Condiciones de Netflix</a></li>
            <li class="list-ct-item"><a href="/files/AmazonPrime.pdf" target="_blank" rel="noopener noreferrer">Términos y Condiciones de Amazon Prime</a></li>
            <li class="list-ct-item"><a href="/files/disney+.pdf" target="_blank" rel="noopener noreferrer">Términos y Condiciones de Disney+</a></li>
            <li class="list-ct-item"><a href="/files/HBO_Max.pdf" target="_blank" rel="noopener noreferrer">Términos y Condiciones de HBO Max</a></li>
            <li class="list-ct-item"><a href="/files/Fox_Sports_Premium.pdf" target="_blank" rel="noopener noreferrer">Términos y Condiciones de Fox Sports Premium</a></li>
            <li class="list-ct-item"><a href="/files/nba.pdf" target="_blank" rel="noopener noreferrer">Términos y Condiciones de NBA League Pass</a></li>
            <li class="list-ct-item"><a href="/files/Paramount+.pdf" target="_blank" rel="noopener noreferrer">Términos y Condiciones de Paramount+</a></li>
            <li class="list-ct-item"><a href="/files/AdultPack.pdf" target="_blank" rel="noopener noreferrer">Términos y Condiciones de Adult Pack</a></li>
            <li class="list-ct-item"><a href="/files/video.pdf" target="_blank" rel="noopener noreferrer">Términos y Condiciones de Video</a></li>
            <li class="list-ct-item"><a href="/files/aviso_privacidad_visitantes.pdf" target="_blank" rel="noopener noreferrer">Aviso de Privacidad Visitantes</a></li>
            <li class="list-ct-item"><a href="/files/carta_derechos_de_usuario.pdf" target="_blank" rel="noopener noreferrer">Derechos de Usuario</a></li>
            <li class="list-ct-item"><a href="/files/codigo_etica.pdf" target="_blank" rel="noopener noreferrer">Código de Ética Megacable</a></li>
            <li class="list-ct-item"><a href="/files/codigo_etica_comercio_electronico.pdf" target="_blank" rel="noopener noreferrer">Código de Ética en Comercio Electrónico</a></li>
            <li class="list-ct-item"><a href="/files/aviso_legal_de_uso_del_portal_01.pdf" target="_blank" rel="noopener noreferrer">Contacto con Autoridades en Materia de Seguridad</a></li>
            <li class="list-ct-item"><a href="/AjustesDeTarifas/" rel="noopener noreferrer">Ajustes de Tarifas</a></li>
            <li class="list-ct-item"><a href="/AjustesDeTarifasMegamovil/" rel="noopener noreferrer">Ajuste de Tarifas Mega móvil</a></li>
            <li class="list-ct-item"><a href="/PenalidadesEnInstalaciones" rel="noopener noreferrer">Penalidades</a></li>
            <li class="list-ct-item"><a href="/files/lineamientos_neutralidad_red.pdf" target="_blank" rel="noopener noreferrer">Lineamientos Neutralidad de la Red</a></li>
            <li class="list-ct-item"><a href="/guiasProgramacion" target="_blank" rel="noopener noreferrer">Recepción de Guías Electrónicas de Programación</a></li>
            </ul>
        `,
      },
      {
        id: 4,
        title: 'Cobertura Mega',
        content: `
          <ul class="list-ct">
            <li class="list-ct-item"><a href="https://cobertura.megacable.com.mx/" target="_blank" rel="noopener noreferrer">Verifica cobertura</a></li>
            <li class="list-ct-item"><a href="/CIS" target="_blank" rel="noopener noreferrer">CIS</a></li>

          </ul>
        `,
      },
    ],
    [
      {
        id: 5,
        title: 'Audio Contrato de servicios',
        content: `
          <ul class="list-ct">
            <li class="list-ct-item"><a href="/audios/Telefonia_cable.mp3" target="_blank" rel="noopener noreferrer">Contrato de Adhesión Telefonía por Cable</a></li>
            <li class="list-ct-item"><a href="/audios/Servicio_Equipo.mp3" target="_blank" rel="noopener noreferrer">Contrato de Adhesión Servicio y Equipo en Telefonía</a></li>
           <li class="list-ct-item"><a href="/audios/MycRed.mp3" target="_blank" rel="noopener noreferrer">Contrato de Adhesión Myc Red</a></li>
           <li class="list-ct-item"><a href="/audios/Megacable.mp3" target="_blank" rel="noopener noreferrer">Contrato de Adhesión Megacable</a></li>
           <li class="list-ct-item"><a href="/audios/Contrato_adhesion_movil_prepago.mp3" target="_blank" rel="noopener noreferrer">Contrato de Adhesión Telefonía Móvil Prepago</a></li>
           <li class="list-ct-item"><a href="/audios/Contrato_adhesion_movil_postpago.wav" target="_blank" rel="noopener noreferrer">Contrato de Adhesión Telefonía Móvil Postpago</a></li>
          </ul>
        `,
      },
      {
        id: 6,
        title: 'Megacable TRIPLE PLAY',
        content: `
          <ul class="list-ct">
            <li class="list-ct-item"><a href="/files/contrato-adhesion_telecomunicaciones_telefonia-por-cable.pdf" target="_blank" rel="noopener noreferrer">Telefonía por Cable</a></li>
            <li class="list-ct-item"><a href="/files/contrato-adhesion_telecomunicaciones_setit.pdf" target="_blank" rel="noopener noreferrer">SETIT</a></li>
           <li class="list-ct-item"><a href="/files/contrato-adhesion_telecomunicaciones_mega-cable.pdf" target="_blank" rel="noopener noreferrer">Mega Cable</a></li>
           <li class="list-ct-item"><a href="/files/contrato-adhesion_telecomunicaciones_myc-red.pdf" target="_blank" rel="noopener noreferrer">Myc Red</a></li>
          </ul>
        `,
      },
      {
        id: 7,
        title: 'Aviso de Privacidad',
        link: '/AvisoDePrivacidad/',
      },
      {
        id: 8,
        title: 'IFT - Instituto Federal de Telecomunicaciones',
        content: `
          <ul class="list-ct">
            <li class="list-ct-item"><a href="https://www.ift.org.mx/" target="_blank" rel="noopener noreferrer">IFT - Instituto Federal de Telecomunicaciones</a></li>
            <li class="list-ct-item"><a href="https://tarifas.ift.org.mx/ift_visor/" target="_blank" rel="noopener noreferrer">Buscador de tarifas IFT Instituto Federal de Telecomunicaciones</a></li>
           <li class="list-ct-item"><a href="/files/Folios_de_Registros_DAC.xlsx" target="_blank" rel="noopener noreferrer">Folios de registro de tarifas</a></li>
           <li class="list-ct-item"><a href="/files/Folios_registros_Poder-Sustancial.xlsx" target="_blank" rel="noopener noreferrer">Folios de poder sustancial</a></li>
          </ul>
        `,
      },
    ],
  ]; 
 
  return (
    <footer className="footer">
      <div className="top-footer">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center flex-wrap flex">
          <div className="contratar-container d-flex flex-column flex-lg-row align-items-center">
            <label>¡Quiero contratar!</label>
            
            <form className='form-footer d-flex flex-column flex-md-row' role="form" id="f-llamame-home0">   
              <input type="text" className="form-control telefono" placeholder="Tu teléfono" name="dato1" id="P2_dato1" required />    
              <div className="tyc-container d-flex align-items-center gap-2">
                <input type="checkbox" id="i-acepto" required="" name="i-acepto" data-ic-form-field="i-acepto"></input>
                <label className="form-check-label" id="l-acepto" htmlFor="i-acepto"><small>He leído y Acepto el <a target='_blank' href="/aviso-de-privacidad">Aviso de privacidad</a></small></label>
              </div>
              
              <button className="llamame-send" type="button">Llámame</button>
            </form>

          </div>
          <div className="social-foter-container d-flex flex-md-column flex-lg-row mt-4 mt-xxl-0">
            <h3>Síguenos en:</h3>
            <div className="social-footer">
              <a className='me-2' target='_BLANK' href="https://www.youtube.com/user/spotsmegacable"><img src="/icons/youtube-icon-footer.png" alt="Youtube" /></a>
              <a href="https://x.com/megacable?mx=2" target='_BLANK'><img src="/icons/x-icon-footer.png" alt="X" /></a>
              <a href="https://www.tiktok.com/@mega.mx" target='_BLANK'><img src="/icons/tiktok-icon-footer.png" alt="Tiktock" /></a>
              <a href="https://www.facebook.com/Megacable/" target='_BLANK'><img src="/icons/facebook-icon-footer.png" alt="" /></a>
              <a href="https://www.instagram.com/megacable/" target='_BLANK'><img src="/icons/instagram-icon-footer.png" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {rows.map((row, rowIndex) => (
          <div className="row" key={`row-${rowIndex}`}>
            {row.map((item) => (
              <div className="col-md-6 col-xl-3 mt-d-4" key={item.id}>
                <div className="accordion" id={`accordion-${item.id}`}>
                  <AccordionItem {...item} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="container mt-5 mt-md-4 ps-4 ">
        <div className="row">
          <div className="col-md-6 ps-4">
            <ul className="list-ct">
              <li className="list-ct-item"><a href="https://inversionistas.megacable.com.mx/" target="_blank" rel="noopener noreferrer">Relación con inversionistas</a></li>
              <li className="list-ct-item"><a href="https://escala.megacable.com.mx/" target="_blank" rel="noopener noreferrer">Denuncias</a></li>
              <li className="list-ct-item"><a href="/esr/" target="_blank" rel="noopener noreferrer">Responsabilidad Social</a></li>
            </ul>
          </div>
          <div className="col-md-6 footer-logos d-flex flex-column flex-md-row justify-content-md-end align-items-center mt-5 mt-md-0">
            <img src="/img/general/esr.png" alt="Icono Internet" />
            <img src="/img/general/lg-distintivo_digital_profeco.webp" alt="Icono Internet" />
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
