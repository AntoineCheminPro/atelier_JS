// simple exemple of condition with on variable
var year = "2020";

if (year < 3000){
    console.log("nous ne sommes pas encore en l'an 3000");
}
else{

console.log("nous sommes en l'an 3000+");    
}
// condition exemple with two variable
var password = "cocolasticot";
var storedPassword = "cocacola";
if  (password === storedPassword){
    console.log("bienvenue");

}
else
{ 
    console.log("erreur, mot de passe incorrect");
}
// complexe condition example with array
var data = {
    pseudo : "toto",
    password : "cocolasticot"
};
var user = {
    pseudo : "toto",
password : "cocacola"};

if  (data ["pseudo"] === user["pseudo"] || data["password"] === user["password"])
{
    console.log("bienvenue");
}
else
{ 
    console.log("erreur, mot de passe incorrect");
}

// Else if exemple
var city = "Bernay";
if(city === "Rouen"){
    console.log("bienvenue en ville");
}
else if (city === "Bernay") {
    console.log("bienvenue à la campagne");
}
else {
    console.log("vous êtes perdu");
}

//negation exemple
var status = "visitor";
if (status!=="admin" ){
    console.log("access denied");

}
else {
    console.log("Access granted");
}

// exercices
console.log("exercice 1");
if (true) {
    console.log("Condition is working !");
  }
  // show condition is working as the condition is "true"
  if (false) {
    console.log("Condition is working !");
  }
  // doesn't show more than in 1 the second condition is false
  else {
    console.log("Condition is not working !");
  }
  // condition2 is false, so it's "else"
  if (false === false) {
    console.log("Condition is working !");
  }
  // false is false, condition is true.

  //exercice 2
  console.log("exercice 2");
var contents;
if (contents) {
    console.log("Condition is OK");
  }
  else {
    console.log("Condition is KO");
  }
    // condition is KO, contents variable doesn't exist
    // condition = true
    // condition is false => KO
    // condition is true, content exist and is defined
    // condition is true, content exist and is defined

// exercice 3

var price = "forty five";
if (price === 45) {
    console.log("The price is a number");
  }
  else if (price == 45) {
    console.log("The price is a string");
  }
  else {
    console.log("The price is something else");
  }
  // price is a numbre
  //price is a string, not a number === is different ==
  // "forty five" is a different string to "45"

  // exercice 4
  var age = 18;
if (age < 18){
console.log("Entry not allowed");
}
    else {
    console.log("Entry allowed");
    }

  // exercice 5
console.log("exercice 5");
var store = ["Walmart", "Colorado", "South-Park", 483,];

if (store[0] === "Walmart" && store[2] === "South-Park")  {
    console.log("The Walmart in South-Park has " + store[3] + " employes");
}
else if (store[0] == "Walmart" && store[1] == "Colorado")
{
    console.log("Hum this is an other Walmart from Colorado");
}
else if (store[0] == "Walmart")
{
    console.log("Too bad this is just a Walmart");
}
else 
{   
    console.log("I do not know what this is");
}

// exercice 6
console.log("Exercice 6");
var student = 
{ 
    Name:"John Doe",
    Grade : 14
};

if (student.Grade < 10 )
{
    console.log("Recalé");
}
else if (10 <= student.Grade && student.Grade < 12)
{
    console.log("Passable");
}
else if (12 <= student.Grade && student.Grade < 14)
{
    console.log("Moyen");
}
else if (14 <= student.Grade && student.Grade < 16)
{
    console.log("Bien");
}
else 
{
    console.log("Très bien");
}

// Exercice 7
var meal = {
    foodType : "Meat",
    cookedAt : 80,
    temperature : 60
}
var status
if (meal.temperature<meal.cookedAt)
{
    status = "Uncooked";
}
else if (meal.temperature>meal.cookedAt)
{
    status = "Overcooked";
}
else {
    status = "Cooked";
}
console.log(status);

// Exercice 8
console.log("exercice 8");

var number = 42;
if (number < 0) 
{
    console.log("Please enter a number at least greater than 0");
}
else if (number % 2 === 0)
{
    console.log("number is pair");
}
else
{
    console.log("number is odd");
}


