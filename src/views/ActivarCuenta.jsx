import React from 'react';
import './ActivarCuenta.css';

const ActivarCuenta = ({ title, mainTitle = "ACTIVA", children }) => {
  return (
    <div className="container-fluid p-0">
      <h1 className="text-center title-tabs">{mainTitle}<br /><span className="fw-title-tabs">{title}</span></h1>
      
      <div className="container-fluid m-0 p-0">
        <div className="tab-content mt-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ActivarCuenta;