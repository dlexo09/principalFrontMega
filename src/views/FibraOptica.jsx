import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // Importa Navigate
import TabsComponent from "../components/TabsComponent";
import FORed from "../components/FORed";
import FOQueEs from "../components/FOQueEs";
import FOBeneficios from "../components/FOBeneficios";

import '../components/Globales.css';

const Ayuda = () => {
  const tabs = [
    { id: "nuestra-red", label: "Nuestra Red" },
    { id: "que-es", label: "¿Qué es?" },
    { id: "beneficios", label: "Beneficios" },

  ];

  return (
    <div className="container-fluid p-0">
      <h4 className="text-center title-tabs">FIBRA ÓPTICA<br /><span className="fw-title-tabs">Y SIMETRIA</span></h4>
      {/* Componente de tabs reutilizable */}
      <TabsComponent tabs={tabs} basePath="/fibra-optica" />

      <div className="container-fluid m-0 p-0">
        {/* Renderizamos el contenido de las subrutas */}
        <div className="tab-content mt-4">
          <Routes>
            {/* Redirige a la tab inicial si no se especifica ninguna subruta */}
            <Route path="/" element={<Navigate to="nuestra-red" />} />
            <Route path="nuestra-red" element={<FORed />} />
            <Route path="que-es" element={<FOQueEs />} />
            <Route path="beneficios" element={<FOBeneficios />} />

          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Ayuda;
