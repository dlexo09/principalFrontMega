import React from 'react';
import './DestacadoStrNetflix.css';

const DestacadosStrNetflix = () => {
    return (
        <>
        <div className="destacados-str-netflix-container">
            <div className="destacados-streaming-txt text-center">
                <p>Todo lo que te encanta de Netflix por tan solo $119.
                Aprovecha nuestra opción más accesible, el plan con anuncios.</p>
            </div>
            <div className="destacados-str-netflix-img container-fluid d-flex justify-content-center">
                <img className='w-100 d-none d-md-block' src="/img/streamings/netflix/destacados-netflix.png" alt="" />
                <img className='w-100 d-md-none' src="/img/streamings/NETFLIX/destacados-netflix-movil.png" alt="" />
            </div>
        </div>
        </>
    );
};
export default DestacadosStrNetflix;