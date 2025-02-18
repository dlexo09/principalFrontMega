import React, { useState, useEffect, useContext } from 'react';
import { LocationContext } from '../LocationContext'; // Importa LocationContext
import { Routes, Route, Navigate } from "react-router-dom"; // Importa Navigate
import { serverAPILambda } from '../config'; // Ajusta la ruta según la ubicación de tu archivo config.js


import TabsComponent from "../components/TabsComponent";
import OFResidencial from "../components/OFResidencial";
import OFFullConnected from "../components/OFFullConnected";

const Paquetes = () => {
  const { currentLocation } = useContext(LocationContext);
  const idSucursal = currentLocation?.idSucursal; // Obtener el idSucursal de currentLocation
  
  console.log("ID sucursal", idSucursal); // Imprimir el valor de idSucursal

  const [fullConnectedData, setFullConnectedData] = useState([]);
  const [tabs, setTabs] = useState([{ id: "residencial", label: "Residencial" }]);

  useEffect(() => {
    const fetchFullConnectedData = async () => {
      try {
        const response = await fetch(`${serverAPILambda}api/fullConnected`);
        const data = await response.json();
        setFullConnectedData(data);
      } catch (error) {
        console.error('Error fetching full connected data:', error);
      }
    };

    fetchFullConnectedData();
  }, []);

  useEffect(() => {
    if (fullConnectedData.some(item => item.idSucursal === idSucursal && item.status === 1)) {
      setTabs([
        { id: "residencial", label: "Residencial" },
        { id: "full-connected", label: "Full Connected" }
      ]);
    } else {
      setTabs([{ id: "residencial", label: "Residencial" }]);
    }
  }, [fullConnectedData, idSucursal]);

  return (
    <div className="container-fluid p-0">
      <h1 className="text-center title-tabs">OFERTA<br /><span className="fw-title-tabs">RESIDENCIAL</span></h1>
      {/* Componente de tabs reutilizable */}
      <TabsComponent tabs={tabs} basePath="/paquetes" />

      <div className="container-fluid m-0 p-0">
        {/* Renderizamos el contenido de las subrutas */}
        <div className="tab-content mt-4">
          <Routes>
            {/* Redirige a la tab inicial si no se especifica ninguna subruta */}
            <Route path="/" element={<Navigate to="residencial" />} />
            <Route path="residencial" element={<OFResidencial />} />
            {tabs.some(tab => tab.id === "full-connected") && (
              <Route path="full-connected" element={<OFFullConnected />} />
            )}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Paquetes;