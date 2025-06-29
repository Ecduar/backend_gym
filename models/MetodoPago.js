const mongoose = require("mongoose");
const metodoPagoSchema = new mongoose.Schema({
  tipo: String,
  descripcion: String,
  cliente: { type: mongoose.Schema.Types.ObjectId, ref: "Cliente" }
});
module.exports = mongoose.model("MetodoPago", metodoPagoSchema);