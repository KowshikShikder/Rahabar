const mongoose = require('mongoose');



//schema
const Schema = mongoose.Schema;
const Product3Schema = new Schema({
    image: String,
    code: String,
    price: String
})





// Model
const Product3 = mongoose.model('product3', Product3Schema)


module.exports = Product3;

