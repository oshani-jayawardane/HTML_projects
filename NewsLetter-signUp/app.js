
// using mailchimp

const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/sign-up.html");
});

app.post("/", function(req, res){

  const firstName = req.body.fname;
  const lastName = req.body.lname;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  }

  const jsonData = JSON.stringify(data);

  // mailchimp api key - a45841e70d8c9c263c9938965ba19e40-us9
  // audience (list ID - 976cb248a0)
  // "https://$API_SERVER.api.mailchimp.com/3.0/lists/$list_id/members?skip_merge_validation=false"

  const url = "https://us9.api.mailchimp.com/3.0/lists/976cb248a0";

  const options = {
    method: "POST",
    auth: "oshanii:a45841e70d8c9c263c9938965ba19e40-us9"
  }

  const request = https.request(url, options, function(response){

    if (response.statusCode == 200){
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }

    response.on("data", function(data){
      console.log(JSON.parse(data));
    })
  })

  request.write(jsonData);
  request.end();

});

app.post("/failure", function(req, res){
  res.redirect("/");
})

// Since we are using heroku servers, the port is different. we use this code to tap into the port that they assign us.
// the 'process' object with defined by heroku. now we can't run the app locally. so we specifically ask node to listen to port 3000 when running locally

app.listen(process.env.PORT || 3000, function(){
  console.log("server running on port .... 3000");
});
