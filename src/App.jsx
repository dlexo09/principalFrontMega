import { HelmetProvider } from 'react-helmet-async';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
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
import Trivias from './views/Trivias'; // Importar el componente Trivias
import TriviaDetail from './views/TriviaDetail'; // Importar el componente TriviaDetail
import BannerTrivias from './components/BannerTrivias';
import Footer from './components/Footer';
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
import { LocationProvider } from './LocationContext';
import './App.css';

function App() {
  return (
    <HelmetProvider>
    <LocationProvider>
      <BrowserRouter>
        <TopBar />
        <NavBar />
        <div style={{ marginTop: '0px' }}> {/* Ajusta el margen superior según sea necesario */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/foxSports" element={<FoxSports />} />
            <Route path="/adultPack" element={<AdultPack />} />
            <Route path="/mideVelocidad" element={<MideVelocidad />} />
            <Route path="/wifi" element={<Wifi />} />
            <Route path="/wifi-ultra" element={<WifiUltra />} />
            <Route path="/trivias" element={<Trivias />} /> {/* Agregar la ruta para Trivias */}
            <Route path="/trivias/:endpoint" element={<TriviaDetail />} /> {/* Agregar la ruta dinámica para TriviaDetail */}
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
            <Route path="/tv/*" element={<TVMega />} />
            <Route path="/activa-netflix" element={<ActivaNetflix />} />
            <Route path="/activa-amazon" element={<ActivaAmazon />} />
            <Route path="/activa-disneyplus" element={<ActivaDisneyplus/>} />
            <Route path="/activa-paramount+" element={<ActivaParamount/>} />
            <Route path="/activa-max" element={<ActivaMax/>} />
            <Route path="/detallePaquete/:idContrata" element={<DetallePaquete/>} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </LocationProvider>
    </HelmetProvider>
  );
}

export default App;