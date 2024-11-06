import BannerHome from '../components/BannerHome';
import CallToActionHome from '../components/CallToActionHome';  
import PagoEnLinea from '../components/PagoEnLinea';
import PaquetesResidenciales from '../views/PaquetesResidenciales';
import PaquetesTarifarios from '../components/PaquetesTarifarios';
import BannerStreamingHome from '../components/BannerStreamingHome';
import BannerAvisos from '../components/BannerAvisos';
import BannerTrivias from '../components/BannerTrivias';  
import Footer from '../components/Footer'; 

const Home = () => {
    return (
        <>
            <BannerHome />
            <CallToActionHome />
            <PagoEnLinea />
            {/* <PaquetesResidenciales />  Cambiar solo por el card de tarifario y no por la view completa*/}
            <PaquetesTarifarios />
            <BannerStreamingHome />
            <BannerAvisos />
            <BannerTrivias />
            <Footer />
        </>

    );
};

export default Home;