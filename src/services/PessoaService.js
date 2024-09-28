const Services = require("./Services");
const dataSource = require("../database/models");

class PessoaService extends Services {
    constructor() {
        super('Pessoa');
        this.matriculaService = new Services('Matricula');
    }

    async getTodasAsPessoas() {
        try {
            const listaDePessoas = await super.getRegistrosPorEscopo('todosOsRegistros');
            return listaDePessoas;
        } catch (error) {
            throw error;
        }
    } 

    async getMatriculasAtivasPorEstudante(estudanteId) {
        try {
            const estudante = await super.getRegistroById(estudanteId);
            const listaMatriculas = await estudante.getAulasMatriculadas();
            return listaMatriculas;
        } catch (error) {
            throw error;
        }
    }

    async getTodasAsMatriculasPorEstudante(estudanteId) {
        try {
            const estudante = await super.getRegistroById(estudanteId);
            const listaMatriculas = await estudante.getTodasAsMatriculas();
            return listaMatriculas;
        } catch (error) {
            throw error;
        }
    }

    async cancelaPessoaEMatriculas(estudanteId) {
        return dataSource.sequelize.transaction(async (transacao) => {
            await super.updateRegistro({ ativo: false }, { id: estudanteId }, transacao);
            await this.matriculaService.updateRegistro({ status: 'cancelado' }, { estudante_id: estudanteId}, transacao);
        });
    }
}

module.exports = PessoaService;
