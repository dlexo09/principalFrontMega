import React from 'react';
import PaquetesTarifarios from '../components/PaquetesTarifarios';


const Xview = () => {
  return (
    <>
    <PaquetesTarifarios />
      <section className="container-fluid p-0 back-xvie" id="xview-section">
        {/*<!-- BANNER PRODUCTOS -->*/}
        <div className="xview w-100 d-block position-relative">
          <img src="images/xview/xview-bg2.png" className="w-100 d-block position-relative" alt="Xview Background" />
          <div className="logo-xview w-100 d-flex justify-content-center">
            <img src="images/xview/xview+.png" className="w-100 d-block" alt="Xview Logo" />
          </div>
          <div className="plataformas" style={{ alignContent: 'center' }}>
            <div className="fox-slides mt-0 mb-0">
              <div className="product-item">
                <div className="frame-image w-100 d-flex justify-content-center">
                  <img src="images/xview/netflix2.png" title="" className="d-block img-fluid plataforma" alt="Plataforma - Netflix" />
                </div>
              </div>
              <div className="product-item">
                <div className="frame-image w-100 d-flex justify-content-center">
                  <img src="images/xview/amazonprime.png" title="" className="d-block img-fluid plataforma" alt="Plataforma - Amazon Prime" />
                </div>
              </div>
              <div className="product-item">
                <div className="frame-image w-100 d-flex justify-content-center">
                  <img src="images/xview/max.png" title="" className="d-block img-fluid plataforma" alt="Plataforma - Max" />
                </div>
              </div>
              <div className="product-item">
                <div className="frame-image w-100 d-flex justify-content-center">
                  <img src="images/xview/disney.png" title="" className="d-block img-fluid plataforma" alt="Plataforma - Disney+" />
                </div>
              </div>
              <div className="product-item">
                <div className="frame-image w-100 d-flex justify-content-center">
                  <img src="images/xview/paramount.png" title="" className="d-block img-fluid plataforma" alt="Plataforma - Paramount+" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Xview;