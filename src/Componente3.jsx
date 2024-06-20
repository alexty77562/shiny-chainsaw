import React from 'react';
import './App.css'; // Estilos personalizados

function TwoSectionsComponent({ imagen1, titulo1, texto1, imagen2, titulo2, texto2, titulo }) {
    return (
        <div className="container two-sections">
            <h1><center>{titulo}</center></h1>
            <div className="row">
                {/* Primera sección */}
                <div className="col-md-6">
                    <div className="section">
                        <div className="image-container">
                            <img src={imagen1} alt="Imagen 1" className="img-fluid rounded-circle" />
                        </div>
                        <div className="content">
                            <h3>{titulo1}</h3>
                            <p>{texto1}</p>
                        </div>
                    </div>
                </div>
                {/* Segunda sección */}
                <div className="col-md-6">
                    <div className="section">
                        <div className="image-container">
                            <img src={imagen2} alt="Imagen 2" className="img-fluid rounded-circle" />
                        </div>
                        <div className="content">
                            <h3>{titulo2}</h3>
                            <p>{texto2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TwoSectionsComponent;