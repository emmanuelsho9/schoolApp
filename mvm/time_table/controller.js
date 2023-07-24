const TimeTable = require("./shema_time_table");



const createTimeTable = async function (req, res) {
  
    try{
        const { subject, time, period, classes, teacher ,day} = req.body;
        if(!subject || !time || !period || !classes||!teacher||!day){
        throw new Error("Please provide all required inputs");
    }else{
       const assig = await TimeTable.create({subject,time,period,classes,teacher,day});
        res.send(assig);
    }


    }catch(error){
        res.status(400).json({ error: error.message });

    }
    
  
  };



  const getAllTimeTable = async function (req, res){
    const allUser = await TimeTable.find()
      res.send(allUser)
  }


  

  const getTimeTable = async function (req, res) {
    const { classes } = req.body;
  
    try {
      // Create a new result object from the provided data inside the first element of the results array
    
      const existingSubject = await TimeTable.find(
        {  classes: classes },
  
      );
    
      if (existingSubject) {
        res.send(existingSubject);
      } else {
          res.send("no table table yet");
      }
    } catch (error) {
      // Handle any errors that occur during the update process
      res.status(500).json({ error: error.message });
    }
    
  
  };
  
  

///GetOne One
const editTimeTable = async function (req, res) {
    const id = req.params.id;
  
    try {
      // Find the timetable document by its ID
      const timetable = await TimeTable.findById(id);
  
      // Check if the timetable exists in the database
      if (!timetable) {
        return res.status(404).json({ error: "Timetable not found" });
      }else{

        // Destructure the data from the request body
      const { subject, time, period, classes, teacher, day } = req.body;
  
      // Update the timetable fields based on the data from the request body
      // For example:
      timetable.subject = subject;
      timetable.time = time;
      timetable.period = period;
      timetable.classes = classes;
      timetable.teacher = teacher;
      timetable.day = day;
  
      // Save the updated timetable to the database
      await timetable.save();
  
      // Respond with the updated timetable
      res.json(timetable);

      }
  
      
    } catch (error) {
      // Handle any errors that might occur during the process
      res.status(500).json({ error: "Failed to edit timetable" });
    }
  };

  

  const deleteTimeTable = async function (req, res) {
    const id = req.params.id;
  
    try {
      // Find the timetable document by its ID
      const timetable = await TimeTable.findByIdAndDelete (id);
  
      // Check if the timetable exists in the database
      if (!timetable) {
        return res.status(404).json({ error: "Timetable not found" });
      }else{

// Respond with a success message or any other desired response
res.json({ message: "Timetable deleted successfully" });      }
  
      
    } catch (error) {
      // Handle any errors that might occur during the process
      res.status(500).json({ error: "Failed to delete timetable" });
    }
  };
  



  module.exports ={
    createTimeTable,   
    getTimeTable, 
    getAllTimeTable,
    editTimeTable,
    deleteTimeTable,
  }