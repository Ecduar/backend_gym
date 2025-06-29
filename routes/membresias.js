const express = require("express");
const router = express.Router();
const membresiasController = require("../controllers/membresiasController");

router.get("/", membresiasController.listar);
router.post("/", membresiasController.agregar);
router.put("/:id", membresiasController.actualizar);
router.delete("/:id", membresiasController.eliminar);

module.exports = router;
