const express = require("express");
const router = express.Router();
const espaciosController = require("../controllers/espaciosController");

router.get("/", espaciosController.listar);
router.post("/", espaciosController.agregar);
router.put("/:id", espaciosController.actualizar);
router.delete("/:id", espaciosController.eliminar);

module.exports = router;
