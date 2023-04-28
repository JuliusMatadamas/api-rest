const {matchedData} = require("express-validator");
const {encrypt, compare} = require("../utils/handlePassword");
const {usersModel} = require("../models");
const {tokenSign} = require("../utils/handleJwt");
const {handleHttpErrors} = require("../utils/handleErrors");


const loginController = async (req, res) => {
    try {
        req = matchedData(req);
        const user = await usersModel.findOne({email:req.email}).select('email name password role');

        if (!user) {
            handleHttpErrors(res, `Estas credenciales no coinciden con nuestros registros: ${err.message}`, 404);
            return;
        }

        const passwordHash = user.password;
        const check = await compare(req.password, passwordHash);

        if (!check) {
            handleHttpErrors(res, `Estas credenciales no coinciden con nuestros registros: ${err.message}`, 401);
            return;
        }

        user.set('password', undefined, {strict:false});
        const data = {
            token: await tokenSign(user),
            user
        }

        res.send({data})
    } catch (err) {
        console.log(err);
        handleHttpErrors(res, `Error al intentar validar las credenciales`);
    }
}

const registerController = async (req, res) => {
    try {
        req = matchedData(req);
        const password = await encrypt(req.password);
        const body = {...req, password};
        const dataUser = await usersModel.create(body);
        dataUser.set('password', undefined, {strict:false});
        const data = {
            token: await tokenSign(dataUser),
            user: dataUser
        }
        res.send({data});
    } catch (err) {
        handleHttpErrors(res, `Error al intentar registrar el usuario`);
    }
}

module.exports = { registerController, loginController }