import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../../components/Layout'
import Inicio from '../Intro';
import Contacto from '../Contacto';
import Autora from '../Autora';
import Novelas from '../Novelas';
import Articulos from '../Articulos';
import Header from '../../components/Header';
import './app.css'

function App() {
    return (
        <div className="base">
        <BrowserRouter>
            <Layout >
                <Header/>
                <Switch>
                    <Route exact path="/" component={Inicio} />
                    <Route exact path="/autora" component={Autora} />
                    <Route exact path="/novelas" component={Novelas} />
                    <Route exact path="/articulos" component={Articulos} />
                    <Route exact path="/contacto" component={Contacto} />
                </Switch>
            </Layout>
        </BrowserRouter>
        </div>
    );
}

export default App;
