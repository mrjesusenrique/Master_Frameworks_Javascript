import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SeccionPruebas from './components/SeccionPruebas';
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
import Error from './components/Error';
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

export default function Router() {

    const titleSlider = "Bienvenido al Master en  el Framework ReactJS de Javascript";
    const buttonString = "Ver más";

    return (
        <BrowserRouter>

            <Header />
            <Slider
                title={titleSlider}
                btn={buttonString}
            />

            <div className="center">

                <Switch>
                    <Route exact path="/" component={Peliculas} />
                    <Route exact path="/home" component={Peliculas} />
                    <Route exact path="/seccion-pruebas" component={SeccionPruebas} />
                    <Route exact path="/mi-componente" component={MiComponente} />

                    <Route exact path="/pagina-1" render={() => (
                        <div id="content">
                            <h1>Hola Mundo desde la ruta: pagina-1</h1>
                            <MiComponente
                                saludo={'Hola amigo'}
                            />
                        </div>
                    )} />

                    <Route exact path="/pruebas/:id/:nombre/:apellidos?" render={(props) => {

                        const id = props.match.params.id;
                        const nombre = props.match.params.nombre;
                        const apellidos = props.match.params.apellidos;

                        return (
                            <div id="content">
                                <h1 className="subheader">Página de pruebas</h1>

                                {nombre && !apellidos &&
                                    <h2>{`Hola ${nombre}`}</h2>
                                }

                                {nombre && apellidos &&
                                    <h2>{`Hola ${nombre} ${apellidos}`}</h2>
                                }

                                <p>{`Su número de id es: ${id}`}</p>
                            </div>
                        );
                    }} />

                    <Route component={Error} />

                </Switch>
                <Sidebar />

                <div className="clearfix"></div>
            </div>
            <Footer />
        </BrowserRouter>
    );
};


