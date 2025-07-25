import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "./INWifiUltra.css";

const INWifiUltra = () => {
  return (
    <>
      <Helmet>
      <title>WiFi Ultra Megacable | Extiende Tu Señal WiFi y Disfruta de Internet en Todo Tu Hogar</title>
      <meta name="description" content="Amplía tu señal WiFi con WiFi Ultra de Megacable. Conéctate sin interrupciones en cada rincón de tu hogar y disfruta de Internet de alta velocidad en todos tus dispositivos." />
      </Helmet>
      <div className="container ps-3 ps-md-0 pe-3 pe-md-0 general-tabs-container">
        <div className="text-center">
          <h1 className="small-title-services">CONOCE NUESTRO EXTENSOR WIFI</h1>
          <h2 className="big-title-services title-wu">
            ¿Tu WIFI no llega a cada rincón de tu casa o negocio?
          </h2>
          <p className="mt-5">
            Solucionado con un Extensor MESH de WIFI que logra una mejor
            cobertura de Internet
          </p>
        </div>

        <div className="row wifiultra-info-container">
          <div className="col-lg-4 order-3 order-lg-1 d-flex flex-column justify-content-center align-items-center text-center wifiultra-info">
          <img
          className="mb-4 d-md-none"
                src="/img/servicios/internet/wifi-certificado.png"
                alt="Certificado wifi 6"
              />
            <h3>
              Internet rápido
              <br />
              en todos tus dispositivos
            </h3>
            <img
            className="mb-4 mt-5 d-md-none"
                src="/img/servicios/internet/wifi-inteligente.png"
                alt="Wifi inteligente"
              />
            <p className="mt-md-5 wu-subtitle">
              <span>
                Conexión
                <br />
                inteligente
              </span>
              <br />
              en todos tus dispositivos
            </p>
            <p className="wu-price mt-5">
              <span className="price-simbol">$</span>50<sup>*</sup>
              <span>/ MES</span>
            </p>
            <p className="wo-meses-promo">X 6 MESES</p>

            <div className="wu-caracteristicas wifi-certificado">
              <img
                src="/img/servicios/internet/wifi-certificado.png"
                alt="Wifi certificado"
              />
            </div>
            <div className="wu-caracteristicas  wifi-inteligente">
              <img
                src="/img/servicios/internet/wifi-inteligente.png"
                alt="Wifi inteligente"
              />
            </div>

            <button className="btn-packs wu-btn">¡Lo quiero!</button>
          </div>

          <div className="d-none d-lg-flex order-2 order-md-2 col-md-1"></div>

          <div className="oreder-1 order-lg-3 col-lg-5 col-xl-6 text-center">
            <img
              className="w-100 p-0 d-none d-lg-block"
              src="/img/servicios/internet/wifiultra-con-logo.png"
              alt="Wifi ultra"
            />
            <img
              className="w-100 p-0 d-lg-none logo-wifi-ultra"
              src="/img/servicios/internet/wifi-ultra-logo.png"
              alt="Wifi ultra"
            />
          </div>
        </div>

        <div className="wu-cta-container">
          <h3 className="ms-lg-5">¡QUIERO CONTRATAR!</h3>
          <form action="">
            <input className="wu-user-tel" type="text" />
            <input className="btn-packs" type="submit" value="Llámame" />
          </form>
        </div>

        <div className="wu-modem-container">
          <div className="wu-modem-content d-flex align-items-center justify-content-end">
            <img
              className="wu-nokia"
              src="/img/servicios/internet/nokia-beacon.png"
              alt="Nokia Beacon1.1"
            />
            <h3 className="wu-modem-title">Nokia Beacon1.1</h3>
          </div>
          <div className="wu-modem-content modem-gray d-flex align-items-md-center justify-content-end justify-content-md-start">
            <img
              className="wu-zte"
              src="/img/servicios/internet/ZTE-H199A.png"
              alt="ZTE H199A"
            />
            <h3 className="wu-modem-title">ZTE H199A</h3>
          </div>
          <div className="wu-modem-content d-flex align-items-center justify-content-end">
            <img
              className="wu-huawei"
              src="/img/servicios/internet/HUAWEI-WA8021V5.png"
              alt="Hiawei WA8021V5"
            />
            <h3 className="wu-modem-title">HUAWEI WA8021V5</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default INWifiUltra;
