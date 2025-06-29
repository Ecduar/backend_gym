const Entrenador = require("../models/Entrenador");

class EntrenadorController {
  async listar(req, res) {
    const entrenadores = await Entrenador.find();
    res.json(entrenadores);
  }

  async agregar(req, res) {
    const nuevo = new Entrenador(req.body);
    await nuevo.save();
    res.status(201).json(nuevo);
  }

  async actualizar(req, res) {
    const actualizado = await Entrenador.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(actualizado);
  }

  async eliminar(req, res) {
    await Entrenador.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  }
}

module.exports = new EntrenadorController();

