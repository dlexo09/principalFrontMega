import React, { useEffect, useState, useContext } from 'react';
import { LocationContext } from '../LocationContext'; // Importa LocationContext
import { serverAPILambda } from '../config'; // Importar serverAPIUrl

import "./InternetSimetrico.css";

const InternetSimetrico = () => {
  const { currentLocation } = useContext(LocationContext);
  const [isSimetrico, setIsSimetrico] = useState(false);

  useEffect(() => {
    const fetchSimetricoData = async () => {
      try {
        const response = await fetch(`${serverAPILambda}api/simetricoSucursal`);
        const data = await response.json();
        const sucursalData = data.find(item => item.idSucursal === currentLocation?.idSucursal);

        if (sucursalData) {
          setIsSimetrico(true);
        } else {
          setIsSimetrico(false);
        }
      } catch (error) {
        console.error('Error fetching simetrico data:', error);
      }
    };

    if (currentLocation) {
      fetchSimetricoData();
    }
  }, [currentLocation]);

  return (
    <>
      <div className="internet-simetrico">
        <div className="internet-simetrico-content d-flex align-items-center">
          <div className="order-2 order-lg-1 internet-simetrico-txt">
            <h2 className="small-title d-none d-lg-block">{isSimetrico ? 'INTERNET SIMÉTRICO' : 'INTERNET ILIMITADO'}</h2>
            <p className="secondary-title is-title-s">
              {isSimetrico ? (
                <>Conéctate sin límites ¡Misma velocidad de <span>subida y bajada!</span></>
              ) : (
                <>Conéctate sin límites ¡Disfruta de nuestra red de alta velocidad!</>
              )}
            </p>
            <p className="mt-4 ps-5 pe-5 ps-md-0 pe-md-0 ">
              {isSimetrico ? 'Eleva tu conexión y conoce nuestra red Fibra Óptica.' : 'Accede a una conexión estable y rápida en todo momento.'}
            </p>
            <div className="mt-0 mt-lg-5 d-flex justify-content-center justify-content-lg-start">
              <a href="/InternetSimetrico" className="btn-action mt-4 mt-lg-5">Saber más<span className="open-page-icon"></span></a>
            </div>
          </div>
          <div className="order-1 order-lg-2 internet-simetrico-img">
            <h2 className="small-title d-block d-lg-none title-movil">{isSimetrico ? 'INTERNET SIMÉTRICO' : 'INTERNET ILIMITADO'}</h2>
            <img src="/img/home/internet-simetrico-img.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default InternetSimetrico;