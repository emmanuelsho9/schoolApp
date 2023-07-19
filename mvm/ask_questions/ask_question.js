 const { model } = require("mongoose");
const AskQuestion = require("./schema_ask_question");

const createPerm = async function(req, res){
    try{
        const {classteacher,parentName,applicationtitle,description,subject} = req.body;
    if(!classteacher || !parentName || !applicationtitle || !description||!subject){
        throw new Error("Please provide all required inputs");
    }else{
       
      const assig = await AskQuestion.create(
            {classteacher,parentName,applicationtitle,description,subject}
        );
        res.send(assig);
    }


    }catch(error){
        res.status(400).json({ error: error.message });

    }

}

const readPerm = async function(req, res){
    
    try{
    
       
        const assig = await AskQuestion.find();
          res.send(assig);
      
  
  
      }catch(error){
          res.status(400).json({ error: error.message });
  
      }

} 

module.exports={
    createPerm,readPerm
}