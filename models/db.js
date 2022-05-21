const Sequelize = require('sequelize')
    // database: "aEe2LdBimG",user: "aEe2LdBimG",password: "SvfgdVTUw5",{}
const sequelize = new Sequelize('aEe2LdBimG', 'aEe2LdBimG', 'SvfgdVTUw5', {
    // As vezes o formatador da IDE pode sugerir o host e port como maiusculo, use eles como minusculo
    host: "remotemysql.com",
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