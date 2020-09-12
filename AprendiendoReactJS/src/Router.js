import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SeccionPruebas from './components/SeccionPruebas';
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
import Error from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Blog from './components/Blog';
import Formulario from './components/Formulario';

export default function Router() {

    return (
        <BrowserRouter>
            <Header />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/formulario" component={Formulario} />
                <Route exact path="/peliculas" component={Peliculas} />
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

            <div className="clearfix"></div>
            <Footer />
        </BrowserRouter>
    );
};


