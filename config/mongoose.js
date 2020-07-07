//import mongoose
const mongoose = require('mongoose');

// make connection
//mongoose.connect('mongodb://localhost/todo_list_db');


//link for online database mongodb atlas
mongoose.connect('mongodb+srv://mongoUser:mongoUser@cluster0.qyh17.mongodb.net/todolist?retryWrites=true&w=majority');

// making variable for checking connection
const db = mongoose.connection;

//error in connecting
db.on('error',console.error.bind('error connecting to db'));

//success on connection
db.once('open',function(){
    console.log('successfully connected to the database');
});