const express = require('express');
const app = express();
const data = require("./data.json");

// Verbos HTTP
// GET - Receber dados de um Resource.
// POST - Enviar dados ou informações para serem processadas pelo Resource.
// PUT - Atualiar dados de um Resource.
// DELETE - Deletar um Resource.

app.use(express.json());

app.get("/clients", function(req, res){
    res.json(data);
});

app.get("/clients/:id", function(req, res){});
app.post("/clients", function(req, res){});
app.put("/clients/:id", function(req, res){});
app.delete("/clients/:id", function(req, res){});

app.listen(3001, function(){
    console.log("Server is running");
});
