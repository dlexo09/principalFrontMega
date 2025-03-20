import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BannerStrNetflix.css';

const BannerStrNetflix = () => {
    return (
        <>

        <div className="str-netflix-container d-flex">
            <div className="container-fluid bannerStreaming-content m-auto row d-flex align-items-center justify-content-evenly">
                <div className="col-md-5 col-xl-3 order-2 order-md-1">
                    <div className="str-netflix-logo mt-5 mt-md-0">
                        <img className='w-100' src="../src/assets/images/streamings/netflix/netflix-logo.png" alt="Netflix Logo" />
                    </div>

                    <div className="streaming-title text-white mt-4 mt-md-3 mt-lg-4 mt-xl-5">
                        <h1>Películas y series ilimitadas y mucho más</h1>
                    </div>

                    <div className="streaming-contratar mt-5 mt-md-4 mt-xl-5">
                        <button className='btn-contratar-str-netflix btn-streaming'>Contratar</button>
                    </div>
                </div>
                <div className="col-md-7 col-xl-6 order-1 order-md-2">
                    <div className="streaming-cont-clasico">
                        <img className='w-100' src="../src/assets/images/streamings/banner-cont-clasico.png" alt="Netflix" />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default BannerStrNetflix;