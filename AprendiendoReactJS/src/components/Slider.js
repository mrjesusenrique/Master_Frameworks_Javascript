import React from 'react';

export default function Slider(props) {
    return (
        <div id="slider" className="slider-big">
            <h1>{props.title}</h1>
            <a href="blog.html" className="btn-white">{props.btn}</a>
        </div>
    );
};