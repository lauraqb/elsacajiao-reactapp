import React from "react";
import "./navbar.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink  } from 'react-router-dom';

class Menu extends React.Component {
    render() {
        return (
          <Navbar variant="light" className="ec-navbar">
            <Nav className="mr-auto">
              <NavLink to="/" activeClassName="active" exact={true} className="nav-link">Inicio</NavLink >
              <NavLink to="/autora" activeClassName="active" className="nav-link">Autora</NavLink >
              <NavLink to="/novelas" activeClassName="active" className="nav-link">Novelas</NavLink >
              <NavLink to="/articulos" activeClassName="active" className="nav-link">Artículos</NavLink >
              <NavLink to="/contacto" activeClassName="active" className="nav-link">Contacto</NavLink >
            </Nav>
          </Navbar>
        )
    }
}
//<Navbar bg="light" variant="light" className="ec-navbar">
export default Menu;
