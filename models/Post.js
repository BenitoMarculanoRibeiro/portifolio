const db = require('./db')
const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.STRING
    },
    autor: {
        type: db.Sequelize.STRING
    }
})

// Executar apenas quando criar a tabela
Post.sync({ force: true })

module.exports = Post