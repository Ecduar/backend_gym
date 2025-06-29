const mongoose = require("mongoose");
const espacioSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String
});
module.exports = mongoose.model("Espacio", espacioSchema);