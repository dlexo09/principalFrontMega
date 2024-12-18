import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BannerTrivias.css';

const BannerTrivias = () => {
    return (
        <div className="banner-trivias p-3">
            <div className="col-md-12">
                <p>*Los incentivos promocionales quedan sujetos a la vigencia, términos y condiciones indicados en el paquete contratado</p>
                <p>Ponemos a su disposición la actualización de nuestro aviso de privacidad <a href="aviso-de-privacidad" target="_blank" rel="noopener noreferrer">Aquí</a></p>
            </div>
            <div className="col-md-12">
                <a href="/trivias" className="btn btn-outline-primary">Participa y Gana</a>
                <a href="https://pagoenlinea.megacable.com.mx/" className="btn btn-outline-primary">Pago en Línea</a>
            </div>

            <div className="text-center mt-3">
                <img src="https://www.megacable.com.mx/images/megacable_conectamos.webp" alt="Mega Logo" className="mega-logo" />
            </div>
        </div>
    );
};

export default BannerTrivias;