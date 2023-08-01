const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/f8_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('connect succesfully')
    } catch (error) {
        console.log('sai rồi ');
        console.log(error);
    }
}

module.exports = { connect };