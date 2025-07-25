import React, { useState } from 'react';
import { useInConcert } from '../hooks/useInConcert';
import './CallToActionHome.css';
import '../components/Globales.css';

const CallToActionHome = () => {
  const [phone, setPhone] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Usar el mismo hook con el mismo token 'home'
  const { submitLead, isDevelopment } = useInConcert('home');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!accepted) {
      alert('Debes aceptar el aviso de privacidad');
      return;
    }

    if (!phone) {
      alert('Por favor ingresa tu teléfono');
      return;
    }

    setIsSubmitting(true);

    try {
      const success = await submitLead({
        telefono: phone,
        source: 'call_to_action_home'
      });

      if (success) {
        alert('¡Gracias! Pronto te contactaremos.');
        setPhone('');
        setAccepted(false);
      } else {
        if (isDevelopment) {
          alert('¡Gracias! (Modo desarrollo - Lead simulado)');
          setPhone('');
          setAccepted(false);
        } else {
          alert('Error al enviar. Intenta de nuevo.');
        }
      }
    } catch (error) {
      console.error('Error en call to action submit:', error);
      alert('Error al enviar. Intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="call-to-action-home" id="CallToActionHome">
      <form onSubmit={handleSubmit} className="d-flex align-items-center justify-content-center">
        <label className="cta-label">QUIERO CONTRATAR Y DESEO QUE ME LLAMEN</label>
        <input
          type="tel"
          className="form-control me-3"
          placeholder="Tu teléfono"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          disabled={isSubmitting}
          required
        />
        <div className="form-check form-check-home me-3 ">
          <input
            type="checkbox"
            className="form-check-input"
            id="privacyCheck"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
            disabled={isSubmitting}
            required
          />
          <label className="form-check-label" htmlFor="privacyCheck">
            He leído y Acepto el Aviso de privacidad
          </label>
        </div>
        <button 
          type="submit" 
          className="btn btn-packs ps-5 pe-5"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Enviando...' : 'Llámame'}
        </button>
      </form>
    </div>
  );
};

export default CallToActionHome;