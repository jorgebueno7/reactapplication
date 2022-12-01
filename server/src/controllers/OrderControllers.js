const order = require('../models/Order')

const getOrder = async (req, res) => {   
    try{
        const pageAsNumber = Number.parseInt(req.query.page)    
        const sizeAsNumber = Number.parseInt(req.query.limit)
        let page = 0;
        let size = 10;
        if(!Number.isNaN(pageAsNumber) && pageAsNumber > 0){
            page = pageAsNumber
        }
        if(!Number.isNaN(sizeAsNumber) && sizeAsNumber > 0 && sizeAsNumber < size){
            size = sizeAsNumber;
        }
        const { count, rows } = await order.findAndCountAll({
            limit: size,
            offset: page * size
        })
        res.json({ 
            limit: sizeAsNumber,
            total: count, 
            count: sizeAsNumber,
            orders: rows
        })
    }catch(error){
        res.json({error: `ERROR_GET_ORDERS ${error}`})
    }
}
const getOrderId = async (req, res) => {
    const { id } = req.params;
    const orders = await order.findByPk(id);
    if(orders == null){
        res.status(404).json({ error: `ORDER_NOT_FOUND`})
        return;
    }else{
        res.json(orders)
    }
}
const postOrder = async (req, res) => {
    const { lineapedido, descripcion, cantidad, direccion } = req.body
    const orders = await order.create({ lineapedido, descripcion, cantidad, direccion })
    if(lineapedido && descripcion && cantidad && direccion ){
        res.status(201).json(orders)
    }
    else{
        res.json({error: `ERROR_CREATE_ORDERS: Faltan parámetros en el body`})
    }
}
const putOrder = async (req, res) => {
    const { id } = req.params
    const { descripcion, cantidad, direccion } = req.body
    const orders = await order.findByPk(id)
    orders.descripcion = descripcion; orders.cantidad = cantidad; orders.direccion = direccion
    await orders.save()
    res.json(orders)
}
const deleteOrder = async (req, res) => {
    try{
        const { id } = req.params;
        await order.destroy({ where: { id } })
        res.sendStatus(204)
    }catch(error){
        res.status(404).json({ error: `ERROR_DELETE_USERS ${error}`} )
    }
}
module.exports = { getOrder, getOrderId, postOrder, putOrder, deleteOrder }