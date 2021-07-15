const mongoose = require('mongoose');

//schema
const Schema = mongoose.Schema;
const CartSchema = new Schema({
    Useremail: String,
    userid: String,
    username: String,
    cart:Array

})


// Model
const CartData = mongoose.model('cart', CartSchema)

module.exports = CartData;

