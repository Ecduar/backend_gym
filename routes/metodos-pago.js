const express = require("express");
const router = express.Router();
const metodosPagoController = require("../controllers/metodosPagoController");

router.get("/", metodosPagoController.listar);
router.post("/", metodosPagoController.agregar);
router.put("/:id", metodosPagoController.actualizar);
router.delete("/:id", metodosPagoController.eliminar);

module.exports = router;
