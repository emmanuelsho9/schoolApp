const Assign = require("./scheme_assignment")



const postAssignment = async function(req, res){

    try{
        const {subject,topic,assign_date,last_date_submission, studentClass,teacherName} = req.body;
    if(!subject || !topic || !assign_date || !last_date_submission||!teacherName){
        throw new Error("Please provide all required inputs");
    }else{
       
      const assig = await Assign.create(
            {subject,topic,assign_date,last_date_submission,studentClass,teacherName}
        );
        res.send(assig);
    }


    }catch(error){
        res.status(400).json({ error: error.message });

    }
}


const assignmentSubmittedFind = async function(req, res) {
    const id = req.params.id;
    const assignmentFind = await Assign.findById(id);
   

    try {
    
            
        assignmentFind.submited = true;
        const d =   await assignmentFind.save();
            res.send(d);
        
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};





const getAssignmentByClass = async function(req, res){

    try{
        const {studentClass} = req.body;
    if(!studentClass){
        throw new Error("Please provide all required inputs");
    }else{
       
      const assig = await Assign.find({studentClass});
        res.send(assig);
    }


    }catch(error){
        res.status(400).json({ error: error.message });

    }
}


const getAllAssignment = async function(req, res){

    try{
    
       
      const assig = await Assign.find();
        res.send(assig);
    


    }catch(error){
        res.status(400).json({ error: error.message });

    }
}


///GetOne One
const editAssignment = async function (req, res) {
    const id = req.params.id;
  
    try {
      // Find the timetable document by its ID
      const timetable = await Assign.findById(id);
  
      // Check if the timetable exists in the database
      if (!timetable) {
        return res.status(404).json({ error: "Timetable not found" });
      }else{

        // Destructure the data from the request body
        const {subject,topic,assign_date,last_date_submission, studentClass,teacherName} = req.body;
  
      // Update the timetable fields based on the data from the request body
      // For example:
      timetable.subject = subject;
      timetable.topic = topic;
      timetable.assign_date = assign_date;
      timetable.last_date_submission = last_date_submission;
      timetable.studentClass = studentClass;
      timetable.teacherName = teacherName;
  
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



const deleteAssignment = async function (req, res) {
    const id = req.params.id;
  
    try {
      // Find the timetable document by its ID
      const timetable = await Assign.findByIdAndDelete (id);
  
      // Check if the timetable exists in the database
      if (!timetable) {
        return res.status(404).json({ error: "result not found" });
      }else{
  
  // Respond with a success message or any other desired response
        res.json({ message: "result deleted successfully" });      }
  
      
    } catch (error) {
      // Handle any errors that might occur during the process
      res.status(500).json({ error: "Failed to delete result" });
    }
  };


module.exports ={
    postAssignment,
    getAssignmentByClass,
    getAllAssignment,
    assignmentSubmittedFind,
    editAssignment,
    deleteAssignment,
} 