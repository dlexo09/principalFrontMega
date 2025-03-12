import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // Importa Navigate
import TabsComponent from "../components/TabsComponent";
import TIBeneficios from "../components/TIBeneficios";
import TICostos from "../components/TICostos";
import TIPortabilidad from "../components/TIPortabilidad";
import TIServiciosA from "../components/TIServiciosA";
import TIReactivacion from "../components/TIReactivacion";
import '../components/Globales.css';

const TelefoniaIlimitada = () => {
  const tabs = [
    { id: "beneficios", label: "Beneficios" },
    { id: "costos-larga-distancia", label: "Costos y Larga Distancia" },
    { id: "portabilidad", label: "Portabilidad" },
    { id: "servicios-adicionales", label: "Servicios Adicionales" },
    { id: "reactivacion", label: "Reactivación" },
  ];

  return (
    <div className="container-fluid p-0">
      <h4 className="text-center title-tabs">TELEFONÍA<br /><span className="fw-title-tabs">ILIMITADA</span></h4>
      {/* Componente de tabs reutilizable */}
      <TabsComponent tabs={tabs} basePath="/telefonia-ilimitada" />

      <div className="container-fluid m-0 p-0">
        {/* Renderizamos el contenido de las subrutas */}
        <div className="tab-content mt-4">
          <Routes>
            {/* Redirige a la tab inicial si no se especifica ninguna subruta */}
            <Route path="/" element={<Navigate to="beneficios" />} />
            <Route path="beneficios" element={<TIBeneficios />} />
            <Route path="costos-larga-distancia" element={<TICostos />} />
            <Route path="portabilidad" element={<TIPortabilidad />} />
            <Route path="servicios-adicionales" element={<TIServiciosA />} />
            <Route path="reactivacion" element={<TIReactivacion />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default TelefoniaIlimitada;
