import React from "react";
import "../styles/navbar.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
class Menu extends React.Component {
    render() {
        return <Navbar bg="light" variant="light" className="ec-navbar">
        <Nav className="mr-auto">
          <Link to="./" className="nav-link">Inicio</Link>
          <Link to="./autora" className="nav-link">Autora</Link>
          <Link to="./novelas" className="nav-link">Novelas</Link>
          <Link to="./articulos" className="nav-link">Artículos</Link>
          <Link to="./contacto" className="nav-link">Contacto</Link>
        </Nav>
      </Navbar>

    }
}

export default Menu;