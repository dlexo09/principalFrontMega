import React, { useEffect, useState, useContext } from "react";
import { serverAPILambda } from "../config"; // Ajusta la ruta según la ubicación de tu archivo config.js
import { LocationContext } from "../LocationContext"; // Ajusta la ruta según la ubicación de tu archivo LocationContext.js
import "./BannerHome.css";

const BannerHome = () => {
  const { currentLocation } = useContext(LocationContext);
  const [banners, setBanners] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch(`${serverAPILambda}api/bannerHero`);
        const data = await response.json();

        const filteredBanners = await filterActiveBanners(data, currentLocation);
        setBanners(filteredBanners);
      } catch (error) {
        console.error("Error fetching banners:", error);
        setError("No se pudieron cargar los banners. Intenta nuevamente más tarde.");
      }
    };

    if (currentLocation) {
      fetchBanners();
    }
  }, [currentLocation]);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div id="carouselExampleIndicators" className="carousel slide banner-home-container" data-bs-ride="carousel">
      <CarouselIndicators banners={banners} />
      <CarouselSlides banners={banners} />
      <CarouselControls />
    </div>
  );
};

// Función para filtrar banners activos y con permisos
const filterActiveBanners = async (banners, currentLocation) => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const activeBanners = banners.filter((banner) => {
    const startDate = new Date(new Date(banner.fhInicio).setHours(0, 0, 0, 0));
    const endDate = new Date(new Date(banner.fhFin).setHours(23, 59, 59, 999));
    return banner.status === 1 && startDate <= today && endDate >= today;
  });

  const bannersWithPermissions = await Promise.all(
    activeBanners.map(async (banner) => {
      const permisoResponse = await fetch(
        `${serverAPILambda}api/permisosSucursal?objetoName=BannerHome&idObjeto=${banner.idBannerHome}&idSucursal=${currentLocation.idSucursal}`
      );
      const permisoData = await permisoResponse.json();
      return permisoData.length > 0 ? banner : null;
    })
  );

  return bannersWithPermissions.filter((banner) => banner !== null);
};

// Componente para los indicadores del carrusel
const CarouselIndicators = ({ banners }) => (
  <div className="carousel-indicators">
    {banners.map((_, index) => (
      <button
        key={index}
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={index}
        className={index === 0 ? "active" : ""}
        aria-current={index === 0 ? "true" : "false"}
        aria-label={`Slide ${index + 1}`}
      ></button>
    ))}
  </div>
);

// Componente para los slides del carrusel
const CarouselSlides = ({ banners }) => (
  <div className="carousel-inner banner-principal-home">
    {banners.map((banner, index) => (
      <CarouselSlide key={index} banner={banner} isActive={index === 0} />
    ))}
  </div>
);

// Componente para un slide individual
const CarouselSlide = ({ banner, isActive }) => (
  <div className={`carousel-item ${isActive ? "active" : ""}`}>
    {/* Fondo del Slider */}
    <img
      src={`/${banner.ruta}${banner.background}`}
      className="d-block w-100 banner-background"
      alt={`Slide`}
    />

    {/* Contenido Superpuesto */}
    <div className="banner-home-content d-flex justify-content-center align-items-center">
      <div className="container g-4 g-md-0 row text-white d-flex justify-content-center justify-content-md-between align-items-center banner-sup-container">
        {/* Columna Izquierda: Texto */}
        <div className="col-md-4 text-column order-2 order-md-1 text-center text-md-start">
          <h1 className="mb-3 secondary-title banner-title">{banner.title}</h1>
          <div className="mt-4 mt-lg-5 d-flex justify-content-center justify-content-lg-start">
            <a href={banner.linkButton} className="btn-action pe-5 ps-5">
              {banner.textButton}
            </a>
          </div>
        </div>

        {/* Columna Derecha: Imagen */}
        <div className="order-2 order-md-1 d-none d-md-flex col-md-8 d-flex justify-content-end banner-principal-img">
          <img className="img-netflix" src={`/${banner.ruta}${banner.imagenBanner}`} alt="" />
        </div>
        <div className="order-1 order-md-2 d-md-none banner-principal-img-mov">
          <img className="img-netflix-movil" src={`/${banner.ruta}${banner.imagenMobile}`} alt="" />
        </div>
      </div>
    </div>
  </div>
);

// Componente para los botones de control del carrusel
const CarouselControls = () => (
  <>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Anterior</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Siguiente</span>
    </button>
  </>
);

export default BannerHome;