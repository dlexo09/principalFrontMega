import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { serverAPIUrl } from '../config'; // Ajusta la ruta según la ubicación de tu archivo config.js
import './BannerHome.css';
import './Globales.css'

const BannerHome = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch(`${serverAPIUrl}api/bannerHero`);
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
        console.error('Error fetching banners:', error);
      }
    };

    fetchBanners();
  }, []);

  return (
    <div id="carouselExampleIndicators" className="carousel slide banner-home-container" data-bs-ride="carousel">
      {/* Indicadores */}
      {/* <div className="carousel-indicators">
        {banners.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div> */}

      {/* Slides */}
      <div className="carousel-inner banner-principal-home">
        {banners.map((banner, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            {/* Fondo del Slider */}
            <img 
              src={`${serverAPIUrl}${banner.ruta}${banner.background}`} 
              className="d-block w-100 banner-background" 
              alt={`Slide ${index + 1}`} 
            />

            {/* Contenido Superpuesto */}
            
            <div className="banner-home-content d-flex justify-content-center align-items-center">
              <div className="container g-4 g-md-0 row text-white d-flex justify-content-center justify-content-md-betwwen align-items-center banner-sup-container">
                {/* Columna Izquierda: Texto */}
                <div className="col-md-4 text-column order-2 order-md-1 text-center text-md-start">
                  <h2 className="mb-3 secondary-title banner-title">{`${banner.title}`}</h2>
                  <div className="mt-4 mt-lg-5 d-flex justify-content-center justify-content-lg-start">
                    <a href={`${banner.linkButton}`} className="btn-action pe-5 ps-5">{`${banner.textButton}`}</a>
                    </div>
                </div>

                {/* Columna Derecha: Imagen */}
                <div className="order-2 order-md-1  d-none d-md-flex col-md-8 d-flex justify-content-end banner-principal-img">
                  <img className='img-netflix' src={`${serverAPIUrl}${banner.ruta}${banner.imagenBanner}`} alt="" />
                </div>
                <div className="order-1 order-md-2 d-md-none banner-principal-img-mov">
                  <img className='img-netflix-movil' src={`${serverAPIUrl}${banner.ruta}${banner.imagenMobile}`} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Botones de Control */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
};

export default BannerHome;
