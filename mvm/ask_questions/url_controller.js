const express = require("express");
const bearToken = require("../middle_ware/bearer_token");
const { readPerm ,createPerm} = require("./ask_question");



const ask_question_req = express.Router();


ask_question_req.post("/ask_question_req",createPerm)
ask_question_req.get("/ask_question_req",readPerm)


module.exports=ask_question_req;