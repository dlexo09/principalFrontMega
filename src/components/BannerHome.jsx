import React, { useEffect, useState, useContext } from 'react';
import { serverAPILambda, serverUrl } from '../config'; // Ajusta la ruta según la ubicación de tu archivo config.js
import { LocationContext } from '../LocationContext'; // Ajusta la ruta según la ubicación de tu archivo LocationContext.js
import './BannerHome.css';
import './Globales.css'

const BannerHome = () => {
  const { currentLocation } = useContext(LocationContext);
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch(`${serverAPILambda}api/bannerHero`);
        const data = await response.json();
        // console.log('API Response (bannerHero):', data); // Agregar console.log para depurar

        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const activeBanners = data.filter(banner => {
          const startDate = new Date(new Date(banner.fhInicio).setHours(0, 0, 0, 0));
          const endDate = new Date(new Date(banner.fhFin).setHours(23, 59, 59, 999));
          return banner.status === 1 && startDate <= today && endDate >= today;
        });

        // Obtener permisos para cada banner
        const bannersWithPermissions = await Promise.all(activeBanners.map(async (banner) => {
          const permisoResponse = await fetch(`${serverAPILambda}api/permisosSucursal?objetoName=BannerHome&idObjeto=${banner.idBannerHome}&idSucursal=${currentLocation.idSucursal}`);
          const permisoData = await permisoResponse.json();
          // console.log(`API Response (permisosSucursal) for banner ${banner.idBannerHome}:`, permisoData); // Agregar console.log para depurar
          return permisoData.length > 0 ? banner : null;
        }));

        // Filtrar banners con permisos
        const filteredBanners = bannersWithPermissions.filter(banner => banner !== null);
        setBanners(filteredBanners);
      } catch (error) {
        console.error('Error fetching banners:', error);
      }
    };

    if (currentLocation) {
      fetchBanners();
    }
  }, [currentLocation]);

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
              src={`${serverUrl}src/assets/${banner.ruta}${banner.background}`} 
              className="d-block w-100 banner-background" 
              alt={`Slide ${index + 1}`} 
            />

            {/* Contenido Superpuesto */}
            
            <div className="banner-home-content d-flex justify-content-center align-items-center">
              <div className="container g-4 g-md-0 row text-white d-flex justify-content-center justify-content-md-betwwen align-items-center banner-sup-container">
                {/* Columna Izquierda: Texto */}
                <div className="col-md-4 text-column order-2 order-md-1 text-center text-md-start">
                  <h1 className="mb-3 secondary-title banner-title">{`${banner.title}`}</h1>
                  <div className="mt-4 mt-lg-5 d-flex justify-content-center justify-content-lg-start">
                    <a href={`${banner.linkButton}`} className="btn-action pe-5 ps-5">{`${banner.textButton}`}</a>
                    </div>
                </div>

                {/* Columna Derecha: Imagen */}
                <div className="order-2 order-md-1  d-none d-md-flex col-md-8 d-flex justify-content-end banner-principal-img">
                  <img className='img-netflix' src={`${serverUrl}src/assets/${banner.ruta}${banner.imagenBanner}`} alt="" />
                </div>
                <div className="order-1 order-md-2 d-md-none banner-principal-img-mov">
                  <img className='img-netflix-movil' src={`${serverUrl}src/assets/${banner.ruta}${banner.imagenMobile}`} alt="" />
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