import React from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';

export default function Blog() {

    const titleSlider = "Blog";

    return (
        <div id="blog">
            <Slider
                title={titleSlider}
                size="slider-small"
            />
            <div className="center">
                <div id="content">
                    <Articles />
                </div>

                <Sidebar
                    blog="true"
                />
            </div>
        </div>
    );
};