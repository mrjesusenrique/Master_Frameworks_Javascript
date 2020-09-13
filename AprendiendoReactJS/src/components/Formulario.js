import React, { useState } from 'react';
import Sidebar from './Sidebar';

export default function Formulario() {

    const nombreRef = React.createRef();
    const apellidosRef = React.createRef();
    const bioRef = React.createRef();
    const generoHombreRef = React.createRef();
    const generoMujerRef = React.createRef();
    const generoOtroRef = React.createRef();

    const [state, setState] = useState({ user: {} });

    const enviarFormulario = (e) => {
        e.preventDefault();

        var genero = '';

        if (generoHombreRef.current.checked) {
            genero = generoHombreRef.current.value;
        } else if (generoMujerRef.current.checked) {
            genero = generoMujerRef.current.value;
        } else {
            genero = generoOtroRef.current.value;
        };

        let user = {
            nombre: nombreRef.current.value,
            apellidos: apellidosRef.current.value,
            biografia: bioRef.current.value,
            genero: genero
        };

        setState({
            user: user
        });

        console.log('Formulario enviado éxitosamente!!');
        console.log(user);
    };

    if (state.user.nombre) {
        var user = state.user;
    };

    return (
        <div id="formulario">
            <div className="center">
                <div id="content">
                    <h1 className="subheader">Formulario</h1>

                    {state.user.nombre &&
                        <div id="user-data">
                            <p>Nombre: <strong>{user.nombre}</strong></p>
                            <p>Apellidos: <strong>{user.apellidos}</strong></p>
                            <p>Biografía: <strong>{user.biografia}</strong></p>
                            <p>Genero: <strong>{user.genero}</strong></p>
                        </div>
                    }

                    <form className="full-form" onSubmit={enviarFormulario} onChange={enviarFormulario}>
                        <div className="form-group">
                            <label htmlFor="nombre" />Nombre
                            <input type="text" name="nombre" ref={nombreRef} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="apellido" />Apellido
                            <input type="text" name="apellido" ref={apellidosRef} />
                        </div>

                        <div className="form-group radio-buttons">
                            <label htmlFor="bio" />Biografia
                            <textarea name="bio" id="" cols="30" rows="10" ref={bioRef} />
                        </div>

                        <div className="clearfix"></div>

                        <div className="form-group">
                            <input type="radio" name="genero" value="hombre" ref={generoHombreRef} />Hombre
                            <input type="radio" name="genero" value="mujer" ref={generoMujerRef} /> Mujer
                            <input type="radio" name="genero" value="otro" ref={generoOtroRef} /> Otro
                        </div>


                        <input type="submit" value="Enviar" className="btn btn-success" />
                    </form>
                </div>

                <Sidebar
                    blog="false"
                />
            </div>
        </div >
    );
};