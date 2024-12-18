import React, { useEffect, useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./MegaMovil.css";
import './Globales.css'

const MegaMovil = () => {
    return (
        <>
            <div className="container megamovil-home row d-flex justify-content-center align-items-center">
                <div className="col-6 ps-5 pe-5">
                    <h2 className="small-title">Conéctate con Mega móvil</h2>
                    <h3 className="secondary-title">¡La mejor cobertura<br /><span>sin cambiar tú número!</span> </h3>
                    <p className="mt-5">Descubre Mega Móvil y disfruta de minutos y SMS ilimitados en México, EE.UU y Canadá , junto con excelentes beneficios para cllientes.</p>
                    <button className="btn-action mt-5">Saber más <span className="open-page-icon"></span></button>
                </div>
                <div className="col-6">
                    <img className="img-fluid" src="../src/assets/images/home/megamovil-home-img.png" alt="" />
                </div>
            </div>
        </>

    );
};

export default MegaMovil;