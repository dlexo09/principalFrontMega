import React, { useEffect, useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./TvInteractiva.css";
import "./Globales.css";

const TvInteractiva = () => {
  return (
    <>
        <div className="tv-interactiva-container  container-fluid">
            <div className="text-center text-lg-start tv-interactiva-content row d-flex align-items-center container">
                <div className="order-2 order-lg-1 col-12 col-lg-6 tv-interactiva-img">
                    <img src="../src/assets/images/home/tv-interactiva-img.png" alt="" />
                </div>
                <div className="order-1 order-lg-2 col-12 col-lg-6 tv-interactiva-txt">
                    <h2 className="small-title">Tv Interactiva</h2>
                    <h3 className="secondary-title"><span>TV Interactiva</span> dónde quiera que estés en cualquier dispositivo.</h3>
                    <p className="mt-4 mt-lg-5">Con Xview+ accede a más de 30 000 horas de contenido, graba, pausa y retrocede tus programas favoritos. ¡Todo en un sólo lugar!</p>
                    <div className="mt-0 mt-lg-5 d-flex justify-content-center justify-content-lg-start">
                    <button className="btn-action mt-5">Saber más<span className="open-page-icon"></span></button>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};
export default TvInteractiva;