import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SeccionPruebas from './components/SeccionPruebas';
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
import Error from './components/Error';

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Peliculas} />
                <Route exact path="/seccion-pruebas" component={SeccionPruebas} />
                <Route exact path="/mi-componente" component={MiComponente} />
                <Route exact path="/pagina-1" render={() => (
                    <React.Fragment>
                        <h1>Hola Mundo desde la ruta: pagina-1</h1>
                        <MiComponente 
                            saludo={'Hola amigo'}
                        />
                    </React.Fragment>
                )} />
                <Route component={Error} />
            </Switch>
        </BrowserRouter>
    );
};


