import React, { useEffect, useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./TvInteractiva.css";
import "./Globales.css";

const TvInteractiva = () => {
  return (
    <>
        <div className="tv-interactiva-container container-fluid">
            <div className="tv-interactiva-content row d-flex align-items-center container">
                <div className="col-6 tv-interactiva-img text-end">
                    <img src="../src/assets/images/home/tv-interactiva-img.png" alt="" />
                </div>
                <div className="col-6">
                    <h2 className="small-title">Tv Interactiva</h2>
                    <h3 className="secondary-title"><span>TV Interactiva</span> dónde<br />quiera que estés en<br />cualquier dispositivo.</h3>
                    <p className="mt-5">Con Xview+ accede a más de 30 000 horas de contenido,<br />graba, pausa y retrocede tus programas favoritos.<br />¡Todo en un sólo lugar!</p>
                    <button className="btn-action mt-5">Saber más<span className="open-page-icon"></span></button>
                </div>
            </div>
        </div>
    </>
  );
};
export default TvInteractiva;