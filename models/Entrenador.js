const mongoose = require("mongoose");
const entrenadorSchema = new mongoose.Schema({
  nombre: String,
  especialidad: String
});
module.exports = mongoose.model("Entrenador", entrenadorSchema);