const express = require('express');
const router = express.Router();
const MembresiaController = require('../controllers/membresiasController');
const ctrl = new MembresiaController();

router.get('/', (req, res) => res.json(ctrl.listar()));
router.post('/', (req, res) => res.json(ctrl.agregar(req.body)));
router.put('/:id', (req, res) => res.json(ctrl.editar(req.params.id, req.body)));
router.delete('/:id', (req, res) => res.json(ctrl.eliminar(req.params.id)));

module.exports = router;
