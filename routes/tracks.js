const express = require('express');
const {createItem, readItems, readItem, updateItem, deleteItem} = require("../controllers/tracks");
const router = express.Router();

router.get('/', readItems);
router.get('/:id', readItem);
router.post('/', createItem);

module.exports = router;