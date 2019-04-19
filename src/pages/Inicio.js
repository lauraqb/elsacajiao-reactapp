import React from 'react';
import "../styles/inicio.css";
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import polaroid from '../images/polaroids.png';
import elsaFoto from '../images/elsa1.jpg';
import notebook from '../images/notebook.png';
import glasses from '../images/glasses.png';
import flores from '../images/flores.png';

class Inicio extends React.Component {
    render() {
        return <div className="ec">
        <Navbar></Navbar>
            <div className="container-fluid homepage">
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-lg-6 homepage-post" align="right">
                        <Link to="./autora"><h1>Elsa Cajiao</h1></Link>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-lg-6">
                        <img src={polaroid} alt="Perfil"/>
                        <Link to="./autora">
                            <div id="mask">
                                <img src={elsaFoto} alt="Elsa"/>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-lg-6 homepage-book">
                        <img src={notebook} alt="notebook"/>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-lg-6 homepage-post homepage-post-2">
                        <Link to="./novelas"><h1>Novelas</h1></Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-lg-6 homepage-post homepage-post-3" align="right">
                        <Link to="./articulos"><h1>Artículos</h1></Link>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-lg-6 homepage-glasses">
                        <img src={glasses} alt="glasses"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-lg-6 homepage-flowers">
                        <img src={flores} alt="flores"/>
                    </div>
                    <div className="col-xs-12 col-sm-5 col-lg-4 homepage-post homepage-post-4">
                        <Link to="./contacto"><h1>Contacto</h1></Link>
                    </div>
                </div>
            </div>
 
        </div>
        
            
    }
}
//<div className="footer">hola</div>
export default Inicio;