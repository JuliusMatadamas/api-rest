const express = require('express');
const {createItem, readItems, readItem, updateItem, deleteItem} = require("../controllers/tracks");
const router = express.Router();
const {validatorCreateItem, validatorGetItem} = require("../validators/tracks");
const customHeader = require("../middleware/customHeader");
const {authMiddleware} = require("../middleware/session");

// CREATE ITEM
router.post('/', validatorCreateItem, createItem);
// READ ITEMS
router.get('/', authMiddleware, readItems);
// READ A ITEM
router.get('/:id', validatorGetItem, readItem);
// UPDATE ITEM
router.put('/:id', validatorGetItem, validatorCreateItem, updateItem);
// DELETE A ITEM
router.delete('/:id', validatorGetItem, deleteItem);

module.exports = router;