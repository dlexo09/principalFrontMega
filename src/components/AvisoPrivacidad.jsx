import "./AvisoPrivacidad.css";

const AvisoPrivacidad = () => {
  return (
    <>
      <div className="container text-center text-lg-start megamovil-home row d-flex fle justify-content-center align-items-center">
        <img
          className="w-100"
          src="img/legal/aviso_privacidad.jpg"
          alt="Mega móvil"
        />
        <div className="btn-adp-container d-flex justify-content-center mt-4">
          <a target="_blank" href="/files/derechos_arco.pdf" className="btn-action">
            Descargar solicitud Derechos Arco
          </a>
        </div>
      </div>
    </>
  );
};

export default AvisoPrivacidad;
