
/*--------------------------- CODE USING MONGOOSE-----------------------------*/

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/FruitsDB', {useNewUrlParser: true});




/*------------------------ INSERTING DOCUMENTS -------------------------------*/
/* creating a fruits schema */
const fruitSchema = new mongoose.Schema ({
  /* data validation - to have a clean sanitized output -  refer docs to see what to use */
  name: {
    type: String,
    required: [true, 'Where is the name?']
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String,
});

/* creating a model */
const Fruit = mongoose.model("Fruit", fruitSchema);
/* we define the singular form of the collection - "Fruit" - and mongoose will convert it into its plural form */

/* creating a document 'fruit' of the 'Fruit' model */
const fruit = new Fruit ({
  name: "Apple",
  rating: 7,
  review: "Pretty solid as a fruit."
});

// fruit.save();
/* to save the 'fruit' document into the 'Fruits' collection inside the 'FruitDB' */






/* Creating a people schema */
const peopleSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema /* embedding document from fruitSchema. now the data type is fruitSchema - an object */
});

const Person = mongoose.model("Person", peopleSchema);

const person = new Person ({
  name: "Oshani",
  age: 23
});

// person.save();

/* Creating a new fruit and a person with the new fruit embedded into the person*/
const pineapple = new Fruit ({
  name: "Pineapple",
  rating: 10,
  review: "The best and the worst fruit to ever exist."
});

// pineapple.save();

const personTwo = new Person ({
  name: "Amy",
  age: 12,
  favoriteFruit: pineapple /* embedding the pineapple object to Amy's favoriteFruit record */
})

// personTwo.save();

/* Notice how the object id of pineapple inside the fruits collection and inside Amy in people's collection matches with each other */






/* Adding more fruits to the fruits collection */

const kiwi = new Fruit ({
  name: "Kiwi",
  rating: 10,
  review: "The best Fruit."
});

const orange = new Fruit ({
  name: "Orange",
  rating: 3,
  review: "Very Sour."
});

const banana = new Fruit ({
  name: "Banana",
  rating: 6,
  review: "A Okay"
});

// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if(err){
//     console.log(err);
//   } else {
//     console.log("Successfully inserted data to fruitsDB");
//   }
// })



/*-------------------------- FINDING DOCUMENTS -------------------------------*/
// Fruit.find(function(err, fruits){
//   if(err){
//     console.log(err);
//   } else {
//
//     mongoose.connection.close(); /* it is good practice to close a connection once data is recieved than hanging it open */
//
//     // console.log(fruits);
//     fruits.forEach(function(fruit){
//       console.log(fruit.name + " - " + fruit.review);
//     });
//   }
// });


// /*------------------------- UPDATING DOCUMENTS ----------------------------*/
// /* id is taken from the data object in mongo */
// Fruit.updateOne({_id:"62c4eddfa7f77f17b3c94cd5"}, {review: "Peaches are yummy"}, function(err){
//   if(err){
//     console.log(err);
//   } else {
//     console.log("Successfully updated log");
//   }
// });
//
// /*------------------------ DELETING ONE DOCUMENT --------------------------*/
// Fruit.deleteOne({name: "Peaches"}, function(err){
//   if(err){
//     console.log(err);
//   } else {
//     console.log("Successfully deleted log");
//   }
//   /* could have also used _id - whichever is unique */
// });

/*----------------------- DELETING MANY DOCUMENTS ----------------------------*/
// Person.deleteMany({name: "Oshani"}, function(err){
//   if(err){
//     console.log(err);
//   } else {
//       console.log("Successfully Deleted Records");
//   }
// });




/* adding the first person a favoriteFruit too*/
Person.updateOne({name: "Oshani"}, {favoriteFruit: banana}, function(err){
  if(err){
    console.log(err);
  } else {
    console.log(" Successfully updated item");
  }
})
