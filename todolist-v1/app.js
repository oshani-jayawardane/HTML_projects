const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

// var item = "";
// when we cerate a const which is an array in js - it is possible to actually push items without a problem - refer docs
const items = [];
const workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.get('/', function(req, res) {

  const day = date.getDate();

  res.render("list", {
    listTitle: day,
    newListItems: items // because we can only have one res.render per file
  });

})

app.post('/', function(req, res) {

  const item = req.body.newItem;

  if(req.body.list === "Work") { // add the first word of the listTitle
    workItems.push(item);
    res.redirect('/work');
  } else {
    items.push(item);
    res.redirect('/'); // redirect to the home route to run app.get again so list items are rendered
  }

})

app.get("/work", function(req, res){
  res.render("list", {listTitle: "Work List", newListItems: workItems})
});

app.get("/about", function(req, res){

  // The render method works when there is a templating engine in use.
  // A templating engine is something that parses a given template file and generates HTML output.
  // This is so you can generate an HTML web page depending on some variables in your program.
  
  res.render("about");
});

// this method will add all iteams to the main list cause the form's action tag omly has the home route. so we tap into the value of the button
// app.post("/work", function(req, res){
//   let item = req.body.newItem;
//   workItems.push(item);
//   res.redirect('/work');
// });

app.listen(3000, function() {
  console.log("Server is running on port 3000");
})
