import { Helmet } from "react-helmet-async";
import BannerStrDisney from '../components/BannerStrDisney';
import DestacadoStrDisney from '../components/DestacadoStrDisney';
import PackStrDisney from '../components/PackStrDisney';
import ActivaCuentaDisney from '../components/ActivaCuentaDisney';
import FAQStrDisney from '../components/FAQStrDisney';

const Disneyplus = () => {
    return (
        <>
            <Helmet>
            <title>Disney+ con Megacable | Agrega Más Entretenimiento a Tu Paquete</title>
            <meta name="description" content="Agrega Disney+ a tu paquete de Megacable y disfruta de miles de películas, series y contenido exclusivo. ¡Lleva el entretenimiento a otro nivel!" />
            </Helmet>

            <BannerStrDisney />
            <DestacadoStrDisney />
            <PackStrDisney />
            <ActivaCuentaDisney />
            <FAQStrDisney />
            
        </>

    );
};

export default Disneyplus;