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
          <div className="internet-simetrico-txt">
            <h2 className="small-title">INTERNET SIMÉTRICO</h2>
            <h3 className="secondary-title">Conéctate sin límites ¡Misma velocidad de <span>subida y bajada!</span></h3>
            <p className="mt-4">Eleva tu conexión y conoce nuestra red Fibra Óptica.</p>
            <div className="mt-0 mt-lg-5 d-flex justify-content-center justify-content-lg-start">
              <button className="btn-action mt-5">Saber más<span className="open-page-icon"></span></button>
            </div>
          </div>
          <div className="internet-simetrico-img">
            <img src="../src/assets/images/home/internet-simetrico-img.jpg" alt="" />
          </div>
        </div>
      </div>


      </>
      );
};

      export default InternetSimetrico;
