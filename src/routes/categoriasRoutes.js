const express = require("express");
const CategoriaController = require("../controllers/CategoriaController");

const categoriaController = new CategoriaController();
const categoriasRoutes = express.Router();

categoriasRoutes
    .get("/categorias", (req, res, next) => categoriaController.getTodosOsRegistros(req, res, next))
    .post("/categorias", (req, res, next) => categoriaController.createRegistro(req, res, next))
    .delete("/categorias/:id", (req, res, next) => categoriaController.deleteRegistro(req, res, next))
    .get("/categorias/:id", (req, res, next) => categoriaController.getRegistroById(req, res, next))
    .put("/categorias/:id", (req, res, next) => categoriaController.updateRegistro(req, res, next));

module.exports = categoriasRoutes;