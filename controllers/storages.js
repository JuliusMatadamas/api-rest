const {storageModel} = require('../models');
const PUBLIC_URL = process.env.PUBLIC_URL;

// CREATE A ITEM
const createItem = async (req, res) => {
    const {body, file} = req;
    const fileData = {
        filename: file.filename,
        url:`${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.create(fileData);
    res.send({data});
}

// READ ITEMS
const readItems = async (req, res) => {
    const data = await storageModel.find({});
    res.send({data});
}

// READ A SINGLE ITEM
const readItem = (req, res) => {
    const data = {module:'tracks',title:'Tracks',description:'Tracks del artista.'};
    res.send({data});
}


// UPDATE A ITEM
const updateItem = (req, res) => {
}

// DELETE A ITEM
const deleteItem = (req, res) => {
}

module.exports = {createItem, readItems, readItem, updateItem, deleteItem};
