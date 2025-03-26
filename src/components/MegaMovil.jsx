import "./MegaMovil.css";


const MegaMovil = () => {
    return (
        <>
            <div className="container text-center text-lg-start megamovil-home row d-flex fle justify-content-center align-items-center">
                <div className="col-12 order-2 order-lg-1 col-lg-6 text-p">
                    <h2 className="small-title d-none d-lg-block">Conéctate con Mega móvil</h2>
                    <h3 className="secondary-title">¡La mejor cobertura <span>sin cambiar tú número!</span> </h3>
                    <p className="mt-4 mt-lg-5 ">Descubre Mega Móvil y disfruta de minutos y SMS ilimitados en México, EE.UU y Canadá , junto con excelentes beneficios para cllientes.</p>
                    <div className="mt-4 mt-lg-5 d-flex justify-content-center justify-content-lg-start">
                        <a href="https://megamovil.mx/" className="btn-action">
                            Saber más <span className="open-page-icon"></span>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-lg-6 order-1 order-lg-2 ">
                    <h2 className="small-title d-block d-lg-none mb-4">Conéctate con Mega móvil</h2>
                    <img className="img-megamovil" src="../src/assets/images/home/megamovil-home-img.png" alt="Mega móvil" />
                </div>
            </div>
        </>

    );
};

export default MegaMovil;