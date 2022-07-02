# Web Development projects
## Node Tutorial
### [Introduction To Node](https://github.com/oshani-jayawardane/HTML_projects/tree/main/intro-to-node)
### [Express.js](https://github.com/oshani-jayawardane/HTML_projects/tree/main/my-express-server)
_additional files are not uploaded to the folder_ <br/>

**Setting Up Project** <br/>

(The example File is in Calculator Project) <br/>

1. Set up a new project.
      * Make a new folder on the desired location using terminal command (command - **mkdir Foldername**)
      * Change Directory of the terminal to this new folder (command - **cd Foldername**)
      * Inside the new folder, create a new file (command - **touch fileName.js**)

2. Set up a new NPM package
     * initialize npm while in the current project folder (command - **npm init**)
     * run through the process until the end - creates a fle package.json in the folder.
     * adding external packages - npmjs.com

3. Open the project folder in Atom 
    * (**command - atom .**)

4. Using NPM install the express module
    * While in the current project folder (command - **npm install express**)
    * Express API references - https://expressjs.com/en/api.html

5. Require express in the script fileName.js
    * **const express = require("express");**
   
6. Setup express
    * **const app = express();**

7. Spin up the server on required port
    * **app.listen(3000, function(){ "Server started on port 3000" });**

8. Create a **root route - get method**
    * **app.get("/", function(req, res){});**
    * (on - localhost:3000)

9. Send the words Hello World from the root route as the response (inside app.get - function)
    * **app.get("/", function(req, res){ res.send("Hello World"); });**

10. Run server with nodemon
    * **nodemon fileName.js**

11. Creating **Different Routes**
    * app.get("/contact", function(req, res) { 
    * res.send("contact me at: oshani.jayawardane@gmail.com"); // can pass html too with tags 
    * });
    * localhost:3000/contact
    
12. Getting files - ex: creating an html doc with a form and getting form data
    * step 1 - create a .html file with a form.
    * step 2 - add **method="post"** and **action="/"** if sending data to the root route or any preffered route
    * step 3 - name the "name" variables in the input field of the form with the names used to access form data in the server
    * step 4 - inside app.get - function - add: **res.sendFile(__dirname + "/HTMLfileName.html");**
    * **NOTE: we can't have multiple res.send s inside one file. but we can wrapa text in res.write tags and include one res.send **

13. step 5 - to **handle post requests** coming to the home route use app.post method
    * install body-parser - inside the current folder - **npm install body-parser**
    * require body-parser - const bodyParser = **require("body-parser");**
    * set up body-parser - **app.use(bodyParser.urlencoded({extended:true}));**
    * _body-parder has a few modes: ex: bodyParser.text(), bodyParser.json(), bodyParser.urlencoded()_
    * **app.post("/", function(req, res){ console.log(req.body); console.log(req.body.formNameName); });**
    * can also use res.send inside app.post to send back any results
    * **summary - app.get is to get the file, app.post is to get data and post back results**
