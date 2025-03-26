import "./VentajasInternetMega.css";

const VentajasInternetMega = () => {
    return (
        <>
            <div className="container-fluid ventajasInternerMega">
                <h2 className="small-title text-center ventajas-title">CALIDAD, COMODIDAD Y SATISFACCIÓN</h2>
                <h3 className="big-title text-center">Ventajas de elegir nuestro internet</h3>
                <div className="container ventajas-internet-cards d-flex justify-content-center">
                    <div className="ventaja-internet-card">
                        <img src="../src/assets/icons/router-icon.png" alt="Cobertura de señal óptima" />
                        <p>Equipo de última generación con al mejor cobertura de señal.</p>
                    </div>
                    <div className="ventaja-internet-card">
                        <img src="../src/assets/icons/velocidad-simetrica-icon.png" alt="Velocidades simétricas" />
                        <p>Velocidades simétricas de subida y de bajada.</p>
                    </div>
                    <div className="ventaja-internet-card">
                        <img src="../src/assets/icons/velocidad-subida-icon.png" alt="Mayor velocidad de subida" />
                        <p>Mayor velocidad de subida (Upload) automáticamente.</p>
                    </div>
                    <div className="ventaja-internet-card">
                        <img src="../src/assets/icons/estabilidad-internet-icon.png" alt="Mejor estabilidad de internet" />
                        <p>Mejor estabilidad en tu conección de internet.</p>
                    </div>
                </div>
            </div>
        </>

    );
};

export default VentajasInternetMega;