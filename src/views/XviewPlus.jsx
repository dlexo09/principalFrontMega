import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // Importa Navigate
import TabsComponent from "../components/TabsComponent";
import XVBeneficios from "../components/XVPBeneficios";
import XVConoce from "../components/XVPConoce";
import TVCanales from "../components/TVCanales";
import XVFAQ from "../components/XVPFAQ";
import "../components/Globales.css";

const Xview = () => {
  const tabs = [
    { id: "beneficios", label: "Beneficios" },
    { id: "conoce-xviewplus", label: "Conoce Xview+" },
    { id: "canales", label: "Canales" },
    { id: "preguntas-frecuentes", label: "Preguntas Frecuentes" },
  ];
  return (
    <>
      <div className="container-fluid p-0">
        <h4 className="text-center title-tabs">
          <img
            src="../src/assets/images/servicios/tv-interactiva/xviewplus-logo.png"
            alt="Xview+"
          />
          <br />
          <span className="fw-title-tabs">TV INTERACTIVA</span>
        </h4>

        {/* Componente de tabs reutilizable */}
        <TabsComponent tabs={tabs} basePath="/xviewplus" />

        {/* Renderizamos el contenido de las subrutas */}
         <div className="tab-content mt-4">
          <Routes>
            {/* Redirige a la tab inicial si no se especifica ninguna subruta */}
            <Route path="/" element={<Navigate to="beneficios" />} />
            <Route path="beneficios" element={<XVBeneficios />} />
            <Route path="conoce-xviewplus" element={<XVConoce />} />
            <Route path="preguntas-frecuentes" element={<XVFAQ />} />
          </Routes>

          <div className="container">
          <Routes>
            {/* Redirige a la tab inicial si no se especifica ninguna subruta */}
            <Route path="canales" element={<TVCanales />} />
          </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default Xview;
