import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import Contacto from '../pages/Contacto';
import Autora from '../pages/Autora';
import Novelas from '../pages/Novelas';
import Articulos from '../pages/Articulos';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Inicio} />
                <Route exact path="/autora" component={Autora} />
                <Route exact path="/novelas" component={Novelas} />
                <Route exact path="/articulos" component={Articulos} />
                <Route exact path="/contacto" component={Contacto} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;