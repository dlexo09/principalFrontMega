import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
import { LocationProvider } from './LocationContext';


import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [location, setLocation] = useState('Location 1');
  const locations = ['Location 1', 'Location 2', 'Location 3'];


  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
    console.log('Selected location:', newLocation);
  };

  return (
    <>
      <LocationProvider>
        <BrowserRouter>
          <TopBar locations={locations} onLocationChange={handleLocationChange} currentLocation={location} setCurrentLocation={setLocation} />
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/paquetesResidenciales" element={<PaquetesResidenciales location={location} />} />
            <Route path="/xview" element={<Xview />} />
            <Route path="/foxSports" element={<FoxSports />} />
            <Route path="/adultPack" element={<AdultPack />} />
            <Route path="/canales" element={<Canales />} />
            <Route path="/mideVelocidad" element={<MideVelocidad />} />

          </Routes>
        </BrowserRouter>
      </LocationProvider>






      <div className="container">

      </div>
    </>
  )
}

export default App
