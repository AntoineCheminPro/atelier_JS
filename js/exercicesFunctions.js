console.log("ExoFunctions");
// Exercice 1
console.log("exercie 1");
function product (value1, value2)
{
return value1 * value2;
};

var result = product(8, 3);
console.log("the result of the function is : " + result);
// nothing but we did'nt call this function
// no, it don't act anything else than show a sentence


// Exercice 2
console.log("exercie 2");
function showDigits (max)
{
    i=0;
while (i<max+1)
    {
    console.log(i);
    i++;
    };
    return i;
}
showDigits (9);


// exercice 3
console.log("exercie 3");
firstname = "John";
lastname = "Doe";
function welcome (firstname="John", lastname="Doe")
{
 console.log("welcome to our site " + firstname + " " + lastname +".");
 };
welcome ();

// Exercice 4
console.log("exercice 4");
function isAdult (age)
{
    if (age>=18)
    {
    major = true
    
    }
    else
    {
    major = false
    }
    return major
}
var statut = isAdult (12);
console.log (statut);

//Exercice 5
console.log("Exercice 5");
function birthYear (age=false)
{
    if (age)
    {
        var aujd = new Date();
        var année = aujd.getFullYear();
          }
    else
    {
        console.log("No age given");
    }
    return année - age
}
var year = birthYear (44);
console.log(" tu es né en : " + year);


//Exercice 6
console.log("Exercice 6");
user =  {
        firstname : "John",
        lastname : "Doe" ,
        age : 42 ,
        job : "dev"
        };

function identityCard (userArray)
{   
    var result ="";
    for (var ID in userArray)
    {
        result += ID +" : " + userArray[ID] +"\n";
        // pour chaque occurence de ID dans userArray
        // j'ajoute la clé ID la mise en forme
        // la valeur associée userArray[ID] saut de ligne
        // "\n"
        // j'ai créé une seule chaine de caractères
        // qui contient toutes les infos (result)
        // le += concaténe les occurences à result
    }
return result;
}
var idCard = identityCard (user);

console.log(idCard);

var année = new Date().getFullYear();
// je calcule directement getFullYear à partir de la
// fonction native new Date() qui elle m'affiche
// les valeurs du moment au format wed 01 2020 16:41:47
console.log (année);
console.log (new Date());
