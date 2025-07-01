import React from 'react';
import './Wifi.css';

const Wifi = () => {
  return (
    <>
      <div className="navbar-height"></div>
      <section className="container-fluid p-0 back-xvie" id="xview-section">
        {/* BANNER PRODUCTOS */}
        <div className="xview w-100 d-block position-relative">
          <img src="images/wifi/wifi-bg.png" className="w-100 d-block position-relative" alt="WiFi Background" />
        </div>

        <div className="container">
          <div className="w-100 d-block mt-3 mb-3 mt-md-3 mb-md-3 mt-lg-5 mb-lg-5">
            <h3 className="w-100 d-block position-relative text-center text-conoce">
              <strong>Si eres suscriptor Megacable</strong> y cuentas con el servicio de <br /> Internet <strong> podrás navegar gratis con Megacable WiFi en <br /> miles de sitios públicos </strong> a lo largo de nuestro país desde <br /> cualquier dispositivo.
            </h3>
          </div>
          <div className="w-100 d-flex justify-content-center align-items-center">
            <a href="https://serviciosenlineav2.megacable.com.mx" target="_blank" className="btn btn-color-blue font-weight-bold">Regístrate GRATIS</a>
          </div>
        </div>

        <div className="container">
          <div className="w-100 d-block mt-3 mb-3 mt-md-3 mb-md-3 mt-lg-5 mb-lg-5">
            <h3 className="w-100 d-block position-relative text-center text-funcionalidades">¿Cómo usar<br /><strong className="w-100 d-block position-relative">MEGACABLE WIFI?</strong></h3>

            <div className="w-100 d-block d-md-flex justify-content-center mt-5 mb-5 text-descricpciones">
              <div className="col-12 col-md-5 col-lg-5">
                <div className="w-100 d-flex justify-content-center align-items-center">
                  <a href="https://serviciosenlineav2.megacable.com.mx" target="_blank" className="btn btn-color-blue back-blue font-weight-bold">
                    <img src="images/wifi/icon-register.png" className="iconc" alt="Register Icon" /> Regístrate
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-7 col-lg-7">
                <p className="w-100 d-block text-left position-relative text pb-3"><strong>Si eres cliente</strong> de Internet Megacable da <a className="a-blue" href="https://sel.megacable.com.mx/" target="_blank"><strong>click aquí</strong></a></p>
                <p className="w-100 d-block text-left position-relative text pb-3"><strong>Ingresa los datos de contrato</strong> para registrar tu <br /> usuario y contraseña</p>
                <p className="w-100 d-block text-left position-relative text pb-3"><strong>Recibirás un correo</strong> a la dirección que ingresaste<br /> con una liga</p>
                <p className="w-100 d-block text-left position-relative text pb-3"><strong>Da click en la liga para finalizar </strong>con la activación <br />de tu registro</p>
                <p className="w-100 d-block text-left position-relative text pb-3"><strong>Se abrirá la página de servicios en línea </strong>de tu <br /> contrato, <span>has finalizado tu registro</span>.</p>
              </div>
            </div>

            <hr className="line" />

            <div className="w-100 d-block d-md-flex justify-content-center mt-5 mb-5 text-descricpciones">
              <div className="col-12 col-md-5 col-lg-5">
                <div className="w-100 d-flex justify-content-center align-items-center">
                  <a href="" target="_blank" className="btn btn-color-blue back-blue font-weight-bold">
                    <img src="images/wifi/icon-wifi.png" className="iconc" alt="WiFi Icon" /> Conéctate
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-7 col-lg-7">
                <p className="w-100 d-block text-left position-relative text pb-3">Selecciona en tu dispositivo la red <br /><strong>*Megacable WiFi*</strong></p>
                <p className="w-100 d-block text-left position-relative text pb-3">Captura tu cuenta de correo electrónico o celular y <br /> contraseña, presiona: <strong>INGRESAR</strong>.</p>
                <p className="w-100 d-block text-left position-relative text pb-3">Te aparecerá la página: <span>CONEXIÓN EXITOSA</span>, ya <br /> puedes navegar.</p>
              </div>
            </div>

            <h3 className="w-100 d-block position-relative text-center text-funcionalidades mb-3"><strong className="w-100 d-block position-relative">SITIOS CON ACCESO</strong>MEGACABLE WIFI</h3>

            <h2 className="w-100 d-block text-center position-relative text2">La <span>Red Megacable WiFi </span> la podrás encontrar en los <br /> principales establecimientos de tu ciudad como Centros <br /> Comerciales, Restaurantes, Estadios, Parques, Cafeterías, <br />Hospitales, Sitios Públicos, CIS de Megacable y en muchas <br /> zonas más.</h2>

            <div className="loader_gif">
              <div id="content_cis" style={{ width: '100%', background: 'url(images/detalle_canal/ajax_loader.gif) no-repeat center' }}>
                <iframe src="https://www.imegacable.com/proxy_wifi.php" scrolling="auto" frameBorder="0" width="100%" height="550" allowTransparency="true"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wifi;
