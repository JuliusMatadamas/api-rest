const express = require('express');
const {validatorRegister, validatorLogin} = require("../validators/auth");
const {encrypt, compare} = require("../utils/handlePassword");
const {usersModel} = require("../models");
const {matchedData} = require("express-validator");
const {tokenSign} = require("../utils/handleJwt");
const {registerController} = require("../controllers/auth");
const router = express.Router();

router.post("/login", validatorLogin, (req, res) => {
});

router.post("/register", validatorRegister, registerController);


module.exports = router;