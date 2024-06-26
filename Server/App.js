// Import node modules here 
const http = require("http");
const mongoose = require("mongoose");
const express = require("express");

const PORT = 8080;
const App = express();


// Add Middlewares 
App.use(express.json());


// DataBase Connection 
const db_url = "mongodb+srv://root:root@cluster0.oz7eirb.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(db_url)
.then(()=>{console.log("Connection Sucessful")})
.catch((e)=>{console.log(e)});




// Last Line of the project 
App.listen(PORT,"0.0.0.0",()=>{console.log(`Server is running at PORT ${PORT}`)});