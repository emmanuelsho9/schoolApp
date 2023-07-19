const Subject = require('./schema');

// Connect to the MongoDB database


    // Retrieve subjects with student information
   const findSubject= async function (req, res){
    Subject.find()
      .populate('student')
      .exec()
      .then((subjects) => {
        subjects.forEach((subject) => {
          console.log(`Subject: ${subject.subject}`);
          console.log(`Grade: ${subject.grade}`);
          console.log(`Score: ${subject.score}`);
          console.log(`Student: ${subject.studentId}`);
          console.log('------------------------');
        });
      })
      .catch((error) => {
        console.error('Error retrieving subjects:', error);
      })
      .finally(() => {
        // Close the MongoDB connection
       // mongoose.disconnect();
      });
   }


const createResult = async function (req, res) {

  
    try {
      const { subject, grade, score,  studentId } = req.body;
      if (!subject || !grade || !score || !studentId ) {
        throw new Error("Please provide all required inputs");
      } else {
  
        const createUser = await Subject.create({
            subject,  
            grade,
            score,
            studentId,
            
          });
  
          res.send(createUser);
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

 
      module.exports ={
        findSubject,createResult
      }
 