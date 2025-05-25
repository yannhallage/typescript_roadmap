// les types speciaux
// deja ici on veut faire reference a certain types 
// comme le any qui accept n'importe quel type possible
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
// conclusion
// les any et unknown sont a peut pres similaire 
// types never 
// c'est un type qui est utilisé pour les valeurs qui ne peuvent pas arriver
// undefined and null
// undefined et null sont des types speciaux qui sont utilisés pour les valeurs qui ne sont pas
// définies ou qui sont nulles
var valeur_pas_definie = undefined;
// object types
// array
var tableau_one = []; //ici dans ce cas la variable est de type Array et de valeur string
tableau_one.push('yann hallage');
tableau_one.push('hallage');
tableau_one.push('yann');
tableau_one.push('hamed');
console.log(tableau_one);
var tableau_two = [];
tableau_two.push(1);
tableau_two.push(2);
tableau_two.push(3);
tableau_two.push(4);
console.log(tableau_two);
var tableau_three = [];
tableau_three.push('yann hallage');
tableau_three.push(1);
tableau_three.push(true);
tableau_three.push(null);
tableau_three.push(undefined);
console.log(tableau_three);
// tuples
// c'est un type qui permet de définir un tableau avec un nombre fixe de valeurs
// les valeurs peuvent être de différents types
var Nom = 'HALLAGE';
var age = 24;
var est_marie = false;
var some_text = "mon nom est ".concat(Nom, ", et j'ai ").concat(age, " , celibataire : ").concat(est_marie);
var tuples_variable;
tuples_variable = [1, 'yann hallage', true, some_text];
console.log(tuples_variable);
// object types 
// parlons des objets ici
var types_example = {
    name: 'yann hallage',
    age: 24,
    is_married: false
};
types_example.name = 'HALLAGE CEDRICK';
if (types_example) {
    console.log(types_example);
}
// facultatif 
var types_examples = {
    name: 'hamed yann hallage'
};
types_examples.age = 23;
types_examples.is_married = true;
console.log(types_examples);
// index signature 
// index signature est un type qui permet de définir le type de valeur qui peut être stock
// dans un objet
// par exemple si on a un objet qui stock des nombres et des chaines de caractères
// on peut définir un index signature qui permet de stocker des nombres et des chaines
// de caractères dans l'objet
var index_signature = {};
index_signature.Name_personnal = "this is an exmaple of objet types with typescript";
index_signature.Name_professionel = "using ts";
console.log(index_signature);
// enum
// enum est un type qui permet de définir un ensemble de valeurs
// qui peuvent être utilisées dans un programme
// par exemple si on a un enum qui définit les jours de la semaine
// on peut utiliser les valeurs de l'enum pour définir la valeur d'une variable
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
// en plus des attributs de ses attribut il a la possibilité d'utiliser les  attributs de Clothes
var __anExamples = {
    shoes: "noir",
    pantalon: "bleu",
    couleur: "noir",
    nombre: 2,
    personne: "homme et femme"
};
console.log(__anExamples);
// forcement utiliser les attributs lors d'un extends 
