const express = require("express");
const { createTimeTable,getTimeTable ,getAllTimeTable,editTimeTable,deleteTimeTable,} = require("./controller");
const timeTable = express.Router();




timeTable.post("/create_timetable",createTimeTable).get("/get_timetable_by_class",getTimeTable)
timeTable.get("/get_all_timetable",getAllTimeTable)
timeTable.put("/get_timetable/:id",editTimeTable).delete("/deleteTimeTable/:id",deleteTimeTable)
//timeTable.post("/get_result",getResult)


module.exports = timeTable;