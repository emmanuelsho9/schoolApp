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



 
      module.exports ={
        createResult,getResult
      }
 