
const express = require("express");
const router = express.Router();
const entrenadorController = require("../controllers/entrenadorController");

router.get("/", entrenadorController.listar);
router.post("/", entrenadorController.agregar);
router.put("/:id", entrenadorController.actualizar);
router.delete("/:id", entrenadorController.eliminar);

module.exports = router;
