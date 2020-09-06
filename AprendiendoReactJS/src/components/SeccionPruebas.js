import React from 'react';
import MiComponente from './MiComponente';
import Peliculas from './Peliculas';

export default function SeccionPruebas() {

    const nombre = "Jesús Casañas";
    const edad = 23;

    function HolaMundo(nombre, edad) {
        const presentacion =
            (
                <div>
                    <h2>Hola, mi nombre es {nombre}</h2>
                    <h2>tengo {edad} años</h2>
                </div>
            );
        return presentacion;
    };

    return (
        <section id="content">
            <h2>Últimos Artículos</h2>
            <p>Hola! Bienvenido al Curso de ReactJS</p>
            {HolaMundo(nombre, edad)}

            <section className="componentes">
                <MiComponente />
                <Peliculas />
            </section>

        </section>
    );
};