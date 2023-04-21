const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(process.env.DB_URI)
        console.log('Conexión realizada')
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

module.exports = dbConnection;