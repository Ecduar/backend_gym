const mongoose = require("mongoose");
const membresiaSchema = new mongoose.Schema({
  nombre: String,
  tipo: String,
  cliente: { type: mongoose.Schema.Types.ObjectId, ref: "Cliente" },
  espacios: [{ type: mongoose.Schema.Types.ObjectId, ref: "Espacio" }],
  fechaInicio: Date,
  fechaFin: Date
});
module.exports = mongoose.model("Membresia", membresiaSchema);