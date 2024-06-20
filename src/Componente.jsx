import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import './App.css'; // Importa tus estilos personalizados

const MenuResponsive = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="/">MENU PRINCIPAL</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/Pag1instrumentos">Instrumentos</Nav.Link>
          <Nav.Link href="/Pag2profesores">Profesores</Nav.Link>
          <Nav.Link href="/Pag3historia">Historia</Nav.Link>
          <Nav.Link href="/Pag4contactos">Contactos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MenuResponsive;

//<Nav.Link as={Link} to="/Pag1instrumentos">Instrumentos</Nav.Link>
//<Nav.Link as={Link} to="/Pag2profesores">Profesores</Nav.Link>
//<Nav.Link as={Link} to="/Pag3historia">Historia</Nav.Link>
//<Nav.Link as={Link} to="/Pag4contactos">Contactos</Nav.Link>
//<Navbar.Brand as={Link} to="/">MENU PRINCIPAL</Navbar.Brand>