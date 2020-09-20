import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Pelicula extends Component {

    marcar = () => {
        this.props.marcarFavorita(this.props.pelicula, this.props.indice);
    };

    render() {

        const { titulo, imagen } = this.props.pelicula;

        return (
            <article className="article-item" id="article-template">
                <div className="image-wrap">
                    <img src={imagen} alt={titulo} />
                </div>

                <h2 className="sub-header">{titulo}</h2>

                <span className="date">
                    hace 5 minutos
            </span>

                <Link to="/blog">Leer más</Link>
                <button onClick={this.marcar}>Marcar como favorita</button>

                <div className="clearfix"></div>
            </article>
        );
    };
};

export default Pelicula;