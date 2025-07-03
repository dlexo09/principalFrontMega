import React, { useEffect, useState, useContext } from "react";
import { serverAPILambda } from "../config";
import { LocationContext } from "../LocationContext";
import "./BannerHome.css";

const BannerHome = () => {
  const { currentLocation } = useContext(LocationContext);
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBanners = async () => {
      if (!currentLocation) {
        console.log("⏳ [BannerHome] No location, waiting...");
        return;
      }

      try {
        setLoading(true);
        console.log("🚀 [BannerHome] Fetching banners for:", currentLocation.sucursalName);
        
        // 1. Obtener todos los banners
        const response = await fetch(`${serverAPILambda}api/bannerHero`);
        const allBanners = await response.json();
        console.log("📦 [BannerHome] All banners:", allBanners.length);
        console.log("📦 [BannerHome] First banner data:", allBanners[0]);

        // 2. Filtrar banners activos por fecha
        const activeBanners = allBanners.filter(banner => {
          const now = new Date();
          const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
          const startDate = new Date(new Date(banner.fhInicio).setHours(0, 0, 0, 0));
          const endDate = new Date(new Date(banner.fhFin).setHours(23, 59, 59, 999));
          
          return banner.status === 1 && startDate <= today && endDate >= today;
        });
        
        console.log("✅ [BannerHome] Active banners:", activeBanners.length);

        // 3. Verificar permisos por sucursal
        const bannersWithPermissions = [];
        
        for (const banner of activeBanners) {
          try {
            const permisoResponse = await fetch(
              `${serverAPILambda}api/permisosSucursal?objetoName=BannerHome&idObjeto=${banner.idBannerHome}&idSucursal=${currentLocation.idSucursal}`
            );
            const permisoData = await permisoResponse.json();
            
            if (permisoData.length > 0) {
              bannersWithPermissions.push(banner);
              console.log(`✅ [BannerHome] Banner ${banner.idBannerHome} allowed`);
            } else {
              console.log(`❌ [BannerHome] Banner ${banner.idBannerHome} denied`);
            }
          } catch (error) {
            console.error(`❌ [BannerHome] Error checking permission for banner ${banner.idBannerHome}:`, error);
          }
        }

        console.log("🎯 [BannerHome] Final banners:", bannersWithPermissions.length);
        setBanners(bannersWithPermissions);
        
      } catch (error) {
        console.error("❌ [BannerHome] Error fetching banners:", error);
        setBanners([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, [currentLocation]);

  if (loading) {
    return (
      <div className="banner-home-container d-flex justify-content-center align-items-center" style={{ height: '400px' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando banners...</span>
        </div>
      </div>
    );
  }

  if (banners.length === 0) {
    return (
      <div className="banner-home-container d-flex justify-content-center align-items-center" style={{ height: '400px', backgroundColor: '#f8f9fa' }}>
        <div className="text-center">
          <h3>No hay banners disponibles</h3>
          <p>Para la sucursal: {currentLocation?.sucursalName || 'Sin seleccionar'}</p>
        </div>
      </div>
    );
  }

  return (
    <div id="carouselBanners" className="carousel slide banner-home-container" data-bs-ride="carousel">
      {/* Indicadores */}
      {banners.length > 1 && (
        <div className="carousel-indicators">
          {banners.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselBanners"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Slides */}
      <div className="carousel-inner banner-principal-home">
        {banners.map((banner, index) => (
          <BannerSlide key={banner.idBannerHome} banner={banner} isActive={index === 0} />
        ))}
      </div>

      {/* Controles */}
      {banners.length > 1 && (
        <>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselBanners"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselBanners"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </>
      )}
    </div>
  );
};

// ✅ Componente de slide individual - CON ESTILOS ORIGINALES RESTAURADOS
const BannerSlide = ({ banner, isActive }) => {
  const [imageError, setImageError] = useState({
    background: false,
    bannerImg: false,
    mobileImg: false
  });

  // ✅ USAR SOLO LAS URLs QUE VIENEN DE LA API
  const backgroundUrl = banner.s3_background_url;
  const bannerImageUrl = banner.s3_banner_url;
  const mobileImageUrl = banner.s3_mobile_url;

  console.log("🖼️ [BannerSlide] URLs directas de la API:", {
    banner: banner.title,
    backgroundUrl,
    bannerImageUrl,
    mobileImageUrl
  });

  const handleImageError = (type) => {
    console.log(`❌ [BannerSlide] Image error for ${type}:`, banner.title);
    console.log(`❌ [BannerSlide] Failed URL (${type}):`, 
      type === 'background' ? backgroundUrl :
      type === 'bannerImg' ? bannerImageUrl : mobileImageUrl
    );
    setImageError(prev => ({ ...prev, [type]: true }));
  };

  const handleImageLoad = (type) => {
    console.log(`✅ [BannerSlide] Image loaded for ${type}:`, banner.title);
    setImageError(prev => ({ ...prev, [type]: false }));
  };

  return (
    <div className={`carousel-item ${isActive ? "active" : ""}`}>
      {/* Imagen de fondo */}
      <img
        src={backgroundUrl}
        className="d-block w-100 banner-background"
        alt={banner.title}
        onError={() => handleImageError('background')}
        onLoad={() => handleImageLoad('background')}
      />

      {/* ✅ Contenido superpuesto - ESTILOS ORIGINALES RESTAURADOS */}
      <div className="banner-home-content d-flex justify-content-center align-items-center">
        <div className="container g-4 g-md-0 row text-white d-flex justify-content-center justify-content-md-between align-items-center banner-sup-container">
          
          {/* ✅ Columna Izquierda: Texto - CLASES ORIGINALES */}
          <div className="col-md-4 text-column order-2 order-md-1 text-center text-md-start">
            <h1 className="mb-3 secondary-title banner-title">{banner.title}</h1>
            <div className="mt-4 mt-lg-5 d-flex justify-content-center justify-content-lg-start">
              {banner.textButton && banner.linkButton && (
                <a href={banner.linkButton} className="btn-action pe-5 ps-5 banner-btn-limit">
                  <span className="banner-btn-text">{banner.textButton}</span>
                </a>
              )}
            </div>
          </div>

          {/* ✅ Columna Derecha: Imagen Desktop - CLASES ORIGINALES */}
          <div className="order-2 order-md-1 d-none d-md-flex col-md-8 d-flex justify-content-end banner-principal-img">
            <img 
              src={bannerImageUrl}
              alt={banner.title}
              className="img-netflix"
              onError={() => handleImageError('bannerImg')}
              onLoad={() => handleImageLoad('bannerImg')}
            />
          </div>

          {/* ✅ Imagen Mobile - CLASES ORIGINALES */}
          <div className="order-1 order-md-2 d-md-none banner-principal-img-mov">
            <img 
              src={mobileImageUrl}
              alt={banner.title}
              className="img-netflix-movil"
              onError={() => handleImageError('mobileImg')}
              onLoad={() => handleImageLoad('mobileImg')}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default BannerHome;