import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { serverAPILambda, S3_BASE_URL } from "../config";
import "./TriviaDetail.css";
import ActivarCuenta from "./ActivarCuenta";

// Componente reutilizable para los campos de entrada
const InputField = ({ label, id, type, value, onChange }) => (
  <div className="mb-3">
    <label htmlFor={id} className="form-label form-label-datos">
      {label}
    </label>
    <input
      type={type}
      className="form-control activar-cuenta_input"
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      required
    />
  </div>
);

// Componente para los datos personales
const PersonalDataForm = ({ personalData, handlePersonalDataChange }) => (
  <div className="datos-trivia ps-4 pe-4 ps-lg-0 pe-lg-0">
    <div className="text-center mb-5">
      <h3 className="big-title-services text-center">Datos personales</h3>
      <p>Completa los datos antes de continuar</p>
    </div>
    <div className="container datos-personales-trivia">
      <div className="row">
        <div className="col-md-6">
          <InputField
            label="Nombre completo"
            id="nombreUsuario"
            name="nombreUsuario"
            type="text"
            value={personalData.nombreUsuario}
            onChange={handlePersonalDataChange}
          />
          <InputField
            label="Teléfono"
            id="telefonoUsuario"
            name="telefonoUsuario"
            type="number"
            value={personalData.telefonoUsuario}
            onChange={handlePersonalDataChange}
          />
          <InputField
            label="Nombre del titular del contrato"
            id="nombreEnContrato"
            name="nombreEnContrato"
            type="text"
            value={personalData.nombreEnContrato}
            onChange={handlePersonalDataChange}
          />
        </div>
        <div className="col-md-6">
          <InputField
            label="Edad"
            id="edad"
            name="edad"
            type="number"
            value={personalData.edad || ""} // Manejar valores iniciales no definidos
            onChange={handlePersonalDataChange}
          />
          <InputField
            label="Número de contrato"
            id="numeroContrato"
            name="numeroContrato"
            type="text"
            value={personalData.numeroContrato}
            onChange={handlePersonalDataChange}
          />
          <InputField
            label="Ciudad"
            id="ciudad"
            name="ciudad"
            type="text"
            value={personalData.ciudad}
            onChange={handlePersonalDataChange}
          />
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
              // Pregunta abierta (textarea)
              <textarea
                className="form-control form-open-faq"
                name={`pregunta_${pregunta.idTriviasPreguntas}`}
                id={`pregunta_${pregunta.idTriviasPreguntas}`}
                value={selectedOptions[pregunta.idTriviasPreguntas] || ""} // Manejar valor inicial vacío
                onChange={(e) => handleOptionChange(pregunta.idTriviasPreguntas, e.target.value)}
                required={pregunta.preguntaObligatoria === 1} // Marcar como obligatorio si corresponde
              />
            ) : (
              // Pregunta de opciones (radio buttons)
              <div className="trivia-options">
                {[pregunta.a, pregunta.b, pregunta.c, pregunta.d].map((opcion, idx) => (
                  <div
                    key={idx}
                    className={`form-check ${selectedOptions[pregunta.idTriviasPreguntas] === opcion ? "active" : ""}`}
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
                      required={pregunta.preguntaObligatoria === 1} // Marcar como obligatorio si corresponde
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

// Componente para el formulario de trivia
const TriviaForm = ({
  preguntas,
  selectedOptions,
  handleOptionChange,
  handlePersonalDataChange,
  personalData,
  handleSubmit,
}) => (
  <form onSubmit={handleSubmit}>
    <PersonalDataForm personalData={personalData} handlePersonalDataChange={handlePersonalDataChange} />
    <TriviaQuestions preguntas={preguntas} selectedOptions={selectedOptions} handleOptionChange={handleOptionChange} />
    <div className="text-center mt-5">
      <button type="submit" className="btn btn-packs">
        Enviar
      </button>
    </div>
  </form>
);

// Componente para el encabezado
const Header = ({ trivia }) => {
  if (!trivia) return null;
  
  // Prioriza usar la URL de S3 completa si está disponible
  const bannerDesktopUrl = trivia.s3_banner_principal_url || 
                          `/uploads/bannerTrivias/${trivia.bannerPrincipal}`;
                         
  const bannerMobileUrl = trivia.s3_banner_movil_url || 
                         `/uploads/bannerTrivias/${trivia.bannerMovil}`;

  return (
    <div className="text-center ps-4 pe-4 ps-lg-0 pe-lg-0">
      <h2 className="small-title-services">GANA INCREÍBLES PREMIOS</h2>
      <h3 className="big-title-services big-title-container-sm">
        ¡Participa, Regístrate y Responde las Preguntas para Ganar!
      </h3>
      <div className="row mt-5">
        <div className="col-12 align-items-center d-flex ps-4 pe-4 ps-lg-0 pe-lg-0">
          <img
            src={bannerDesktopUrl}
            className="trivia-banner img-fluid d-none d-md-block"
            alt="Trivia Banner"
            onError={(e) => {
              e.target.onerror = null; // Evitar bucle infinito
              // Intentar con ruta local
              e.target.src = `/uploads/bannerTrivias/${trivia.bannerPrincipal}`;
            }}
          />
          <img
            src={bannerMobileUrl}
            className="w-100 d-md-none"
            alt="Trivia Banner Mobile"
            onError={(e) => {
              e.target.onerror = null; // Evitar bucle infinito
              // Intentar con ruta local
              e.target.src = `/uploads/bannerTrivias/${trivia.bannerMovil}`;
            }}
          />
        </div>
        <h1>{trivia.titulo}</h1>
        <p>{trivia.descripcion}</p>
      </div>
    </div>
  );
};

const TriviaDetail = () => {
  const { endpoint } = useParams();
  const [trivia, setTrivia] = useState(null);
  const [preguntas, setPreguntas] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [personalData, setPersonalData] = useState({
    nombreUsuario: "",
    telefonoUsuario: "",
    numeroContrato: "",
    ciudad: "",
    nombreEnContrato: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTriviaData = async () => {
      try {
        // Actualizado para usar el endpoint correcto de la API Gateway
        const triviaResponse = await fetch(`${serverAPILambda}api/triviasData/${endpoint}`);
        const triviaDataArray = await triviaResponse.json();

        if (triviaDataArray.length > 0) {
          const triviaData = triviaDataArray[0];
          setTrivia(triviaData);

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
        setLoading(false);
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

  const handlePersonalDataChange = (e) => {
    const { name, value } = e.target;
    setPersonalData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar que todas las preguntas tengan una respuesta
    const respuestas = preguntas.map((pregunta) => ({
      idPregunta: pregunta.idTriviasPreguntas,
      respuesta: selectedOptions[pregunta.idTriviasPreguntas] || "", // Respuesta seleccionada o texto ingresado
    }));

    const preguntasSinRespuesta = respuestas
      .filter((respuesta) => {
        const pregunta = preguntas.find((p) => p.idTriviasPreguntas === respuesta.idPregunta);
        if (pregunta.tipoPregunta === 2) {
          // Validar preguntas abiertas (tipoPregunta = 2)
          return !respuesta.respuesta.trim(); // Considerar vacía si solo tiene espacios
        }
        // Validar preguntas de opciones (tipoPregunta = 1)
        return !respuesta.respuesta;
      })
      .map((respuesta) => respuesta.idPregunta); // Obtener los IDs de las preguntas sin respuesta

    if (preguntasSinRespuesta.length > 0) {
      alert(`Por favor, responde todas las preguntas. Faltan las siguientes preguntas: ${preguntasSinRespuesta.join(", ")}`);
      return;
    }

    // Validar datos personales
    if (!personalData.nombreUsuario || !personalData.telefonoUsuario) {
      alert("Por favor, completa todos los campos personales.");
      return;
    }

    const payload = {
      idTriviaConfig: trivia.idTriviaConfig,
      respuestas,
      ...personalData,
    };

    try {
      const response = await fetch(`${serverAPILambda}api/respuestas`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Respuestas enviadas exitosamente.");
      } else {
        console.error("Error al enviar las respuestas:", data.error);
        alert("Hubo un error al enviar las respuestas.");
      }
    } catch (error) {
      console.error("Error al enviar las respuestas:", error);
      alert("Hubo un error al enviar las respuestas.");
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <p>Cargando trivia, por favor espera...</p>
        <div className="spinner"></div>
      </div>
    );
  }

  if (!trivia) {
    return <div>Error: No se pudo cargar la trivia. Por favor, inténtalo más tarde.</div>;
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
          handlePersonalDataChange={handlePersonalDataChange}
          personalData={personalData}
          handleSubmit={handleSubmit}
        />
      </div>
    </ActivarCuenta>
  );
};

export default TriviaDetail;