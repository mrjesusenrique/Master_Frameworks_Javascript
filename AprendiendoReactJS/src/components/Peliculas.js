import React, { Component } from 'react';
import Pelicula from './Pelicula';

class Peliculas extends Component {

    state = {};

    cambiarTitulo = () => {

        const { peliculas } = this.state;
        peliculas[0].titulo = "El Hombre Araña";
        console.log('Ha cambiado el nombre de la primera película y el componente ha sido actualizado');

        this.setState({
            peliculas: peliculas
        });
    };

    favorita = (pelicula, indice) => {
        console.log(pelicula, indice);

        this.setState({
            favorita: pelicula
        });
    };

    componentWillMount() {

        console.log('Se va a montar el componente con el Estado inicial');

        this.setState({
            peliculas: [
                { titulo: 'Spider-Man', imagen: 'https://cdn.lanetaneta.com/wp-content/uploads/2020/04/1586934299_212_Las-peliculas-de-Spider-Man-clasificadas.jpeg' },
                { titulo: 'Spider-Man 2', imagen: 'https://i.blogs.es/9da463/spiderman-2-cartel/450_1000.jpg' },
                { titulo: 'Spider-Man 3', imagen: 'https://blogdesuperheroes.es/wp-content/plugins/BdSGallery/BdSGaleria/33973.jpg' }
            ],

            nombre: 'Jesús Casañas',

            favorita: ''
        });
    };

    componentDidMount() {
        console.log('Se ha montado el componente');
    };

    componentWillUnmount() {
        console.log('Se va a desmontar el componente');
    };

    render() {

        let pStyle = {
            background: 'green',
            color: 'white',
            padding: '10px'
        };

        return (
            <div id="content" className="peliculas">
                <h1 className="subheader">Películas</h1>
                <p>Selección de las películas favorias de {this.state.nombre}</p>
                <button onClick={this.cambiarTitulo}>Cambiar el título de la primera película a español</button>

                {this.state.favorita.titulo ?
                    (
                        <p className="favorita" style={pStyle}>
                            <strong>La película favorita es: </strong>
                            <span>{this.state.favorita.titulo}</span>
                        </p>
                    ) : (
                        <p>No hay película favorita para mostrar</p>
                    )
                }

                <div id="articles" className="peliculas">
                    {
                        this.state.peliculas.map((pelicula, i) => {
                            return (
                                <Pelicula
                                    key={i}
                                    pelicula={pelicula}
                                    indice={i}
                                    marcarFavorita={this.favorita}
                                />
                            );
                        })
                    }
                </div>
            </div>
        );
    };
};

export default Peliculas;

