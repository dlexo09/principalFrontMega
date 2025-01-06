import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { serverAPIUrl } from "../config"; // Ajusta la ruta según la ubicación de tu archivo config.js
import "./BannerAvisos.css";
import "./Globales.css";

const BannerAvisos = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch(`${serverAPIUrl}api/bannerFooter`);
        const data = await response.json();
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const activeBanners = data.filter(banner => {
          const startDate = new Date(new Date(banner.fhInicio).setHours(0, 0, 0, 0));
          const endDate = new Date(new Date(banner.fhFin).setHours(23, 59, 59, 999));
          return banner.status === 1 && startDate <= today && endDate >= today;
        });
        setBanners(activeBanners);
      } catch (error) {
        console.error("Error fetching banners:", error);
      }
    };

    fetchBanners();
  }, []);

  return (
    <>
      <div
        id="carouselBannerAvisos"
        className="carousel slide container carrousel-container"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {banners.map((banner, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselBannerAvisos"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner carrousel-avisos">
  {banners.map((banner, index) => (
    <div
      key={index}
      className={`carousel-item ${index === 0 ? "active" : ""}`}
    >
      {banner.link ? (
        <a href={banner.link} target="_blank" rel="noopener noreferrer">
          <img
            src={`${serverAPIUrl}${banner.ruta}${banner.archivo}`}
            className="d-block carousel-image"
            alt={`Slide ${index + 1}`}
          />
        </a>
      ) : (
        <img
          src={`${serverAPIUrl}${banner.ruta}${banner.archivo}`}
          className="d-block carousel-image"
          alt={`Slide ${index + 1}`}
        />
      )}
    </div>
  ))}
</div>


        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselBannerAvisos"
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
          data-bs-target="#carouselBannerAvisos"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container avisos-legal">
        <p className="pe-3 ps-3 pe-md-3 ps-md-3">
          *Los incentivos promocionales quedan sujetos a la vigencia, términos y
          condiciones indicados en el paquete contratado Ponemos a su
          disposición la actualización de nuestro aviso de privacidad{" "}
          <a href="">Aquí</a>
        </p>
      </div>
    </>
  );
};

export default BannerAvisos;
