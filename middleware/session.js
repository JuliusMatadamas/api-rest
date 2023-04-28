const {handleHttpErrors} = require("../utils/handleErrors");
const {verifyToken} = require("../utils/handleJwt");
const {usersModel} = require("../models");

const authMiddleware = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            handleHttpErrors(res, `No se recibió el token`, 401);
            return;
        }

        const token = req.headers.authorization.split(' ').pop();
        const dataToken = await verifyToken(token);

        if (!dataToken._id) {
            handleHttpErrors(res, `Error en el token`, 401);
            return;
        }

        const user = await usersModel.findById(dataToken._id);
        req.user = user;

        next();
    } catch (err) {
        handleHttpErrors(res, `No se ha iniciado sesión`, 401);
    }
}

module.exports = {authMiddleware};