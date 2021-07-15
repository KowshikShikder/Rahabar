const mongoose = require('mongoose');



//schema
const Schema = mongoose.Schema;
const Product1Schema = new Schema({
    image: String,
    code: String,
    price: String
})





// Model
const Product1 = mongoose.model('product1', Product1Schema)


module.exports = Product1;

