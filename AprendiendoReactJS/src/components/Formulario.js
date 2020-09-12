import React from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';

export default function Formulario() {

    const titleForm = "Formulario";

    return (
        <div id="formulario">
            <Slider
                title={titleForm}
                size="slider-small"
            />
            <div className="center">
                <div id="content">

                </div>
                <Sidebar
                    blog="false"
                />
            </div>
        </div>
    );
};