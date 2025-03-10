import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BannerTrivias.css";

const BannerTrivias = () => {
  return (
    <div className="container">

    
    <div className="banner-trivias d-flex justify-content-center justify-content-lg-evenly align-items-center flex-column flex-lg-row">
        <div className="trivias-icon">
        <img src="../src/assets/images/home/participa-gana.png" alt="" />
        </div>
      <h2 className="secondary-title ms-4">PARTICIPA Y GANA</h2>
      <a href="/trivias" className="btn btn-action">
        Participar <span className="open-page-icon"></span>
      </a>
    </div>
    </div>
  );
};

export default BannerTrivias;
