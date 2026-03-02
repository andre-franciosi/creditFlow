const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// O host 'database' é o nome do serviço no seu docker-compose.yml
const MONGO_URI = "mongodb://database:27017/creditFlow";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("🍃 MongoDB conectado via Docker!"))
  .catch((err) => console.error("Erro ao conectar ao Mongo:", err));

app.get("/", (req, res) => res.send("API CreditFlow Online!"));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Backend rodando em http://localhost:${PORT}`);
});
