import React, { useEffect, useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./InternetSimetrico.css";
import "./Globales.css";

const InternetSimetrico = () => {
  return (
    <>
      <div className="internet-simetrico">
        <div className="internet-simetrico-content d-flex align-items-center">
          <div className="order-2 order-lg-1 internet-simetrico-txt">
            <h2 className="small-title d-none d-lg-block">INTERNET SIMÉTRICO</h2>
            <h3 className="secondary-title is-title-s">Conéctate sin límites ¡Misma velocidad de <span>subida y bajada!</span></h3>
            <p className="mt-4 ps-5 pe-5 ps-md-0 pe-md-0 ">Eleva tu conexión y conoce nuestra red Fibra Óptica.</p>
            <div className="mt-0 mt-lg-5 d-flex justify-content-center justify-content-lg-start">
              <button className="btn-action mt-4 mt-lg-5">Saber más<span className="open-page-icon"></span></button>
            </div>
          </div>
          <div className="order-1 order-lg-2 internet-simetrico-img">
            <h2 className="small-title d-block d-lg-none title-movil">INTERNET SIMÉTRICO</h2>
            <img src="../src/assets/images/home/internet-simetrico-img.jpg" alt="" />
          </div>
        </div>
      </div>
      </>
      );
};

      export default InternetSimetrico;
