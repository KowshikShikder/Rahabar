const mongoose = require('mongoose');



// schema
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
    title: String,
    body: String
})

//schema
// const Schema = mongoose.Schema;
// const Product2Schema = new Schema({
//     image: String,
//     code: String,
//     price: String
// })





// Model

const BlogPost = mongoose.model('blockpost', BlogPostSchema)


module.exports = BlogPost;

