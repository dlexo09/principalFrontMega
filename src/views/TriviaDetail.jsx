import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { serverAPILambda } from "../config"; // Ajusta la ruta según la ubicación de tu archivo config.js
import "./TriviaDetail.css";
import ActivarCuenta from "./ActivarCuenta";

const TriviaDetail = () => {
  const { endpoint } = useParams();
  const [trivia, setTrivia] = useState(null);
  const [preguntas, setPreguntas] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTriviaData = async () => {
      try {
        // Llamada a la primera API para obtener los datos de la trivia
        const triviaResponse = await fetch(`${serverAPILambda}api/trivias/data?id=${endpoint}`);
        console.log(triviaResponse);
        const triviaDataArray = await triviaResponse.json();
    
        if (triviaDataArray.length > 0) {
          const triviaData = triviaDataArray[0]; // Acceder al primer elemento del array
          setTrivia(triviaData);
    
          // Esperar a que la trivia cargue antes de llamar a la segunda API
          if (triviaData.idTriviaConfig) {
            const preguntasResponse = await fetch(
              `${serverAPILambda}api/triviaspreguntas/data?id=${triviaData.idTriviaConfig}`
            );
            const preguntasData = await preguntasResponse.json();
            setPreguntas(preguntasData);
          } else {
            console.error("idTriviaConfig is undefined");
          }
        } else {
          console.error("No se encontraron datos de trivia.");
          setTrivia(null);
        }
      } catch (error) {
        console.error("Error fetching trivia or preguntas:", error);
      } finally {
        setLoading(false); // Finalizar la carga
      }
    };

    fetchTriviaData();
  }, [endpoint]);

  const handleOptionChange = (preguntaId, opcion) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [preguntaId]: opcion,
    }));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!trivia) {
    return <div>Error: No se pudo cargar la trivia.</div>;
  }

  return (
    <ActivarCuenta mainTitle="PARTICIPA" title="Y GANA">
      <div className="pt-5 trivias-container">
        <Header trivia={trivia} />
        <TriviaForm
          trivia={trivia}
          preguntas={preguntas}
          selectedOptions={selectedOptions}
          handleOptionChange={handleOptionChange}
        />
      </div>
    </ActivarCuenta>
  );
};

// Componente para el encabezado
const Header = ({ trivia }) => {
  if (!trivia || !trivia.bannerPrincipal || !trivia.bannerMovil) {
    return null; // No renderizar nada si los datos no están disponibles
  }

  return (
    <div className="text-center ps-4 pe-4 ps-lg-0 pe-lg-0">
      <h2 className="small-title-services">GANA INCREÍBLES PREMIOS</h2>
      <h3 className="big-title-services big-title-container-sm">
        ¡Participa, Regístrate y Responde las Preguntas para Ganar!
      </h3>
      <div className="row mt-5">
        <div className="col-12 align-items-center d-flex ps-4 pe-4 ps-lg-0 pe-lg-0">
          {/* Imagen del banner principal */}
          <img
            src={`/uploads/bannerTrivias/${trivia.bannerPrincipal}`}
            className="trivia-banner img-fluid d-none d-md-block"
            alt="Trivia Banner"
          />
          {/* Imagen del banner móvil */}
          <img
            src={`/uploads/bannerTrivias/${trivia.bannerMovil}`}
            className="w-100 d-md-none"
            alt="Trivia Banner Mobile"
          />
        </div>
        {/* Título y descripción de la trivia */}
        <h1>{trivia.titulo}</h1>
        <p>{trivia.descripcion}</p>
      </div>
    </div>
  );
};
// Componente para el formulario de trivia
const TriviaForm = ({ trivia, preguntas, selectedOptions, handleOptionChange }) => (
  <form>
    <PersonalDataForm />
    <TriviaQuestions
      preguntas={preguntas}
      selectedOptions={selectedOptions}
      handleOptionChange={handleOptionChange}
    />
    <div className="text-center mt-5">
      <button type="submit" className="btn btn-packs">
        Enviar
      </button>
    </div>
  </form>
);

// Componente para los datos personales
const PersonalDataForm = () => (
  <div className="datos-trivia ps-4 pe-4 ps-lg-0 pe-lg-0">
    <div className="text-center mb-5">
      <h3 className="big-title-services text-center">Datos personales</h3>
      <p>Completa los datos antes de continuar</p>
    </div>
    <div className="container datos-personales-trivia">
      <div className="row">
        <div className="col-md-6">
          <InputField label="Nombre completo" id="nombre" type="text" />
          <InputField label="Teléfono" id="telefono" type="number" />
          <InputField label="Nombre del titular del contrato" id="titular" type="text" />
        </div>
        <div className="col-md-6">
          <InputField label="Edad" id="edad" type="number" />
          <InputField label="Número de contrato" id="contrato" type="text" />
          <InputField label="Ciudad" id="ciudad" type="text" />
        </div>
      </div>
    </div>
  </div>
);

// Componente para las preguntas de la trivia
const TriviaQuestions = ({ preguntas, selectedOptions, handleOptionChange }) => (
  <div className="container datos-personales-trivia">
    <div className="text-center mb-3 mb-lg-5">
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
                className="form-control form-open-faq"
                name={`pregunta_${pregunta.idTriviasPreguntas}`}
                required
              />
            ) : (
              <div className="trivia-options">
                {[pregunta.a, pregunta.b, pregunta.c, pregunta.d].map((opcion, idx) => (
                  <div
                    key={idx}
                    className={`form-check ${selectedOptions[pregunta.idTriviasPreguntas] === opcion ? "active" : ""
                      }`}
                    onClick={() => handleOptionChange(pregunta.idTriviasPreguntas, opcion)}
                  >
                    <input
                      className="form-check-input"
                      type="radio"
                      name={`pregunta_${pregunta.idTriviasPreguntas}`}
                      id={`pregunta_${pregunta.idTriviasPreguntas}_opcion_${idx}`}
                      value={opcion}
                      checked={selectedOptions[pregunta.idTriviasPreguntas] === opcion}
                      onChange={() => handleOptionChange(pregunta.idTriviasPreguntas, opcion)}
                      required
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`pregunta_${pregunta.idTriviasPreguntas}_opcion_${idx}`}
                    >
                      {opcion}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Componente reutilizable para los campos de entrada
const InputField = ({ label, id, type }) => (
  <div className="mb-3">
    <label htmlFor={id} className="form-label form-label-datos">
      {label}
    </label>
    <input type={type} className="form-control activar-cuenta_input" id={id} name={id} required />
  </div>
);

export default TriviaDetail;