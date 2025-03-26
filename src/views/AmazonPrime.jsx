import { Helmet } from "react-helmet-async";
import BannerStrAmazonPrime from '../components/BannerStrAmazonPrime';
import DestacadoStrAmazonPrime from '../components/DestacadoStrAmazonPrime';
import PackStrAmazonPrime from '../components/PackStrAmazonPrime';
import ActivaCuentaAmazonPrime from '../components/ActivaCuentaAmazonPrime';
import FAQStrAmazonPrime from '../components/FAQStrAmazonPrime';

const AmazonPrime = () => {
    return (
        <>
        <Helmet>
                <title>
                  Amazon Prime con Megacable | Agrega Más Entretenimiento a Tu Paquete
                </title>
                <meta
                  name="description"
                  content="Agrega Amazon Prime a tu paquete de Megacable y disfruta de miles de películas, series y contenido exclusivo. ¡Lleva el entretenimiento a otro nivel!"
                />
              </Helmet>
            <BannerStrAmazonPrime />
            <DestacadoStrAmazonPrime />
            <PackStrAmazonPrime />
            <ActivaCuentaAmazonPrime />
            <FAQStrAmazonPrime />
        </>
    );
};

export default AmazonPrime;