const {trackModel} = require('../models');
const {handleHttpErrors} = require("../utils/handleErrors");
const {matchedData} = require("express-validator");

// CREATE A ITEM
const createItem = async (req, res) => {
    try {
        const body = matchedData(req);
        const data = await trackModel.create(body);
        res.send({data});
    } catch (err) {
        handleHttpErrors(res, `Error al intentar crear el item: ${err.message}`);
    }
}

// READ ITEMS
const readItems = async (req, res) => {
    try {
        const data = await trackModel.find({});
        res.send({data});
    } catch (err) {
        handleHttpErrors(res, `Error al intentar obtener los items: ${err.message}`);
    }
}

// READ A SINGLE ITEM
const readItem = async (req, res) => {
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await trackModel.findById(id);
        res.send({data});
    } catch (err) {
        handleHttpErrors(res, `Error al intentar leer el item: ${err.message}`);
    }
}

// UPDATE A ITEM
const updateItem = async (req, res) => {
    try {
        const {id, ...body} = matchedData(req);
        const data = await trackModel.findOneAndUpdate(id, body);
        res.send({data});
    } catch (err) {
        handleHttpErrors(res, `Error al intentar actualizar el item: ${err.message}`);
    }
}

// DELETE A ITEM
const deleteItem = async (req, res) => {
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await trackModel.delete({_id: id});
        res.send({data});
    } catch (err) {
        handleHttpErrors(res, `Error al intentar eliminar el item: ${err.message}`);
    }
}

module.exports = {createItem, readItems, readItem, updateItem, deleteItem};
