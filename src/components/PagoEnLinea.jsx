import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './PagoEnLinea.css';
import "./Globales.css";

const PagoEnLinea = () => {
    return (
        <>
            <div className="container-fluid pago-en-linea">
                <div className="container d-flex align-items-center pago-en-linea-content">
                    <div className="pago-img">
                        <img src="../src/assets/images/home/paga-en-linea-img.png" alt="" />
                    </div>
                    <div>
                        <h2 className="secondary-title"><span>Pago en Línea</span></h2>
                        <p>Paga la factura de tus servicios de<br />forma fácil y rápida aquí.</p>
                        <div className="pago-bancos">
                            <img src="../src/assets/images/home/pagos-tarjetas-img.png" alt="" />
                        </div>
                        <button className="btn-action">Paga aquí<span className="open-page-icon"></span></button>
                    </div>
                </div>
            </div>
            <div className="wave-vector">
                <img src="../src/assets/images/home/pago-vector.png" alt="" />
            </div>
        </>
    );
};

export default PagoEnLinea;