import React, { useEffect, useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Canales.css';
import { LocationContext } from '../LocationContext';
import { serverAPIUrl } from '../config';

const Canales = () => {
  const { currentLocation } = useContext(LocationContext);
  const [canales, setCanales] = useState({});

  useEffect(() => {
    if (currentLocation) {
      fetch(`${serverAPIUrl}api/canales/${currentLocation.idSucursal}`)
        .then(response => response.json())
        .then(data => {
          const groupedCanales = data.reduce((acc, canal) => {
            const { tipoCanal, validacion } = canal;
            if (!acc[tipoCanal]) {
              acc[tipoCanal] = [];
            }
            acc[tipoCanal].push({
              ...canal,
              conecta: validacion === 2,
              basico_plus: validacion >= 1
            });
            return acc;
          }, {});
          setCanales(groupedCanales);
        })
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [currentLocation]);

  return (
    <div className="container my-4">
      <h1>Canales</h1>
      <div className="row">
        <div className="col-3 font-weight-bold">Canales</div>
        <div className="col-3 font-weight-bold">Conecta</div>
        <div className="col-3 font-weight-bold">Básico Plus</div>
        <div className="col-3 font-weight-bold">Selector</div>
      </div>
      {Object.keys(canales).map(familia => (
        <div key={familia}>
          <div className="row mt-3">
            <div className="col-12 font-weight-bold text-center bg-dark text-white py-2">{familia}</div>
          </div>
          {Array.isArray(canales[familia]) && canales[familia].map((canal, index) => (
            <div className="row" key={index}>
              <div className="col-3">
                <img src={`${serverAPIUrl}uploads/canales/${canal.imagen}`} alt={`${canal.imagen}`} className="img-fluid" style={{ maxHeight: '100px' }} />
              </div>
              <div className="col-3">
                {canal.conecta ? <i className="fas fa-check">*</i> : null}
              </div>
              <div className="col-3">
                {canal.basico_plus ? <i className="fas fa-check">*</i> : null}
              </div>
              <div className="col-3">
                {canal.selectorCanal}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Canales;