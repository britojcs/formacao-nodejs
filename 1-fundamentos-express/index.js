const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Bem vindo!</h1>");
});

// parametro opcional
app.get("/blog/:article?", function (req, res) {
  res.send("<h1>Blob</h1>");
});

app.get("/canal", function (req, res) {
  const channel = req.query["channel"];
  if (channel) res.send(`<h1>Canal ${channel}</h1>`);
  else res.send("Nenhum canal fornecido");
});

app.get("/ola/:name", function (req, res) {
  const name = req.params.name;
  res.send(`<h1>${name}</h1>`);
});

app.listen(3000, function (error) {
  if (error) console.log("Erro!!");
  else console.log("Servidor rodando!");
});
