import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import './App.css'; // Estilos personalizados

function ThreeCards(props) {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    return (
        <div className="container mt-5 mb-5">
            <h1 className="text-center">{props.titulo}</h1>
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-custom">
                        <img className="card-img-top" src={props.imagen1} alt="Card 1" />
                        <div className="card-body">
                            <h5 className="card-title" onClick={() => setOpen1(!open1)} aria-controls="collapse-text-1" aria-expanded={open1}>
                            {props.titulo1}
                            </h5>
                            <Collapse in={open1}>
                                <div id="collapse-text-1" className="card-text-container">
                                    <p className="card-text">{props.texto1}</p>
                                </div>
                            </Collapse>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card card-custom">
                        <img className="card-img-top" src={props.imagen2}  alt="Card 2" />
                        <div className="card-body">
                            <h5 className="card-title" onClick={() => setOpen2(!open2)} aria-controls="collapse-text-2" aria-expanded={open2}>
                            {props.titulo2}
                            </h5>
                            <Collapse in={open2}>
                                <div id="collapse-text-2" className="card-text-container">
                                    <p className="card-text">{props.texto2}.</p>
                                </div>
                            </Collapse>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card card-custom">
                        <img className="card-img-top" src={props.imagen3}  alt="Card 3" />
                        <div className="card-body">
                            <h5 className="card-title" onClick={() => setOpen3(!open3)} aria-controls="collapse-text-3" aria-expanded={open3}>
                            {props.titulo3}
                            </h5>
                            <Collapse in={open3}>
                                <div id="collapse-text-3" className="card-text-container">
                                    <p className="card-text">{props.texto3}</p>
                                </div>
                            </Collapse>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ThreeCards;
