import { HelmetProvider } from 'react-helmet-async';
import React, { useRef, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./components/Globales.css";

import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import Home from './views/Home';
import OfertaResidencial from './views/OFRecidencial';
import Television from './views/Television';
import TelefoniaIlimitada from './views/TelefoniaIlimitada';
import Internet from './views/Internet';
import XviewPlus from './views/XviewPlus';
import Xview from './views/Xview';
import TVMega from './views/TVMega';
import FoxSports from './views/FoxSports';
import AdultPack from './views/AdultPack';
import MideVelocidad from './views/MideVelocidad';
import Wifi from './views/Wifi';
import WifiUltra from './views/WifiUltra';
import Trivias from './views/Trivias';
import TriviaDetail from './views/TriviaDetail';
import Disneyplus from './views/Disneyplus';
import Netflix from './views/Netflix';
import Max from './views/Max';
import AmazonPrime from './views/AmazonPrime';
import Paramount from './views/Paramount';
import FibraOptica from './views/FibraOptica';
import Ayuda from './views/Ayuda';
import ActivaNetflix from './views/ActivaNetflix';
import ActivaAmazon from './views/ActivaAmazon';
import ActivaDisneyplus from './views/ActivaDisneyplus';
import ActivaParamount from './views/ActivaParamount';
import ActivaMax from './views/ActivaMax';
import DetallePaquete from './views/DetallePaquete';
import LandingPage from './views/LandingPage';
import AvisoPrivacidad from './components/AvisoPrivacidad';
import Footer from './components/Footer';
import LocationModal from "./components/LocationModal";
import { LocationProvider } from './LocationContext';
import './App.css';


function App() {
  const modalRef = useRef(null);
  const [locations, setLocations] = useState([]);
  const [currentLocation, setCurrentLocation] = useState(null);

  const [showHeader, setShowHeader] = useState(true); // Estado para controlar la visibilidad de TopBar y NavBar

  // Puedes pasar estos handlers y estados a TopBar y LocationModal vía props o context
  const handleLocationChange = (e) => {
    const selectedLocation = locations.find(
      (location) => location.sucursalName === e.target.value
    );
    setCurrentLocation(selectedLocation);
    localStorage.setItem("selectedLocation", JSON.stringify(selectedLocation));
    // Cierra el modal usando la instancia de Bootstrap
    if (window.bootstrap && modalRef.current) {
      const modal = window.bootstrap.Modal.getInstance(modalRef.current)
        || new window.bootstrap.Modal(modalRef.current);
      modal.hide();
      setTimeout(() => {
        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) backdrop.parentNode.removeChild(backdrop);
      }, 500);
    }
  };


  return (
    <HelmetProvider>
      <LocationProvider>
        <BrowserRouter>
          {/* Mostrar TopBar y NavBar solo si showHeader es true */}
          {showHeader && (
            <>
              <LocationModal
                ref={modalRef}
                locations={locations}
                currentLocation={currentLocation}
                handleLocationChange={handleLocationChange}
              />
              <TopBar
                modalRef={modalRef}
                locations={locations}
                setLocations={setLocations}
                currentLocation={currentLocation}
                setCurrentLocation={setCurrentLocation}
              />
              <NavBar />
            </>
          )}
          <div style={{ marginTop: '0px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/foxSports" element={<FoxSports />} />
              <Route path="/adultPack" element={<AdultPack />} />
              <Route path="/mideVelocidad" element={<MideVelocidad />} />
              <Route path="/wifi" element={<Wifi />} />
              <Route path="/wifi-ultra" element={<WifiUltra />} />
              <Route path="/trivias" element={<Trivias />} />
              <Route path="/trivias/:endpoint" element={<TriviaDetail />} />
              <Route path="/disneyplus" element={<Disneyplus />} />
              <Route path="/netflix" element={<Netflix />} />
              <Route path="/max" element={<Max />} />
              <Route path="/amazon" element={<AmazonPrime />} />
              <Route path="/paramount+" element={<Paramount />} />
              <Route path="/television/*" element={<Television />} />
              <Route path="/telefonia-ilimitada/*" element={<TelefoniaIlimitada />} />
              <Route path="/internet/*" element={<Internet />} />
              <Route path="/oferta/*" element={<OfertaResidencial />} />
              <Route path="/ayuda/*" element={<Ayuda />} />
              <Route path="/fibra-optica/*" element={<FibraOptica />} />
              <Route path="/xviewplus/*" element={<XviewPlus />} />
              <Route path="/xview/*" element={<Xview />} />
              <Route path="/aviso-de-privacidad" element={<AvisoPrivacidad />} />
              <Route path="/tv/*" element={<TVMega />} />
              <Route path="/activa-netflix" element={<ActivaNetflix />} />
              <Route path="/activa-amazon" element={<ActivaAmazon />} />
              <Route path="/activa-disneyplus" element={<ActivaDisneyplus />} />
              <Route path="/activa-paramount+" element={<ActivaParamount />} />
              <Route path="/activa-max" element={<ActivaMax />} />
              <Route path="/detallePaquete/:idContrata" element={<DetallePaquete />} />
              <Route
                path="/landing/:slug"
                element={<LandingPage setShowHeader={setShowHeader} />}
              />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </LocationProvider>
    </HelmetProvider>
  );
}

export default App;