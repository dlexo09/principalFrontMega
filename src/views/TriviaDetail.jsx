// filepath: /c:/xampp/htdocs/Front-react-bostrap-vite/my-react-app/src/views/TriviaDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { serverAPIUrl } from '../config'; // Ajusta la ruta según la ubicación de tu archivo config.js
import './TriviaDetail.css'; // Importar el archivo CSS personalizado

const TriviaDetail = () => {
  const { endpoint } = useParams();
  const [trivia, setTrivia] = useState(null);
  const [preguntas, setPreguntas] = useState([]);

  useEffect(() => {
    const fetchTrivia = async () => {
      try {
        const response = await fetch(`${serverAPIUrl}api/trivias/data?id=${endpoint}`);
        const data = await response.json();
        setTrivia(data);
        console.log(data);

        if (data.idTriviaConfig) {
          // Usar idtriviaConfig para obtener las preguntas
          const preguntasResponse = await fetch(`${serverAPIUrl}api/triviaspreguntas/data?id=${data.idTriviaConfig}`);
          const preguntasData = await preguntasResponse.json();
          setPreguntas(preguntasData);
        } else {
          console.error('idtriviaConfig is undefined');
        }
      } catch (error) {
        console.error('Error fetching trivia or preguntas:', error);
      }
    };

    fetchTrivia();
  }, [endpoint]);

  if (!trivia) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <img src={`${serverAPIUrl}${trivia.rutaPrincipal}${trivia.archivoPrincipal}`} className="trivia-banner img-fluid" alt="Trivia Banner" />
        </div>
        <div className="col-12">
          <h1>{trivia.titulo}</h1>
          <p>{trivia.descripcion}</p>
          <form>
            <div className="row">
              <div className="col-6">
                {/* Aquí puedes agregar los campos del formulario según sea necesario */}
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">Nombre completo</label>
                  <input type="text" className="form-control" id="nombre" name="nombre" required />
                </div>

                <div className="mb-3">
                  <label htmlFor="telefono" className="form-label">Teléfono</label>
                  <input type="number" className="form-control" id="telefono" name="telefono" required />
                </div>

                <div className="mb-3">
                  <label htmlFor="titular" className="form-label">Nombre del titular del contrato</label>
                  <input type="text" className="form-control" id="titular" name="titular" required />
                </div>
              </div>

              <div className="col-6">
                {/* Aquí puedes agregar los campos del formulario según sea necesario */}
                <div className="mb-3">
                  <label htmlFor="edad" className="form-label">Edad</label>
                  <input type="number" className="form-control" id="edad" name="edad" required />
                </div>

                <div className="mb-3">
                  <label htmlFor="contrato" className="form-label">Número de contrato</label>
                  <input type="text" className="form-control" id="contrato" name="contrato" required />
                </div>

                <div className="mb-3">
                  <label htmlFor="ciudad" className="form-label">Ciudad</label>
                  <input type="text" className="form-control" id="ciudad" name="ciudad" required />
                </div>
              </div>
            </div>

            {preguntas.map((pregunta, index) => (
              <div key={index} className="mb-3">
                <label className="form-label">{pregunta.pregunta}</label>
                {pregunta.tipoPregunta === 2 ? (
                  <input type="text" className="form-control" name={`pregunta_${pregunta.idTriviasPreguntas}`} required />
                ) : (
                  <div>
                    {[pregunta.a, pregunta.b, pregunta.c, pregunta.d].map((opcion, idx) => (
                      <div key={idx} className="form-check">
                        <input className="form-check-input" type="radio" name={`pregunta_${pregunta.idTriviasPreguntas}`} id={`pregunta_${pregunta.idTriviasPreguntas}_opcion_${idx}`} value={opcion} required />
                        <label className="form-check-label" htmlFor={`pregunta_${pregunta.idTriviasPreguntas}_opcion_${idx}`}>
                          {opcion}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <button type="submit" className="btn btn-primary">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TriviaDetail;