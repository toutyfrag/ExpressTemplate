
const express = require("express");
const app = express();

// ("/") is the home route /request is the request to the server / 
app.get("/", function(request, response){
    response.send("Hello")
});

app.listen(3000, function (){
    console.log("Server started on port 3000") // Listen to that port 
}); 