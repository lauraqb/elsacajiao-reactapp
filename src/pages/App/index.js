import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from 'components/Layout'
import Inicio from 'pages/Intro';
import Contacto from 'pages/Contacto';
import Autora from 'pages/Autora';
import Novelas from 'pages/Novelas';
import Articulos from 'pages/Articulos';
import Header from 'components/Header';
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
