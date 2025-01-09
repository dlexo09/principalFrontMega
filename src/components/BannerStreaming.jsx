import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BannerStreaming.css';

const BannerStreaming = () => {
    return (
        <>

        <div className="bannerStreaming-container d-flex">
            <div className="container-fluid bannerStreaming-content m-auto row d-flex align-items-center justify-content-evenly">
                <div className="col-md-3">
                    <div className="streaming-logo">
                        <img className='w-100' src="../src/assets/images/streamings/disneyplus/disney-logo.png" alt="" />
                    </div>

                    <div className="streaming-title text-white">
                        <h2>Todo esto y más ya disponible</h2>
                    </div>

                    <div className="streaming-contratar">
                        <button className='btn-streaming-1'>Contratar</button>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="streaming-cont-clasico">
                        <img className='w-100' src="../src/assets/images/streamings/banner-cont-clasico.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default BannerStreaming;