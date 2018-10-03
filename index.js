var express= require("express")
var app=express();
var port=process.env.PORT||3000;

app.get("/",function(req,res){
res.send("Hello world app running with nodejs on Heroku");
});

app.listen(port);
