console.log("functions.js");
// function exemple
function makeExemple()
{
console.log("this is the makeExemple function speacking");
}
// nothing to show since we call MakeExemple
makeExemple();
// now it show a result

// function exemple with one precise action and one argument
var customers = 
["customer1",
"customer2",
"customer3",
"customer4", 
];
var fruits =
[
    "banana",
    "peach",
    "apple",
    "orange"
]
function showArrayItems(ItemsList)
{
    for(item of ItemsList)
    {
        console.log(item);
    }
}
showArrayItems(customers);
showArrayItems(fruits);
//showArrayItems("coco l'asticot");
// "coco l'asticot" peut être vu comme un tableau
// ne fonctionnerai pas avec un nombre
// préciser showArrayItems(array ItemsList) permet de renvoyer une erreur

// function exemple with multiple arguments and return value
console.log("sommes des valeurs d'un tableau")

var ages = [12, 14, 8, 22, 1];
var revenus = [1500, 1200, 1300];
function getSum(data=false)
// le =false permet d'afficher un message d'erreur en cas de demande sans 
//avoir renseigné d'argument à data
{
    var sum = 0;
    if (data)
    // par défaut si data existe elle est vraie
    {
        for (var value of data)
        {
        sum += value;
        }
    }
    return sum;
}
var sum = getSum(ages);
console.log("Somme des âges de vos enfants : " + sum + " ans");

sum = getSum(revenus);
console.log("sommes des revenus : " + sum +" euros");

sum = getSum();
console.log(sum);
if (!sum)
{
console.log("Attention nous n'avons pas pu calculer de somme");
}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// fonctions natives
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("\n fonctions natives \n ");
// var dog = 
// {
//     name : "Medor",
//     age : 4,
//     color : "brown",
//     welcome : function () 
//     {
//         console.log(this.name + " come and say : 'hello'");
//     },
//     // on utilise this pour faire refèrence à l'objet 
//     //dans lequel on travaille.
//     run : function ()
//     {
//         console.log("The dog run");
//     }
// };
// console.log("the dog name is " + dog.name);
// dog.welcome();
// dog.name = "Rex";
// dog.welcome ();
// cette premiére version n'est utile que si on n'a qu'un dog

function Dog (name, age, color)
{
    this.name = name,
    this.age = age,
    this.color = color,
    this.welcome = function (text) 
    {
        console.log(this.name + " come and say : " + text);
    },
    this.run = function ()
    {
        console.log(this.name + " run");
    }
}
var dog1 = new Dog ("medor", 4, "brown");
console.log (dog1);
var dog2 = new Dog ("Rex", 2, "grey");
console.log(dog2);
dog1.welcome("hello");
dog2.welcome("waf waf");
dog1.run();
dog2.run();
// ici grâce au modéle de l'objet chien, je peux avoir
// plusieurs occurences dog1 et Dog2 qui répondent aux
// mêmes propriétés.

// exemple of native method
console.log("exemple d'untilisation de push");
var colors = ["green", "red", "black"];
console.log(colors);
colors.push("yellow");
console.log(colors);
colors.push("white", "orange", "purple");
console.log(colors);





