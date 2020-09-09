import React from 'react';

export default function MiComponente(props) {

    {
        const receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate', 'Queso', 'Jamón'],
            calorias: 400
        }

        return (
            <div className="mi-componente">
                <h1>{`Receta: ${receta.nombre}`}</h1>
                <h1>{`Calorias: ${receta.calorias}`}</h1>
                <ol>
                    {
                        receta.ingredientes.map((ingrediente, i) => {
                            console.log(ingrediente);

                            return (
                                <li key={i}>
                                    {ingrediente}
                                </li>
                            );
                        })
                    }
                </ol>
                <hr />

                {props.saludo &&
                    <React.Fragment>
                        <h1>Desde una prop</h1>
                        <h3>{props.saludo}</h3>
                    </React.Fragment>
                }
            </div>
        );
    };
};
