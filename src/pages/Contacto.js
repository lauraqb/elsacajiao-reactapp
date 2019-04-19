import React from 'react';
import Navbar from '../components/Navbar';
//import "../styles/main.css";
//import Form from 'react-bootstrap/Form';

class Contacto extends React.Component {
    render() {
        return <div className="homepage">
        <Navbar></Navbar>
        <div className="container-fluid">
            <form action="">
                <div className="form-group">
                    <label>
                        Nombre</label>
                        <input></input>

                </div>
                <button className="btn btn-primary">Enviar</button>
            </form>
        </div>
        <div className="footer">hola</div>
        </div>
        
            
    }
}

export default Contacto;