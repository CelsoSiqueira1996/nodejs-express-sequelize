const dataSource = require("../database/models");

class Services {
    constructor(nomeDoModelo) {
        this.model = nomeDoModelo;
    }

    async getTodosOsRegistros(where = {}) {
        try {
            const listaDeRegistros = await dataSource[this.model].findAll({
                where: where
            });
            return listaDeRegistros;
        } catch (error) {
            throw error;
        }
    }

    async getRegistrosPorEscopo(escopo) {
        try {
            const listaDeRegistros = await dataSource[this.model].scope(escopo).findAll();
            return listaDeRegistros;
        } catch (error) {
            throw error;
        }
    }

    async getRegistroById(id) {
        try {
            const registro = await dataSource[this.model].findByPk(id);
            return registro;
        } catch (error) {
            throw error;
        }
    }

    async getRegistro(where) {
        try {
            const registro = await dataSource[this.model].findOne({
                where: where
            });
            return registro;
        } catch (error) {
            throw error
        }
    }

    async getAndCountRegistros(options = {}) {
        try {
            const resultado = await dataSource[this.model].findAndCountAll(options);
            return resultado;
        } catch (error) {
            throw error;
        }
    }

    async createRegistro(dto) {
        try {
            const registroCriado= await dataSource[this.model].create(dto);
            return registroCriado;
        } catch (error) {
            throw error;
        }
    }

    async deleteRegistro(where) {
        try {
            await dataSource[this.model].destroy({
                where: where
            });
        } catch (error) {
            throw error;
        }
    }

    async updateRegistro(dto, where, transacao = {}) {
        const listaDeRegistrosAtualizados = await dataSource[this.model].update(dto, {
            where: where,
            transaction: transacao
        });
        if(listaDeRegistrosAtualizados[0]) {
            return true;
        } else {
            return false
        }
    }
}

module.exports = Services;