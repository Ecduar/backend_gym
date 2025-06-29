const express = require("express");
const router = express.Router();
const pagosController = require("../controllers/pagosController");

router.get("/", pagosController.listar);
router.post("/", pagosController.agregar);
router.put("/:id", pagosController.actualizar);
router.delete("/:id", pagosController.eliminar);

module.exports = router;
