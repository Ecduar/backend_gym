
const express = require('express');
const router = express.Router();
const ClienteController = require('../controllers/clienteController');
const clienteCtrl = new ClienteController();

router.get('/', (req, res) => res.json(clienteCtrl.listar()));
router.post('/', (req, res) => res.json(clienteCtrl.agregar(req.body)));
router.put('/:id', (req, res) => res.json(clienteCtrl.editar(req.params.id, req.body)));
router.delete('/:id', (req, res) => res.json(clienteCtrl.eliminar(req.params.id)));

module.exports = router;
