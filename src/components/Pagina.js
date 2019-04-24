import React from "react";
let leftPageClass = "";
let titleContent=null;

class Pagina extends React.Component {    
    render() {
        if(this.props.leftpage) leftPageClass = "hp-leftpage";
        else leftPageClass = "";
        if(this.props.title) { titleContent = <React.Fragment> <p></p>
            <p align="center">1</p>
            <p align="center">EXPULSIÓN DE ÓGAR</p>
            <p></p>
            </React.Fragment>
        }
        else titleContent = "";
        return <div className={"col "+leftPageClass}>
        {titleContent}
        <p align="justify">{this.props.page}</p>
    </div>

    }
}

export default Pagina;