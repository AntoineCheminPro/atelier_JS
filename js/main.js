// ~~~~~~~~~~~ String ~~~~~~~~

// declare an assign string to variables
var userFirstname = "Antoine";
var userLastname ="Chemin";

// concat userFirstname and userLastname
var userFullName = userFirstname + " " + userLastname
// PRINT INFORMATION IN BROWSER CONSOLE
console.log(userFullName);

// ~~~~~~~~~ Numbers ~~~~~~~~

var userAge = 44;
console.log (userAge);
// add 1 tu userAge variable
userAge = userAge +1;
// userAge += 1;
// userAge ++;
console.log(userAge);

// substract 1 to userAge variable
userAge = userAge - 1;
// userAge -= 1;
// userAge --;
console.log (userAge);

//operations example
var a = 42;
var b = 16;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
// modulo example
console.log(a%b)
a *=b;
console.log(a);

//~~~~~~~~~~ Boolean ~~~~~~~~

var available = true;
var madeInEu = false;

console.log (available);
console.log (madeInEu);


// ~~~~~~~~~ Array ~~~~~~~~~~

// Array with numerical index
var user =[
    "Antoine",
    "Chemin",
    44,
    "Rouen",
    "male",
    true,
   [    
        "dog",
        "cat",
        "golden fish",
        [
            "golden", "maincoon", "yorkshire"
        ]
    ]
];
// display the first element in array
console.log(user[0]);
user [0] = "ANTOINE";
console.log (user[0]);
console.log("your user name is : "+ user[0]+ " " +  user[1]);
console.log(user[0] + " has a " + user[6][1]  + " it is a " + user[6][3][1]);

// accessing letter string with array notation
var texte = "Lorem Ipsum dolor";
console.log(texte[0]);

// Associative array (or JSON object)

user = {
    firstname : "Antoine",
    lastname : "Gossart",
    age : 44,
    city : "Rouen",
};
console.log(user);
console.log("Hello "+ user.firstname);
console.log("Hello "+ user["firstname"]);
