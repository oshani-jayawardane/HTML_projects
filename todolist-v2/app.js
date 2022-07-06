const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();



app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));



//*-------------------------------- DATABASE -----------------------------------*
// const items = ["Buy Food", "Cook Food", "Eat Food"];
// const workItems = [];

// instead of storing in an array, we now store in a db
mongoose.connect("mongodb://localhost:27017/todolistDB");

const itemsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const Item = mongoose.model("Item", itemsSchema);

const itemOne = new Item({
  name: "Welcome to your todolist!"
});

const itemTwo = new Item({
  name: "Hit the + button to add a new item"
});

const itemThree = new Item({
  name: "Click on the checkbox to delete an item"
});

const defaultItems = [itemOne, itemTwo, itemThree];

const listShema = {
  name: {
    type: String,
    required: true
  },
  items: [itemsSchema]
  // new schema contains a name and an array of lists from itemsSchema
};

const List = mongoose.model("List", listShema);



/*---------------------------- INITIAL ENTRY ------------------------------*/

app.get("/", function(req, res) {

  Item.find(function(err, foundItems) {
    if (err) {
      console.log(err);
    } else {

      // to prevent items been inserted over and over again when the server restarts
      if (foundItems.length === 0) {
        Item.insertMany(defaultItems, function(err) {
          if (err) {
            console.log(err);
          } else {
            console.log("Successfully saved default items to database");
          }
        });
        res.redirect("/");
      } else {
        res.render("list", {
          listTitle: "Today",
          newListItems: foundItems
        });
      }
    }
  });

});

/*---------------------------- DIFFERENT LISTS ------------------------------*/

// Dynamic routes using express
app.get('/:customListName/', function(req, res) {
  const customListName = _.capitalize(req.params.customListName);

  // difference between find and findOne - find returns an array
  List.findOne({name: customListName}, function(err, foundList) {

      if (!err) {
        if (!foundList) {
          // create a new list
          const list = new List({
            name: customListName,
            items: defaultItems
          });

          list.save();
          res.redirect("/");
        } else {
          // show an existing list
          res.render("list", {
            listTitle: foundList.name,
            newListItems: foundList.items
          });
        }
      }
    })
});


/*---------------------------- ADDING NEW ITEMS ------------------------------*/
app.post("/", function(req, res) {

  const itemName = req.body.newItem;
  // tapping into the submit button's value to check which list the request came from
  const listName = req.body.list;

  const item = new Item({
    name: itemName
  })

  if(listName == "Today"){
    item.save();
    res.redirect("/");
  } else {
    List.findOne({name: listName}, function(err, foundList){
      foundList.items.push(item);
      // push the item to the items array embedded in the List Schema
      foundList.save();
      res.redirect("/" + listName);
    });
  }

});

/*----------------------------- DELETING ITEMS -------------------------------*/

app.post("/delete", function(req, res) {
  const checkedItemId = req.body.checkbox;
  const listName = req.body.listName;

  if( listName == "Today") {
    Item.findByIdAndRemove(checkedItemId, function(err) {
      if (!err) {
        console.log("item successfully deleted");
        res.redirect("/")
      }
    });
  } else {
    //findOneAndUpdate({condition}, {how to update}, callback)
    List.findOneAndUpdate({name: listName}, {$pull: {items: {_id: checkedItemId}}}, function(err, foundList){
      if(!err){
        res.redirect("/" + listName);
      }
    })
  }

})





app.get("/about", function(req, res) {
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
