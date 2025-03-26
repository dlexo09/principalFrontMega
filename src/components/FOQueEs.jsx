import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./FOQueEs.css";
import "./Globales.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation"; // Importar estilos de navegación
import { EffectCoverflow, Navigation } from "swiper/modules";

const FOQueEs = () => {
  const [activeService, setActiveService] = useState(null); // Estado para controlar el popup

  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Teléfono enviado:", phone);
  };

  const handlePhoneChange = (event) => {
    const value = event.target.value;
    setPhone(value);
  };

  // Información para cada servicio (solo información básica)
  const servicesInfo = [
    {
      id: 1,
      title: "Inmunidad a interferencias electromagnéticas",
      description:
        "A diferencia de los cables de cobre, que son susceptibles a interferencias electromagnéticas, la fibra óptica no se ve afectada por ellas.",
      image: "../src/assets/icons/fibra-optica/inmunidad-interferencias.png",
    },
    {
      id: 2,
      title: "Latencia Baja",
      description:
        "La fibra óptica ofrece una latencia muy baja. Esto es crucial en aplicaciones que requieren una respuesta en tiempo real, como videoconferencias y juegos en línea.",
      image: "../src/assets/icons/fibra-optica/latencia-baja.png",
    },
    {
      id: 3,
      title: "Larga Distancia",
      description:
        "La señal de fibra óptica puede viajar largas distancias sin degradación de la señal. Esto es fundamental para las redes de larga distancia y las comunicaciones intercontinentales.",
      image: "../src/assets/icons/fibra-optica/larga-distancia.png",
    },
    {
      id: 4,
      title: "Seguridad",
      description:
        "Es más segura que otros medios de transmisión, ya que es difícil interceptar la información al no generar radiación electromagnética que pueda ser captada por dispositivos externos.",
      image: "../src/assets/icons/fibra-optica/seguridad.png",
    },
    {
      id: 5,
      title: "Delgadez y Ligereza",
      description:
        "Los cables de fibra óptica son extremadamente delgados y ligeros en comparación con otros cables de transmisión, lo que facilita su instalación y gestión.",
      image: "../src/assets/icons/fibra-optica/delgadez-ligereza.png",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Fibra Óptica Megacable | Alta Velocidad, Seguridad y Conexión Estable</title>

        <meta
          name="description"
          content="Disfruta de internet de alta velocidad con la fibra óptica de Megacable. Conexión segura, estable y velocidades simétricas para una experiencia sin interrupciones. ¡Conéctate a la tecnología de última generación!"
        />
      </Helmet>
      <div className="general-tabs-container container-fluid">
        <div className="foqe-container">
          <div className="container">
            <div className="text-center">
              <h1 className="small-title-services">Fibra Óptica</h1>
              <h2 className="big-title-services">¿QUé es la fibra óptica?</h2>
              <p className="mt-4">
                La fibra óptica de Megacable ofrece una conexión a internet de
                alta velocidad, con tecnología que garantiza una transmisión más
                rápida y estable hasta tu hogar. Además, permite disfrutar de
                velocidades simétricas, optimizando tanto la carga como la
                descarga de datos.
              </p>
            </div>

            <div className="container swiper-adservices mt-5">
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={3}
                spaceBetween={-60}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 100,
                  depth: 200,
                  modifier: 1.5,
                  slideShadows: false,
                }}
                modules={[EffectCoverflow, Navigation]}
                className="swiper_container"
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: -200,
                  },
                  1440: {
                    slidesPerView: 3,
                    spaceBetween: -60,
                  },
                }}
              >
                {servicesInfo.map((service) => (
                  <SwiperSlide key={service.id}>
                    <div className="swiper-adservices-content sa-item foqe-item ">
                      <div className="text-center swiper-adservices-conten d-flex align-items-center flex-column justify-content-center">
                        <img src={service.image} alt={service.title} />
                        <h3 className="mt-4">{service.title}</h3>{" "}
                        {/* Título de la tarjeta */}
                        <p className="mt-2">{service.description}</p>{" "}
                        {/* Descripción de la tarjeta */}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Botones de navegación */}
              <div className="swiper-button-prev serv-prev carousel-control-prev"></div>
              <div className="swiper-button-next serv-next carousel-control-next"></div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="container fored-formulario-p"
              id="miFormulario"
            >
              <div className="form__label-p text-center">
                <label htmlFor="phone">SOLICITA TU CAMBIO</label>
              </div>
              <div className="form__capt-p">
                <div className="form__input">
                  <input
                    type="text"
                    placeholder="Tu teléfono"
                    className="inp"
                    value={phone}
                    onChange={handlePhoneChange}
                    maxLength="14"
                    id="phone"
                    name="phone"
                    required
                  />
                </div>
                <div className="form__btn-p">
                  <button
                    type="submit"
                    id="tel-megamovil-f"
                    className="enviarForm"
                  >
                    <b>LLÁMAME</b>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="container sim-util-container">
          <h2 className="text-center">LA SIMETRÍA ES ÚTIL CUANDO</h2>
          <div className="row mt-5 justify-content-center simetria-util-container">
            <div className="col-md-5 col-lg-4 col-xl-3 simetria-util-card">
              <div className="text-center mb-4">
                <img
                  src="../src/assets/icons/fibra-optica/videollamadas.png"
                  alt="Videollamadas"
                />
              </div>
              <h3>Videollamadas</h3>
              <p>
                Brinda una resolución de calidad en la imagen, la señal no
                fluctúa, es mucho más rápida la transferencia de datos.
              </p>
            </div>
            <div className="col-md-5 col-lg-4 col-xl-3 simetria-util-card">
              <div className="text-center mb-4">
                <img
                  src="../src/assets/icons/fibra-optica/servicios-nube.png"
                  alt="Servicios en la nube"
                />
              </div>
              <h3>Servicios en la nube</h3>
              <p>
                La velocidad de subida permite disponer de forma eficiente tus
                servicios en la nube.
              </p>
            </div>
            <div className="col-md-5 col-lg-4  col-xl-3 simetria-util-card">
              <div className="text-center mb-4">
                <img
                  src="../src/assets/icons/fibra-optica/videojuegos.png"
                  alt="Videojuegos"
                />
              </div>
              <h3>Videojuegos</h3>
              <p>
                Permite que la respuesta de los comandos del juego lleguen más
                rápido que el adversario.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FOQueEs;
