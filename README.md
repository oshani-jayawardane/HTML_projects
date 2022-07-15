# Web Development projects
## Documentation

Bootstrap font awesome CDN - https://www.bootstrapcdn.com/fontawesome/ <br/>
Bootswatch templates - https://bootswatch.com/ <br/>
CSS selectors - https://www.w3schools.com/cssref/css_selectors.asp <br/>
<br/>
Node API Documentation - https://nodejs.org/api/ <br/>
Express- https://expressjs.com/en/api.html <br/>
<br/>
EJS (Embedded Javascript Templating) - https://ejs.co/ <br/>
Using EJS with Express - https://github.com/mde/ejs/wiki/Using-EJS-with-Express <br/>
<br/>
SQL - https://www.w3schools.com/sql/ <br/>
MongoDB CRUD - https://www.mongodb.com/docs/manual/crud/ <br/>
MongoDB Drivers - https://www.mongodb.com/docs/drivers/drivers/ <br/>
MongoDB Drivers for Node earlier version - https://mongodb.github.io/node-mongodb-native/3.5/quick-start/quick-start/ <br/>
(node.js driver -> quick start / quick references) <br/>
Mongoose - https://mongoosejs.com/docs/api/model.html <br/>
<br/>
Lodash - https://lodash.com/docs/4.17.15

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

## MongoDB
### Terminology Breakdown

* You run **mongod** to start your server.
* The MongoDB server listens for connections from clients on port 27017, and stores data in the /data/db directory when you use **mongod**.
* MongoDB Atlas runs **mongod** for you, so you don’t need to run the server yourself.
* **mongo** is the shell or the client. It’s a javascript interface that you can use to interact with the MongoDB server (**mongod**).
* As of June 2020, it was superseded by the new Mongo Shell, **mongosh**
* **mongosh** has improved syntax highlighting, command history and logging.
* the shell, whichever you use, is just a way to communicate with your database cluster.
* **mongo** is a proxy that sits between the client application (mongo/mongosh) and a sharded database cluster, that is multiple mongod replica sets.

# Get this all into a pdf
