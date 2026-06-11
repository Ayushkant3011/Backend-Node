const http = require("http"); // require("node:http") both are same


const server = http.createServer(function (req,res){

    res.end("Hello World Folks"); //sendding the data back
});



server.listen(3011);