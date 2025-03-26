import { Helmet } from "react-helmet-async";
import BannerStrMax from '../components/BannerStrMax';
import DestacadoStrMax from '../components/DestacadoStrMax';
import PackStrMax from '../components/PackStrMax';
import ActivaCuentaMax from '../components/ActivaCuentaMax';

const Max = () => {
    return (
        <>
              <Helmet>
                <title>
                  Max con Megacable | Agrega Más Entretenimiento a Tu Paquete
                </title>
                <meta
                  name="description"
                  content="Agrega Max a tu paquete de Megacable y disfruta de miles de películas, series y contenido exclusivo. ¡Lleva el entretenimiento a otro nivel!"
                />
              </Helmet>
            <BannerStrMax />
            <DestacadoStrMax />
            <PackStrMax />
            <ActivaCuentaMax />
        </>

    );
};

export default Max;