const {  Model, DataTypes } = require('sequelize')
const sequelize = require('../db/database')

class Orders extends Model {}
Orders.init({ 
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true,
    },
    lineapedido:{
        type: DataTypes.INTEGER,
    },
    descripcion:{
        type: DataTypes.STRING,
    },
    cantidad:{
        type: DataTypes.INTEGER,
    },
    direccion:{
        type: DataTypes.STRING,
    },
}, {
    sequelize,
    modelName: "order",
    timestamps: false
})

module.exports = Orders;