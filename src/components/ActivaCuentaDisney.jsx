import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ActivaCuentaDisney.css';

const ActivaCuentaStreaming = () => {
    return (
        <>
        <div className="container-fluid activa-cuenta-strm-container activa-cuenta-strm-disney d-flex justify-content-center">
            <div className="container row d-flex align-items-center">
                <div className="col-md-6 col-xl-7">
                    <p className='text-center d-md-none active-strm-disney'><span>Para toda la familia</span></p>
                    <h3 className='text-center title-strm-disney d-md-none mb-5'>¿Ya contrataste <span>Disney+?</span></h3>
                    <img className='w-100 mb-5 mb-md-0' src="../src/assets/images/streamings/disneyplus/disney-pc-img.png" alt="" />
                </div>
                <div className="col-md-6 col-xl-5 contrata-streaming">
                    <p className='d-none d-md-block active-strm-disney'><span>Para toda la familia</span></p>
                    <h3 className='d-none d-md-block title-strm-disney'>¿Ya contrataste <span>Disney+?</span></h3>
                    <p className='active-strm-p d-none d-xl-block'>Activa tu cuenta ahora y disfruta de<br />todo el contenido</p>
                    <p className='active-strm-p d-xl-none'>Activa tu cuenta ahora y disfruta de todo el contenido</p>
                    <a href='/activa-disneyplus' className='btn-active-streaming btn-active-disney mt-3'>Activa tu cuenta <span className='open-page-wh'></span></a>
                </div>

            </div>
        </div>
        </>
    );
};
export default ActivaCuentaStreaming;