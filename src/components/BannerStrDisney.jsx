import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BannerStrDisney.css';

const BannerStrDisney = () => {
    return (
        <>

        <div className="bannerStreaming-container d-flex">
            <div className="container-fluid bannerStreaming-content m-auto row d-flex align-items-center justify-content-evenly">
                <div className="col-md-5 col-lg-3 order-2 order-lg-1">
                    <div className="streaming-logo">
                        <img className='w-100' src="../src/assets/images/streamings/disneyplus/disney-logo.png" alt="" />
                    </div>

                    <div className="streaming-title text-white ps-lg-5">
                        <h2>Todo esto y más<br />ya disponible</h2>
                    </div>

                    <div className="streaming-contratar ps-lg-5">
                        <button className='btn-streaming btn-contratar-str-disney '>Contratar</button>
                    </div>
                </div>
                <div className="col-md-7 col-lg-6 order-1 order-md-2">
                    <div className="streaming-cont-clasico">
                        <img className='w-100' src="../src/assets/images/streamings/banner-cont-clasico.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default BannerStrDisney;