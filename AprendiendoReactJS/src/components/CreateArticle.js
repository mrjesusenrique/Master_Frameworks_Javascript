import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';
import Sidebar from './Sidebar';

class CreateArticle extends Component {

    titleRef = React.createRef();
    contentRef = React.createRef();
    url = Global.url;

    state = {
        article: {},
        status: null,
        selectedFile: null
    };

    changeState = () => {
        this.setState({
            article: {
                title: this.titleRef.current.value,
                content: this.contentRef.current.value
            }
        });
    };

    saveArticle = (e) => {
        e.preventDefault();

        // Rellenar el state con el formulario 

        this.changeState();

        console.log(this.state);

        // Petición AJAX por post para guardar el artículo en la Base de Datos

        axios.post(`${this.url}save`, this.state.article)
            .then(res => {

                if (res.data.article) {

                    console.log('Respuesta url/save ', res);

                    this.setState({
                        article: res.data.article,
                        status: 'waiting'
                    });

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
    };

    fileChange = (event) => {

        this.setState({
            selectedFile: event.target.files[0]
        });
    };

    render() {

        if (this.state.status === 'success') {
            return <Redirect to="/blog" />;
        };

        return (
            <div className="center">
                <section id="content">
                    <h1 className="subheader">Crear Artículo</h1>

                    <form className="mid-form" onSubmit={this.saveArticle}>
                        <div className="form-group">
                            <label htmlFor="title">Titulo</label>
                            <input type="text" name="title" ref={this.titleRef} onChange={this.changeState} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="content">Contenido</label>
                            <textarea name="content" cols="30" rows="10" ref={this.contentRef} onChange={this.changeState} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="file0">Imagen</label>
                            <input type="file" name="file0" onChange={this.fileChange} />
                        </div>

                        <input type="submit" value="guardar" className="btn btn-success" />
                    </form>

                </section>
                <Sidebar />
            </div>
        );
    };
};

export default CreateArticle;