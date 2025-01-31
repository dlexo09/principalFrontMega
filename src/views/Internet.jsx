import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // Importa Navigate
import TabsComponent from "../components/TabsComponent";
import INBeneficios from "../components/INBeneficios";
import INVelocidad from "../components/INVelocidad";
import INZonaWifi from "../components/INZonaWifi";
import '../components/Globales.css';

const Internet = () => {
  const tabs = [
    { id: "beneficios", label: "Oferta y beneficios" },
    { id: "mide-tu-velocidad", label: "Mide tu velocidad" },
    { id: "zonas-wifi", label: "Zona Wifi" },
  ];

  return (
    <div className="container-fluid p-0">
      <h1 className="text-center title-tabs">INTERNET</h1>
      {/* Componente de tabs reutilizable */}
      <TabsComponent tabs={tabs} basePath="/internet" />

      <div className="container-fluid m-0 p-0">
        {/* Renderizamos el contenido de las subrutas */}
        <div className="tab-content mt-4">
          <Routes>
            {/* Redirige a la tab inicial si no se especifica ninguna subruta */}
            <Route path="/" element={<Navigate to="beneficios" />} />
            <Route path="beneficios" element={<INBeneficios />} />
            <Route path="mide-tu-velocidad" element={<INVelocidad />} />
            <Route path="zonas-wifi" element={<INZonaWifi />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Internet;
