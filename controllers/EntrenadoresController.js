const db = require('../data/database');

class EntrenadoresController {
  listar(req, res) {
    res.json(db.entrenadores);
  }

  agregar(req, res) {
    const nuevo = req.body;
    db.entrenadores.push(nuevo);
    res.status(201).json({ mensaje: 'Entrenador agregado', entrenador: nuevo });
  }
}

module.exports = new EntrenadoresController();