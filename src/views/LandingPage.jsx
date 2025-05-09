import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./LandingPage.css";
import PaquetesTarifarios from "../components/PaquetesTarifarios";

const LandingPage = ({ setShowHeader }) => {
  const { slug } = useParams();
  const [landingData, setLandingData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [phone, setPhone] = useState(""); // Estado para el campo de teléfono
  const [formSubmitted, setFormSubmitted] = useState(false); // Estado para manejar el envío del formulario

  useEffect(() => {
    const fetchLandingData = async () => {
      try {
        const response = await fetch("/landingPages.json");
        const data = await response.json();

        const landing = data.find((item) => item.slug === slug);
        if (landing) {
          setLandingData(landing);
          setShowHeader(landing.showHeader); // Actualizar visibilidad del header
        } else {
          setError(true);
        }
        setLoading(false);
      } catch (err) {
        console.error("Error fetching landing page data:", err);
        setError(true);
        setLoading(false);
      }
    };

    fetchLandingData();
  }, [slug, setShowHeader]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!phone) {
      alert("Por favor, ingresa un número de teléfono válido.");
      return;
    }

    try {
      const response = await fetch(landingData.formLink, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone }),
      });

      if (response.ok) {
        setFormSubmitted(true);
        alert("¡Gracias! Nos pondremos en contacto contigo pronto.");
      } else {
        alert("Hubo un error al enviar el formulario. Inténtalo de nuevo.");
      }
    } catch (err) {
      console.error("Error al enviar el formulario:", err);
      alert("Hubo un error al enviar el formulario. Inténtalo de nuevo.");
    }
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: No se encontró la página solicitada.</p>;

  return (
    <div className="landing-page">
      <div className="landing-banner">
        <img
          src={landingData.bannerImage}
          alt={landingData.title}
          className="landing-banner-image"
        />
        <h1 className="landing-title">{landingData.title}</h1>
      </div>

      <div className="landing-content">
        {/* Formulario */}
        <div className="landing-form-section">
          <form onSubmit={handleSubmit} className="landing-form">
            <span className="form-title">¡Quiero contratar!</span>
            <input
              type="tel"
              placeholder="Ingresa tu teléfono"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              required
            />
            <button type="submit" className="btn btn-primary">
              Llámame
            </button>
          </form>
        </div>

        {/* Componente PaquetesTarifarios */}
        {landingData.showPackages && (
          <div className="landing-paquetes-tarifarios">
            <PaquetesTarifarios />
          </div>
        )}

        {/* Componente dinámico */}
        <div className="landing-dynamic-component">
          {landingData.component && (
            <div dangerouslySetInnerHTML={{ __html: landingData.component }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;