const converteIds = require("../utils/conversorDeStringHelper");

class Controller {
    constructor(service) {
        this.service = service
    }

    async getTodosOsRegistros(req, res, next) {
        try {
            const resultado = await this.service.getTodosOsRegistros();
            res.status(200).send(resultado);
        } catch (error) {
            res.status(500).send({ erro: error.message });
        }
    }

    async getRegistroById(req, res, next) {
        try {
            const id = req.params.id;
            const resultado = await this.service.getRegistroById(Number(id));
            res.status(200).send(resultado);
        } catch (error) {
            res.status(500).send({ erro: error.message });
        }
    }

    async getRegistro(req, res, next) {
        const params = req.params;
        const where = converteIds(params)
        try {
            const resultado = await this.service.getRegistro(where);
            res.status(200).send(resultado);
        } catch (error) {
            res.status(500).send({ erro: error.message });
        }
    }

    async createRegistro(req, res, next) {
        try {
            const resultado = await this.service.createRegistro(req.body);
            res.status(201).send(resultado);
        } catch (error) {
            res.status(500).send({ erro: error.message });
        }
    }

    async deleteRegistro(req, res, next) {
        try {
            const params = req.params;
            const where = converteIds(params);
            await this.service.deleteRegistro(where);
            res.status(200).send({ mensagem: `id ${where.id} deletado` });
        } catch (error) {
            res.status(500).send({ erro: error.message });
        }
    }

    async updateRegistro(req, res, next) {
        const params = req.params;
        const where = converteIds(params);
        const dto = req.body;
        try {
            const foiAtualizado = await this.service.updateRegistro(dto, where);
            if (!foiAtualizado) {
                return res.status(400).json({ mensagem: 'registro não foi atualizado' });
            }
            return res.status(200).json({ mensagem: 'Atualizado com sucesso' });
        } catch (error) {
            res.status(500).send({ erro: error.message });
        }
    }
}

module.exports = Controller;