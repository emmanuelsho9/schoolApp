const http = require("http");
require("dotenv");
const mongoose = require('mongoose');const app = require("./app");

const PORT = process.env.PORT || 6000

async function startServer(){
    mongoose.connect('mongodb+srv://emmanuelsorounmu0:Godhelpme2022@cluster0.vfnvjcp.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Connected!'));
  
    http.createServer(app).listen(PORT,(req, res)=>{
        console.log(`server started with port ${PORT}`)
    });

}


startServer();