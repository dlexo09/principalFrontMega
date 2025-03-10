import React from 'react';
import { useParams } from 'react-router-dom';

const DetallePaquete = () => {
  const { idContrata } = useParams();

  return (
    <div>
      <h1>Detalle del Paquete</h1>
      <p>ID del Contrato: {idContrata}</p>
    </div>
  );
};

export default DetallePaquete;