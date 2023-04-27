const {storageModel} = require('../models');
const {handleHttpErrors} = require("../utils/handleErrors");
const {matchedData} = require("express-validator");
const fs = require("fs");
const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;

// CREATE A ITEM
const createItem = async (req, res) => {
    const {file} = req;
    const fileData = {
        filename: file.filename,
        url:`${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.create(fileData);
    res.send({data});
}

// READ ITEMS
const readItems = async (req, res) => {
    try {
        const data = await storageModel.find({});
        res.send({data});
    } catch (err) {
        handleHttpErrors(res, `Error al obtener los archivos: ${err.message}`);
    }
}

// READ ITEM
const readItem = async (req, res) => {
    try {
        const {id} = matchedData(req);
        const data = await storageModel.findById(id);
        res.send({data});
    } catch (err) {
        handleHttpErrors(res, `Error al obtener el archivo: ${err.message}`);
    }
}

// DELETE ITEM
const deleteItem = async (req, res) => {
    try {
        // GET THE ID
        const {id} = matchedData(req);
        // GET THE FILE INFO
        const dataFile = await storageModel.findById(id);
        await storageModel.delete({_id:id});
        // GET THE FILENAME
        const {filename} = dataFile;
        // DEFINE THE PATH
        const filePath = `${MEDIA_PATH}/${filename}`;
        // DELETE THE FILE
        // fs.unlinkSync(filePath); // UNCOMMENT IF WANT DELETE THE FILE FROM DISK
        // SET THE RESPONSE
        const data = { filePath, deleted:1 }
        // SEND THE RESPONSE
        res.send(data);
    } catch (err) {
        handleHttpErrors(res, `Error al eliminar el archivo: ${err.message}`);
    }
}

module.exports = {createItem, readItems, readItem, deleteItem};
