import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Archivo CSS personalizado para estilos adicionales

function ImageCarousel(props) {
    return (
        <Carousel className="custom-carousel" interval={1000}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={props.imagen1}
                    alt="First slide"
                />
                
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={props.imagen2}
                    alt="Second slide"
                />
                
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={props.imagen3}
                    alt="Third slide"
                />
                
            </Carousel.Item>
        </Carousel>
    );
}

export default ImageCarousel;
