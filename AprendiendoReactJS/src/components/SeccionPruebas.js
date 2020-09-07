import React, { useState } from 'react';
import MiComponente from './MiComponente';
import Peliculas from './Peliculas';

export default function SeccionPruebas() {

    const nombre = "Jesús Casañas";
    const edad = 23;

    const [contador, setContador] = useState(0);

    function HolaMundo(nombre, edad) {
        const presentacion =
            (
                <div>
                    <p>Hola, mi nombre es {nombre}</p>
                    <p>tengo {edad} años</p>
                </div>
            );
        return presentacion;
    };

    return (
        <section id="content">
            
            <h2 className="subheader">Últimos Artículos</h2>
            <p>Hola! Bienvenido al Curso de ReactJS</p>

            <h2 className="subheader">Funciones y JSX básico</h2>
            {HolaMundo(nombre, edad)}

            <h2 className="subheader">Componentes</h2>
            <section className="componentes">
                <MiComponente />
                <Peliculas />
            </section>

            <h2 className="subheader">Estado y Props</h2>
            <section className="subheader">
                <p>contador: {contador}</p>
                <input type="button" value="Incrementar" onClick={() => setContador(contador + 1)} />
                <input type="button" value="Decrementar" onClick={() => setContador(contador - 1)} />
            </section>

        </section>
    );
};