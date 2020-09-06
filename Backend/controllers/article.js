'use strict'

const validator = require('validator');
const fs = require('fs');
const path = require('path');
const Article = require('../models/article');

let controller = {

    datosCurso: (peticion, respuesta) => {
        return respuesta.status(200).send({
            curso: "Master en Frameworks para Javascript",
            autor: "Víctor Robles WEB",
            alumno: "Jesús Casañas",
            ciudad: "Buenos Aires",
            país: "Argentina",
            fecha: new Date
        });
    },

    test: (peticion, respuesta) => {
        return respuesta.status(200).send({
            message: "Soy la acción test de mi controlador de artículos"
        });
    },

    save: (peticion, respuesta) => {
        // Recoger parámetros por POST

        let params = peticion.body;

        // Validar datos con validator 

        try {
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);

        } catch (error) {
            return respuesta.status(200).send({
                status: 'Error',
                message: 'Faltan datos por enviar'
            });
        };

        if (validate_title && validate_content) {

            // Crear el objeto a guardar 

            const article = new Article();

            // Asignar valores

            article.title = params.title;
            article.content = params.content;
            article.image = null;

            // Guardar el artículo

            article.save((error, articuloGuardado) => {

                if (error || !articuloGuardado) {

                    return respuesta.status(404).send({
                        status: 'Error',
                        message: 'Error al guardar el artículo en la Base de Datos'
                    });

                } else {

                    // Devolver una respuesta

                    return respuesta.status(200).send({
                        status: 'Success',
                        message: 'El Artículo ha sido guardado en la Base de Datos de manera exitosa',
                        article: articuloGuardado
                    });
                };
            });

        } else {
            return respuesta.status(200).send({
                status: 'Error',
                message: 'Los datos no han podido ser validados'
            });
        };
    },

    getArticles: (peticion, respuesta) => {

        // Find (encontrar)

        let query = Article.find({});

        let last = peticion.params.last;

        if (last || !last === undefined) {
            query.limit(5);
        };

        query.sort('-_id').exec((error, articulos) => {

            if (error) {
                return respuesta.status(500).send({
                    status: 'Error',
                    message: 'Error al buscar artículos'
                });
            };

            if (!articulos) {
                return respuesta.status(404).send({
                    status: 'Error',
                    message: 'No hay artículos para mostrar'
                });
            };

            return respuesta.status(200).send({
                status: 'Success',
                message: 'Los Artículos han sido extraidos de manera exitosa',
                articulos
            });
        });
    },

    getArticle: (peticion, respuesta) => {

        // Recoger el id de la URL 

        let articuloId = peticion.params.id;

        // Comprobar que exite

        if (!articuloId || articuloId === null || articuloId === undefined) {
            return respuesta.status(404).send({
                status: 'Error',
                message: 'El artículo que está buscando no existe'
            });
        };

        // Buscar el artículo por ID

        Article.findById(articuloId, (error, articulo) => {

            if (error || !articulo) {
                return respuesta.status(404).send({
                    status: 'Error',
                    message: 'El artículo que está buscando no se encuentra en la Base de Datos'
                });
            };

            // Devolverlo en JSON

            return respuesta.status(200).send({
                status: 'Success',
                message: 'El Artículo ha sido extraido de manera exitosa',
                articulo
            });
        });
    },

    update: (peticion, respuesta) => {

        // Recoger el ID  del artículo por la URL 

        let articuloId = peticion.params.id;

        // Recoger los parámetros que llegan por PUT

        let params = peticion.body;

        // Validar los datos 

        try {

            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);

        } catch (error) {
            return respuesta.status(404).send({
                status: 'Error',
                message: 'Error al altualizar los datos del artículo, faltan datos por enviar'
            });
        };

        if (validate_title && validate_content) {

            //Find and update (encontrar y actualizar)

            Article.findOneAndUpdate({ _id: articuloId }, params, { new: true }, (error, articuloActualizado) => {
                if (error) {
                    return respuesta.estatus(500).send({
                        status: 'Error',
                        message: 'Error al actualizar el artículo'
                    });
                };

                if (!articuloId) {
                    return respuesta.status(404).send({
                        status: 'Error',
                        message: 'El artículo que intenta actualizar no existe en la Base de Datos'
                    });
                };

                return respuesta.status(200).send({
                    status: 'Success',
                    message: 'El Artículo de ha actualizado exitosamente',
                    articulo: articuloActualizado
                });
            });

        } else {
            return respuesta.status(500).send({
                status: 'Error',
                message: 'Error al actualizar los datos del Artículo, verifique los datos enviados'
            });
        };
    },

    delete: (peticion, respuesta) => {

        // Recoger el ID  de la URL

        let articuloId = peticion.params.id;

        // Find and delete (encontrar y borrar)

        Article.findOneAndDelete({ _id: articuloId }, (error, articuloBorrado) => {
            if (error) {
                return respuesta.status(500).send({
                    status: 'Error',
                    message: 'Error al intentar borrar el Artículo'
                });
            };

            if (!articuloId) {
                return respuesta.status(404).send({
                    status: 'Error',
                    message: 'Error al eliminar el Artículo, este no existe en la Base de Datos'
                });
            };

            return respuesta.status(200).send({
                status: 'Success',
                message: 'El Artículo se ha elimiando exitosamente',
                articulo: articuloBorrado
            });
        });
    },

    upload: (peticion, respuesta) => {

        // Configurar el módulo de connect-multiparty (hecho en routes/article.js)

        // Recoger el fichero de la petición

        var file_name = 'Imagen no subida';

        if (!peticion.files) {
            return respuesta.status(404).send({
                status: 'Error',
                message: file_name
            });
        };

        // Conseguir el nombre y la extención del archivo

        let file_path = peticion.files.file0.path;
        let file_split = file_path.split('\\');

        // Nombre del archivo

        var file_name = file_split[2];

        // Extensión del fichero 

        var extension_split = file_name.split('\.');
        var file_extension = extension_split[1];

        // Comprobar la extensión, solo imagenes, si es invalida borrar el fichero 

        if (file_extension != 'png' && file_extension != 'PNG' && file_extension != 'jpg' && file_extension != 'jpeg' && file_extension != 'gif') {

            // borrar el archivo subido

            fs.unlink(file_path, (error) => {
                return respuesta.status(200).send({
                    status: 'Error',
                    message: 'La extensión de la imagen no es válida'
                });
            });

        } else {

            // Si todo es válido buscamos el artículo, le asignamos nombre y lo actualizamos

            let articuloId = peticion.params.id;

            Article.findOneAndUpdate({ _id: articuloId }, { image: file_name }, { new: true }, (error, articuloActualizado) => {

                if (error || !articuloActualizado) {
                    return respuesta.status(404).send({
                        status: 'Error',
                        message: 'Error al actualizar la imagen del Artículo'
                    });
                };

                return respuesta.status(200).send({
                    status: 'Success',
                    articulo: articuloActualizado,
                    fichero: peticion.files,
                    split: file_split,
                    file_extension
                });
            });
        };
    },

    getImage: (peticion, respuesta) => {

        let file = peticion.params.image;
        let path_file = `./upload/articles/${file}`;

        fs.exists(path_file, (exists) => {

            if (exists) {

                return respuesta.sendFile(path.resolve(path_file));

            } else {

                return respuesta.status(404).send({
                    status: 'Error',
                    message: 'La imagen no existe'
                });
            };
        });
    },

    search: (peticion, respuesta) => {

        // Sacar el string a buscar

        let searchString = peticion.params.search;

        // Find or 

        Article.find({
            "$or": [
                { "title": { "$regex": searchString, "$options": "i" } },
                { "content": { "$regex": searchString, "$options": "i" } }
            ]
        }).sort([['date', 'descending']]).exec((error, articulos) => {

            if (error) {
                return respuesta.status(500).send({
                    status: 'Error',
                    message: 'Error en la petición'
                });
            };

            if (!articulos || articulos.length <= 0) {
                return respuesta.status(404).send({
                    status: 'Error',
                    message: 'No hay articulos que coincidan con tu busqueda'
                });
            };

            return respuesta.status(200).send({
                status: 'Success',
                articulos
            });
        });
    }
};

// Final del controlador

module.exports = controller;