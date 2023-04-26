const express = require('express');
const {createItem, readItems, readItem, updateItem, deleteItem} = require("../controllers/tracks");
const router = express.Router();
const {validatorCreateItem} = require("../validators/tracks");
const customHeader = require("../middleware/customHeader");

router.get('/', readItems);
router.get('/:id', readItem);
router.post('/', validatorCreateItem, createItem);

module.exports = router;