const express = require("express");

const app = express(); // referring to express module

// listen on port 3000 to any specific http request
// and a callback function
app.listen(3000, function() {
  console.log("Server started on port 3000");
});

// if we check localhost:3000 on browser,
// if nothing returns - cannot GET / - forward slash represents the root or the homepage
// means app.get is not specified

/*
    app.get(route, callback_function(request, response{

    }));
*/

/*
    // what should happen when someone makes a get request to the home root
    app.get("/", function(req, res) {
      console.log(request);
      // run file on node again check browser for localhost and check terminal again for all the responses
    });
*/


// localhost:3000
app.get("/", function(req, res) {
  // response.send("hello");
  res.send("<h1>Hello World</h1>");

});


// localhost:3000/conatct
app.get("/contact", function(req, res) {
  res.send("contact me at: oshani.jayawardane@gmail.com");
});


// localhost:3000/about
app.get("/about", function(req, res) {
  res.send("My name is Oshani and I love chocolate and code. follow me for midnight chocolate snack ideas while you code");
});

// localhost:3000/blog
app.get("/blog", function(req, res) {
  res.send("<ul><li>why is the sky blue?</li><li>Roses are red, violets are <em>violet</em></li><li>How to sleep 8 hours in 4 hours</li></ul>");
});
