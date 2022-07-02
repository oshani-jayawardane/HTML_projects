const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile( __dirname + "/index.html");
});

app.post("/", function(req,res){
  const query = req.body.cityName;
  const units = "metric";
  const apiKey = "464447a8c02872b9cda476981161aecb";
  url = "https://api.openweathermap.org/data/2.5/weather?appid="+apiKey+"&q="+query+"&units="+units;
  https.get(url, function(response){
    // console.log(response);
    console.log('statuscode: ', response.statusCode);

    response.on("data", function(d){
      const weatherData = JSON.parse(d);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const weatherIcon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" +weatherIcon+ "@2x.png";

      res.write("<h1>The Weather is currently " +weatherDescription+ "</h1>");
      res.write("<h2>The Temperature in " +query+ " is " +temp+ " degrees Celcius</h2>");
      res.write('<img src=' +imageURL+ ' alt="current weather icon">');
      res.send();
    })

  }).on('error', function(e){
    console.log(e);
  });
});

app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
