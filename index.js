const PORT = 8081;
const HOST = 'localhost';
const express = require('express');
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')
    // Config
    // Template Engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
    // Body Parse
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
    // Conexão com o banco de dados MYSQL

app.get('/', function(req, res) {
    Post.findAll({ order: [
            ['id', 'DESC']
        ] }).then(function(posts) {
        res.render('home', { posts: posts })
    })
})

app.get('/cad', function(req, res) {
    res.render('formulario')
})

app.post('/add', function(req, res) {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function() {
        res.redirect('/')
            //res.send("Post criado com sucesso")
    }).catch(function(erro) {
        res.send("Houve um erro: " + erro)
    })
})

app.listen(PORT, function() {
    console.log(`Running on http://${HOST}:${PORT}`);
})