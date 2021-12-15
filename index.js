const { response } = require("express");
const querystring = require('querystring');
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
    var b = parseInt(request.query.b);
    response.send("<h1>result:  "+(a+b)+"</h1>");
})

apiServer.get("/meno", (request, response)=>{
    var a = parseInt(request.query.a);
    var b = parseInt(request.query.b);
    
    response.send("<h1>result:  "+(a-b)+"</h1>");
})

apiServer.get("/div", (request, response)=>{
    var a = parseInt(request.query.a);
    var b = parseInt(request.query.b);
    
    response.send("<h1>result:  "+(a/b)+"</h1>");
})
apiServer.get("/per", (request, response)=>{
    var a = parseInt(request.query.a);
    var b = parseInt(request.query.b);
    
    response.send("<h1>result:  "+(a)*(b)+"</h1>");
})

apiServer.get("/fat", (request, response)=>{
    var a = parseInt(request.query.a);
    var result=1;
    for (let index = 1; index <= a; index++) {
        result = result *index;
        
    }
    
    
    response.send("<h1>result:  "+result+"</h1>");
})

apiServer.get("/quad", (request, response)=>{
    var a = parseInt(request.query.a);
   
    
    
    
    response.send("<h1>result:  "+(a)*(a)+"</h1>");
})

apiServer.get("/rad", (request, response)=>{
    var a = parseFloat(request.query.a);
    var ctr = true;
    var result;
    for (let index = 0; index < a; index=index+1) {
    if(((index)*(index))==a){
     result=index;
     ctr=false;
     console.log("c");
    
    }
        
    }
    
    
    if(!ctr){
    response.send("<h1>result:  "+result+"</h1>");
}else{
    response.send("<h1>radice non trovata</h1>");
}
})



