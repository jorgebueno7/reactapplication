const {  Model, DataTypes } = require('sequelize')
const sequelize = require('../db/database')

class CreditCards extends Model {}
CreditCards.init({ 
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true,
    },
    numero:{
        type: DataTypes.INTEGER,
        unique: true,
    },
    nombre_completo:{
        type: DataTypes.STRING,
    },
    fecha:{
        type: DataTypes.DATEONLY,
    },
    CVC:{
        type: DataTypes.INTEGER,
    },
}, {
    sequelize,
    modelName: "creditcard",
    timestamps: false
})

module.exports = CreditCards;