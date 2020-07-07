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


// console.log("exercice 3");
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
// // exercice 3

// var secretNumber = 20;
// var userChoice = null;
// while (userChoice !== secretNumber){
//     userChoice = parseInt( prompt ("quel nombre proposes-tu?"));
//     if (userChoice > secretNumber){
//         alert ("c'est moins");
//     }
//     else if(userChoice < secretNumber) {
//         alert ( "c'est plus");
//     }
// }
// alert ("Bravo !");

// console.log("exercice 4");
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
// // exercice 4
// for (i=1; i<= 100; i++ ){
//     console.log(i);
// }

// console.log("exercice 5");
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
// // exercice 5
// for (i=1; i<= 100; i++ ){
//     if ( i%2 === 0) {
//         console.log(i);
//     }
// }
// console.log("exercice 6");
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
// // exercice 6
// var debit = prompt ("A quel débit remplit-on la piscine?");
// var longueur = 10;
// var largeur = 20;
// var profondeur = 40;
// function tempsRemplissage (longueur, largeur, profondeur, debit){
//     let volume = longueur * largeur * profondeur;
//     let temps = volume / debit;
//     return temps;
// }

// let temps = tempsRemplissage(longueur, largeur, profondeur, debit);
// console.log(`Il faudra ${temps} minutes`);

// // console.log("exercice 8");
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
// // exercice 8
// let star ="";
// for (i = 0 ; i <= 5; i++){
//     star += "*";
//     console.log(star);
// }
console.log("exercice 9");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
// exercice 9
for (i=1; i<= 100; i++ ){
    let show ="";
    if (i%15 === 0)
    {
       show = (i + " FIZZBUZZ");
    }
    else if (i%5 === 0)
    {
        show =(i + " BUZZ");
    }
    else if (i%3 === 0)
    {
        show =(i + " FIZZ");
    }
    show =i;
console.log(show);
}
