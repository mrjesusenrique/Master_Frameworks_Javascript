import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import SimpleReactValidator from 'simple-react-validator';
import swal from 'sweetalert';
import Global from '../Global';
import Sidebar from './Sidebar';
import imageNotFound from '../assets/images/notFound.jpg';

class EditArticle extends Component {

    articleId = null;
    titleRef = React.createRef();
    contentRef = React.createRef();
    url = Global.url;

    state = {
        article: {},
        status: null,
        selectedFile: null
    };

    componentWillMount() {
        this.articleId = this.props.match.params.id;
        this.getArticle(this.articleId);

        this.validator = new SimpleReactValidator({
            messages: {
                required: 'Este campo es requerido',
                alpha_num_space: 'Solo puede introducir letras, numeros y espacios'
            }
        });
    };

    getArticle = (id) => {
        axios.get(`${this.url}article/${id}`)
            .then(res => {
                this.setState({
                    article: res.data.article
                });
            });
    };

    changeState = () => {
        this.setState({
            article: {
                title: this.titleRef.current.value,
                content: this.contentRef.current.value,
                image: this.state.article.image
            }
        });

        this.validator.showMessages();
        this.forceUpdate();
    };

    saveArticle = (e) => {
        e.preventDefault();

        // Rellenar el state con el formulario 

        this.changeState();

        console.log(this.state);

        if (this.validator.allValid()) {

            // Petición AJAX por post para guardar el artículo en la Base de Datos

            axios.put(`${this.url}article/${this.articleId}`, this.state.article)
                .then(res => {

                    console.log(this.state);

                    if (res.data.articulo) {

                        console.log('Respuesta url/save ', res);

                        this.setState({
                            article: res.data.articulo,
                            status: 'waiting'
                        });

                        swal(
                            'Artículo actualizado',
                            'Su artículo se ha actualizado de manera éxitosa',
                            'success'
                        );

                        // Subir la imagen 

                        if (this.state.selectedFile !== null) {

                            // Sacar el id del artículo guardado

                            var articleId = this.state.article._id;

                            // Crear FormData y añadir fichero 

                            const formData = new FormData();

                            formData.append(
                                'file0',
                                this.state.selectedFile,
                                this.state.selectedFile.name
                            );

                            // Petición AJAX 

                            axios.post(`${this.url}upload-image/${articleId}`, formData)
                                .then(res => {

                                    console.log('Respuesta url/upload-image/:id: ', res);

                                    if (res.data.articulo) {
                                        this.setState({
                                            article: res.data.articulo,
                                            status: 'success'
                                        });

                                    } else {
                                        this.setState({
                                            article: res.data.articulo,
                                            status: 'failed'
                                        });

                                    };
                                });

                        } else {
                            this.setState({
                                status: 'success'
                            });

                        };
                    } else {
                        this.setState({
                            status: 'failed'
                        });

                    };
                });
        } else {

            this.setState({
                status: 'failed'
            });

            this.validator.showMessages();
            this.forceUpdate();
        };
    };

    fileChange = (event) => {

        this.setState({
            selectedFile: event.target.files[0]
        });
    };

    render() {
        console.log(this.state.article);

        if (this.state.status === 'success') {
            return <Redirect to="/blog" />;
        };

        const article = this.state.article;

        return (
            <div className="center">
                <section id="content">
                    <h1 className="subheader">Editar Artículo</h1>

                    {this.state.article.title &&

                        <form className="mid-form" onSubmit={this.saveArticle}>
                            <div className="form-group">
                                <label htmlFor="title">Titulo</label>
                                <input type="text" name="title" defaultValue={article.title} ref={this.titleRef} onChange={this.changeState} />

                                {this.validator.message('title', this.state.article.title, 'required|alpha_num_space')}
                            </div>

                            <div className="form-group">
                                <label htmlFor="content">Contenido</label>
                                <textarea name="content" cols="30" rows="10" defaultValue={article.content} ref={this.contentRef} onChange={this.changeState} />

                                {this.validator.message('content', this.state.article.content, 'required')}
                            </div>

                            <div className="form-group">
                                <label htmlFor="file0">Imagen</label>
                                <div className="image-wrap">

                                    {article.image !== null ? (
                                        <img src={`${this.url}get-image/${article.image}`} alt={article.title} className="thumb" />
                                    ) : (
                                            <img src={imageNotFound} alt={article.title} className="thumb" />
                                        )
                                    }

                                </div>

                                <input type="file" name="file0" onChange={this.fileChange} />
                            </div>

                            <input type="submit" value="guardar" className="btn btn-success" />
                        </form>
                    }

                    {!this.state.article.title &&
                        <h1 className="subheader">Cargando...</h1>
                    }

                </section>
                <Sidebar />
            </div>
        );
    };
};

export default EditArticle;
