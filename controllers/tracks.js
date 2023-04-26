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
const readItem = (req, res) => {
    try {
        const data = {module:'tracks',title:'Tracks',description:'Tracks del artista.'};
        res.send({data});
    } catch (err) {
        handleHttpErrors(res, `Error al intentar leer el item: ${err.message}`);
    }
}

// UPDATE A ITEM
const updateItem = (req, res) => {
    try {
        const data = {message:'Item actualizado.'};
        res.send({data});
    } catch (err) {
        handleHttpErrors(res, `Error al intentar actualizar el item: ${err.message}`);
    }
}

// DELETE A ITEM
const deleteItem = (req, res) => {
    try {
        const data = {message:'Item eliminado.'};
        res.send({data});
    } catch (err) {
        handleHttpErrors(res, `Error al intentar eliminar el item: ${err.message}`);
    }
}

module.exports = {createItem, readItems, readItem, updateItem, deleteItem};
