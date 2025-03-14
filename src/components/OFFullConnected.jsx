import "./OFFullConnected.css";

const Card = ({
  megas,
  velocidad,
  tvs,
  canales,
  precio,
  precioPromo,
  partners,
  mesh,
  isSpecial,
}) => (
  <div className="card-fch">
    <div className={`card-header-fch ${isSpecial ? "header-blue" : ""}`}>
      <p>&nbsp;</p>
      <img
        className="megas-img"
        src={`../src/assets/images/oferta/full-connected/${megas}megas.png`}
        alt={`${megas} MEGAS`}
      />
      <p>DE VELOCIDAD</p>
    </div>
    <div className="card-body-fch">
      <div className="card-content">
        <h3>FIBRA ÓPTICA</h3>
        <h4>WIFI 6</h4>
      </div>
      <div className="card-content">
        <h4>{tvs}</h4>
        <h5>
          <span>{canales}</span>
          <br />
          EN ALTA DEFINICIÓN
        </h5>
      </div>
      <div className="card-content">
        {mesh ? <h3>{mesh}</h3> : <h4 className="sin-mesh">X</h4>}
        <h4>{mesh ? "MESH" : ""}</h4>
      </div>
      <div className="card-content cards-partners">
        {partners.map((partner, index) => (
          <img
            key={index}
            src={`../src/assets/images/oferta/full-connected/${partner}-logo.png`}
            alt={`${partner} Logo`}
          />
        ))}
      </div>
      <div className="card-content llamadas">
        <h3>LLAMADAS</h3>
        <h4>ILIMITADAS</h4>
        <h3>MEX | EU | CAN</h3>
      </div>
      <div className="card-price">
        <p className="price-text">POR SÓLO</p>
        <p className="price">
          <span>$</span>
          {precio}
          <sup>*</sup>
        </p>
        <p className="price-text">
          {precioPromo ? (
            <>
              <b>${precioPromo}</b> AL MES X 6 MESES
            </>
          ) : (
            <>
              AL MES <span>TARIFA FIJA</span>
            </>
          )}
        </p>
      </div>

      <div className="btn_pop">
        <button className="btn_popup">¡Lo quiero!</button>
      </div>
    </div>
  </div>
);

const OFFullConnected = () => {
  const cardsData = [
    {
      megas: 1000,
      velocidad: "1000 MEGAS",
      tvs: "2 TV'S",
      canales: "MÁS DE 120 CANALES",
      precio: 1000,
      partners: ["max", "paramount"],
      mesh: "1 EXTENSOR",
      isSpecial: true,
    },
    /*
    {
      megas: 500,
      velocidad: "500 MEGAS",
      tvs: "1 TV",
      canales: "MÁS DE 80 CANALES",
      precio: 750,
      precioPromo: 650,
      partners: ["paramount"]
    },
    {
      megas: 300,
      velocidad: "300 MEGAS",
      tvs: "1 TV",
      canales: "MÁS DE 80 CANALES",
      precio: 650,
      precioPromo: 550,
      partners: ["paramount"]
    }
      */
  ];

  return (
    <>
      <div className="container-fluid p-0 fc-banner-principal">
        <img
          className="w-100 d-none d-md-block"
          src="../src/assets/images/oferta/full-connected/full-connected-banner.png"
          alt=""
        />
        <img
          className="w-100 d-md-none"
          src="../src/assets/images/oferta/full-connected/banner-fch-movil.png"
          alt=""
        />

        <div className="bg-container">
          <div className="fc-cta-container d-flex justify-content-center align-items-center">
            <h3>¡QUIERO CONTRATAR!</h3>
            <form className="d-flex" action="">
              <input type="tel" />
              <input type="submit" value="Llámame" />
            </form>
          </div>

          <div className="container cards-container">
            <div className="cards-title">
              <h2>Elige tu paquete</h2>
              <img
                src="../src/assets/images/oferta/full-connected/fch-logo.png"
                alt="Full Connected Home Logo"
              />
            </div>

            <div className="cards-titles-container">
              <div className="cards-titles-content">
                <h2>INTERNET</h2>
                <h2 className="spc-title">TECNOLOGÍA</h2>
                <br />
                <h2>
                  XVIEW+
                  <br />
                  TV
                  <br />
                  INTERACTIVE <br />
                  <br />
                </h2>
                <h2 className="spci-title">
                  EXTENSOR
                  <br />
                  WIFI ULTRA
                </h2>
                <h2 className="sp-title">
                  APPS
                  <br />
                  INCLUIDAS
                </h2>
                <h2 className="wth-border">
                  TELEFONÍA
                  <br />
                  FIJA
                </h2>
              </div>
              <div className="cards-titles-space"></div>
            </div>

            {/* CARDS */}
            <div className="cards-content">
              {cardsData.map((card, index) => (
                <Card key={index} {...card} />
              ))}
            </div>
            <div className="cards-legal">
              <p>
                Nota: Promoción válida domiciliando el pago a tarjeta. Tarifas
                registradas ante el IFT. Aplican restricciones. Consulta
                términos y condiciones aquí.
              </p>
            </div>
          </div>

          <div
            id="fch-beneficios"
            className="fch-carousel-container carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner carrousel-fch">
              {[1, 2, 3].map((slide, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <img
                    src={`../src/assets/images/oferta/full-connected/full-connected_sl-${slide}.png`}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              ))}
            </div>

            <button
              className="carousel-control-prev control-prev-fch"
              type="button"
              data-bs-target="#fch-beneficios"
              data-bs-slide="prev"
            >
              <img
                src="../src/assets/icons/oferta/control-prev-fch.png"
                alt="Previous"
              />
            </button>
            <button
              className="carousel-control-next control-next-fch"
              type="button"
              data-bs-target="#fch-beneficios"
              data-bs-slide="next"
            >
              <img
                src="../src/assets/icons/oferta/control-next-fch.png"
                alt="Next"
              />
            </button>
          </div>

          <div className="text-center fc-cta-container-g">
            <h3 className="mb-3">¡QUIERO CONTRATAR!</h3>
            <div className="fc-cta-container-b d-flex justify-content-center align-items-center">
              <form className="d-flex" action="">
                <input type="tel" />
                <input type="submit" value="Llámame" />
              </form>
            </div>
          </div>

          <div className="garantia">
            <div className="garantia-txt">
              <h2>SERVICIO TÉCNICO</h2>
              <p className="garantia-p">Atención en menos de 24 horas</p>
              <p className="phone-atencion">33 9690 0000</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OFFullConnected;
