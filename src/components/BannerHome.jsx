import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { serverUrl, serverAPIUrl } from '../config'; // Ajusta la ruta según la ubicación de tu archivo config.js

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
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {banners.map((banner, index) => (
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
      </div>
      <div className="carousel-inner">
        {banners.map((banner, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            {banner.link ? (
              <a href={banner.link} target="_blank" rel="noopener noreferrer">
                <img src={`${serverAPIUrl}${banner.ruta}${banner.archivo}`} className="d-block w-100" alt={`Banner ${index + 1}`} />
              </a>
            ) : (
              <img src={`${serverAPIUrl}${banner.ruta}${banner.archivo}`} className="d-block w-100" alt={`Banner ${index + 1}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerHome;