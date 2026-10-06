let a = 5;
let b = 7;
[a,b] = [b,a]
//console.log(a,b);
//javascript has three ways to declare variables
let score = 90;
score = score + 10;
//console.log(score);
//cosnt (recommendedfor values that should never change)
const pi = 3.14;
//console.log(pi);
const person = {name: "Alex", age: 20};
person.name = "Sam";
//console.log(person);
//var the old way of declaring variables
var oldWay = "this is the old way of declaring variables";
oldWay = "isn't it";
//console.log(oldWay);
oldWay = "never use var to declare variables";
let firstName = "Alex"; //camelCase 
let TotalPrice = 99.99; // PascalCase 
let isLoggedIn = true;
const MAX_USERS = 100; // UPPER_SNAKE_CASE "for true constants"
//bad 
//let 1name "Alex"; // starts with a number
//let first-name "Alex"; // contains a hypen
//let let = 5; // reserved keyword
/*Data types in javascript
1.number:integer, float, double;
2.string,
3.boolean,
4.null/
*/
// string: text data can use singel of double quotes or backticks(template literals)
let name1 = "Alex";
let name2 = 'Sam';
let name3 = `John`; // preferred way to interpolation
// Template literals (modern and powerful)
let age = 20;
let message = `My name is ${name1} and I am ${age} years old`;
//console.log(message);

//Usefull string methos
let text = "  javascript  ";
console.log(text.length);
console.log(text.toUpperCase());
console.log(text.trim());
console.log(text.includes("script"));
console.log("hello".slice(1,4));

