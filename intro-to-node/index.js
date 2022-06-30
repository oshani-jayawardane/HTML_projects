
console.log("hello world !!!! pppffff");

const fs = require("fs");

// copy file content in file1.txt to new file file2.txt
fs.copyFileSync("file1.txt", "file2.txt");

// if content of file2.txt is changed later, and the code is run again, the content in file1.txt will again replace content in file2.txt


var superheroes = require("superheroes");

var myHero = superheroes.random();

console.log("hero: " + myHero);


console.log("VS.");


var supervillains = require("supervillains");

var myVillain = supervillains.random();

console.log("villain: " + myVillain);
