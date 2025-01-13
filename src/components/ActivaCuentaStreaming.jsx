import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ActivaCuentaStreaming.css';

const ActivaCuentaStreaming = () => {
    return (
        <>
        <div className="container-fluid activa-cuenta-strm-container activa-cuenta-strm-disney d-flex justify-content-center">
            <div className="container row d-flex align-items-center">
                <div className="col-md-7">
                    <img className='w-100' src="../src/assets/images/streamings/disneyplus/disney-pc-img.png" alt="" />
                </div>
                <div className="col-md-5 contrata-streaming">
                    <p className='active-strm-disney'><span>Para toda la familia</span></p>
                    <h3>¿Ya contrataste <span>Disney+?</span></h3>
                    <p className='active-strm-p'>Activa tu cuenta ahora y disfruta de<br />todo el contenido</p>
                    <button className='btn-active-streaming btn-active-disney mt-3'>Activa tu cuenta <span className='open-page-wh'></span></button>
                </div>

            </div>
        </div>
        </>
    );
};
export default ActivaCuentaStreaming;