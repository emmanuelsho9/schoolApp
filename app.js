const express = require("express");
const cors = require('cors')
const registerUsers = require('./mvm/create_user/create_user_url')
const errorHandleMiddleWare = require('./mvm/middle_ware/error_handler')

const app = express();

const API_VERSION ="/api/v1/"

app.use(cors())

app.use(express.json()); 


app.use(`${API_VERSION}`,registerUsers)


app.get("/",(req,res)=>{
    res.send("Hello")
});


app.use(errorHandleMiddleWare);


module.exports = app;