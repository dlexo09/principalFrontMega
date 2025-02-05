import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // Importa Navigate
import TabsComponent from "../components/TabsComponent";
import SOPPago from "../components/SOPPago";
import SOPFAQ from "../components/SOPFAQ";
import SOPCIS from "../components/SOPCIS";
import SoporteOnline from "../components/SoporteOnline";
import '../components/Globales.css';

const Ayuda = () => {
  const tabs = [
    { id: "formas-de-pago", label: "Formas de pago" },
    { id: "preguntas-frecuentes", label: "Preguntas Frecuentes" },
    { id: "centros-de-atencion", label: "CIS" },
    { id: "soporte-tecnico-online", label: "Soporte Técnico" },
  ];

  return (
    <div className="container-fluid p-0">
      <h1 className="text-center title-tabs">AYUDA</h1>
      {/* Componente de tabs reutilizable */}
      <TabsComponent tabs={tabs} basePath="/ayuda" />

      <div className="container-fluid m-0 p-0">
        {/* Renderizamos el contenido de las subrutas */}
        <div className="tab-content mt-4">
          <Routes>
            {/* Redirige a la tab inicial si no se especifica ninguna subruta */}
            <Route path="/" element={<Navigate to="formas-de-pago" />} />
            <Route path="formas-de-pago" element={<SOPPago />} />
            <Route path="preguntas-frecuentes" element={<SOPFAQ />} />
            <Route path="centros-de-atencion" element={<SOPCIS />} />
            <Route path="soporte-tecnico-online" element={<SoporteOnline />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Ayuda;
