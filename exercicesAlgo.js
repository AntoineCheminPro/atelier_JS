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
// console.log("exercice 9");
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
// // exercice 9
// for (i=1; i<= 100; i++ ){
//     if (i%15 === 0){
//       console.log(" FIZZBUZZ");
//     }
//     else if (i%5 === 0)
//     {
//        console.log(" BUZZ");
//     }
//     else if (i%3 === 0)
//     {
//       console.log(" FIZZ");
//     }
//     else {
//     console.log(i);
//     }
// }
// console.log("exercice 1");
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
// exercice 1
// var alternanceNoirBlanc ="";
// function damier(){
//     for (var x = 0 ; x <= 8; x++){
//         for (var y = 0 ; y <= 16 ; y++){
//             if ((x+y) % 2 === 0){
//                 alternanceNoirBlanc += "#";
//             }
//             else{
//                 alternanceNoirBlanc += " ";
//             }
//         } 
//         alternanceNoirBlanc += "\n"; 
//     }
//     return alternanceNoirBlanc;
// }
// console.log(damier());
   

     


// console.log("exercice 2");
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
// exercice 2

// let binaire =[1,0,0,0];
// function movement (i){
//     for (i = 0 ; i < binaire.length; i++){
//         binaire.forEach(element => console.log(element));
//         binaire.unshift(0);
//         binaire.pop();
//         console.log ("-------");
//     }
//     return binaire;
// }
// binaire = movement();

// console.log("exercice 3");
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
// // exercice 3

// let sold = prompt ("quel est le montant du panier?");
// sold = Math.round(sold,0)
// function isEven(sold){
//    if (sold%2 ===0){
//        return true;
//    }
//    else {
//        return false;
//    }
// ;}
// let statutSold = isEven(sold);
// alert (statutSold);

// console.log("exercice 4");
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
// // exercice 4

// var factorNumber = prompt("de quel nombre souhaites tu la factorielle?");
// function factorielle (factorNumber){
//     if (Number.isInteger(factorNumber)){
//         for (var i = 1; i <= factorNumber; i++){
//             var sum = 1;
//             sum += sum * i;
//         }
//         console.log (sum);
//     }
//     else {
//         console.log("erreur");
//     }
// }


// let array = x.split("");
// function oneAndNull (array){
//  let arrayNumber = "";
//   for (let j = 0; j <array.length ; j++){
//     if (parseInt(array[j]) > 4){
//         arrayNumber += "1";
//     }
//     else
//     {
//      arrayNumber += "0";
//     }
//   }
// return arrayNumber; 
// }

// console.log(oneAndNull(x));

// solution :
// function fakeBin(x) {
    // return x.split('').map(n => n < 5 ? 0 : 1).join('');
// }

// console.log("test codewars");
// var x = [1, 2, 3];
// function grow(x){
// var growth = 1;
//     for (let i of x){
//     growth = growth * i;
//     }
// return console.log(growth);
// }

// let classPoints = [2, 3];
// let yourPoints = 5;
// function betterThanAverage(classPoints, yourPoints) {
//     let classSum = classPoints.reduce((a, b) => a + b, 0);
//     classAverage = classSum / classPoints.length;
// let betterThanAverage = (yourPoints > classAverage ? true : false);
// return betterThanAverage;
// }
// console.log(betterThanAverage(classPoints, yourPoints));   

