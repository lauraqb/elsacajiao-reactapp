import React from 'react';
import Navbar from '../components/Navbar';
import polaroid from '../images/polaroids.png';
import elsaFoto from '../images/elsa1.jpg';
//import "../styles/main.css";


class Autora extends React.Component {
    render() {
        return <div className="ec">
        <Navbar></Navbar>
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-lg-6 col-autora" align="center">
                    <h1>Elsa Cajiao</h1>
                    <p></p>
                </div>
                <div className="col-xs-12 col-sm-6 col-lg-6">
                    <img src={polaroid} alt="Perfil"/>
                    <div id="mask">
                        <img src={elsaFoto} alt="Elsa"/>
                    </div>
                </div>
            </div>
        </div>
        <br/>
    </div>    
    }
}

export default Autora;