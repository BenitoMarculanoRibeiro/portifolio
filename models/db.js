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

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}