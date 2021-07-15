const mongoose = require('mongoose');



const Schema= mongoose.Schema;
const Product4Schema= new Schema({
    image: String,
    code: String,
    price: String
})



const Product4= mongoose.model("product4", Product4Schema);

module.exports = Product4;

