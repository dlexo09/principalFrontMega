import React, { useState } from "react";
import PaquetesTarifariosDisney from "./PaquetesTarifariosDisney";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./PackStrDisney.css";

const PackStrDisney = () => {
  const [selectedPack, setSelectedPack] = useState("triple");
  const [isCliente, setIsCliente] = useState(false);

  const handleClienteChange = (isClienteValue) => {
    setIsCliente(isClienteValue);
  };

  return (
    <div className="container paquetes-tarifarios text-center">
      <div className="cliente-question mb-4">
        <h3 className="small-title txt-disney-color">EL MEJOR PLAN PARA TI</h3>
        <h3 className="big-title mb-5">¿Ya eres cliente Mega?</h3>
        <div className="btn-container">
          <button
            className={`pack-btn btn-lg mx-2 disney-cliente-btn ${
              isCliente ? "pack-btn-active disney-btn-color" : "pack-btn-inactive"
            }`}
            onClick={() => handleClienteChange(true)}
          >
            Sí
          </button>
          <button
            className={`pack-btn btn-lg mx-2 disney-cliente-btn ${
              !isCliente ? "pack-btn-active disney-btn-color" : "pack-btn-inactive"
            }`}
            onClick={() => handleClienteChange(false)}
          >
            No
          </button>
        </div>
      </div>

      {isCliente ? (
        <ClienteTable />
      ) : (
        <PaquetesTarifariosDisney selectedPack={selectedPack} />
      )}
    </div>
  );
};

const ClienteTable = () => {
  return (
    <>
      <div className="mt-4">
        <p className="cliente-info mt-5">
          ¡Elige el paquete ideal para disfrutar el mejor contenido para toda la
          familia!
        </p>
      </div>
      <div className="container table-str-clients d-none d-lg-block">
        <table className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">ESTÁNDAR</th>
              <th scope="col">PREMIUM</th>
            </tr>
          </thead>
          <tbody>
            <tr className="tr-gray">
              <td className="text-start br-str-table1">Familiar</td>
              <td><span></span></td>
              <td><span></span></td>
            </tr>
            <tr>
              <td className="text-start">Deportes</td>
              <td>ESPN 1, ESPN 3</td>
              <td>TODO ESPN</td>
            </tr>
            <tr className="tr-gray">
              <td className="text-start">Anuncios en VOD</td>
              <td>NO</td>
              <td>NO</td>
            </tr>
            <tr>
              <td className="text-start">Calidad de Video</td>
              <td>1080 MP</td>
              <td>UHD / HDR</td>
            </tr>
            <tr className="tr-gray">
              <td className="text-start">Dispositivos Simultáneos</td>
              <td>2</td>
              <td>4</td>
            </tr>
            <tr>
              <td className="text-start">Descargas</td>
              <td>Si</td>
              <td>Si</td>
            </tr>
            <tr className="tr-gray">
              <td className="text-start br-str-table3">Calidad de Audio</td>
              <td>STEREO 5.1</td>
              <td>ATMOS</td>
            </tr>
          </tbody>
        </table>

        <div className="contrata-str-clients row d-flex justify-content-end">
          <PlanButton />
          <PlanButton />
        </div>
      </div>

      <ClienteCarousel />
      <LegalDisclaimer />
    </>
  );
};

const PlanButton = () => {
  return (
    <div className="col-md-4 plans-contrata">
      <img src="/icons/disney/strm-icon.png" alt="" />
      <button className="btn-packs disney-btn-color btn-client-pos">
        ¡Lo quiero!
      </button>
    </div>
  );
};

const ClienteCarousel = () => {
  const datosPrueba = [
    {
      titulo: "ESTÁNDAR",
      contenido: (
        <ul className="beneficios-pack-movile">
          <li>Familiar</li>
          <li>ESPN 1, ESPN 3</li>
          <li>Sin Anuncios en VOD</li>
          <li>Video 1080 MP</li>
          <li>2 Dispositivos Simultáneos</li>
          <li>Descargas Disponibles</li>
          <li>Audio STEREO 5.1</li>
        </ul>
      ),
    },
    {
      titulo: "PREMIUM",
      contenido: (
        <ul className="beneficios-pack-movile">
          <li>Familiar</li>
          <li>TODO ESPN</li>
          <li>Sin Anuncios en VOD</li>
          <li>Video UHD / HDR</li>
          <li>4 Dispositivos Simultáneos</li>
          <li>Descargas Disponibles</li>
          <li>Audio ATMOS</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="carousel-container d-lg-none mt-5">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".packs-next",
          prevEl: ".packs-prev",
        }}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          576: {
            slidesPerView: 2 ,
          },
        }}
        className="pb-5"
      >
        {datosPrueba.map((paquete, index) => (
          <SwiperSlide key={index}>
            <div className="paquete-item paquete-item-disney card mt-5">
              <div className="card-body card-body-movile">
                <img
                  className="str-icon-movile"
                  src="/icons/disney/strm-icon.png"
                  alt="Icono Disney"
                />
                <h3 className="pack-movile-title">{paquete.titulo}</h3>
                <div className="text-start">{paquete.contenido}</div>
                <button className="btn-packs disney-btn-color btn-pack-movil">
                  ¡Lo quiero!
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="carousel-control-prev packs-prev">
        <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </div>

        <button className="carousel-control-next packs-next" type="button">
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </button>
      </Swiper>
    </div>
  );
};

const LegalDisclaimer = () => {
  return (
    <div className="pack-client-legal mt-5">
      <p className="pt-lg-5">
        *Aplican restricciones. Consulta términos y condiciones <a href="#">aquí</a>
      </p>
    </div>
  );
};

export default PackStrDisney;
