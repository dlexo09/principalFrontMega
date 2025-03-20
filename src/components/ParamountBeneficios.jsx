import "./PackStrParamount.css";

const ParamountBeneficios = () => {
  return (
    <div className="container text-center">
      <div>
        <div className="mt-4">
          <p className="cliente-info cliente-info-paramount mt-5">
            Si tienes <span>Xview o Xview+</span> por Mega <br />
            ¡Tienes <span>Paramount+</span> incluido en tu paquete!
          </p>
        </div>
        <div className="container table-str-clients table-prime-clients">
          <div className="plans-contrata-paramount d-flex justify-content-center">
            <div className="paramount-icon-container">
              <img
                className="paramount-icon"
                src="/icons/paramount/strm-icon-2.png"
                alt=""
              />
            </div>
            <ul className="paramount-content">
              <li>Contenido exclusivo</li>
              <li>Contenido en idioma original</li>
              <li>Descarga de contenidos para disfrutarlos sin conexión a internet</li>
              <li>Descarga la App y lleva el contenido de Paramount+ en todos tus dispositivos móviles</li>
              <li>Podrás conectar 3 dispositivos simultáneamente</li>
            </ul>
          </div>

          <div className="paramount-programs d-flex justify-content-center align-items-center">
            <img
              src="/img/streamings/paramount/paramount-originals-logo.png"
              alt="Paramount Plus Originals"
            />
            <img
              src="/img/streamings/paramount/showtime-logo.png"
              alt="Show Time"
            />
            <img
              src="/img/streamings/paramount/mtv-logo.png"
              alt="MTV"
            />
            <img
              src="/img/streamings/paramount/nikelodeon-logo.png"
              alt="Nickelodeon"
            />
            <img
              src="/img/streamings/paramount/nikjr-logo.png"
              alt="Nick Jr"
            />
            <img
              src="/img/streamings/paramount/smithsonian-logo.png"
              alt="Smithsonian Channel"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParamountBeneficios;