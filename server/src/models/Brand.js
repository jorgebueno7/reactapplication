const {  Model, DataTypes } = require('sequelize')
const sequelize = require('../db/database')

class Brands extends Model {}
Brands.init({ 
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true,
    },
    nombre: DataTypes.STRING,
    localizacion:  DataTypes.STRING,
    tipo: DataTypes.STRING,
    anyo_fundacion: DataTypes.INTEGER,
}, {
    sequelize,
    modelName: "brand",
    timestamps: false
})

module.exports = Brands;