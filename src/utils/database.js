// conexion base de datos

const { Sequelize } = require('sequelize');

const db = new Sequelize({
   database: "todos",
   port: 5432,
   host: "localhost",
   username:"postgres",
   password: '1289',
   dialect: "postgres",

});
module.exports = db;