const express = require("express");
const PessoaController = require("../controllers/PessoaController");
const MatriculaController = require("../controllers/MatriculaController");

const pessoaController = new PessoaController();
const matriculaController = new MatriculaController();
const pessoasRoutes = express.Router();

pessoasRoutes
    .get("/pessoas", (req, res, next) => pessoaController.getTodosOsRegistros(req, res, next))
    .get("/pessoas/todos", (req, res, next) => pessoaController.getTodasAsPessoas(req, res, next))
    .get("/pessoas/:id", (req, res, next) => pessoaController.getRegistroById(req, res, next))
    .post("/pessoas", (req, res, next) => pessoaController.createRegistro(req, res, next))
    .put("/pessoas/:id", (req, res, next) => pessoaController.updateRegistro(req, res, next))
    .put("/pessoas/:estudante_id/cancela", (req, res, next) => pessoaController.cancelaRegistroEstudante(req, res, next))
    .delete("/pessoas/:id", (req, res, next) => pessoaController.deleteRegistro(req, res, next))
    .get("/pessoas/:estudante_id/matriculas", (req, res, next) => pessoaController.getMatriculasAtivas(req, res, next))
    .get("/pessoas/:estudante_id/matriculas/todos", (req, res, next) => pessoaController.getTodasAsMatriculas(req, res, next))
    .get("/pessoas/:estudante_id/matriculas/confirmadas", (req, res, next) => matriculaController.getMatriculasPorEstudante(req, res, next))
    .get("/pessoas/matriculas/lotadas", (req, res, next) => matriculaController.getCursosLotados(req, res, next))
    .get("/pessoas/:estudante_id/matriculas/:id", (req, res, next) => matriculaController.getRegistro(req, res, next))
    .post("/pessoas/:estudante_id/matriculas", (req, res, next) => matriculaController.createRegistro(req, res, next))
    .put("/pessoas/:estudante_id/matriculas/:id", (req, res, next) => matriculaController.updateRegistro(req, res, next))
    .delete("/pessoas/:estudante_id/matriculas/:id", (req, res, next) => matriculaController.deleteRegistro(req, res, next))


module.exports = pessoasRoutes;