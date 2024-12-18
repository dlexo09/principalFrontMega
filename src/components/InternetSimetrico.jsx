import React, { useEffect, useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./InternetSimetrico.css";
import "./Globales.css";

const InternetSimetrico = () => {
  return (
    <>
      <div className="container-fluid internet-simetrico">
        <div className="internet-simetrico-txt">
            <div className="ejemplo">
            <h2 className="small-title">INTERNET SIMÉTRICO</h2>
            <h3 className="secondary-title">Conéctate sin límites<br />¡Misma velocidad de<br /><span>subida y bajada!</span></h3>
            <p className="mt-5">Eleva tu conexión y conoce nuestra red Fibra Óptica.</p>
            <button className="btn-action mt-5">Saber más<span className="open-page-icon"></span></button>
        </div>
           
      </div>
      <div className="internet-simetrico-img">
        <img src="../src/assets/images/home/internet-simetrico-img.jpg" alt="" />
      </div>
        </div>
            
    </>
  );
};

export default InternetSimetrico;
