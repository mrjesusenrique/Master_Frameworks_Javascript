import React, { Component } from 'react';
import axios from 'axios';

class Articles extends Component {

    state = {
        articles: [],
        status: null
    };

    componentWillMount() {
        this.getArticles();
    };

    getArticles = () => {
        axios.get("http://localhost:3900/api/articles")
            .then(respuesta => {
                this.setState({
                    articles: respuesta.data.articulos,
                    status: 'success'
                });
                console.log(this.state);
            });
    };

    render() {

        if (this.state.articles.length >= 1) {
            return (
                <div id="articles">
                    <h1>LISTADO DE ARTÍCULOS</h1>
                </div>
            );
        } else if (this.state.articles.length === 0 && this.state.status === 'success') {
            return (
                <div id="articles">
                    <h2 className="subheader">No hay artículos para mostrar</h2>
                    <p>Todavía no hay contenido en esta sección</p>
                </div>
            );
        } else {
            return (
                <div id="articles">
                    <h2 className="subheader">Cargando...</h2>
                    <p>Espere mientras carga el contenido</p>
                </div>
            );
        };
    };
};

export default Articles; 