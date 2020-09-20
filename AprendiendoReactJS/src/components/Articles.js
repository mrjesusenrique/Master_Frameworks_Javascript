import React, { Component } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import 'moment/locale/es';
import Global from '../Global';
import imageNotFound from '../assets/images/notFound.jpg';

class Articles extends Component {

    url = Global.url;

    state = {
        articles: [],
        status: null
    };

    componentWillMount() {
        var home = this.props.home;
        var search = this.props.search;

        if (home === 'true') {
            this.getLastArticles();
        } else if (search && search !== null && search !== undefined) {
            this.getArticlesBySearch(search);
        } else {
            this.getArticles();
        };
    };

    getArticlesBySearch = (searched) => {
        axios.get(`${this.url}search/${searched}`)
            .then(respuesta => {

                this.setState({
                    articles: respuesta.data.articulos,
                    status: 'success'
                });

            }).catch(error => {
                this.setState({
                    articles: [],
                    status: 'success'
                });
            });
    };

    getLastArticles = () => {
        axios.get(`${this.url}articles/last`)
            .then(respuesta => {

                this.setState({
                    articles: respuesta.data.articulos,
                    status: 'success'
                });
            });
    };

    getArticles = () => {
        axios.get(`${this.url}articles`)
            .then(respuesta => {

                this.setState({
                    articles: respuesta.data.articulos,
                    status: 'success'
                });
            });
    };

    render() {

        if (this.state.articles.length >= 1) {

            var listArticles = this.state.articles.map((article) => {
                return (
                    <article key={article._id} className="article-item" id="article-template">
                        <div className="image-wrap">

                            {article.image !== null ? (
                                <img src={`${this.url}get-image/${article.image}`} alt={article.title} />
                            ) : (
                                    <img src={imageNotFound} alt={article.title} />
                                )
                            }

                        </div>

                        <h2 className="sub-header">{article.title}</h2>

                        <span className="date">
                            <Moment locale="es" fromNow>
                                {article.date}
                            </Moment>
                        </span>

                        <Link to={`blog/articulo/${article._id}`}>Leer más</Link>
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