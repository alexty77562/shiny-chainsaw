import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuResponsive from './Componente';
import Pag1instrumentos from './Pag1instrumentos';
import Pag2profesores from './Pag2profesores';
import Pag3historia from './Pag3historia';
import Pag4contactos from './Pag4contactos';
import './App.css'; // Importa tus estilos personalizados

function App() {
  return (
    <Router>
      <div className="App">
        <MenuResponsive /> {/* Renderiza tu menú responsive aquí */}
        <Routes>
          <Route path="/Pag1instrumentos" element={<Pag1instrumentos />} />
          <Route path="/Pag2profesores" element={<Pag2profesores />} />
          <Route path="/Pag3historia" element={<Pag3historia />} />
          <Route path="/Pag4contactos" element={<Pag4contactos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


