// console.log("exercice 1");
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
// // exercice 1

// var a = 5;
// var b = 2;
// var c = 3;
// var d = 4;
// var array =[a,b,c,d];
// var arraySort = array.sort();
// console.log (arraySort[arraySort.length-1]);

// console.log("exercice 2");
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
// // exercice 2

// // define parity or not
// var pair ="";
// function pairity(age) {
//     if (age % 2 === 0){
//         pair = "\n cet age est pair";
//         };
// return pair;
// }
// console.log(pair);

// // define squarre or not
// var carre = "";
// function estUnCarre (age) {
//     var racineCarre = Math.sqrt(age);
//     if (racineCarre === Math.round(racineCarre)){
//         carre = "\n ton age est le carré de : " + racineCarre;
//         };
// return carre;
// }

// // ask age
// do {
//     age = prompt("Quel est ton age?");
//     if (age === "") {
//         alert ("veuillez entrer un age valide");
//     }
// }
// while (age < 0 || age === "");
// if (age > 21){ 
//     alert ("Accès autorisé" + pairity(age) + estUnCarre(age));
// }


console.log("exercice 3");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
// exercice 3

var userChoice = "";
var secretNumber = Math.round (Math.random() * 20);
function test(userChoice){
    if (secretNumber === userChoice){
            answer = "Bravo !";
    }
    else if (secretNumber < userChoice){
            answer = "c'est moins";
    }
    answer = "c'est plus"
return answer;
};

// choose a secret number 0 to 20

console.log(secretNumber);
while (secretNumber !== userChoice){
userChoice = parseInt (prompt (test(userChoice) + "\n quel nombre proposes-tu?"));
}


