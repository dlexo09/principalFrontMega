import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BannerStrMax.css';

const BannerStrMax = () => {
    return (
        <>

        <div className="str-max-container d-flex">
            <div className="container-fluid bannerStreaming-content m-auto row d-flex align-items-center justify-content-evenly">
                <div className="col-md-5 col-xl-3 order-2 order-md-1">
                    <div className="str-netflix-logo mt-5 mt-md-0">
                        <img className='w-100' src="../src/assets/images/streamings/max/max-logo.png" alt="Max Logo" />
                    </div>

                    <div className="streaming-title text-white mt-4 mt-md-3 mt-lg-4 mt-xl-5">
                        <h1>mucho más que ver</h1>
                    </div>

                    <div className="streaming-contratar mt-5 mt-md-4 mt-xl-5">
                        <a href='https://auth.megacable.com.mx/realms/mega/protocol/openid-connect/auth?client_id=sel&redirect_uri=https%3A%2F%2Fsel.megacable.com.mx%2F&state=dcaa9fe2-f238-4170-a203-4dc97bc189cf&response_mode=fragment&response_type=code&scope=openid&nonce=7067ea3f-fe27-4d3f-8ce6-d82ff298acd7' className='btn-contratar-str-max btn-streaming'>Contratar</a>
                    </div>
                </div>
                <div className="col-md-7 col-xl-6 order-1 order-md-2">
                    <div className="streaming-cont-clasico">
                        <img className='w-100' src="../src/assets/images/streamings/banner-cont-clasico.png" alt="Max" />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default BannerStrMax;