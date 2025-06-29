const Pago = require("../models/Pago");

class PagosController {
  async listar(req, res) {
    const pagos = await Pago.find().populate("cliente membresia metodoPago");
    res.json(pagos);
  }

  async agregar(req, res) {
    const nuevo = new Pago(req.body);
    await nuevo.save();
    res.status(201).json(nuevo);
  }

  async actualizar(req, res) {
    const actualizado = await Pago.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(actualizado);
  }

  async eliminar(req, res) {
    await Pago.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  }
}

module.exports = new PagosController();
