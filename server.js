const express = require("express");
const app = express();
const bodyParser = require ("body-parser");

app.use(bodyParser.urlencoded({
  extended:true
}));

app.get("/bmiCalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res){

  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = weight / (height * height);

  res.send("Your BMI is " + bmi);
});

app.listen(3000,function(){
  console.log("Server is running on server 3000");
});
