const { response } = require("express");
var express = require("express");
var apiServer= express();
var port = 300;
var host="127.0.0.1";
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
    
    var str = request.query.str;
    response.send("<h1>a tua stringa:  "+str+"</h1>");
})
apiServer.get("/plus", (request, response)=>{
    var a = parseInt(request.query.a);
    var b = parseInt(request.query.b)
    response.send("<h1>result:  "+(a+b)+"</h1>");
})