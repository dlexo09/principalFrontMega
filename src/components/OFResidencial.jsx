import { Helmet } from "react-helmet-async";
import PaquetesTarifarios from "../components/PaquetesTarifarios"; // Importación
import "../components/Globales.css";

const OFResidencial = () => {
  return (
    <>
          <Helmet>
            <title>Paquetes de Internet Rápido, TV y Telefonía | Megacable | ¡Contrata Hoy!</title>
            <meta name="description" content="Descubre los paquetes residenciales de Megacable: Internet de fibra óptica, televisión y telefonía ilimitada. ¡Conéctate sin interrupciones y aprovecha nuestras ofertas!" />
          </Helmet>
    <div className="oferta-residencial-container">
      <PaquetesTarifarios />
    </div>
    </>
  );
};

export default OFResidencial;
