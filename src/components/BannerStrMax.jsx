import React from 'react';
import './BannerStrMax.css';

const BannerStrMax = () => {
    return (
        <>

        <div className="str-max-container d-flex">
            <div className="container-fluid bannerStreaming-content m-auto row d-flex align-items-center justify-content-evenly">
                <div className="col-md-5 col-xl-3 order-2 order-md-1">
                    <div className="str-max-logo mt-5 mt-md-0">
                        <img className='w-100' src="/img/streamings/max/max-logo.png" alt="" />
                    </div>

                    <div className="streaming-title text-white mt-4 mt-md-3 mt-lg-4 mt-xl-5">
                        <h1>mucho más que ver</h1>
                    </div>

                    <div className="streaming-contratar mt-5 mt-md-4 mt-xl-5">
                        <button 
                            className='btn-contratar-str-max btn-streaming'
                            onClick={() => {
                                const element = document.getElementById('pack-str-max');
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
                        <img className='w-100' src="/img/streamings/max/max-principal.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default BannerStrMax;