import React, { Component } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import 'moment/locale/es';
import Global from '../Global';
import Sidebar from './Sidebar';
import imageNotFound from '../assets/images/notFound.jpg';
import { Redirect, Link } from 'react-router-dom';
import swal from 'sweetalert';

class Article extends Component {

    url = Global.url;

    state = {
        article: false,
        status: null
    };

    componentWillMount() {
        this.getArticle();
    };

    getArticle = () => {
        var id = this.props.match.params.id;

        axios.get(`${this.url}article/${id}`)
            .then(respuesta => {

                this.setState({
                    article: respuesta.data.article,
                    status: 'success'
                });

            }).catch(error => {
                this.setState({
                    article: false,
                    status: 'success'
                });
            });
    };

    deleteArticle = (id) => {

        swal({
            title: "¿Seguro que desea eliminar el artículo?",
            text: "Su artículo será eliminado de manera permanende de la Base de Datos",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`${this.url}article/${id}`)
                        .then(res => {
                            this.setState({
                                article: res.data.article,
                                status: 'deleted'
                            });

                            swal(
                                'Artículo eliminado',
                                'Su artículo se ha eliminado de manera éxitosa',
                                'success'
                            );
                        });
                } else {
                    swal(
                        'Tranquilo',
                        'Su artículo no ha sido eliminado',
                    );
                }
            });
    };

    render() {

        if (this.state.status === 'deleted') {
            return <Redirect to="/blog" />
        };

        var article = this.state.article;

        return (
            <div className="center">
                <section id="content">

                    {article &&

                        <article className="article-item article-detail">
                            <div className="image-wrap">

                                {article.image !== null ? (
                                    <img src={`${this.url}get-image/${article.image}`} alt={article.title} />
                                ) : (
                                        <img src={imageNotFound} alt={article.title} />
                                    )
                                }

                            </div>

                            <h1 className="sub-header">{article.title}</h1>

                            <span className="date">
                                <Moment locale="es" fromNow>{article.date}</Moment>
                            </span>

                            <p>{article.content}</p>

                            <button onClick={() => { this.deleteArticle(article._id) }}
                                className="btn btn-danger">Eliminar
                            </button>

                            <Link to={`/blog/editar/${article._id}`} className="btn btn-warning">Editar</Link>

                            <div className="clearfix"></div>
                        </article>
                    }

                    {!article && this.state.status === "success" &&
                        <div id="article">
                            <h2 className="subheader">El Artículo no existe</h2>
                            <p>Intentalo de nuevo más tarde</p>
                        </div>
                    }

                    {this.state.status === null &&
                        <div id="article">
                            <h2 className="subheader">Cargando...</h2>
                            <p>Espere un momento</p>
                        </div>
                    }
                </section>

                <Sidebar />
                <div className="clearfix"></div>
            </div>
        );
    };
};

export default Article;