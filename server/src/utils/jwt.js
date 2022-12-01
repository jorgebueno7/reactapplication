const jwt = require("jwt-simple");
const authorization = require('../db/auth')

const firmaToken = (user) => {
    const token = jwt.encode({ "id": user.id }, authorization.rounds);
    return token;
};

const verificaToken = (JWToken) => {
    try {
        return jwt.decode(JWToken, authorization.secret);
    } catch (error) { return null; }
};

module.exports = { firmaToken, verificaToken }