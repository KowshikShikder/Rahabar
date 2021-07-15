const mongoose = require('mongoose');



//schema
const Schema = mongoose.Schema;
const Product2Schema = new Schema({
    image: String,
    code: String,
    price: String
})





// Model
const Product2 = mongoose.model('product2', Product2Schema)


module.exports = Product2;

