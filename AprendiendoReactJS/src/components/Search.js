import React from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';

export default function Search(props) {

    const searched = props.match.params.search;

    return (
        <div id="blog">
            <Slider
                title={'Busqueda: ' + searched}
                size="slider-small"
            />
            <div className="center">
                <div id="content">
                    <Articles 
                        search={searched}
                    />
                </div>

                <Sidebar
                    blog="true"
                />
            </div>
        </div>
    );
};