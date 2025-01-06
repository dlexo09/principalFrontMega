import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import Home from './views/Home';
import PaquetesResidenciales from './views/PaquetesResidenciales';
import Xview from './views/Xview';
import FoxSports from './views/FoxSports';
import AdultPack from './views/AdultPack';
import Canales from './views/Canales';
import MideVelocidad from './views/MideVelocidad';
import Wifi from './views/Wifi';
import WifiUltra from './views/WifiUltra';
import Trivias from './views/Trivias'; // Importar el componente Trivias
import TriviaDetail from './views/TriviaDetail'; // Importar el componente TriviaDetail
import BannerTrivias from './components/BannerTrivias';
import Footer from './components/Footer';
import { LocationProvider } from './LocationContext';
import './App.css';

function App() {
  return (
    <LocationProvider>
      <BrowserRouter>
        <TopBar />
        <NavBar />
        <div style={{ marginTop: '0px' }}> {/* Ajusta el margen superior según sea necesario */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/paquetesResidenciales" element={<PaquetesResidenciales />} />
            <Route path="/xview" element={<Xview />} />
            <Route path="/foxSports" element={<FoxSports />} />
            <Route path="/adultPack" element={<AdultPack />} />
            <Route path="/canales" element={<Canales />} />
            <Route path="/mideVelocidad" element={<MideVelocidad />} />
            <Route path="/wifi" element={<Wifi />} />
            <Route path="/wifi-ultra" element={<WifiUltra />} />
            <Route path="/trivias" element={<Trivias />} /> {/* Agregar la ruta para Trivias */}
            <Route path="/trivias/:endpoint" element={<TriviaDetail />} /> {/* Agregar la ruta dinámica para TriviaDetail */}
          </Routes>
        </div>
        <BannerTrivias />
        <Footer />
      </BrowserRouter>
    </LocationProvider>
  );
}

export default App;