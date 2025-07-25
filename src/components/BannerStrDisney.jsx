import React from 'react';
import './BannerStrDisney.css';

const BannerStrDisney = () => {
    return (
        <>
        <div className="bannerStreaming-container d-flex">
            <div className="container-fluid bannerStreaming-content m-auto row d-flex align-items-center justify-content-evenly">
                <div className="col-md-5 col-xl-3 order-2 order-md-1">
                    <div className="streaming-logo">
                        <img className='w-100' src="/img/streamings/disneyplus/disney-logo.png" alt="" />
                    </div>

                    <div className="streaming-title text-white ps-md-4 ps-lg-5 mt-4 mt-md-2 mt-xl-4">
                        <h1>Todo esto y más <br /> ya disponible</h1>
                    </div>

                    <div className="streaming-contratar ps-md-4 ps-lg-5 mt-5 mt-md-4 mt-xl-5">
                        <button 
                            className='btn-contratar-str-disney btn-streaming'
                            onClick={() => {
                                const element = document.getElementById('pack-str-disney');
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                        >
                            Contratar
                        </button>
                    </div>
                </div>
                <div className="col-md-7 col-xl-6 order-1 order-md-2">
                    <div className="streaming-cont-clasico">
                        <img className='w-100' src="/img/streamings/disneyplus/disney-principal.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default BannerStrDisney;