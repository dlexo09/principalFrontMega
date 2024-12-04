import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './WifiUltra.css';

const WifiUltra = () => {
  return (
    <section className="container-fluid p-0 m-0" id="conexion-inalambrica">
      {/* WIFI ULTRA HEADER */}
      <div className="container-fluid wifiultra-header">
        <div className="container row m-auto">
          <div className="col-12 text-center d-flex flex-column align-items-center">
            <img src="images/wifi/wifi-ultra-logo.png" alt="WIFI ULTRA | MEGACABLE" />
            <h2 className="text-white">
              ¿Tu WIFI no llega a cada rincón de tu casa o negocio?
              <br />
              <span>
                Solucionado con un Extensor MESH de WIFI que <br /> logra una cobertura de Internet
              </span>
            </h2>
          </div>
        </div>
      </div>

      {/* WIFI ULTRA PRICE */}
      <div className="wifiultra-price container">
        <div className="wifi-certified d-flex flex-column flex-lg-row align-items-center justify-content-center">
          <div className="certified-logo">
            <img src="images/wifi/certified-logo.png" alt="" />
          </div>
          <div className="certified-texts">
            <h3>
              Internet rápido
              <br />
              <span>en todos tus dispositivos.</span>
            </h3>

            <h3>
              Conexión inteligente
              <br />
              <span>en todos tus dispositivos.</span>
            </h3>
          </div>
        </div>
        <div className="wifi-price text-center animated pulse infinite">
          <h5>POR SÓLO</h5>
          <h4>$50</h4>
          <h5>AL MES</h5>
          <p>*Adicionales a tu mensualidad</p>
        </div>

        <div className="wifiultra-modem d-none d-lg-block">
          <img src="images/wifi/wifiultra-modem.png" alt="" />
        </div>
      </div>

      {/* WIFI ULTRA CONTACT FORM */}
      <div className="container contact-wifi d-flex justify-content-center">
        <form role="form" id="f-llamame-home1" className="d-flex align-items-center flex-column flex-lg-row">
          <div className="mr-lg-3">
            <h4>QUIERO CONTRATAR</h4>
          </div>
          <div className="mr-lg-5">
            <input type="text" className="form-control telefono" placeholder="Ingresa tu teléfono" name="telefono" id="telefono1" required />
          </div>
          <div className="mr-lg-3">
            <span className="contrata-ahora-text pt-2" style={{ lineHeight: '130%' }}>
              <input type="checkbox" className="form-control form-check-input" id="i-acepto" required style={{ display: 'inline-block', width: '20px', marginTop: '7px' }} />
              <label className="form-check-label" id="l-acepto" htmlFor="i-acepto">
                <small>
                  He leído y Acepto el <br />{' '}
                  <a href="aviso-de-privacidad" target="_blank" style={{ color: '#fff', textDecoration: 'underline' }}>
                    Aviso de privacidad
                  </a>
                </small>
              </label>
            </span>
          </div>
          <div className="ml-lg-3" id="f-llamame-home-submit1">
            <button className="btn-llamar text-uppercase" type="button">
              Llámame
            </button>
          </div>
        </form>
      </div>

      {/* WIFI ULTRA CONEXION TOTAL */}
      <div className="container-fluid wifi-conexion">
        <div className="container conexion-content">
          <div className="conexion-img d-none d-lg-block">
            <img src="images/wifi/conexion-img.png" alt="" />
          </div>
          <h2 className="text-center">
            Conexión TOTAL <br /> <span>de todos tus dispositivos con velocidad óptima</span>
          </h2>
          <div className="d-flex justify-content-between flex-wrap w-100 position-relative">
            <div className="col-12 col-md-4 col-lg-4">
              <div className="w-100 d-flex text-center align-items-center justify-content-center">
                <img src="images/wifi/nokia.png" className="maq d-block position-relative secciones-iconos animated pulse infinite" alt="Nokia" />
              </div>
              <h3 className="d-block position-relative text-center mb-5 mt-5 pb-0 pt-0 text-white font-weight-normal">Nokia Beacon1.1</h3>
            </div>
            <div className="col-12 col-md-4 col-lg-4">
              <div className="d-flex text-center align-items-center justify-content-center">
                <img src="images/wifi/zte.png" className="maq d-block position-relative secciones-iconos animated pulse infinite" alt="ZTE" />
              </div>
              <h3 className="d-block position-relative text-center mb-5 mt-5 pb-0 pt-0 text-white font-weight-normal">ZTE H199A</h3>
            </div>
            <div className="col-12 col-md-4 col-lg-4">
              <div className="w-100 d-flex text-center align-items-center justify-content-center">
                <img src="images/wifi/huawey.png" className="maq d-block position-relative secciones-iconos animated pulse infinite" alt="HUAWEI" />
              </div>
              <h3 className="d-block position-relative text-center mb-5 mt-5 pb-0 pt-0 text-white font-weight-normal">HUAWEI WA8021V5</h3>
            </div>
          </div>
        </div>

        <div id="d-conexion-footer" className="w-100 d-block position-relative mt-5 pt-3 pb-3 legal-conexion">
          <h3 className="d-block position-relative text-center mb-0 pb-0 pt-0 text-white font-weight-normal legal">*Plazo Forzoso, sujeto a 12 Meses.</h3>
          <h3 className="d-block position-relative text-center mb-0 mt-0 pb-0 pt-0 text-white font-weight-normal legal">
            *La contratación tiene un costo $50 y $50 de mensualidad por cada equipo con Extensor WIFI (AP Mesh) que se contrate. <br /> Modelos WIFI MESH sujetos a disponibilidad en tu área
          </h3>
        </div>
      </div>
    </section>
  );
};

export default WifiUltra;