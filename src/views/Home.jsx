import BannerHome from '../components/BannerHome';
import PaquetesTarifarios from '../components/PaquetesTarifarios';
import MegaMovil from '../components/MegaMovil';
import VentajasInternetMega from '../components/VentajasInternetMega';
import BannerStreamingHome from '../components/BannerStreamingHome';
import InternetSimetrico from '../components/InternetSimetrico';
import TvInteractiva from '../components/TvInteractiva';
import PagoEnLinea from '../components/PagoEnLinea';
import BannerAvisos from '../components/BannerAvisos';


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
            <TvInteractiva />
            <PagoEnLinea />
            <BannerAvisos />
        </>

    );
};

export default Home;