const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;

const tokenSign = async (user) => {
    const sign = jwt.sign({
        _id: user.id,
        role: user.role
    }, SECRET_KEY, {expiresIn: "2h"});

    return sign;
}

const verifyToken = async (tokenJwt) => {
    try {
        return jwt.verify(tokenJwt, SECRET_KEY);
    } catch (err) {
        return null;
    }
}

module.exports = { tokenSign, verifyToken };