const creditcard = require('../models/CreditCard')

const getCreditCard = async (req, res) => {    
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
        const { count, rows } = await creditcard.findAndCountAll({
            limit: size,
            offset: page * size
        })
        res.json({ 
            limit: sizeAsNumber,
            total: count, 
            count: sizeAsNumber,
            creditcards: rows
        })
    }catch(error){
        res.json({error: `ERROR_GET_CREDITCARDS ${error}`})
    }
}
const getCreditCardId = async (req, res) => {
    const { id } = req.params;
    const creditcards = await creditcard.findByPk(id);
    if(creditcards == null){
        res.status(404).json({ error: `CREDITCARD_NOT_FOUND`})
        return;
    }else{
        res.json(creditcards)
    }
}
const postCreditCard = async (req, res) => {
    const { numero, nombre_completo, fecha, CVC } = req.body
    const creditcards = await creditcard.create({ numero, nombre_completo, fecha, CVC })
    if(numero && nombre_completo && fecha && CVC ){
        res.status(201).json(creditcards)
    }
    else{
        res.json({error: `ERROR_CREATE_CREDITCARD: Faltan parámetros en el body`})
    }
}
const putCreditCard = async (req, res) => {
    const { id } = req.params
    const { fecha } = req.body
    const creditcards = await creditcard.findByPk(id)
    creditcards.fecha = fecha;
    await creditcards.save()
    res.json(creditcards)
}
const deleteCreditCard = async (req, res) => {
    try{
        const { id } = req.params;
        await creditcard.destroy({ where: { id } })
        res.sendStatus(204)
    }catch(error){
        res.status(404).json({ error: `ERROR_DELETE_USERS ${error}`} )
    }
}
module.exports = { getCreditCard, getCreditCardId, postCreditCard, putCreditCard, deleteCreditCard }