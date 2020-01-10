const Sequelize = require("sequelize")
const connection = require("./database")

const Pergunta = connection.define('perguntas',{
    titulo:{
        type: Sequelize.STRING,
        allowNull: false // impede que o campo fiquei vazio
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Pergunta.sync({force: false}).then(() => {}) //sincroniza com o banco de dados

module.exports = Pergunta