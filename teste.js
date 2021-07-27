const PORT = 8081;
const HOST = '0.0.0.0';
const express = require('express');
const app = express();

const Sequelize = require('sequelize')
const sequelize = new Sequelize('node_projeto', 'root', 'root', {
    // As vezes o formatador da IDE pode sugerir o host e port como maiusculo, use eles como minusculo
    host: "db",
    port: "3306",
    dialect: 'mysql'
})

sequelize.authenticate().then(function() {
    console.log("Conectado com sucesso!")
}).catch(function(erro) {
    console.log("Falha ao conectar: " + erro)
})

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

// Postagem.sync({ force: true })

/* Usuario.sync({ force: true })

const t = "Teste 3"
const c = "A vida era bela antes de haver vida."
Postagem.create({
    titulo: t,
    conteudo: c
})
*/
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/index.html');
});
app.listen(PORT, function() {
    console.log(`Running on http://${HOST}:${PORT}`);
});