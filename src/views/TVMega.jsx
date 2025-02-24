import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // Importa Navigate
import TabsComponent from "../components/TabsComponent";
import TVCanales from "../components/TVCanales";
import "../components/Globales.css";

const Xview = () => {
  const tabs = [
    { id: "canales", label: "canales" },
  ];
  return (
    <>
      <div className="container-fluid p-0">
        <h1 className="text-center title-tabs">
          <br />
          <span className="fw-title-tabs">TELEVISIÓN</span>
        </h1>



        {/* Componente de tabs reutilizable */}
        <TabsComponent tabs={tabs} basePath="/tv" />
          <Routes>
            <Route path="/" element={<Navigate to="canales" />} />
          </Routes>
          <div className="container">
            <Routes>
            <Route path="canales" element={<TVCanales />} />
            </Routes>
          </div>
          </div>
      
    </>
  );
};

export default Xview;
