import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ActivaCuentaParamount.css';

const ActivaCuentaParamount = () => {
    return (
        <>
        <div className="container-fluid activa-cuenta-strm-container activa-cuenta-strm-paramount d-flex justify-content-center">
            <div className="container row d-flex align-items-center">
                <div className="col-lg-6 col-xl-7">
                    <p className='text-center d-lg-none active-strm-paramount'><span>Para toda la familia</span></p>
                    <h3 className='text-center title-strm-prime d-lg-none mb-5'>¡Ya tienes <span>Paramount+</span> Cortesia de <span>Mega!</span></h3>
                    <img className='w-100 mb-5 mb-md-0 d-none d-lg-block' src="../src/assets/images/streamings/paramount/paramount-pc-img.png" alt="Activa Paramount+ con Megacable" />
                </div>
                <div className="col-lg-6 col-xl-5 contrata-streaming">
                    <p className='d-none d-lg-block active-strm-paramount'><span>Para toda la familia</span></p>
                    <h3 className='d-none d-lg-block title-strm-paramount'>¡Ya tienes <span>Paramount+</span> Cortesia de <span>Mega!</span></h3>
                    <p className='active-strm-p d-none d-xl-block'>Activa tu cuenta ahora y disfruta de<br />todo el contenido</p>
                    <p className='active-strm-p d-xl-none'>Activa tu cuenta ahora y disfruta de todo el contenido</p>
                    <a href='activa-paramount+' className='btn-active-streaming btn-active-paramount mt-3'>Activa tu cuenta <span className='open-page-wh'></span></a>
                </div>
            </div>
        </div>
        <div className="faq-legal text-center">
        <p>Ponemos a su disposición la actualización de nuestro aviso de privacidad <a className='txt-max-color' target='_blank' href="https://www.megacable.com.mx/aviso-de-privacidad">Aquí</a></p>
    </div>

        </>
    );
};
export default ActivaCuentaParamount;