import React from 'react';
import { Link } from 'react-router-dom';

export default function Slider(props) {
    return (
        <div id="slider" className={props.size}>
            <h1>{props.title}</h1>

            {props.btn &&
                <Link to="/blog" className="btn-white">{props.btn}</Link>
            }
        </div>
    );
};