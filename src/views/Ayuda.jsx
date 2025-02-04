import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // Importa Navigate
import TabsComponent from "../components/TabsComponent";
import SOPPago from "../components/SOPPago";
import '../components/Globales.css';

const Internet = () => {
  const tabs = [
    { id: "formas-de-pago", label: "Formas de pago" },

  ];

  return (
    <div className="container-fluid p-0">
      <h1 className="text-center title-tabs">SOPORTE</h1>
      {/* Componente de tabs reutilizable */}
      <TabsComponent tabs={tabs} basePath="/ayuda" />

      <div className="container-fluid m-0 p-0">
        {/* Renderizamos el contenido de las subrutas */}
        <div className="tab-content mt-4">
          <Routes>
            {/* Redirige a la tab inicial si no se especifica ninguna subruta */}
            <Route path="/" element={<Navigate to="formas-de-pago" />} />
            <Route path="formas-de-pago" element={<SOPPago />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Internet;
