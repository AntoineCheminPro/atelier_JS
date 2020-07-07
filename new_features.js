// let et const
const MIN_AGE = [18];
console.log(MIN_AGE);
let txt = "Lorem Ipsum";

function test (){
    console.log(txt);
}
test();

let hello = "bonjour";
if (true) {
    hello = "hello world";
    console.log(hello);
}
console.log(hello);
MIN_AGE.push(20);
console.log(MIN_AGE);

// map
console.log("exemple d'utilisation de map");
const REF = [1,2,3,4,5];
console.log (REF);
let copyRef = REF.map(function(value){return value * 2});
let copyRef2 = REF.map (x => x * 2);
console.log(copyRef);
console.log(copyRef2);
// les deux fonctions font la même chose ! plus de lisibilité !!!


// reduce : une fonction qui permet de cumuler chaque value dans un accumulateur
// NB : on pourrait lire la fonction reduce appliquée à ref prend 2 variables
// accumulator et value.
// a chaque index j'ajoute la valeur de mon élément Value à accumulator
// et je return une valeur qui vaut accumulator + value
let sum = REF.reduce((accumulator, value) => accumulator + value);
console.log(sum);

// les deux versions de console.log renvoient le même résultat !
console.log(`la somme est : ${sum} super ça marche`);
console.log("la somme est : " + sum + " super ça marche");


