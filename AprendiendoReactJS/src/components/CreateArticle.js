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
        status: null
    };

    changeState = () => {
        this.setState({
            article: {
                title: this.titleRef.current.value,
                content: this.contentRef.current.value
            }
        });

        console.log(this.state);
    };

    saveArticle = (e) => {
        e.preventDefault();

        this.changeState();

        axios.post(`${this.url}save`, this.state.article)
            .then(respuesta => {

                if (respuesta.data.article) {

                    this.setState({
                        article: respuesta.data.article,
                        status: 'success'
                    });

                } else {

                    this.setState({
                        status: 'filed'
                    });

                };
            });
    };

    render() {

        if (this.state.status === 'success') {
            return <Redirect to={'/blog'} />
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
                            <input type="file" name="file0" />
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