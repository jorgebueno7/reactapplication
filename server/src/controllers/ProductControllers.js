const product = require('../models/Product')

const getProduct = async (req, res) => {    
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
        const { count, rows } = await product.findAndCountAll({
            limit: size,
            offset: page * size
        })
        res.json({ 
            limit: sizeAsNumber,
            total: count, 
            count: sizeAsNumber,
            products: rows
        })
    }catch(error){
        res.json({error: `ERROR_GET_PRODUCTS ${error}`})
    }
}
const getProductId = async (req, res) => {
    const { id } = req.params;
    const productos = await product.findByPk(id);
    if(productos == null){
        res.status(404).json({ error: `PRODUCT_NOT_FOUND`})
        return;
    }else{
        res.json(productos)
    }
}
const postProduct = async (req, res) => {
    const { nombre, marca, tipo, precio } = req.body
    const productos = await product.create({ nombre, marca, tipo, precio })
    if(nombre && marca && tipo && precio){
        res.status(201).json(productos)
    }else{
        res.json({ error : `ERROR_CREATE_PRODUCTS: Faltan parámetros en el body`})
    }
}
const putProduct = async (req, res) => {
    const { id } = req.params
    const { precio } = req.body
    const productos = await product.findByPk(id)
    productos.precio = precio;
    await productos.save()
    res.json(productos)
}
const deleteProduct = async (req, res) => {
    try{
        const { id } = req.params;
        await product.destroy({ where: { id } })
        res.sendStatus(204)
    }catch(error){
        res.status(404).json({ error: `ERROR_DELETE_USERS ${error}`} )
    }
}

module.exports = { getProduct, getProductId, postProduct, putProduct, deleteProduct }