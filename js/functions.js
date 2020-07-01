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