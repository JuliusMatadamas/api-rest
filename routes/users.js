const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const data = [];
    data.push({module:'users',title:'Users',description:'Información del usuario.'});
    res.send({data});
})

module.exports = router;