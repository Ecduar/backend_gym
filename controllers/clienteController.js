const Cliente = require("../models/Cliente");

class ClienteController {
  async listar(req, res) {
    const clientes = await Cliente.find();
    res.json(clientes);
  }

  async agregar(req, res) {
    const nuevo = new Cliente(req.body);
    await nuevo.save();
    res.status(201).json(nuevo);
  }

  async actualizar(req, res) {
    const actualizado = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(actualizado);
  }

  async eliminar(req, res) {
    await Cliente.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  }
}

module.exports = new ClienteController();