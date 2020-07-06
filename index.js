//import express
const express = require('express');

//taking all the functionalities of express in app
const app  = express();

//define port
const port = process.env.PORT || 8000;

//import connection file for mongoose
const db = require('./config/mongoose');

//middleware for reading form data
app.use(express.urlencoded());  

//import assets folder
app.use(express.static('assets'));

//importing the routing files
app.use('/',require('./routes/index'));


//setting up the ejs engine
app.set('view engine','ejs');
app.set('views','./views');


// running server
app.listen(port,function(err){
    if(err){
        console.log(`Error in running server: ${err}`);
    }
    console.log(`Server is running on port : ${port}`);
});