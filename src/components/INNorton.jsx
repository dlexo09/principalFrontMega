import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './INNorton.css';
import './Globales.css';

const PaquetesTarifarios = () => {
  const [chunkSize, setChunkSize] = useState(3);

  const updateChunkSize = () => {
    if (window.innerWidth < 1023) {
      setChunkSize(1);
    } else if (window.innerWidth < 1439) {
      setChunkSize(2);
    } else {
      setChunkSize(3);
    }
  };

  useEffect(() => {
    updateChunkSize();
    window.addEventListener('resize', updateChunkSize);
    return () => window.removeEventListener('resize', updateChunkSize);
  }, []);

  const paquetes = [
    {
      id: 1,
      title: 'Security',
      description: 'Seguridad en tus dispositivos como smartphones, tablets y equipos portátiles',
      beneficios: [
        'Aplicación móvil.',
        'App lock.',
        'Password manager.',
        'Anti Virus, Malware, Phishing, Ransomware.',
        'Búsqueda segura.',
        'Detección Wi-Fi no segura.',
        'PC / Laptop / Tablet / Celular.'
      ],
      beneficioextra: '',
      precios: [
        { precio: '40', dispositivos: '3 dispositivos', padres: '' },
        { precio: '50', dispositivos: '5 dispositivos', padres: '' },
        { precio: '60', dispositivos: '10 dispositivos', padres: '' },
      ],
    },
    {
      id: 2,
      title: 'Family',
      description: 'Protege a los tuyos de contenidos no deseados y controla el tiempo en el que navegan en internet',
      beneficios: [
        'Aplicación móvil.',
        'Control Parental.',
        'Bloqueo de sitios y contenido web.',
        'Bloqueo de Aplicaciones no deseadas.',
        'Control de tiempo.',
        'Control de acceso a redes sociales.',
        'Supervisión de aplicaciones móviles.',
        'Historial de actividad.',
        'Ubicación'
      ],
      beneficioextra: '',
      precios: [{ precio: '30', dispositivos: '10 dispositivos', padres: '2 padres' }],
    },
    {
      id: 3,
      title: 'Secure VPN',
      description: 'VPN Segura agrega una protección extra al momento de conectarse vía wifi',
      beneficios: [
        'Aplicación móvil.',
        'Protección en wifi públicos.',
        'Protección en Redes No Seguras.',
        'Navegación anónima.',
        'Bloqueo de seguimiento.',
        'Conexión por IP extranjera.'
      ],
      beneficioextra: 'Virtual Private Network',
      precios: [{ precio: '40', dispositivos: '5 dispositivos', padres: '' }],
    }
  ];


  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  const chunkedPaquetes = chunkArray(paquetes, chunkSize);

  return (
    <div className="container paquetes-tarifarios text-center">
      <h3 className="small-title-services">Contrata ya</h3>
      <h2 className="big-title-services mb-5 title-especial">Tu servicio de Norton</h2>
      <div id="carouselPaquetes" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {chunkedPaquetes.map((chunk, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div className="d-flex justify-content-center slider-gp slider-innorton">
                {chunk.map((paquete) => (
                  <div key={paquete.id} className="paquete-item paquete-item-innorton card m-2">



                    <div className="card-body card-body-innorton text-center">

                      <div className="header-zone">
                        <img className='logo-servicio' src="../src/assets/images/servicios/internet/norton-logo.png" alt="" />
                        <h2 className="card-title-innorton">{paquete.title}</h2>
                        <p className="card-text-innorton mt-4">{paquete.description}</p>
                        <ul className="text-start benefits-list">
                          {paquete.beneficios.map((beneficio, i) => (
                            <li key={i} className="benefit-item d-flex align-items-center mt-2"><img className='notron-logo-list' src="../src/assets/icons/servicios/internet/logo-norton-icon.png" alt="Norton incluye" />{beneficio}</li>
                          ))}
                        </ul>
                        {paquete.beneficioextra && (
                          <p className="beneficio-extra">
                            {paquete.beneficioextra}
                          </p>
                        )}
                      </div>


                      <div className="price-zone">
                        {paquete.precios.length > 1 ? (
                          <div className="precios-multiples d-flex justify-content-around align-items-center">
                            {paquete.precios.map((p, i) => (
                              <div key={i} className="precio-card-varios">
                                <p className="precio-varios"><span className='dollar-icon'>$</span>{p.precio}<br /><span className='time-pago'>AL MES</span></p>
                                {p.padres && <p className="detalles-precio">{p.padres}</p>}
                                <p className="dispositivos-precio">{p.dispositivos}</p>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="precio-unico mt-3">
                            <p className="precio-varios"><span className='dollar-icon'>$</span>{paquete.precios[0].precio} <span className='dollar-icon'>AL MES</span></p>
                            <p className="mt-2">{paquete.precios[0].dispositivos}</p>
                            {paquete.precios[0].padres && <p className="detalles-precio">{paquete.precios[0].padres}</p>}
                          </div>
                        )}
                      </div>


                      <button className="btn btn-packs btn-pack-card mt-3">¡Lo quiero!</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselPaquetes"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselPaquetes"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default PaquetesTarifarios;
