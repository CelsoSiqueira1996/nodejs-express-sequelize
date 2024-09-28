const PessoaService = require("../services/PessoaService");
const Controller = require("./Controller");

const pessoaService = new PessoaService();
class PessoaController extends Controller {
    constructor() {
        super(pessoaService);
    }

    async getTodasAsPessoas(req, res, next) {
        try {
            const listaDePessoas = await pessoaService.getTodasAsPessoas();
            res.status(200).send(listaDePessoas);
        } catch (error) {
            res.status(500).send({ erro: error.message });
        }
    }

    async getMatriculasAtivas(req, res, next) {
        const estudanteId = req.params.estudante_id;
        try {
            const listaMatriculas = await pessoaService.getMatriculasAtivasPorEstudante(Number(estudanteId));
            res.status(200).send(listaMatriculas);
        } catch (error) {
            res.status(500).send({ erro: error.message });
        }
    }

    async getTodasAsMatriculas(req, res, next) {
        const estudanteId = req.params.estudante_id;
        try {
            const listaMatriculas = await pessoaService.getTodasAsMatriculasPorEstudante(Number(estudanteId));
            res.status(200).send(listaMatriculas);
        } catch (error) {
            res.status(500).send({ erro: error.message });
        }
    }

    async cancelaRegistroEstudante(req, res, next) {
        const { estudante_id } = req.params;
        try {
            await pessoaService.cancelaPessoaEMatriculas(Number(estudante_id));
            res.status(200).send({ messagem: `Matrículas ref. estudante ${estudante_id} canceladas.`});
        } catch (error) {
            res.status(500).send({ erro: error.message });
        }
    }
}

module.exports = PessoaController;