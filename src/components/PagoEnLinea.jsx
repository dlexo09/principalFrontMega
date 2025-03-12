import React from 'react';
import './PagoEnLinea.css';

const PagoEnLinea = () => {
    return (
        <>
            <div className="container-fluid pago-en-linea" id="PagoEnLinea">
                <div className="container d-flex flex-column flex-lg-row align-items-center pago-en-linea-content">
                    <div className="pago-img order-2 order-lg-1 d-flex justify-content-center d-none d-lg-flex">
                        <img src="/img/home/paga-en-linea-img.png" alt="" />
                    </div>
                    <div className='text-center text-lg-start order-1 order-lg-2 flex-column pago-text'>
                        <h3 className="small-title d-lg-none mt-3">PAGA FÁCIL Y RÁPIDO</h3>
                        <h2 className="secondary-title pago-title"><span>Pago en Línea</span></h2>
                        <p className='mt-2'>Paga la factura de tus servicios de forma fácil y rápida aquí.</p>
                        <div className="pago-bancos">
                            <img src="/img/home/pagos-tarjetas-img.png" alt="" />
                        </div>
                        
                        <div className="mt-0 mt-lg-5 d-flex justify-content-center justify-content-lg-start">
                            <a href="https://portalpagos.cloudsvc.megacable.com.mx/" className="btn-action">
                                Paga aquí<span className="open-page-icon"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wave-vector d-none d-lg-block">
                <img src="/img/home/pago-vector.png" alt="" />
            </div>
        </>
    );
};

export default PagoEnLinea;