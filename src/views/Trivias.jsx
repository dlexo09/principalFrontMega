import React, { useEffect, useState } from "react";
import { serverAPILambda } from "../config"; // Ajusta la ruta según la ubicación de tu archivo config.js
import "./Trivias.css";
import ActivarCuenta from "./ActivarCuenta";

const Trivias = () => {
  const [banners, setBanners] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch(`${serverAPILambda}api/trivias`);
        const data = await response.json();
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

        const activeBanners = data.filter((banner) => {
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

  useEffect(() => {
    const carouselElement = document.getElementById("carouselTrivias");

    const handleSlide = (event) => {
      const newIndex = parseInt(event.to, 10);
      setActiveIndex(newIndex);
    };

    // Escuchar el evento `slid.bs.carousel`
    carouselElement.addEventListener("slid.bs.carousel", handleSlide);

    return () => {
      // Limpiar el evento al desmontar el componente
      carouselElement.removeEventListener("slid.bs.carousel", handleSlide);
    };
  }, []);

  return (
    <ActivarCuenta mainTitle="PARTICIPA" title="Y GANA">
      <div className="container pt-5 trivias-container">
        <Header />
        <TriviaCarousel banners={banners} activeIndex={activeIndex} />
        <ParticipateButton banners={banners} activeIndex={activeIndex} />
        <LegalNotice />
      </div>
    </ActivarCuenta>
  );
};

// Componente para el encabezado
const Header = () => (
  <div className="text-center">
    <h2 className="small-title-services">SOLO PARA VERDADEROS FANS</h2>
    <h3 className="big-title-services big-title-container-sm">
      Escoge una de nuestras trivias disponibles y prueba tus conocimientos
    </h3>
  </div>
);

// Componente para el carrusel de trivias
const TriviaCarousel = ({ banners, activeIndex }) => (
  <div id="carouselTrivias" className="carouselTrivias carousel slide mt-5" data-bs-ride="carousel">
    <div className="carousel-indicators">
      {banners.map((_, index) => (
        <button
          key={index}
          type="button"
          data-bs-target="#carouselTrivias"
          data-bs-slide-to={index}
          className={index === activeIndex ? "active" : ""}
          aria-current={index === activeIndex ? "true" : "false"}
          aria-label={`Slide ${index + 1}`}
        ></button>
      ))}
    </div>
    <div className="carousel-inner carrousel-trivias">
      {banners.map((banner, index) => (
        <div key={index} className={`carousel-item ${index === activeIndex ? "active" : ""}`}>
          <img
            src={`/uploads/bannerTrivias/${banner.bannerPrincipal}`}
            className="d-block w-100 d-none d-md-block"
            alt={`Slide ${index + 1}`}
          />
          <img
            src={`/uploads/bannerTrivias/${banner.bannerMovil}`}
            className="w-100 d-md-none"
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
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselTrivias"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
);

// Componente para el botón "Participa Ahora"
const ParticipateButton = ({ banners, activeIndex }) => {
  const activeBanner = banners[activeIndex];

  if (!activeBanner || !activeBanner.urlEndPoint) {
    return null;
  }

  return (
    <div className="text-center mt-5">
      <a
        href={`/trivias/${activeBanner.urlEndPoint}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-action btn-trivias"
      >
        Participa Ahora
        <span className="open-page-icon"></span>
      </a>
    </div>
  );
};

// Componente para el aviso legal
const LegalNotice = () => (
  <div className="text-center legal-trivia">
    <p>
      Ponemos a su disposición la actualización de nuestro aviso de privacidad{" "}
      <a
        className="txt-prime-color"
        target="_blank"
        href="https://www.megacable.com.mx/aviso-de-privacidad"
        rel="noopener noreferrer"
      >
        Aquí
      </a>
    </p>
  </div>
);

export default Trivias;