import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // Importa Navigate
import TabsComponent from "../components/TabsComponent";
import '../components/Globales.css';

const Television = () => {
  const tabs = [
    { id: "xviwe-o-tv-interactiva", label: "Xview o TV Interactiva" },
  ];

  return (
    <div className="container-fluid p-0">
      <h1 className="text-center title-tabs">TV INTERACTIVA</h1>
      {/* Componente de tabs reutilizable */}
      <TabsComponent tabs={tabs} basePath="/television" />

      <div className="container">
        {/* Renderizamos el contenido de las subrutas */}
        <div className="tab-content mt-4">
          <Routes>
            {/* Redirige a la tab inicial si no se especifica ninguna subruta */}
            <Route path="/" element={<Navigate to="xviwe-o-tv-interactiva" />} />

          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Television;
