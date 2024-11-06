import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PagoEnLinea.css';

const PagoEnLinea = () => {
    return (
        <div className="pago-en-linea d-flex align-items-center">
            <div className='col-md-4'>
                <img src="https://www.megacable.com.mx/images/img-pago-en-linea.png" alt="Pago en línea" className="pago-en-linea-img" />
            </div>
            <div className='col-md-4'>
                <h2>Pago en línea</h2>
                <p>Realiza tu pago aquí</p>
                <p>o acude con tu número de suscriptor a 10 dígitos a:</p>
                <p>Ahora tu nueva forma de pago con</p>
            </div>
            <div className='col-md-4'>
                <a href="https://portalpagos.cloudsvc.megacable.com.mx/" target="_blank" rel="noopener noreferrer" className="btn btn-orange ms-auto">Ir a Pago en Línea</a>
            </div>


        </div>
    );
};

export default PagoEnLinea;