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
                        <img className='w-100' src="../src/assets/images/streamings/paramount/paramount-logo.png" alt="Paramount+ Logo" />
                    </div>

                    <div className="streaming-title text-white mt-4 mt-md-3 mt-lg-4 mt-xl-5">
                        <h1>Películas, series y mucho más</h1>
                    </div>

                    <div className="streaming-contratar mt-5 mt-md-4 mt-xl-5">
                        <a href='activa-paramount+' className='btn-contratar-str-paramount btn-streaming'>Activa tu cuenta</a>
                    </div>
                </div>
                <div className="col-md-7 col-xl-6 order-1 order-md-2">
                    <div className="streaming-cont-clasico">
                        <img className='w-100' src="../src/assets/images/streamings/banner-cont-clasico.png" alt="Paramount+" />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default BannerStrParamount;