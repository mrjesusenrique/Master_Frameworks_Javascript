'use strict'

const mongoose = require('mongoose');
const app = require('./app');
let port = 3900;

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/api_rest_blog', { useUnifiedTopology: true })
    .then(() => {
        console.log("La conexión a la Base de Datos se ha realizado con éxito.");

        // Crear servidor y escuchar peticiones http.

        app.listen(port, () => {
            console.log(`Servidor corriendo en http://localhost:${port}`);
        });
    });