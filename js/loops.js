console.log("loops");
var people = ["people1", "people2", "people3","people4","people5"];

var i = 0;
while (i < people.length)
{
    console.log(people[i]);
  
    if (people[i] === "people5") 
    {
        console.log("A bientôt en normandie !");
    }   
    i++;
}

// automatisation de l'affichage des valeurs du tableau
// people.length à la place de 5 permettrai de ne pas à avoir à remplir 
// le nombre d'entrées à la main

console.log("~~~~~~boucle For~~~~")
for(var i=4; i>=0;i--)
{
    console.log(people[i]);
}
// boucle à l'envers

var dogs=["toutou","medor","toby","lassie"];
for(i = 0; i < dogs.length; i++) {
    console.log("chien " + (i+1) + " : " + dogs[i]);
}
//exemple for of loop
console.log("for of loop exemple");
for(var dog of dogs){
    console.log(dog);
}

//exemple of for of loop with index
for(var [index, dog] of dogs.entries()) {
    console.log(index + " : " +dog);
}

//exemple for in loop
console.log ("for in loop");
var building = {
    type : "house",
    year : 1924,
    color : "green",
    surface : 110
}

console.log(building);

for (var prop in building) {
    console.log(prop + " : " +building[prop]);
}

