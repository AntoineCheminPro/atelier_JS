
// exercices
// exercice 1
console.log("Exercice 1");
var i = 0;
while (i <= 9) 
{
  console.log("One run of the loop");
i++;
}
//affiche on run of the loop fois 10

console.log("Exercice 1.b");
var i = 0;
while (i <= 9) 
{
  console.log("One run of the loop");
i+=2;
}

//affiche on run of the loop fois 5
// supprimer i++ rendrait la boucle infinie

// exercice 2
console.log("exercice 2");
for (var i=0; i <=9 ; i++) 
{
    console.log("One run of the loop");
}
// execute la boucle 10 fois (de i=0 à i=9)
for (var i=0; i <=9 ; i+=2) 
{
    console.log("One run of the loop");
}
// execute 5 fois la boucle
// supprimer i++ rend la boucle infinie
// la boucle for permet d'alléger le code par rapport à whil et facilite sa lecture
// toutes les infos sont sur la même ligne

// exercice 3
console.log("exercice 3");
for (var i=0; i <=100 ; i++)
{
    console.log(i);
}
console.log("exercice 3B");
for (var i=0; i <=99 ; i++)
{
    console.log(i);
}
console.log("exercice 3C");
for (var i=0; i <=100 ; i+=2)
{
    console.log(i);
}

// exercice 4
console.log("exercice 4");
for (var i=0; i <=100 ; i++)
{ 
if (i%2 === 0 ){
    console.log(i +" is even");
}
else {
    console.log(i +" is odd");
}
}

// exercice 5
console.log("exercice 5");
var items = ["first item", "second item", "third item", "fourth item"];
for (var i=0; i < 4; i++) 
{
    console.log(items[i]);
}
// il s'affiche la liste des valeurs contenues dans items
// i est ma variable d'incrémentation
// i dans items défini l'index dans le tableau items
// ce modéle de boucle permet d'afficher la liste des valeurs du tableau
// remplacer i<4 par i<5 affiche une cinquième valeur qui ici n'est pas définie

// exercice 6
console.log("exercice 6");
customers = [
    "Albin Term",
    "Anna Sandgrove",
    "John Doe",
    "Terrance Head",
    "Yan Mock",
    "Zoe Durst"
  ];
  var titre = "List of all customers : "
  console.log(titre.big());
for (var customer of customers)
{
    console.log(customer.big());
}

