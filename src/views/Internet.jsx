import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // Importa Navigate
import TabsComponent from "../components/TabsComponent";
import INBeneficios from "../components/INBeneficios";
import INVelocidad from "../components/INVelocidad";
import INZonaWifi from "../components/INZonaWifi";
import INWifiUltra from "../components/INWifiUltra";
import INNorton from "../components/INNorton";
import '../components/Globales.css';



const Internet = () => {
  const tabs = [
    { id: "beneficios", label: "beneficios" },
    { id: "mide-tu-velocidad", label: "Mide tu velocidad" },
    { id: "zona-wifi", label: "Zona Wifi" },
    { id: "wifi-ultra", label: "Extensor Wifi" },
    { id: "norton", label: "Norton" },
  ];

  return (
    <div className="container-fluid p-0">
      <h4 className="text-center title-tabs">INTERNET</h4>
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
            <Route path="zona-wifi" element={<INZonaWifi />} />
            <Route path="wifi-ultra" element={<INWifiUltra />} />
            <Route path="norton" element={<INNorton />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Internet;
