const express = require("express");
const cors = require('cors')

const app = express();

const API_VERSION ="/api/v1/"

app.use(cors())

app.use(express.json()); 


app.get("/",(req,res)=>{
    res.send("Hello")
});




module.exports = app;