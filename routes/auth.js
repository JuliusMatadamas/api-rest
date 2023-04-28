const express = require('express');
const {validatorRegister, validatorLogin} = require("../validators/auth");
const {encrypt, compare} = require("../utils/handlePassword");
const {usersModel} = require("../models");
const {matchedData} = require("express-validator");
const router = express.Router();

router.post("/login", validatorLogin, (req, res) => {
});

router.post("/register", validatorRegister, async (req, res) => {
    req = matchedData(req);
    const password = await encrypt(req.password);
    const body = {...req, password};
    const data = await usersModel.create(body);
    data.set('password', undefined, {strict:false});
    res.send({data});
});


module.exports = router;