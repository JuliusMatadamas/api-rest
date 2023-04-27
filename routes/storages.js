const express = require('express');
const uploadMiddleware = require("../utils/handleStorage");
const {createItem, readItems, readItem, deleteItem} = require("../controllers/storages");
const {validatorGetItem} = require("../validators/storages");
const router = express.Router();

// CREATE ITEM
router.post('/', uploadMiddleware.single("myfile"), createItem)
// READ ITEMS
router.get('/', readItems);
// READ ITEM
router.get('/:id', validatorGetItem, readItem);
// DELETE ITEM
router.delete('/:id', validatorGetItem, deleteItem);

module.exports = router;