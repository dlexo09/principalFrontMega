import React from 'react';
import './DestacadoStrAmazonPrime.css';

const DestacadosStrAmazonPrime = () => {
    return (
        <>
        <div className="destacados-str-prime-container">
            <div className="destacados-streaming-txt text-center">
                <p>Además de películas y series, con tu suscripción a Prime Video también obtienes envíos GRATIS en Amazon.com.mx, música sin anuncios y mucho más.</p>
            </div>
            <div className="destacados-str-prime-img container-fluid d-flex justify-content-center">
                <img className='w-100 d-none d-md-block' src="/img/streamings/amazon/destacados-prime.png" alt="" />
                <img className='w-100 d-md-none' src="/img/streamings/amazon/destacados-prime-movil.png" alt="" />
            </div>
        </div>
        </>
    );
};
export default DestacadosStrAmazonPrime;