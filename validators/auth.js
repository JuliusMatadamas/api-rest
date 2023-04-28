const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validatorRegister = [
    check("name").exists().notEmpty().isLength({min:5, max:45}),
    check("age").exists().notEmpty().isInt({min:18, max:60}),
    check("email").exists().notEmpty().isEmail(),
    check("password").exists().notEmpty().isLength({min:10, max:20}),
    (req, res, next) => { return validateResults(req, res, next) }
];

const validatorLogin = [
    check("email").exists().notEmpty().isEmail(),
    check("password").exists().notEmpty().isLength({min:10, max:20}),
    (req, res, next) => { return validateResults(req, res, next) }
];

module.exports = { validatorRegister, validatorLogin }