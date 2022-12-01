const {  Model, DataTypes } = require('sequelize')
const sequelize = require('../db/database')

class Products extends Model {}
Products.init({ 
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true,
    },
    nombre:{
        type: DataTypes.STRING,
    },
    marca:{
        type: DataTypes.STRING,
    },
    tipo:{
        type: DataTypes.STRING,
    },
    precio:{
        type: DataTypes.DOUBLE,
    },
}, {
    sequelize,
    modelName: "product",
    timestamps: false
})

module.exports = Products;