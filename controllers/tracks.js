const {trackModel} = require('../models');

// CREATE A ITEM
const createItem = async (req, res) => {
    const {body} = req;
    const data = await trackModel.create(body);
    res.send({data});
}

// READ ITEMS
const readItems = async (req, res) => {
    const data = await trackModel.find({});
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
