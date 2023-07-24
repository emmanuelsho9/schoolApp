const Subject = require('./schema');

// Connect to the MongoDB database





const createResult = async function (req, res) {
  const { studentId, year, term, studentName, teacher, results } = req.body;

  try {
    const newResult = { subject: results[0].subject, score: results[0].score, grade: results[0].grade };
    // Create a new result object from the provided data inside the first element of the results array
  
    const existingSubject = await Subject.findOneAndUpdate(
      { term: term, year: year, studentName: studentName },
      { $push: { results: newResult } },
      { new: true }
    );
  
    if (existingSubject) {
      res.send(existingSubject);
    } else {
           const subjectData = {
          teacher: teacher,
          results, // subject is now defined from the destructured variable
          studentName: studentName,
          studentId: studentId,
          year: year,
          term: term,
        };
        const createdSubject = await Subject.create(subjectData);
        res.send(createdSubject);
    }
  } catch (error) {
    // Handle any errors that occur during the update process
    res.status(500).json({ error: error.message });
  }
  

};


const getResult = async function (req, res) {
  const { studentId } = req.body;

  try {
    // Create a new result object from the provided data inside the first element of the results array
  
    const existingSubject = await Subject.find(
      {  studentId: studentId },

    );
  
    if (existingSubject) {
      res.send(existingSubject);
    } else {
        res.send("createdSubject");
    }
  } catch (error) {
    // Handle any errors that occur during the update process
    res.status(500).json({ error: error.message });
  }
  

};

const getAllResult = async function (req, res){
  const allUser = await Subject.find()
    res.send(allUser)
}



const editResult = async function (req, res) {
  const id = req.params.id;

  try {
    // Find the timetable document by its ID
    const timetable = await Subject.findById(id);

    // Check if the timetable exists in the database
    if (!timetable) {
      return res.status(404).json({ error: "result not found" });
    }else{

      // Destructure the data from the request body
      const {  year, term, teacher, results } = req.body;

    // Update the timetable fields based on the data from the request body
    // For example:
    timetable.year = year;
    timetable.term = term;
    timetable.teacher = teacher;
    timetable.results = results;
   

    // Save the updated timetable to the database
    await timetable.save();

    // Respond with the updated timetable
    res.json(timetable);

    }

    
  } catch (error) {
    // Handle any errors that might occur during the process
    res.status(500).json({ error: "Failed to edit result" });
  }
};


const deleteResult = async function (req, res) {
  const id = req.params.id;

  try {
    // Find the timetable document by its ID
    const timetable = await Subject.findByIdAndDelete (id);

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
        createResult,getResult,getAllResult,deleteResult,editResult
      }
 