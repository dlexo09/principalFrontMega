import React from 'react';
import './DestacadoStrMax.css';

const DestacadosStrMax = () => {
    return (
        <>
        <div className="destacados-str-max-container">
            <div className="destacados-streaming-txt text-center">
                <p>En Max tienes mucho más que ver. Si te gusta el drama, la comedia, los realities y un poco de todo, este es tu lugar.</p>
            </div>
            <div className="destacados-str-max-img container-fluid d-flex justify-content-center">
                <img className='w-100 d-none d-md-block' src="/img/streamings/max/destacados-max.png" alt="" />
                <img className='w-100 d-md-none' src="/img/streamings/max/destacados-max-movil.png" alt="" />
            </div>
        </div>
        </>
    );
};
export default DestacadosStrMax;