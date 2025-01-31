import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./OFFullConnected.css";
import "./Globales.css";

const OFResidencial = () => {
  return (
    <>
      <div className="container-fluid p-0 fc-banner-principal">
        <img
          className="w-100"
          src="../src/assets/images/oferta/full-connected/full-connected-banner.png"
          alt=""
        />

        <div className="bg-container">
          <div className="fc-cta-container d-flex justify-content-center align-items-center">
            <h3>¡QUIERO CONTRATAR!</h3>
            <form className="d-flex" action="">
              <input type="tel" />
              <input type="submit" value="Llámame" />
            </form>
          </div>

          {/* Carousel con id único "fch-beneficios" */}
          <div
            id="fch-beneficios" // ID único para el carousel
            className="container carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="../src/assets/images/oferta/full-connected/full-connected_sl-1.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="../src/assets/images/oferta/full-connected/full-connected_sl-2.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="../src/assets/images/oferta/full-connected/full-connected_sl-3.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>

            {/* Controles del carousel */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#fch-beneficios" // Coincide con el ID único del carousel
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Anterior</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#fch-beneficios" // Coincide con el ID único del carousel
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Siguiente</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OFResidencial;