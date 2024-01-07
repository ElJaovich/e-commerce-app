const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Conectamos con MongoDB
mongoose.connect("mongodb://localhost:27017/catalogo-zapatos", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Creamos el modelo de datos
const Zapato = mongoose.model("Zapato", {
  id: Number,
  nombre: String,
  imagen: String,
  precio: Number,
  categoria: String,
});

// Definimos las rutas
app.get("/categorias", async (req, res) => {
  // Obtenemos todas las categorías
  const categorias = await Zapato.find();

  // Devolvemos las categorías
  res.json(categorias);
});

// Arrancamos el servidor
app.listen(3000, () => console.log("Servidor iniciado en el puerto 3000"));
