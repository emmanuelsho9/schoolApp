const express = require("express");
const { postAssignment ,getAssignmentByClass,getAllAssignment,assignmentSubmittedFind,editAssignment,deleteAssignment} = require("./controller");

const assignRoute = express.Router();


assignRoute.post("/create_assignment",postAssignment).post("/getOneClass",getAssignmentByClass)
assignRoute.get("/get_all_assignment",getAllAssignment)
assignRoute.post("/assignment_submitted/:id",assignmentSubmittedFind)
assignRoute.post("/deleteAssignment/:id",deleteAssignment)
assignRoute.post("/editAssignment/:id",editAssignment)

module.exports = assignRoute;