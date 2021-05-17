import React from 'react';
import dragones from '../images/dragones-de-ogar.jpg';

class Novelas extends React.Component {
    render() {
        return <div className="ec">
        
            <div className="ec-title" align="center">
                <h1>Novelas</h1>
            </div>
            <div className="ec-content">
                <div className="container ec-list">
                    <div className="row">
                        <div className="col">
                            <h5>El viento que agita la pluma</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <img src={dragones} alt="dragones"/>
                        </div>
                        <div className="col-9">
                            <h5>Dragones de Ógar</h5>
                            <p>Del planeta Ógar, que orbita en torno a la lejana Alpha Centauri, un pequeño dragón es deportado a la Tierra y condenado a vivir adherido a un joyero en el escaparate de una tienda de antigüedades. Para librarse de las cadenas que lo atan a tan triste destino, ha de ganarse el corazón de un ser humano.
        Con este arranque, Los dragones de Ógar nos introduce, en clave de intriga, en un mundo mecido entre la realidad, la fantasía y la ciencia ficción, donde los personajes luchan contra el poder que desde las sombras ejerce el régimen totalitario de Ógar a través de unas siniestras criaturas, camufladas de humanos e infiltradas en distintos estamentos sociales de la Tierra.
        De entre la hueste invasora destaca, por oposición, un dragón de la casta dominante y de apariencia humana cautivadora que decide plantarle cara a los suyos y alinearse con los oprimidos, tarea en la que le ayudan un detective engominado, una bella diplomática africana, un viejo y solitario librero y el pequeño prisionero de la tienda de antigüedades, que es el protagonista indiscutible de la historia.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h5>Tirando del hilo</h5>
                        </div>
                    </div>
                </div>
            </div>
        <br/>
    </div>    
    }
}

export default Novelas;