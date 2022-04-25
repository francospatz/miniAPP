const mongoose = require('mongoose');

const db = async () => {
    try {
        const res = await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to DB');
    } catch (error) {
        console.log(`Unable to connect to DB: ${error}`);
    }
}

module.exports = db;