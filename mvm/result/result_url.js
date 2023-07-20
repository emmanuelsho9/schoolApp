const { createResult,getResult } = require("./controller");
const express = require("express");
const result = express.Router();




result.post("/create_result",createResult)
result.post("/get_result",getResult)


module.exports = result;