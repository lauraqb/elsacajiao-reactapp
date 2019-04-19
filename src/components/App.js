import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import Contacto from '../pages/Contacto';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Inicio} />
                <Route exact path="/autora" component={Contacto} />
                <Route exact path="/novelas" component={Contacto} />
                <Route exact path="/articulos" component={Contacto} />
                <Route exact path="/contacto" component={Contacto} />

            </Switch>
        </BrowserRouter>
    );
}

export default App;