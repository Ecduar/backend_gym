
const express = require('express');
const router = express.Router();
const EntrenadorController = require('../controllers/entrenadorController');
const entrenadorCtrl = new EntrenadorController();

router.get('/', (req, res) => res.json(entrenadorCtrl.listar()));
router.post('/', (req, res) => res.json(entrenadorCtrl.agregar(req.body)));
router.put('/:id', (req, res) => res.json(entrenadorCtrl.editar(req.params.id, req.body)));
router.delete('/:id', (req, res) => res.json(entrenadorCtrl.eliminar(req.params.id)));

module.exports = router;
