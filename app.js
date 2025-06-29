const connectDB = require("./config/database");
connectDB();

const express = require('express');
const path = require('path');

// Importar routers
const indexRouter = require('./routes/index');
const clientesRouter = require("./routes/clientes");
const entrenadoresRouter = require("./routes/entrenadores");
const espaciosRouter = require("./routes/espacios");
const membresiasRouter = require("./routes/membresias");
const pagosRouter = require("./routes/pagos");
const metodosPagoRouter = require("./routes/metodos-pago");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Motor de vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Usar rutas
app.use("/clientes", clientesRouter);
app.use("/entrenadores", entrenadoresRouter);
app.use("/espacios", espaciosRouter);
app.use("/membresias", membresiasRouter);
app.use("/pagos", pagosRouter);
app.use("/metodos-pago", metodosPagoRouter);



// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
