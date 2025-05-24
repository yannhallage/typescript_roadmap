
// les types speciaux
// deja ici on veut faire reference a certain types 
// comme le any qui accept n'importe quel type possible



// unknown
// c'est un type qui est similaire a any mais qui est plus sécurisé
// on peut pas faire de manipulation sur un type unknown sans faire une vérification de type
let nombres: unknown; // une alternative a any 

console.log(nombres = "this is yann hallage and her simple code " + true)


// differente maniere de manipulation 

nombres = {
    name: "yann hallage",
    age: 2000,
    isDeveloper: true

}

console.log(nombres)

// type unknown mais ici on le fais avec une fonction
// deja une variable en ts ou js avancer , on peut passer une fonction dans une variable 
nombres = () => console.log(true)

console.log(nombres);

// conclusion
// les any et unknown sont a peut pres similaire 

// types never 
// c'est un type qui est utilisé pour les valeurs qui ne peuvent pas arriver

// undefined and null
// undefined et null sont des types speciaux qui sont utilisés pour les valeurs qui ne sont pas
// définies ou qui sont nulles
let valeur_pas_definie: undefined = undefined;


// object types
// array

const tableau_one: string[] = [] //ici dans ce cas la variable est de type Array et de valeur string
tableau_one.push('yann hallage');
tableau_one.push('hallage');
tableau_one.push('yann');
tableau_one.push('hamed');
console.log(tableau_one);

const tableau_two: number[] = [];

tableau_two.push(1);
tableau_two.push(2);
tableau_two.push(3);
tableau_two.push(4);
console.log(tableau_two);

const tableau_three: any[] = [];
tableau_three.push('yann hallage');
tableau_three.push(1);
tableau_three.push(true);
tableau_three.push(null);
tableau_three.push(undefined);
console.log(tableau_three);


// tuples
// c'est un type qui permet de définir un tableau avec un nombre fixe de valeurs
// les valeurs peuvent être de différents types
const Nom: string = 'HALLAGE';
const age: number = 24;
const est_marie: boolean = false;

const some_text: any = `mon nom est ${Nom}, et j'ai ${age} , celibataire : ${est_marie}`
let tuples_variable: [number, string, boolean, any]

tuples_variable = [1, 'yann hallage', true, some_text];

console.log(tuples_variable)



// object types 

// parlons des objets ici

const types_example: {
    name: string,
    age: number,
    is_married: boolean

} = {
    name: 'yann hallage',
    age: 24,
    is_married: false

}
types_example.name = 'HALLAGE CEDRICK'



if (types_example) {
    console.log(types_example);
}

// facultatif 

const types_examples: {
    name: string,
    age?: number,
    is_married?: boolean
} = {
    name: 'hamed yann hallage'
}

types_examples.age = 23
types_examples.is_married = true

console.log(types_examples)

// index signature 
// index signature est un type qui permet de définir le type de valeur qui peut être stock
// dans un objet
// par exemple si on a un objet qui stock des nombres et des chaines de caractères
// on peut définir un index signature qui permet de stocker des nombres et des chaines
// de caractères dans l'objet

const index_signature: {
    [index: string]: string,
} = {};

index_signature.Name_personnal = "this is an exmaple of objet types with typescript";
index_signature.Name_professionel = "using ts";

console.log(index_signature)


// enum
// enum est un type qui permet de définir un ensemble de valeurs
// qui peuvent être utilisées dans un programme
// par exemple si on a un enum qui définit les jours de la semaine
// on peut utiliser les valeurs de l'enum pour définir la valeur d'une variable




