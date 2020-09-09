import React from 'react';

export default function Slider(props) {
    return (
        <div id="slider" className={props.size}>
            <h1>{props.title}</h1>
            {props.btn &&
                <a href="blog.html" className="btn-white">{props.btn}</a>
            }
        </div>
    );
};