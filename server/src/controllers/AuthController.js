const { firmaToken } = require('../utils/jwt')
const user = require('../models/User')
const bcrypt = require("bcrypt");

const loginAuthController = async (req, res, next) =>{

    const { email, password } = req.body;

    const usuario = await user.findOne({ where: { email: email }});
    if(!usuario) {
        res.status(404).json({error: "USER NOT FOUND"})
    }else{
        console.log(password)
        console.log(usuario.password)
        if(await bcrypt.compare(password, usuario.password)){
            const data = {
                token: firmaToken(usuario),
                user: usuario
            }
            res.status(201).json(data)
        }else{
            res.status(401).json({error: "WRONG PASSWORD"})
        }
    }
}

module.exports = { loginAuthController }