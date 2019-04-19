import React from 'react';
import Navbar from '../components/Navbar';
//import "../styles/main.css";
import Form from 'react-bootstrap/Form';

class Contacto extends React.Component {
    render() {
        return <div className="ec">
        <Navbar></Navbar>
        <div className="container">
            <br/>
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre (obligatorio)</Form.Label>
                    <Form.Control type="text" placeholder="Nombre" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email (obligatorio)</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Asunto</Form.Label>
                    <Form.Control type="text" placeholder="Asunto" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
                <button className="btn btn-primary">Enviar</button>
            </Form>
        </div>
        <br/>
    </div>    
    }
}

export default Contacto;