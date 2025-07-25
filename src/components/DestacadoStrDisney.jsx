import React from 'react';
import './DestacadoStrDisney.css';

const DestacadosStrDisney = () => {
    return (
        <>
        <div className="destacados-streamings-container">
            <div className="destacados-streaming-txt text-center">
                <p><span>Disney+</span>, un lugar único para disfrutar las mejores historias de <span>Disney, Pixar, Marvel, Star Wars, National Geographic</span>,
            el deporte de <span>ESPN</span> y las series y películas de <span>Star.</span></p>
            </div>
            <div className="destacados-streaming-img container-fluid d-flex justify-content-center">
                <img className='w-100 d-none d-md-block' src="/img/streamings/disneyplus/destacados-disney.png" alt="" />
                <img className='w-100 d-md-none' src="/img/streamings/disneyplus/destacados-disney-movil.png" alt="" />
            </div>
        </div>
        </>
    );
};
export default DestacadosStrDisney;