import BannerHome from '../components/BannerHome';
import CallToActionHome from '../components/CallToActionHome';  
import PagoEnLinea from '../components/PagoEnLinea';
import PaquetesResidenciales from '../views/PaquetesResidenciales';
import PaquetesTarifarios from '../components/PaquetesTarifarios';
import MegaMovil from '../components/MegaMovil';
import VentajasInternetMega from '../components/VentajasInternetMega';
import BannerStreamingHome from '../components/BannerStreamingHome';
import InternetSimetrico from '../components/InternetSimetrico';
import BannerAvisos from '../components/BannerAvisos';
import BannerTrivias from '../components/BannerTrivias';  
import Footer from '../components/Footer'; 

const Home = () => {
    return (
        <>
            <BannerHome />
            {/* <PaquetesResidenciales />  Cambiar solo por el card de tarifario y no por la view completa*/}
            <PaquetesTarifarios />
            <MegaMovil />
            <VentajasInternetMega />
            <BannerStreamingHome />
            <InternetSimetrico />
            <BannerAvisos />
            <BannerTrivias />
            <Footer />
        </>

    );
};

export default Home;