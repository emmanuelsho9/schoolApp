const http = require("http");
const app = require("./app");

const PORT = process.env.PORT || 6000

http.createServer(app).listen(PORT,(req, res)=>{
    console.log(`server started with port ${PORT}`)
});