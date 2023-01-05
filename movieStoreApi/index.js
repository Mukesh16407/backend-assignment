const express = require('express');

const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connection = require("./config/dbConfig");
const movieRoute = require("./routes/moviesRoutes");

const app = express();

//middleware
app.use(express.json());



app.use("/api/movies", movieRoute);
app.listen(4500,async()=>{
    try{
       await connection;
       console.log("connected to DB")
    }catch(error){
       console.log("error while connect to DB")
    }

    console.log("Server is running at port 4500 ")
})
