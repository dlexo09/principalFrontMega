import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // Importa Navigate
import TabsComponent from "../components/TabsComponent";
import XVBeneficios from "../components/XVBeneficios";
import XVConoce from "../components/XVConoce";
import XVTutoriales from "../components/XVTutoriales";
import TVCanales from "../components/TVCanales";
import "../components/Globales.css";

const Xview = () => {
  const tabs = [
    { id: "beneficios", label: "Oferta y Beneficios" },
    { id: "conoce-xview", label: "Conoce Xview+" },
    { id: "tutoriales", label: "Tutoriales" },
    { id: "canales", label: "Canales" },
  ];
  return (
    <>
      <div className="container-fluid p-0">
        <h1 className="text-center title-tabs">
          <img
            src="../src/assets/images/servicios/tv-interactiva/xview-logo.png"
            alt="Xview+"
          />
          <br />
          <span className="fw-title-tabs">TV INTERACTIVA</span>
        </h1>

        {/* Componente de tabs reutilizable */}
        <TabsComponent tabs={tabs} basePath="/xview" />

        {/* Renderizamos el contenido de las subrutas */}
         <div className="tab-content mt-4">
          <Routes>
            {/* Redirige a la tab inicial si no se especifica ninguna subruta */}
            <Route path="/" element={<Navigate to="beneficios" />} />
            <Route path="beneficios" element={<XVBeneficios />} />
            <Route path="canales" element={<TVCanales />} />
            <Route path="conoce-xview" element={<XVConoce />} />
            <Route path="tutoriales" element={<XVTutoriales />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Xview;
