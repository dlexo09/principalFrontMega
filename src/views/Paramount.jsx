import { Helmet } from "react-helmet-async";
import BannerStrParamount from '../components/BannerStrParamount';
import DestacadoStrParamount from '../components/DestacadoStrParamount';
import ParamountBeneficios from '../components/ParamountBeneficios';
import ActivaCuentaParamount from '../components/ActivaCuentaParamount';

const Paramount = () => {
    return (
        <>
        <Helmet>
                <title>
                  Paramount+ con Megacable | Agrega Más Entretenimiento a Tu Paquete
                </title>
                <meta name="description" content="Si tienes Xview o Xview+ con Megacable, disfruta de Paramount+ incluido en tu paquete. Accede a películas, series y contenido exclusivo, sin costo adicional." />
              </Helmet>
            <BannerStrParamount />
            <DestacadoStrParamount />
            <ParamountBeneficios />
            <ActivaCuentaParamount />
        </>

    );
};

export default Paramount;