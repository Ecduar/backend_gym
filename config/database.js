const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/gimnasio", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("🟢 Conexión exitosa a MongoDB");
  } catch (error) {
    console.error("🔴 Error al conectar con MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
