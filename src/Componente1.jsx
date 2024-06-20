import React from 'react';

function Footer(props) {
    return (
        <footer className="footer mt-auto py-3 bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h5>{props.titulo}</h5>
                        <p>{props.texto}</p>
                    </div>
                    <div className="col-md-3">
                        <h5>Enlaces rápidos</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white">Inicio</a></li>
                            <li><a href="#" className="text-white">Servicios</a></li>
                            <li><a href="#" className="text-white">Proyectos</a></li>
                            <li><a href="#" className="text-white">Contacto</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Redes Sociales</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white">Facebook</a></li>
                            <li><a href="#" className="text-white">Twitter</a></li>
                            <li><a href="#" className="text-white">Instagram</a></li>
                            <li><a href="#" className="text-white">LinkedIn</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Contacto</h5>
                        <ul className="list-unstyled">
                            <li><i className="fas fa-map-marker-alt"></i> Dirección: Ciudad, País</li>
                            <li><i className="fas fa-envelope"></i> Email: info@example.com</li>
                            <li><i className="fas fa-phone-alt"></i> Teléfono: +123456789</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
            <div className="container text-center">
                <hr />
                <span className="text-white">© {new Date().getFullYear()} Nombre de tu empresa. Todos los derechos reservados.</span>
            </div>
        </footer>
    );
}

export default Footer;
