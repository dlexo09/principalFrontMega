import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./SOPFAQ.css";
import "./Globales.css";

const SOPFAQ = () => {

    return (
        <>
            <div className="general-tabs-container container ps-2 pe-2">
                <div className="text-center">
                    <h3 className="small-title-services">CONOCE NUESTRAS</h3>
                    <h2 className="big-title-services">Preguntas Frecuentes</h2>
                </div>

                <div className="faq-list-container mt-5">
                    <div className="faq-content">
                        <h3>Contratación</h3>
                        <a target="_blank" href="../src/assets/files/faq/contratacion.pdf">
                            <img src="../src/assets/icons/download-icon.png" alt="Descargar" />
                        </a>
                    </div>
                    <div className="faq-content">
                        <h3>Cancelación de los servicios</h3>
                        <a target="_blank" href="../src/assets/files/faq/cancelacion.pdf">
                            <img src="../src/assets/icons/download-icon.png" alt="Descargar" />
                        </a>
                    </div>
                    <div className="faq-content">
                        <h3>Compensaciones y/o bonificaciones</h3>
                        <a target="_blank" href="../src/assets/files/faq/compensaciones.pdf">
                            <img src="../src/assets/icons/download-icon.png" alt="Descargar" />
                        </a>
                    </div>
                    <div className="faq-content">
                        <h3>Otros gastos relacionados con la prestación del servicio</h3>
                        <a target="_blank" href="../src/assets/files/faq/otros_gastos.pdf">
                            <img src="../src/assets/icons/download-icon.png" alt="Descargar" />
                        </a>
                    </div>
                    <div className="faq-content">
                        <h3>Instalación</h3>
                        <a target="_blank" href="../src/assets/files/faq/instalacion.pdf">
                            <img src="../src/assets/icons/download-icon.png" alt="Descargar" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SOPFAQ;
