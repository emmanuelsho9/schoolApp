const express = require("express");
const cors = require('cors')
const registerUsers = require('./mvm/create_user/create_user_url')
const errorHandleMiddleWare = require('./mvm/middle_ware/error_handler');
const assignRoute = require("./mvm/assignment/assignment_url_controller");
const ask_question_req = require("./mvm/ask_questions/url_controller");
const result = require("./mvm/result/result_url");

const app = express();

const API_VERSION ="/api/v1/"


app.use(cors())

app.use(express.json()); 
assignRoute

app.use(`${API_VERSION}`,registerUsers)
app.use(`${API_VERSION}`,assignRoute)
app.use(`${API_VERSION}`,ask_question_req)
app.use(`${API_VERSION}`,result)


app.get("/",(req,res)=>{
    res.send("Hello")
});


app.use(errorHandleMiddleWare);


module.exports = app;