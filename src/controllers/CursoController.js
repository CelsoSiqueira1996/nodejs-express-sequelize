const CursoService = require("../services/CursoService");
const Controller = require("./Controller");
const { Op } = require("sequelize");

const cursoService = new CursoService();
class CursoController extends Controller {
    constructor() {
        super(cursoService);
    };

    async getCursosPorData(req, res, next) {
        const { data_inicial, data_final } = req.query;
        const where = {};
        if(data_inicial || data_final) where.data_inicio = {};
        if(data_inicial) where.data_inicio[Op.gte] = data_inicial;
        if(data_final) where.data_inicio[Op.lte] = data_final;
        try {
            const resultado = await cursoService.getTodosOsRegistros(where);
            res.status(201).send(resultado);
        } catch (error) {
            res.status(500).send({ erro: error.message });
        }
    };
};

module.exports = CursoController;