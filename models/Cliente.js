const mongoose = require("mongoose");
const clienteSchema = new mongoose.Schema({
  nombre: String,
  cedula: String,
  estado: { type: String, default: "activo" },
  fechaRegistro: { type: Date, default: Date.now }
});
module.exports = mongoose.model("Cliente", clienteSchema);