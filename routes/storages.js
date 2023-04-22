const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const data = [];
    data.push({module:'storages',title:'Storage',description:'Artistas, albums y canciones almacenadas.'});
    res.send({data});
})

module.exports = router;