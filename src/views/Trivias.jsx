import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { serverAPIUrl, serverAPILambda, serverUrl } from "../config"; // Ajusta la ruta según la ubicación de tu archivo config.js
import "./Trivias.css";
import ActivarCuenta from "./ActivarCuenta";

const Trivias = () => {
  const [banners, setBanners] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch(`${serverAPILambda}api/trivias/`);
        const data = await response.json();
        const now = new Date();
        const today = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate()
        );
        const activeBanners = data.filter((banner) => {
          const startDate = new Date(
            new Date(banner.fhInicio).setHours(0, 0, 0, 0)
          );
          const endDate = new Date(
            new Date(banner.fhFin).setHours(23, 59, 59, 999)
          );
          return banner.status === 1 && startDate <= today && endDate >= today;
        });
        setBanners(activeBanners);
      } catch (error) {
        console.error("Error fetching banners:", error);
      }
    };

    fetchBanners();
  }, []);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <ActivarCuenta mainTitle="PARTICIPA" title="Y GANA">
      <div className="container pt-5 trivias-container">
        <div className="text-center">
          <h2 className="small-title-services">SOLO PARA VERDADEROS FANS</h2>
          <h3 className="big-title-services big-title-container-sm">
            Escoge una de nuestras trivias disponibles y prueba tus conocimientos
          </h3>
        </div>

        <div
          id="carouselTrivias"
          className="carouselTrivias carousel slide mt-5"
          data-bs-ride="carousel"
          onSlide={(e) => handleSlideChange(e.to)}
        >
          <div className="carousel-indicators">
            {banners.map((banner, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselTrivias"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
                onClick={() => handleSlideChange(index)}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            {banners.map((banner, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img
                  src={`${serverUrl}src/assets/uploads/bannerTrivias/${banner.archivoPrincipal}`}
                  className="d-block w-100"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselTrivias"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselTrivias"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {banners[activeIndex] && banners[activeIndex].urlEndPoint && (
          <div className="text-center mt-5">
            <a
              href={`/trivias/${banners[activeIndex].urlEndPoint}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-action btn-trivias"
            >
              Participa Ahora
              <span className="open-page-icon"></span>
            </a>
          </div>
        )}

<div className="text-center legal-trivia">
        <p>Ponemos a su disposición la actualización de nuestro aviso de privacidad <a className='txt-prime-color' target='_blank' href="https://www.megacable.com.mx/aviso-de-privacidad">Aquí</a></p>
    </div>
      </div>
    </ActivarCuenta>
  );
};

export default Trivias;
