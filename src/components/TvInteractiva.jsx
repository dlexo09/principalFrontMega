import React, { useEffect, useState, useContext } from 'react';
import { LocationContext } from '../LocationContext'; // Importa LocationContext
import { serverAPILambda } from '../config'; // Importar serverAPIUrl
import "./TvInteractiva.css";
import "./Globales.css";

const TvInteractiva = () => {
  const { currentLocation } = useContext(LocationContext);
  const [cuentaXview, setCuentaXview] = useState(0);

  useEffect(() => {
    const fetchTvData = async () => {
      try {
        const response = await fetch(`${serverAPILambda}api/tv`);
        const data = await response.json();
        const sucursalData = data.find(item => item.idSucursal === currentLocation?.idSucursal);

        if (sucursalData) {
          setCuentaXview(sucursalData.cuentaXview);
        } else {
          setCuentaXview(0);
        }
      } catch (error) {
        console.error('Error fetching TV data:', error);
        setCuentaXview(0);
      }
    };

    if (currentLocation) {
      fetchTvData();
    }
  }, [currentLocation]);

  const renderContent = () => {
    switch (cuentaXview) {
      case 0:
        return (
          <>
            <p className="secondary-title"><span>Televisión Digital</span> dónde quiera que estés en cualquier dispositivo.</p>
            <p className="mt-4 mt-lg-5 ">Accede a tus programas favoritos en cualquier momento y lugar.</p>
          </>
        );
      case 1:
        return (
          <>
            <p className="secondary-title"><span>TV Interactiva</span> dónde quiera que estés en cualquier dispositivo.</p>
            <p className="mt-4 mt-lg-5 ">Con Xview accede a más de 30 000 horas de contenido, graba, pausa y retrocede tus programas favoritos. ¡Todo en un sólo lugar!</p>
          </>
        );
      case 2:
        return (
          <>
            <p className="secondary-title"><span>TV Interactiva</span> dónde quiera que estés en cualquier dispositivo.</p>
            <p className="mt-4 mt-lg-5 ">Con Xview+ accede a más de 30 000 horas de contenido, graba, pausa y retrocede tus programas favoritos. ¡Todo en un sólo lugar!</p>
          </>
        );
      default:
        return (
          <>
            <p className="secondary-title"><span>Televisión Digital</span> dónde quiera que estés en cualquier dispositivo.</p>
            <p className="mt-4 mt-lg-5 ">Accede a tus programas favoritos en cualquier momento y lugar.</p>
          </>
        );
    }
  };

  const getTitle = () => {
    switch (cuentaXview) {
      case 0:
        return "Televisión Digital";
      case 1:
      case 2:
        return "TV Interactiva";
      default:
        return "Televisión Digital";
    }
  };

  const getLink = () => {
    switch (cuentaXview) {
      case 0:
        return "/television";
      case 1:
        return "/xview/beneficios";
      case 2:
        return "/xviewplus/beneficios";
      default:
        return "/television";
    }
  };

  return (
    <div className="tv-interactiva-container container-fluid">
      <div className="text-center text-lg-start tv-interactiva-content row d-flex align-items-center container">
        <div className="col-12 col-lg-6 tv-interactiva-img">
          <h2 className="small-title d-block d-lg-none mb-4">{getTitle()}</h2>
          <img src="../src/assets/images/home/tv-interactiva-img.png" alt="Tv Interactiva - Xview+" />
        </div>
        <div className="col-12 col-lg-6 tv-interactiva-txt">
          <h2 className="small-title d-none d-lg-block">{getTitle()}</h2>
          {renderContent()}
          <div className="mt-0 mt-lg-5 d-flex justify-content-center justify-content-lg-start">
            <a href={getLink()} className="btn-action mt-4 mt-lg-5">Saber más<span className="open-page-icon"></span></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvInteractiva;