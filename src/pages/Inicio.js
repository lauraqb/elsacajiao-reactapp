import React from 'react';
import "../styles/inicio.css";
import { Link } from 'react-router-dom';
import FlipPage from 'react-flip-page';
import Pagina from '../components/Pagina'
import Navbar from '../components/Navbar';
import polaroid from '../images/polaroids.png';
import elsaFoto from '../images/elsa1.jpg';
import notebook from '../images/notebook.png';
import glasses from '../images/glasses.png';
import flores from '../images/flores.png';
import paper from '../images/paper.jpg';
const page1 = "Dentro de la rígida jerarquía social de Ógar, mi planeta nativo, los dragones esmeralda ocupamos un mísero lugar entre los trabajadores de la construcción. Cada uno de nosotros tiene asignado su papel casi desde el nacimiento. El que tenían reservado para mí, cuando terminara los estudios primarios, era avivar el fuego de los hornos donde se cuece el ladrillo, en la misma fábrica en que trabajaban papá y mis dos hermanos mayores. Esta desgracia me fue comunicada en la escuela a una edad en que no podía comprender su";
const page2 = "significado. Durante mis primeros años fui feliz, pues ni mis padres ni los profesores volvieron a recordármela hasta poco antes de finalizar el que sería mi último año escolar. Entonces pude entender en toda su magnitud mi negro porvenir. No soportaba siquiera imaginar que un día volvería a casa igual que mi padre y mis hermanos, agotado, enfermo y cubierto de ese tizne que con el paso de los años borra por completo el hermoso color natural verde esmeralda característico de nuestra raza. Por desgracia, nuestro color es también señal de unos pulmones potentes capaces de producir fuego continuamente, lo que nos hace idóneos para el trabajo en los hornos";
const page3 = "de ladrillo. \nEstos hornos están situados en profundos sótanos a los cuales descienden los obreros cuando despunta el sol y de los que no vuelven a salir hasta el anochecer. Por cada siete días laborables hay uno libre y veinte días seguidos cada vez que Ógar completa una vuelta entera alrededor de nuestro sol. La finalidad de estas vacaciones no es darles un respiro a los obreros para que disfruten de la vida, sino para que se recuperen de las muchas dolencias físicas provocadas por el encierro claustrofóbico en los hornos y el incesante producir de fuego, fatal para sus pulmones. Decidido a luchar contra el destino infausto que varias generaciones de dragones esmeralda";
const page4 = "habían venido aceptando sumisas desde que empezara a agotarse el coulí, el principal recurso energético del planeta, solicité por escrito al consejo escolar permiso para continuar mis estudios en la etapa secundaria, adjuntando mis notas y el tímido respaldo de dos profesores como pruebas de mi capacidad y aptitudes. La respuesta oficial no tardó en llegar con una negativa rotunda salpicada de severas acusaciones —pretender quebrantar el orden cósmico y los designios del Gran Poderoso— y amenazas de graves sanciones. Ni una palabra sobre mi expediente académico; ni una mención a las escuetas recomendaciones de mis profesores.";
const page5 = "Los dragones esmeralda éramos nada, velas destinadas a consumirse bajo su propia llama. El empobrecimiento de la educación ponía de manifiesto el abismo en que se estaba hundiendo nuestra civilización a falta del coulí. En las escuelas de las razas dominadas como la nuestra, los profesores mejor valorados en los tiempos no muy antiguos en que Ógar";
const page6 = "estaba en la cumbre de la prosperidad, iban siendo sustituidos poco a poco por otros fieles al régimen, o bien ellos mismos, por temor al despido, abandonaban la enseñanza de las artes, las ciencias naturales "
class Inicio extends React.Component {
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
    //<p className="App-intro">{this.state.apiResponse}</p>
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
                    <div className="col-xs-12 col-sm-6 col-lg-7 hp-col-book">
                        <img src={notebook} alt="notebook"/>
                        <FlipPage orientation="horizontal" uncutPages="true" pageBackground={paper} 
                        animationDuration="400" perspective="100em" showHint="true" width="750" height="550" className="hp-flipbook">
                            <article className="hp-flipbook__page">
                                <div className="row">
                                    <Pagina title="DRAGONES" page={page1} leftpage="true"/>
                                    <Pagina page={page2}/>
                                </div>
                            </article>
                            <article className="hp-flipbook__page">
                                <div className="row">
                                    <Pagina page={page3} leftpage="true"/>
                                    <Pagina page={page4}/>
                                </div>
                            </article>
                        </FlipPage>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-lg-5 hp-col-contacto" align="center">
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
