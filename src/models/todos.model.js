const { DataTypes} = require('sequelize');
const db = require('../utils/database');

const Todo = db.define('todos', {
    id:{
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true
    },
    title:{
        type: DataTypes.STRING(60),
        allowNull: false
    },
    description:{
        type: DataTypes.STRING(200),
        allowNull: false

    },
    status:{
        type: DataTypes.BOOLEAN
    }
});
module.exports = Todo;

