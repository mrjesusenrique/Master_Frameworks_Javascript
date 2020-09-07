import React from 'react';

export default function MiComponente() {

    {
        const receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate', 'Queso', 'Jamón'],
            calorias: 400
        }

        return (
            <div className="mi-componente">
                <p>{`Receta: ${receta.nombre}`}</p>
                <p>{`Calorias: ${receta.calorias}`}</p>
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
            </div>
        );
    };
};
