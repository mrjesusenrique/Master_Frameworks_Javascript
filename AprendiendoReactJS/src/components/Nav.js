import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
    return (
        <nav id="menu">
            <ul>
                <li><NavLink to="/home" activeClassName="active">Inicio</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
                <li><NavLink to="/mi-componente">Formulario</NavLink></li>
                <li><NavLink to="/pagina-1">Página1</NavLink></li>
                <li><NavLink to="/pruebas/26683308/Jesús/Casañas">Página2</NavLink></li>
            </ul>
        </nav>
    );
};


