import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BannerStrParamount.css';

const BannerStrParamount = () => {
    return (
        <>

        <div className="str-paramount-container d-flex">
            <div className="container-fluid bannerStreaming-content m-auto row d-flex align-items-center justify-content-evenly">
                <div className="col-md-5 col-xl-3 order-2 order-md-1">
                    <div className="str-paramount-logo mt-5 mt-md-0">
                        <img className='w-100' src="../src/assets/images/streamings/paramount/paramount-logo.png" alt="" />
                    </div>

                    <div className="streaming-title text-white mt-4 mt-md-3 mt-lg-4 mt-xl-5">
                        <h2>Películas, series y mucho más</h2>
                    </div>

                    <div className="streaming-contratar mt-5 mt-md-4 mt-xl-5">
                        <button className='btn-contratar-str-paramount btn-streaming'>Contratar</button>
                    </div>
                </div>
                <div className="col-md-7 col-xl-6 order-1 order-md-2">
                    <div className="streaming-cont-clasico">
                        <img className='w-100' src="../src/assets/images/streamings/banner-cont-clasico.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default BannerStrParamount;