const express = require("express");
const CursoController = require("../controllers/CursoController");

const cursoController = new CursoController();
const cursosRoutes = express.Router();

cursosRoutes
    .get("/cursos", (req, res, next) => cursoController.getCursosPorData(req, res, next))
    .post("/cursos", (req, res, next) => cursoController.createRegistro(req, res, next))
    .delete("/cursos/:id", (req, res, next) => cursoController.deleteRegistro(req, res, next))
    .get("/cursos/:id", (req, res, next) => cursoController.getRegistroById(req, res, next))
    .put("/cursos/:id", (req, res, next) => cursoController.updateRegistro(req, res, next));

module.exports = cursosRoutes;