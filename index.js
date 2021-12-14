const { response } = require("express");
var express = require("express");
var apiServer= express();
var port = 300;
var host="localhost";
apiServer.listen(port, host, ()=>{
    console.log("server is running: http://%s:%d", host, port); //set server port and link
})

apiServer.get("/", (request, response)=>{
    console.log("enter get")
    response.send("<h1>ciao client!</h1>")
})
apiServer.get("/nome", (request, response)=>{
    console.log("enter get")
    response.send("<h1>ciao pietro!</h1>")
})
apiServer.get("/mioNome", (request, response)=>{
    console.log("name: "+request.query.name)
    var nome = request.query.name;
    response.send("<h1>ciao "+nome+"</h1>");
})