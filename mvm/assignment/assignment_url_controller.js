const express = require("express");
const { postAssignment ,getAssignmentByClass,getAllAssignment,assignmentSubmittedFind} = require("./controller");

const assignRoute = express.Router();


assignRoute.post("/create_assignment",postAssignment).post("/getOneClass",getAssignmentByClass)
assignRoute.get("/get_all_assignment",getAllAssignment)
assignRoute.post("/assignment_submitted/:id",assignmentSubmittedFind)

module.exports = assignRoute;