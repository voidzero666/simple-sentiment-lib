const analyse = require("./analysis/sentiment");

const exampleData = "Lorem Ipsum dolor sit amet, consectetur adipiscing elit good great bad";
 
var result = analyse(exampleData);
 
console.dir(result);