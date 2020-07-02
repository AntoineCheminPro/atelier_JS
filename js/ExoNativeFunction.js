console.log("Exercices fonctions natives");
var separateur ="~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~";
console.log(separateur);
// exercice 1
console.log("Exercice 1");

var aleatoire = Math.random();
// nothing as we asked
// this function give a random number between 0 and 1 (1 off)
// permet de créer des nombres aléatoirement, pour un jeu de dés par exemple

console.log(aleatoire);


// Exercice 2
console.log(separateur);
console.log("exercice 2");
var a = 12.42359;
var number = Math.round(a*100)/100;
console.log(number);
// numérique
// arrondi a l'entier le plus proche, et supérieur si 12.5 => 13


// Exercice 3
console.log(separateur);
console.log("exercice 3");
var age = "35";
var ageTypeOf = typeof(age);
console.log(ageTypeOf);
var ageNum =parseInt(age);
console.log(ageNum);
// "35" : string
// utilisation de parseInt() pour convertir la string en num

// Exercice 4
console.log(separateur);
console.log("exercice 4");
var texte = "abliabloabracadabrazoumzoum";
var maxLength = 20;
var texteLength = texte.length;
console.log(texteLength);
if (texteLength>maxLength)
{
    console.log("Your texte is too long" );
}
else
{
    console.log("OK");
}

// Exercice 5
console.log(separateur);
console.log("exercice 5");
// Exercice 5


var texte = "A nice boat";
var texteTypeOf = typeof(texte);
console.log(texteTypeOf);
// typeof() me permet de determiner le type de variable
// renvoie string ou number

var texteSplit = texte.split("");
// texte.split() me permet de choisir "" comme separateur
// je l'inclu dans une nouvelle variable texteSplit
// expected : ["A", " ", "n", "i", "c", "e", " ", "b", "o", "a", "t"]
console.log(texte);
console.log(texteSplit);
// j'ai conservé mon texte originel et sa décomposition en un array

var texteSplit2 = texte.split("", 3);
console.log(texteSplit2);
// expected   ["A", " ", "n"]
// seules les 3 premiéres valeurs sont obtenues

var texteSplit3 = texte.split(" ");
console.log(texteSplit3);
// expected  ["A", "nice", "boat"]


// Exercice 6
console.log(separateur);
console.log("exercice 6");
// Exercice 6


