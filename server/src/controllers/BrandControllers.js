const brand = require('../models/Brand')

const getBrand = async (req, res) => {
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
        const { count, rows } = await brand.findAndCountAll({
            limit: size,
            offset: page * size,
        })
        res.json({ 
            limit: sizeAsNumber,
            total: count, 
            count: sizeAsNumber,
            brands: rows,
        })
    }catch(error){
        res.json({error: `ERROR_GET_BRANDS ${error}`})
    }
}
const getBrandId = async (req, res) => {
    const { id } = req.params;
    const brands = await brand.findByPk(id);
    if(brands == null){
        res.status(404).json({ error: `BRAND_NOT_FOUND`})
        return;
    }else{
        res.json(brands)
    }
}
const postBrand = async (req, res) => {
    const { nombre, localizacion, tipo, anyo_fundacion } = req.body
    const brands = await brand.create({ nombre, localizacion, tipo, anyo_fundacion })
    if(nombre && localizacion && tipo && anyo_fundacion){
        res.status(201).json(brands)

    }else{
        res.json({error: `ERROR_CREATE_BRANDS: Faltan parámetros`})
    }
}
const putBrand = async (req, res) => {
    const { id } = req.params
    const { localizacion, tipo } = req.body
    const brands = await brand.findByPk(id)
    brands.localizacion = localizacion; brands.tipo = tipo;
    await brands.save()
    res.json(brands)
}
const deleteBrand = async (req, res) => {
    try{
        const { id } = req.params;
        await brand.destroy({ where: { id } })
        res.sendStatus(204)
    }catch(error){
        res.status(404).json({ error: `ERROR_DELETE_USERS ${error}`} )
    }
}
module.exports = { getBrand, getBrandId, postBrand, putBrand, deleteBrand }