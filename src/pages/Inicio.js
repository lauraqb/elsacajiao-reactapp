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
  debugger;
  //constructor, that initializes the default state
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }
  // method callAPI() that will fetch the data from the API and store the response on this.state.apiResponse
  callAPI() {
      fetch("http://localhost:9000/")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }
  // react lifecycle method called componentDidMount(), that will execute the callAPI() method after the component mounts.
  componentWillMount() {
      this.callAPI();
  }
    render() {
        return <div className="ec">
        <Navbar></Navbar>
            <div className="container-fluid homepage">
                <div className="row ">
                    <div className="col-xs-12 col-sm-6 col-lg-6 hp-col-autora" align="center">
                        <Link to="./autora"><h1>Elsa Cajiao</h1></Link>
                        <p className="App-intro">{this.state.apiResponse}</p>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-lg-6 hp-col-polaroid">
                        <img src={polaroid} alt="Perfil"/>
                        <Link to="./autora">
                            <div id="mask">
                                <img src={elsaFoto} alt="Elsa"/>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="row flex-column-reverse flex-md-row">
                    <div className="col-xs-12 col-sm-6 col-lg-6 hp-col-book">
                        <img src={notebook} alt="notebook"/>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-lg-6 hp-col-contacto" align="center">
                        <Link to="./novelas"><h1>Novelas</h1></Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-lg-6 hp-col-articulo" align="center">
                        <Link to="./articulos"><h1>Artículos</h1></Link>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-lg-6 homepage-glasses">
                        <img src={glasses} alt="glasses"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-lg-6 hp-col-flowers">
                        <img src={flores} alt="flores"/>
                    </div>
                    <div className="col-xs-12 col-sm-5 col-lg-4 hp-col-contacto" align="center">
                        <Link to="./contacto"><h1>Contacto</h1></Link>
                    </div>
                </div>
            </div>

        </div>


    }
}
//<div className="footer">hola</div>
export default Inicio;
