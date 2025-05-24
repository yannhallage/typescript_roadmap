
// les types speciaux
// deja ici on veut faire reference a certain types 
// comme le any qui accept n'importe quel type possible

let nombre : any ;
nombre = 2000;
nombre = "yann";
nombre = true;
console.log(nombre)

// un autre exemple avec du any 
let variables : any = "le nombre total est : " + 2000 + "disponibilité : " + true
console.log(variables);


// unknown
// c'est un type qui est similaire a any mais qui est plus sécurisé
// on peut pas faire de manipulation sur un type unknown sans faire une vérification de type
let nombres : unknown ; // une alternative a any 

console.log(nombres = "this is yann hallage and her simple code " + true)


// differente maniere de manipulation 

nombres = {
    name : "yann hallage",
    age : 2000,
    isDeveloper : true

}

console.log(nombres)

// type unknown mais ici on le fais avec une fonction
// deja une variable en ts ou js avancer , on peut passer une fonction dans une variable 
nombres = ()=> console.log(true)

console.log(nombres);

// conclusion
// les any et unknown sont a peut pres similaire 

// types never 
// c'est un type qui est utilisé pour les valeurs qui ne peuvent pas arriver

// undefined and null
// undefined et null sont des types speciaux qui sont utilisés pour les valeurs qui ne sont pas
// définies ou qui sont nulles
let valeur_pas_definie : undefined = undefined;


// object types
// array

const tableau_one : string[] = [] //ici dans ce cas la variable est de type Array et de valeur string
tableau_one.push('yann hallage');
tableau_one.push('hallage');
tableau_one.push('yann');
tableau_one.push('hamed');
console.log(tableau_one);

const tableau_two : number[] = [];

tableau_two.push(1);
tableau_two.push(2);
tableau_two.push(3);
tableau_two.push(4);
console.log(tableau_two);

const tableau_three : any[] = [];
tableau_three.push('yann hallage');
tableau_three.push(1);
tableau_three.push(true);
tableau_three.push(null);
tableau_three.push(undefined);
console.log(tableau_three);


// tuples
// c'est un type qui permet de définir un tableau avec un nombre fixe de valeurs
// les valeurs peuvent être de différents types
const Nom : string = 'HALLAGE';
const age : number = 24;
const est_marie : boolean = false;

const some_text : any = `mon nom est ${Nom}, et j'ai ${age} , celibataire : ${est_marie}`
let tuples_variable: [number,string,boolean,any]

tuples_variable=[1,'yann hallage',true,some_text];

console.log(tuples_variable)