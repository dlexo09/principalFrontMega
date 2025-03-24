import { Helmet } from "react-helmet-async";
import BannerStrNetflix from "../components/BannerStrNetlix";
import DestacadoStrNetflix from "../components/DestacadoStrNetflix";
import PackStrNetflix from "../components/PackStrNetflix";
import ActivaCuentaNetflix from "../components/ActivaCuentaNetflix";
import FAQStrNetflix from "../components/FAQStrNetflix";

const Netflix = () => {
  return (
    <>
      <Helmet>
        <title>
          Netflix con Megacable | Agrega Más Entretenimiento a Tu Paquete
        </title>
        <meta
          name="description"
          content="Agrega Netflix a tu paquete de Megacable y disfruta de miles de películas, series y contenido exclusivo. ¡Lleva el entretenimiento a otro nivel!"
        />
      </Helmet>
      <BannerStrNetflix />
      <DestacadoStrNetflix />
      <PackStrNetflix />
      <ActivaCuentaNetflix />
      <FAQStrNetflix />
    </>
  );
};

export default Netflix;
