const { verificaToken } = require('../utils/jwt')

const authSession = (req, res, next) => {
    try{
        if(!req.headers.authorization){
            res.status(401).json({ error: 'NO_AUTHORIZED' })
            return;
        }
        const token = req.headers.authorization.split(" ").pop();
        const tokenVerified = verificaToken(token);
        if(!tokenVerified.id){
            res.status(401).json({ error: 'NO_TOKEN_ID'})
            return;
        }
        next(); /* Siguiente middleware */
    }catch(error){
        res.status(401).json({ error: 'NO_SESSION'})
    }
}
module.exports = authSession;