const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db/database')

class Users extends Model {}
Users.init({ 
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true,
    },
    dni:{
        type: DataTypes.STRING, 
        unique: true,
    },
    nombre: DataTypes.STRING, 
    apellidos: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING, 
    telefono: DataTypes.INTEGER, 
    direccion: DataTypes.STRING,
}, {
    sequelize,
    modelName: "user",
    timestamps: false
})
module.exports = Users;