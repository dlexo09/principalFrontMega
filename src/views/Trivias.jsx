import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { serverAPIUrl, serverAPILambda, serverUrl } from '../config'; // Ajusta la ruta según la ubicación de tu archivo config.js

const Trivias = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch(`${serverAPILambda}api/trivias/`);
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
    <div id="carouselTrivias" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {banners.map((banner, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselTrivias"
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
            {banner.urlEndPoint ? (
              <a href={`/trivias/${banner.urlEndPoint}`} target="_blank" rel="noopener noreferrer">
                <img src={`${serverUrl}src/assets/uploads/bannerTrivias/${banner.archivoPrincipal}`} className="d-block w-100" alt={`Slide ${index + 1}`} />
              </a>
            ) : (
              <img src={`${serverUrl}src/assets/uploads/bannerTrivias/${banner.archivoPrincipal}`} className="d-block w-100" alt={`Slide ${index + 1}`} />
            )}
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselTrivias" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselTrivias" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Trivias;