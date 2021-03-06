const mongoose = require('mongoose');

// Conecta con la base de datos
const db = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to DB');
    } catch (error) {
        console.log(`Unable to connect to DB: ${error}`);
    }
}

module.exports = db;