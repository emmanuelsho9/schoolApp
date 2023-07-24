const { createResult,getResult ,getAllResult,deleteResult,editResult} = require("./controller");
const express = require("express");
const result = express.Router();




result.post("/create_result",createResult)
result.post("/get_result",getResult)
result.get("/get_all_result",getAllResult)
result.post("/deleteResult/:id",deleteResult).post("/editResult/:id",editResult)


module.exports = result;