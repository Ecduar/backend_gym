const Espacio = require("../models/Espacio");

class EspaciosController {
  async listar(req, res) {
    const espacios = await Espacio.find();
    res.json(espacios);
  }

  async agregar(req, res) {
    const nuevo = new Espacio(req.body);
    await nuevo.save();
    res.status(201).json(nuevo);
  }

  async actualizar(req, res) {
    const actualizado = await Espacio.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(actualizado);
  }

  async eliminar(req, res) {
    await Espacio.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  }
}

module.exports = new EspaciosController();
