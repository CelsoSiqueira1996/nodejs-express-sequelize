const CategoriaService = require("../services/CategoriaService");
const Controller = require("./Controller");

const categoriaService = new CategoriaService();
class CategoriaController extends Controller {
    constructor() {
        super(categoriaService);
    }
};

module.exports = CategoriaController;