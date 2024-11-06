import BannerHome from '../components/BannerHome';
import CallToActionHome from '../components/CallToActionHome';  
import PagoEnLinea from '../components/PagoEnLinea';
import PaquetesResidenciales from '../views/PaquetesResidenciales';
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
            <PaquetesResidenciales />
            <BannerStreamingHome />
            <BannerAvisos />
            <BannerTrivias />
            <Footer />
        </>

    );
};

export default Home;