import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
                <img className='w-100 d-none d-md-block' src="../src/assets/images/streamings/netflix/destacados-netflix.png" alt="Netflix Destacados" />
                <img className='w-100 d-md-none' src="../src/assets/images/streamings/NETFLIX/destacados-netflix-movil.png" alt=" Netflix Destacados" />
            </div>
        </div>
        </>
    );
};
export default DestacadosStrNetflix;