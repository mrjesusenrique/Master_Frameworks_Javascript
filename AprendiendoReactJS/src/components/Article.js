import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';
import Sidebar from './Sidebar';
import desarrolloWeb from '../assets/images/desarrolloweb.png';

export default function Article() {

    return (
        <div className="center">
            <section id="content">

                <article className="article-item article-detail">
                    <div className="image-wrap">
                        <img src={desarrolloWeb} alt="intro" />
                    </div>

                    <h1 className="sub-header">Artículo de prueba</h1>

                    <span className="date">
                        hace 5 minutos
                            </span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, totam
                    dolorem incidunt quasi labore neque praesentium minus nemo officiis odi
                                 t ipsum sit velit earum itaque dicta dolores? Rem, iste explicabo.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, totam
                    dolorem incidunt quasi labore neque praesentium minus nemo officiis odi
                    t ipsum sit velit earum itaque dicta dolores? Rem, iste explicabo.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, totam
                    dolorem incidunt quasi labore neque praesentium minus nemo officiis odi
                                t ipsum sit velit earum itaque dicta dolores? Rem, iste explicabo.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, totam
                    dolorem incidunt quasi labore neque praesentium minus nemo officiis odi
                                    t ipsum sit velit earum itaque dicta dolores? Rem, iste explicabo.</p>
                    <div className="clearfix"></div>
                </article>

            </section>

            <Sidebar />
            <div className="clearfix"></div>
        </div>
    );
};