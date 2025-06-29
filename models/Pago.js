const mongoose = require("mongoose");
const pagoSchema = new mongoose.Schema({
  cliente: { type: mongoose.Schema.Types.ObjectId, ref: "Cliente" },
  membresia: { type: mongoose.Schema.Types.ObjectId, ref: "Membresia" },
  monto: Number,
  fecha: { type: Date, default: Date.now },
  metodoPago: { type: mongoose.Schema.Types.ObjectId, ref: "MetodoPago" }
});
module.exports = mongoose.model("Pago", pagoSchema);