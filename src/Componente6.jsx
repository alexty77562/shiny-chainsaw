import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Asegúrate de tener react-bootstrap instalado y configurado
import './App.css'; // Asegúrate de crear y enlazar este archivo CSS

function Div2(props) {
  return (
    <Container>
      <h1 className="text-center">{props.titulo}</h1>
      <Row className="mt-4">
        <Col md={6} className="text-center">
          {/* Contenido del primer div */}
          <img src={props.imagen1} alt="Imagen 1" className="img-fluid rounded-circle fixed-size-img mb-3" />
          <h2>{props.titulo1}</h2>
          <p>{props.texto1}</p>
        </Col>
        <Col md={6} className="text-center">
          {/* Contenido del segundo div */}
          <img src={props.imagen2} alt="Imagen 2" className="img-fluid rounded-circle fixed-size-img mb-3" />
          <h2>{props.titulo2}</h2>
          <p>{props.texto2}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Div2;
