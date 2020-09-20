import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';

export default function Sidebar(props) {

    const searchRef = React.createRef();

    const [state, setState] = useState({
        search: '',
        redirect: false
    });

    function redirectToSearch(event) {
        event.preventDefault();

        setState({
            search: searchRef.current.value,
            redirect: true
        });
    };

    if (state.redirect) {
        return (
            <Redirect to={'/redirect/' + state.search} />
        );
    };

    return (
        <aside id="sidebar">
            {props.blog === 'true' &&
                <div id="nav-blog" className="sidebar-item">
                    <h3>Puedes hacer esto</h3>
                    <Link to={"/blog/crear"} className="btn btn-success">Crear Articulo</Link>
                </div>
            }

            <div id="search" className="sidebar-item">
                <h3>Buscador</h3>
                <p>Encuentra el artículo que buscas</p>
                <form onSubmit={redirectToSearch}>
                    <input type="text" name="search" ref={searchRef} />
                    <input type="submit" name="submit" value="buscar" className="btn" />
                </form>
            </div>
        </aside>
    );
};