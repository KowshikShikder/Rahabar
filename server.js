const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const upload = require("express-fileupload")


const app = express();
const PORT = process.env.PORT || 8080;

const routes= require('./Routes/api');

const URL = 'mongodb+srv://kowshik:kowshik@cluster0.c1u79.mongodb.net/Safa-marwa?retryWrites=true&w=majority'
const URLocal= 'mongodb://127.0.0.1:27017/Safa-marwa'
mongoose.connect(  URL ,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


mongoose.connection.on('connected', ()=>{
    console.log("mongo connected");
})




app.use(upload({
    createParentPath: true,
    useTempFiles: true,
    tempFileDir:''

}))
app.use(express.json());
app.use(express.urlencoded({extended: false}))



app.use(morgan('tiny'));
app.use('/', routes);


app.listen(PORT, console.log('Server is starting at ' + PORT));