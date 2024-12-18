import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { serverAPIUrl } from '../config'; // Ajusta la ruta según la ubicación de tu archivo config.js

const TriviaDetail = () => {
  const { endpoint } = useParams();
  const [trivia, setTrivia] = useState(null);

  useEffect(() => {
    const fetchTrivia = async () => {
      try {
        const response = await fetch(`${serverAPIUrl}api/trivias/data?id=${endpoint}`);
        const data = await response.json();
        setTrivia(data);
      } catch (error) {
        console.error('Error fetching trivia:', error);
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
          <img src={`${serverAPIUrl}${trivia.rutaPrincipal}${trivia.archivoPrincipal}`} className="img-fluid" alt="Trivia Banner" />
        </div>
        <div className="col-12">
          <h1>{trivia.titulo}</h1>
          <p>{trivia.descripcion}</p>
          <form>
            {/* Aquí puedes agregar los campos del formulario según sea necesario */}
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="nombre" name="nombre" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" name="email" required />
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TriviaDetail;