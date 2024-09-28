const MatriculaService = require("../services/MatriculaService");
const Controller = require("./Controller");
const Sequelize = require("sequelize");

const matriculaService = new MatriculaService();
class MatriculaController extends Controller {
    constructor() {
        super(matriculaService);
    };

    async getMatriculasPorEstudante(req, res, next) {
        const estudanteId = req.params.estudante_id;
        try {
            const listaMatriculasPorEstudante = await matriculaService.getAndCountRegistros({
                where: {
                    estudante_id: Number(estudanteId),
                    status: 'matriculado'
                },
                limit: 2,
                order: [['id', 'DESC']]
            });
            res.status(200).send(listaMatriculasPorEstudante);
        } catch (error) {
            res.status(500).send({ erro: error.message });
        }
    };

    async getCursosLotados(req, res, next) {
        const lotacaoCurso = 2;
        try {
            const cursosLotados = await matriculaService.getAndCountRegistros({
                where: {
                    status: 'matriculado'
                },
                attributes: ['curso_id'],
                group: ['curso_id'],
                having: Sequelize.literal(`count(curso_id) >= ${lotacaoCurso}`)
            });
            res.status(200).send(cursosLotados);
        } catch (error) {
            res.status(500).send({ erro: error.message });
        }
    };
};

module.exports = MatriculaController;