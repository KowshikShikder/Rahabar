const mongoose = require('mongoose');



const Schema = mongoose.Schema;
const StoreDataSchema = new Schema({
    image: String,
    price: Number,
    code: String
})


const StoreData = mongoose.model('StoreData', StoreDataSchema);

module.exports = StoreData;

