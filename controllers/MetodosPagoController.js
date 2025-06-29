const MetodoPago = require("../models/MetodoPago");

class MetodosPagoController {
  async listar(req, res) {
    const metodos = await MetodoPago.find().populate("cliente");
    res.json(metodos);
  }

  async agregar(req, res) {
    const nuevo = new MetodoPago(req.body);
    await nuevo.save();
    res.status(201).json(nuevo);
  }

  async actualizar(req, res) {
    const actualizado = await MetodoPago.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(actualizado);
  }

  async eliminar(req, res) {
    await MetodoPago.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  }
}

module.exports = new MetodosPagoController();
