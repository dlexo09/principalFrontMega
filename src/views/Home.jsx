import React, { useEffect, useState } from 'react';
import BannerHome from '../components/BannerHome';
import CallToActionHome from '../components/CallToActionHome';  
import PagoEnLinea from '../components/PagoEnLinea';
import PaquetesTarifarios from '../components/PaquetesTarifarios';
import MegaMovil from '../components/MegaMovil';
import VentajasInternetMega from '../components/VentajasInternetMega';
import BannerStreamingHome from '../components/BannerStreamingHome';
import InternetSimetrico from '../components/InternetSimetrico';
import BannerAvisos from '../components/BannerAvisos';
import { serverAPIUrl } from '../config'; // Importar serverAPIUrl

const Home = () => {
  const [seccionesActivas, setSeccionesActivas] = useState([]);

  useEffect(() => {
    fetch(`${serverAPIUrl}api/configuraciones/home/`) // Usar serverAPIUrl
      .then(response => response.json())
      .then(data => {
        const now = new Date();
        const activeSections = data
          .filter(section => section.status == 1 && new Date(section.fhInicio) <= now && new Date(section.fhFin) >= now)
          .map(section => section.nombreComponente);
        setSeccionesActivas(activeSections);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      {seccionesActivas.includes('BannerHome') && <BannerHome />}
      {seccionesActivas.includes('CallToActionHome') && <CallToActionHome />}
      {seccionesActivas.includes('PagoEnLinea') && <PagoEnLinea />}
      {seccionesActivas.includes('PaquetesTarifarios') && <PaquetesTarifarios />}
      {seccionesActivas.includes('MegaMovil') && <MegaMovil />}
      {seccionesActivas.includes('VentajasInternetMega') && <VentajasInternetMega />}
      {seccionesActivas.includes('BannerStreamingHome') && <BannerStreamingHome />}
      {seccionesActivas.includes('InternetSimetrico') && <InternetSimetrico />}
      {seccionesActivas.includes('BannerAvisos') && <BannerAvisos />}
    </>
  );
};

export default Home;