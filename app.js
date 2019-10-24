var express = require("express");
var app = express();

//body parser allows us to extract the data submitted by the user to use it on the server.
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

var friends =["frendy","trendy","pandey","kritika"];

app.get("/",function(req,res){
    res.render("home.ejs");
});

app.get("/friends",function(req,res){
    res.render("friends.ejs",{friends: friends});
});

app.post("/addfriend",function(req,res){
    /* console.log(req.body); */
    var newfriend = req.body.enteredname;
    friends.push(newfriend);
    
    res.redirect("/friends");
});

app.listen(3000,function(){
    console.log("up and running")
});
