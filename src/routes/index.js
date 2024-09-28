const categoriasRoutes = require("./categoriasRoutes");
const cursosRoutes = require("./cursosRoutes");
const pessoasRoutes = require("./pessoasRoutes");
const express = require("express");

function routes(app) {
    app.route('/').get((req, res) => {
        res
            .status(200)
            .send({ mensagem: 'boas-vindas à API' });
    });

    app.use(
        express.json(),
        pessoasRoutes,
        cursosRoutes,
        categoriasRoutes,
    )
}

module.exports = routes;