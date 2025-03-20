import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
                <img className='w-100 d-none d-md-block' src="../src/assets/images/streamings/disneyplus/destacados-disney.png" alt="Disney Plus Destacados" />
                <img className='w-100 d-md-none' src="../src/assets/images/streamings/disneyplus/destacados-disney-movil.png" alt="Disney Plus Destacados" />
            </div>
        </div>
        </>
    );
};
export default DestacadosStrDisney;