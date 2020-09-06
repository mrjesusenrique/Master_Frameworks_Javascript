import React from 'react';
import logo from '../assets/images/logo.svg';
import Nav from './Nav';

export default function Header() {
    return (
        <header id="header">
            <div className="center">
                <div id="logo">
                    <img src={logo} alt="logotipo" className="app-logo" />
                    <span id="brand">
                        <strong>Master</strong>ReactJS
                    </span>
                </div>
                <Nav />
            </div>
            <div className="clearfix"></div>
        </header>
    );
};

