const express = require('express');

const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

require("dotenv").config();

const connection = require('./config/db.config')
const todoRoute = require('./router/todoRoute')
const app = express();

app.use(express.json());

const port = process.env.PORT

app.use("/api/todos", todoRoute);

app.listen(port,async()=>{
    try{
       await connection;
       console.log("connected to DB")
    }catch(error){
       console.log("error while connect to DB")
    }

    console.log(`Server is running at port ${port}`)
})
