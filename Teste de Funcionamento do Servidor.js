// app.js

const express = require('express');
const app = express();

const db = require('./models/db');

app.get("/", async (req, res) => {
    res.send("Teste de Rota Softex! Nodemon");
});

app.listen(8080, () => {
    console.log ("Sevidor iniciado!! http://localhost:8080");
});


// db.js

const Sequelize = require('sequelize');

const sequelize = new Sequelize( "Softex", "root", "123456", {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate()
.then(function(){
    console.log(' A Conexao com o banco de dados realizada com sucesso!');
}).catch(function(){
    console.log('Erro: A Conexao com o banco de dados falhou!');
})

module.exports = sequelize;
