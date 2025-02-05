import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // Importa Navigate
import TabsComponent from "../components/TabsComponent";
import OFResidencial from "../components/OFResidencial";
import OFFullConnected from "../components/OFFullConnected";
import '../components/Globales.css';

const Paquetes = () => {
  const tabs = [
    { id: "residencial", label: "Residencial" },
    { id: "full-connected", label: "Full Connected" },

  ];

  return (
    <div className="container-fluid p-0">
      <h1 className="text-center title-tabs">OFERTA<br /><span className="fw-title-tabs">RESIDENCIAL</span></h1>
      {/* Componente de tabs reutilizable */}
      <TabsComponent tabs={tabs} basePath="/paquetes" />

      <div className="container-fluid m-0 p-0">
        {/* Renderizamos el contenido de las subrutas */}
        <div className="tab-content mt-4">
          <Routes>
            {/* Redirige a la tab inicial si no se especifica ninguna subruta */}
            <Route path="/" element={<Navigate to="residencial" />} />
            <Route path="residencial" element={<OFResidencial />} />
            <Route path="full-connected" element={<OFFullConnected/>} />

          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Paquetes;
