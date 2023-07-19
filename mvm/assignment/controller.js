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



module.exports ={
    postAssignment,
    getAssignmentByClass,
    getAllAssignment,
    assignmentSubmittedFind
} 