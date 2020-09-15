import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import imageNotFound from '../assets/images/notFound.jpg';

class Articles extends Component {

    url = Global.url;

    state = {
        articles: [],
        status: null
    };

    componentWillMount() {
        this.getArticles();
    };

    getArticles = () => {
        axios.get(this.url + 'articles')
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

            var listArticles = this.state.articles.map((article) => {
                return (
                    <article className="article-item" id="article-template">
                        <div className="image-wrap">

                            {article.image !== null ? (
                                <img src={this.url + 'get-image/' + article.image} alt={article.title} />
                            ) : (
                                    <img src={imageNotFound} alt={article.title} />
                                )
                            }

                        </div>

                        <h2 className="sub-header">{article.title}</h2>

                        <span className="date">
                            {article.date}
                        </span>

                        <a href="article.html">Leer más</a>
                        <div className="clearfix"></div>
                    </article>
                );
            });

            return (
                <div id="articles">
                    {listArticles}
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