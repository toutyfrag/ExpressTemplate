
const express = require("express");
const app = express();

// ("/") is the home route /request is the request to the server (When i try to access the IRL i make a request) / 
app.get("/", function(request, response){
    response.send("Hello") // the server respond with hello 
});

app.listen(3000, function (){
    console.log("Server started on port 3000") // Listen to that port 
}); 
