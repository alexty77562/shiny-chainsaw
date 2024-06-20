import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Asegura que Bootstrap JS y sus dependencias están importadas

function Tituloprincipal(props) {
    const { titulo, titulo1, titulo2, titulo3, imagen1, imagen2, imagen3, texto1, texto2, texto3, imagen } = props;

    return (
        <div>
            {/* Imagen con Título */}
            <div className="text-center my-4" style={{ marginTop: '56px' }}>
                <h1>{titulo}</h1>
                <img
                    src={imagen} // Utiliza props.imagen en lugar de imagen
                    className="rounded-circle img-fluid"
                    style={{ width: '400px', height: '400px', objectFit: 'cover' }}
                />
                
            </div>

            {/* Contenido Principal */}
            <div className="container my-5">
                <div className="row text-center">
                    <div className="col-md-4">
                        <h2>{titulo1}</h2>
                        <img
                            src={imagen1}
                            alt="Servicios"
                            className="rounded-circle img-fluid mx-auto d-block"
                            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                        />
                        <p>{texto1}</p>
                        <a className="btn btn-secondary" href="#">{titulo1} &raquo;</a>
                    </div>
                    <div className="col-md-4">
                        <h2>{titulo2}</h2>
                        <img
                            src={imagen2}
                            alt="Proyectos"
                            className="rounded-circle img-fluid mx-auto d-block"
                            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                        />
                        <p>{texto2}</p>
                        <a className="btn btn-secondary" href="#">{titulo2} &raquo;</a>
                    </div>
                    <div className="col-md-4">
                        <h2>{titulo3}</h2>
                        <img
                            src={imagen3}
                            alt="Contacto"
                            className="rounded-circle img-fluid mx-auto d-block"
                            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                        />
                        <p>{texto3}</p>
                        <a className="btn btn-secondary" href="#">{titulo3} &raquo;</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tituloprincipal;

