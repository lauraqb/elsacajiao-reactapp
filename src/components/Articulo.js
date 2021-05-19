import React from "react";
import emilyThumbnail from '../images/art1-emily.png';

class Articulo extends React.Component {
    render() {
        return <div className="row">
            <div className="col">
                <div className="art-img">
                    <img src={emilyThumbnail} alt="email"></img>
                </div>
                <div>
                    <h5>{this.props.title}</h5>
                    <p className="art-paragraph">{this.props.description}</p>
                </div>  
            </div>
        </div>
    }
}

export default Articulo