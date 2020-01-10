const Sequelize = require('sequelize')

const connection = new Sequelize('pauloperguntas','root', '19970603',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection