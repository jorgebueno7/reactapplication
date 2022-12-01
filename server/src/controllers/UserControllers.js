const user = require('../models/User')
const bcrypt = require('bcrypt')

const getUser = async (req, res) => {    
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
        const { count, rows } = await user.findAndCountAll({
            limit: size,
            offset: page * size
        })
        res.json({ 
            limit: sizeAsNumber,
            total: count, 
            count: sizeAsNumber,
            users: rows
        })
    }catch(error){
        res.json({error: `ERROR_GET_USERS ${error}`})
    }
    
}
const getUserId = async (req, res) => {
    const { id } = req.params;
    const usuarios = await user.findByPk(id);
    if(usuarios == null){
        res.status(404).json({ error: `USER_NOT_FOUND`})
        return;
    }else{
        res.json(usuarios)
    }
}
const postUser = async (req, res) => {
    const { dni, nombre, apellidos, edad, email, password, telefono, direccion } = req.body
    const hashedPassword = await bcrypt.hash(password, 10);
    const usuarios = await user.create({ dni, nombre, apellidos, edad, email, password: hashedPassword, telefono, direccion })
    if(dni && nombre && apellidos && edad &&
        email && password && telefono && direccion){
            res.status(201).json(usuarios)
    }
    else{
        res.json({error: `ERROR_CREATE_USERS: Faltan parámetros en el body`})
    }    
}
const putUser = async (req, res) => {
    try{
        const { id } = req.params
        const { email, password, telefono, direccion } = req.body
        const usuarios = await user.findByPk(id)
        usuarios.email = email; usuarios.password = password;
        usuarios.telefono = telefono; usuarios.direccion = direccion
        await usuarios.save()
        res.status(201).json(usuarios)
    }catch(error){
        res.json({error: `ERROR_UPDATE_USERS ${error}`})
    }
    
}
const deleteUser = async (req, res) => {
    try{
        const { id } = req.params;
        await user.destroy({ where: { id } })
        res.sendStatus(204)
    }catch(error){
        res.status(404).json({ error: `ERROR_DELETE_USERS ${error}`} )
    }
}

module.exports = { getUser, getUserId, postUser, putUser, deleteUser }