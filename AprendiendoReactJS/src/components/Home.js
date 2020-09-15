import React from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';

export default function Home() {

    const titleSlider = "Bienvenido al Master en  el Framework ReactJS de Javascript";
    const buttonString = "Ver más";

    return (
        <div id="home">
            <Slider
                title={titleSlider}
                btn={buttonString}
                size="slider-big"
            />
            <div className="center">
                <div id="content">
                    <h1 className="subheader">Últimos Artículos</h1>
                    <Articles
                        home="true"
                    />
                </div>
                <Sidebar />
            </div>
        </div>
    );
};