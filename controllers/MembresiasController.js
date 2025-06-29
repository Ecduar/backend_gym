const Membresia = require("../models/Membresia");

class MembresiasController {
  async listar(req, res) {
    const membresias = await Membresia.find().populate("cliente espacios");
    res.json(membresias);
  }

  async agregar(req, res) {
    const nueva = new Membresia(req.body);
    await nueva.save();
    res.status(201).json(nueva);
  }

  async actualizar(req, res) {
    const actualizada = await Membresia.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(actualizada);
  }

  async eliminar(req, res) {
    await Membresia.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  }
}

module.exports = new MembresiasController();

