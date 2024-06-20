import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Estilos personalizados

function Testimonials(props) {
    return (
        <section className="testimonials-section py-5">
            <div className="container">
                <div className="row text-center">
                    <div className="col-12 mb-4">
                        <h2 className="section-title">{props.titulo}</h2>
                        <p className="section-subtitle">{props.subtitulo}</p>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="testimonial-card">
                            <div className="testimonial-image-container">
                                <img src={props.imagen1} alt="Client 1" className="testimonial-image rounded-circle" />
                            </div>
                            <div className="testimonial-content">
                                <p className="testimonial-text">{props.testimonio1}</p>
                                <h5 className="testimonial-name">{props.nombre1}</h5>
                                <p className="testimonial-role">{props.cargo1}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="testimonial-card">
                            <div className="testimonial-image-container">
                                <img src={props.imagen2} alt="Client 2" className="testimonial-image rounded-circle" />
                            </div>
                            <div className="testimonial-content">
                                <p className="testimonial-text">{props.testimonio2}</p>
                                <h5 className="testimonial-name">{props.nombre2}</h5>
                                <p className="testimonial-role">{props.cargo2}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="testimonial-card">
                            <div className="testimonial-image-container">
                                <img src={props.imagen3} alt="Client 3" className="testimonial-image rounded-circle" />
                            </div>
                            <div className="testimonial-content">
                                <p className="testimonial-text">{props.testimonio3}</p>
                                <h5 className="testimonial-name">{props.nombre2}</h5>
                                <p className="testimonial-role">{props.cargo3}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
