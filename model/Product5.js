const mongoose = require('mongoose');



const Schema= mongoose.Schema;
const Product5Schema= new Schema({
    image: String,
    code: String,
    price: String
})



const Product5= mongoose.model("product5", Product5Schema);

module.exports = Product5;

