import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CallToActionHome.css';

const CallToActionHome = () => {
  const [phone, setPhone] = useState('');
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (accepted) {
      console.log('Phone:', phone);
      // Aquí puedes agregar la lógica para enviar el formulario
    } else {
      alert('Debes aceptar el aviso de privacidad');
    }
  };

  return (
    <div className="call-to-action-home" id="CallToActionHome">
      <form onSubmit={handleSubmit} className="d-flex align-items-center justify-content-center">
        <label className="text-white me-3">QUIERO CONTRATAR Y DESEO QUE ME LLAMEN</label>
        <input
          type="number"
          className="form-control me-3"
          placeholder="Tu teléfono"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <div className="form-check me-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="privacyCheck"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
            required
          />
          <label className="form-check-label text-white" htmlFor="privacyCheck">
            He leído y Acepto el Aviso de privacidad
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Llámame</button>
      </form>
    </div>
  );
};

export default CallToActionHome;