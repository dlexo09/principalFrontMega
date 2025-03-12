import "./VentajasInternetMega.css";

const VentajasInternetMega = () => {
    return (
        <>
            <div className="container-fluid ventajasInternerMega">
                <h3 className="small-title text-center ventajas-title">CALIDAD, COMODIDAD Y SATISFACCIÓN</h3>
                <h2 className="big-title text-center">Ventajas de elegir nuestro internet</h2>
                <div className="container ventajas-internet-cards d-flex justify-content-center">
                    <div className="ventaja-internet-card">
                        <img src="/icons/router-icon.png" alt="" />
                        <p>Equipo de última generación con al mejor cobertura de señal.</p>
                    </div>
                    <div className="ventaja-internet-card">
                        <img src="/icons/velocidad-simetrica-icon.png" alt="" />
                        <p>Velocidades simétricas de subida y de bajada.</p>
                    </div>
                    <div className="ventaja-internet-card">
                        <img src="/icons/velocidad-subida-icon.png" alt="" />
                        <p>Mayor velocidad de subida (Upload) automáticamente.</p>
                    </div>
                    <div className="ventaja-internet-card">
                        <img src="/icons/estabilidad-internet-icon.png" alt="" />
                        <p>Mejor estabilidad en tu conección de internet.</p>
                    </div>
                </div>
            </div>
        </>

    );
};

export default VentajasInternetMega;