import React from 'react';
import './ActivaCuentaNetflix.css';

const ActivaCuentaNetflix = () => {
    return (
        <>
        <div className="container-fluid activa-cuenta-strm-container activa-cuenta-strm-netflix d-flex justify-content-center">
            <div className="container row d-flex align-items-center">
                <div className="col-lg-6 col-xl-7">
                    <p className='text-center d-lg-none active-strm-netflix'><span>Para toda la familia</span></p>
                    <h3 className='text-center title-strm-disney d-lg-none mb-5'>¿Ya contrataste <span>Netflix?</span></h3>
                    <img className='w-100 mb-5 mb-md-0 d-none d-lg-block' src="/img/streamings/netflix/netflix-pc-img.png" alt="" />
                </div>
                <div className="col-lg-6 col-xl-5 contrata-streaming">
                    <p className='d-none d-lg-block active-strm-netflix'><span>Para toda la familia</span></p>
                    <h3 className='d-none d-lg-block title-strm-disney'>¿Ya contrataste <span>Netflix?</span></h3>
                    <p className='active-strm-p d-none d-xl-block'>Activa tu cuenta ahora y disfruta de<br />todo el contenido</p>
                    <p className='active-strm-p d-xl-none'>Activa tu cuenta ahora y disfruta de todo el contenido</p>
                    <a href='activa-netflix' className='btn-active-streaming btn-active-netflix mt-3'>Activa tu cuenta <span className='open-page-wh'></span></a>
                </div>
            </div>
        </div>
        </>
    );
};
export default ActivaCuentaNetflix;