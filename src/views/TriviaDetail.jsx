import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { serverAPIUrl } from "../config"; // Ajusta la ruta según la ubicación de tu archivo config.js
import "./TriviaDetail.css";
import ActivarCuenta from "./ActivarCuenta";

const TriviaDetail = () => {
  const { endpoint } = useParams();
  const [trivia, setTrivia] = useState(null);
  const [preguntas, setPreguntas] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});

  useEffect(() => {
    const fetchTrivia = async () => {
      try {
        const response = await fetch(
          `${serverAPIUrl}api/trivias/data?id=${endpoint}`
        );
        const data = await response.json();
        setTrivia(data);
        console.log(data);

        if (data.idTriviaConfig) {
          // Usar idtriviaConfig para obtener las preguntas
          const preguntasResponse = await fetch(
            `${serverAPIUrl}api/triviaspreguntas/data?id=${data.idTriviaConfig}`
          );
          const preguntasData = await preguntasResponse.json();
          setPreguntas(preguntasData);
        } else {
          console.error("idtriviaConfig is undefined");
        }
      } catch (error) {
        console.error("Error fetching trivia or preguntas:", error);
      }
    };

    fetchTrivia();
  }, [endpoint]);

  const handleOptionChange = (preguntaId, opcion) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [preguntaId]: opcion,
    }));
  };

  if (!trivia) {
    return <div>Loading...</div>;
  }

  return (
    <ActivarCuenta mainTitle="PARTICIPA" title="Y GANA">
      <div className="pt-5 trivias-container">
        <div className="text-center">
          <h2 className="small-title-services">GANA INCREÍBLES PREMIOS</h2>
          <h3 className="big-title-services big-title-container-sm">
            ¡Participa, Regístrate y Responde las Preguntas para Ganar!
          </h3>
        </div>

        <div className="row mt-5">
          <div className="col-12 align-items-center d-flex">
            <img
              src={`${serverAPIUrl}${trivia.rutaPrincipal}${trivia.archivoPrincipal}`}
              className="trivia-banner img-fluid"
              alt="Trivia Banner"
            />
          </div>

          <h1>{trivia.titulo}</h1>
          <p>{trivia.descripcion}</p>

          <form>
            <div className="datos-trivia">
              <div className="text-center mb-5">
                <h3 className="big-title-services text-center">
                  Datos personales
                </h3>
                <p>Completa los datos antes de continuar</p>
              </div>
              <div className="container datos-personales-trivia">
                <div className="row ">
                  <div className="col-6 ">
                    {/* Aquí puedes agregar los campos del formulario según sea necesario */}
                    <div className="mb-3">
                      <label htmlFor="nombre" className="form-label form-label-datos">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        className="form-control activar-cuenta_input"
                        id="nombre"
                        name="nombre"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="telefono" className="form-label form-label-datos">
                        Teléfono
                      </label>
                      <input
                        type="number"
                        className="form-control activar-cuenta_input "
                        id="telefono"
                        name="telefono"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="titular" className="form-label form-label-datos">
                        Nombre del titular del contrato
                      </label>
                      <input
                        type="text"
                        className="form-control activar-cuenta_input"
                        id="titular"
                        name="titular"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-6">
                    {/* Aquí puedes agregar los campos del formulario según sea necesario */}
                    <div className="mb-3">
                      <label htmlFor="edad" className="form-label form-label-datos">
                        Edad
                      </label>
                      <input
                        type="number"
                        className="form-control activar-cuenta_input"
                        id="edad"
                        name="edad"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="contrato" className="form-label form-label-datos">
                        Número de contrato
                      </label>
                      <input
                        type="text"
                        className="form-control activar-cuenta_input"
                        id="contrato"
                        name="contrato"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="ciudad" className="form-label form-label-datos">
                        Ciudad
                      </label>
                      <input
                        type="text"
                        className="form-control activar-cuenta_input"
                        id="ciudad"
                        name="ciudad"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ******** TRIVIA ******** */}
            <div className="container datos-personales-trivia">
              <div className="text-center mb-5">
                <h3 className="big-title-services text-center">GIVE AWAY</h3>
              </div>
              <div className="col-12">
                <div className="container">
                  {preguntas.map((pregunta, index) => (
                    <div key={index} className="mb-3">
                      <label className="form-label">{pregunta.pregunta}</label>
                      {pregunta.tipoPregunta === 2 ? (
                        <input
                          type="text"
                          className="form-control"
                          name={`pregunta_${pregunta.idTriviasPreguntas}`}
                          required
                        />
                      ) : (
                        <div className="trivia-options">
                          {[pregunta.a, pregunta.b, pregunta.c, pregunta.d].map(
                            (opcion, idx) => (
                              <div
                                key={idx}
                                className={`form-check ${
                                  selectedOptions[pregunta.idTriviasPreguntas] === opcion
                                    ? "active"
                                    : ""
                                }`}
                                onClick={() =>
                                  handleOptionChange(pregunta.idTriviasPreguntas, opcion)
                                }
                              >
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name={`pregunta_${pregunta.idTriviasPreguntas}`}
                                  id={`pregunta_${pregunta.idTriviasPreguntas}_opcion_${idx}`}
                                  value={opcion}
                                  checked={
                                    selectedOptions[pregunta.idTriviasPreguntas] === opcion
                                  }
                                  onChange={() =>
                                    handleOptionChange(pregunta.idTriviasPreguntas, opcion)
                                  }
                                  required
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={`pregunta_${pregunta.idTriviasPreguntas}_opcion_${idx}`}
                                >
                                  {opcion}
                                </label>
                              </div>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </ActivarCuenta>
  );
};

export default TriviaDetail;
