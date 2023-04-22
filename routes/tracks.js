const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const data = [];
    data.push({module:'tracks',title:'Tracks',description:'Tracks del artista.'});
    res.send({data});
})

module.exports = router;