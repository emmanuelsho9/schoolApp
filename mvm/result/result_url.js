const { findSubject,createResult } = require("./controller");
const express = require("express");
const result = express.Router();




result.post("/get_result",createResult)


module.exports = result;