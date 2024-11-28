import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import BannerTrivias from './components/BannerTrivias';  
import Footer from './components/Footer'; 
import Home from './views/Home';
import PaquetesResidenciales from './views/PaquetesResidenciales';
import Xview from './views/Xview';
import FoxSports from './views/FoxSports';
import AdultPack from './views/AdultPack';
import Canales from './views/Canales';
import MideVelocidad from './views/MideVelocidad';
import { LocationProvider } from './LocationContext';
import './App.css';

function App() {
  return (
    <LocationProvider>
      <BrowserRouter>
        <TopBar />
        <NavBar />
        <div style={{ marginTop: '112px' }}> {/* Ajusta el margen superior según sea necesario */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/paquetesResidenciales" element={<PaquetesResidenciales />} />
            <Route path="/xview" element={<Xview />} />
            <Route path="/foxSports" element={<FoxSports />} />
            <Route path="/adultPack" element={<AdultPack />} />
            <Route path="/canales" element={<Canales />} />
            <Route path="/mideVelocidad" element={<MideVelocidad />} />

          </Routes>
        </div>
        <BannerTrivias />
        <Footer />
      </BrowserRouter>
    </LocationProvider>
  );
}

export default App;