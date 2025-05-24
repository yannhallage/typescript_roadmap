// les types speciaux
// deja ici on veut faire reference a certain types 
// comme le any qui accept n'importe quel type possible
var nombre;
nombre = 2000;
nombre = "yann";
nombre = true;
console.log(nombre);
// un autre exemple avec du any 
var variables = "le nombre total est : " + 2000 + "disponibilité : " + true;
console.log(variables);
// unknown
// c'est un type qui est similaire a any mais qui est plus sécurisé
// on peut pas faire de manipulation sur un type unknown sans faire une vérification de type
var nombres; // une alternative a any 
console.log(nombres = "this is yann hallage and her simple code " + true);
// differente maniere de manipulation 
nombres = {
    name: "yann hallage",
    age: 2000,
    isDeveloper: true
};
console.log(nombres);
// type unknown mais ici on le fais avec une fonction
// deja une variable en ts ou js avancer , on peut passer une fonction dans une variable 
nombres = function () { return console.log(true); };
console.log(nombres);
