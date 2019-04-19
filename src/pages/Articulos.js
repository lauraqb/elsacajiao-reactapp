import React from 'react';
import Navbar from '../components/Navbar';
//import "../styles/main.css";

class Articulos extends React.Component {
    render() {
        return <div className="ec">
        <Navbar></Navbar>
        <div className="container">
            <div className="row">
                Artículos
            </div>
        </div>
        <br/>
    </div>    
    }
}

export default Articulos;