console.log("Exercices fonctions natives");
// exercice 1
console.log("Exercice 1");

var aleatoire = Math.random();
// nothing as we asked
// this function give a random number between 0 and 1 (1 off)
// permet de créer des nombres aléatoirement, pour un jeu de dés par exemple

console.log(aleatoire);


// Exercice 2
console.log("exercice 2");
var a = 12.42359;
var number = Math.round(a*100)/100;
console.log(number);
// numérique
// arrondi a l'entier le plus proche, et supérieur si 12.5 => 13


// Exercice 3
console.log("exercice 3");
var age = "35";
var ageTypeOf = typeof(age);
console.log(ageTypeOf);
var ageNum =parseInt(age);
console.log(ageNum);
// "35" : string
// utilisation de parseInt() pour convertir la string en num

// Exercice 4
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
console.log("exercice 5");
var texte = "A nice boat";
var texteTypeOf = typeof(texte);
console.log(texteTypeOf);
var texteSplit = texte.split(" ");
console.log(texte);
console.log(texteSplit);
