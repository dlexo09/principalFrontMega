import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DestacadoStrParamount.css';

const DestacadosStrParamount = () => {
    return (
        <>
        <div className="destacados-str-paramount-container">
            <div className="destacados-streaming-txt text-center">
                <p><span>SOMOS ORIGINALES Y EXCLUSIVOS</span><br />
                Disfruta de historias únicas, estrellas icónicas y programas exclusivos
                    que no encontrarás en ningún otro lugar.
                </p>
            </div>
            <div className="destacados-str-paramount-img container-fluid d-flex justify-content-center">
                <img className='w-100 d-none d-md-block' src="../src/assets/images/streamings/paramount/destacados-paramount.png" alt="" />
                <img className='w-100 d-md-none' src="../src/assets/images/streamings/paramount/destacados-paramount-movil.png" alt="" />
            </div>
        </div>
        </>
    );
};
export default DestacadosStrParamount;