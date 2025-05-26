
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

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}


// en gro ce que je retiens est que le enum ou les valeurs du enums sont comme des constantes 
//  et le truc est que ça met directement dans l'orde


// aliases and interfaces 
// aliases et interfaces sont des types qui permettent de définir des types
// qui peuvent être utilisés dans un programme
// par exemple si on a un type qui définit un objet avec des propriétés
// on peut utiliser l'alias pour définir un type qui pointe vers l'objet
// et l'interface pour définir les propriétés de l'objet
// aliases et interfaces sont utilisés pour définir des types qui peuvent être utilisés

// en gro cst comme des types que tu cree 
// et qui sont utilisés dans le code

// creation de types
type couleur = string;
type personne = string;
type nombre = number;



// parlons des interfaces
// interfaces sont des types qui permettent de définir les propriétés d'un objet
// elles sont utilisées pour définir les propriétés d'un objet et pour vérifier 
// si l'objet satisfait aux propriétés définies par l'interface
// en gro cst comme des contraintes sur les objets que tu cree
// et qui sont utilisées pour vérifier si l'objet satisfait aux contraintes
// creation d'interface

interface Clothes {
    couleur: string;
    nombre: number;
    personne: string;

}


interface others extends Clothes {
    shoes: string,
    pantalon: string

}

// en plus des attributs de ses attribut il a la possibilité d'utiliser les  attributs de Clothes

const __anExamples: others = {
    shoes: "noir",
    pantalon: "bleu",
    couleur: "noir",
    nombre: 2,
    personne: "homme et femme"
}

console.log(__anExamples)

// forcement utiliser les attributs lors d'un extends 

// union
// union est un type qui permet de définir plusieurs types
// en gro cst comme des types que tu cree
// et qui sont utilisées pour définir plusieurs types

let MaVariable: string | number;

MaVariable = 2000;

console.log(MaVariable)


// passons au fonction 
// les fonctions sont des types qui permettent de définir les propriétés d'un
// elles sont utilisées pour définir les propriétés d'un objet et pour vérifier

const executer = (a: number, b: number, c?: string | boolean): unknown => {
    return console.log(a + b)
}

executer(12, 20);

// parlons ici de certaines type de fonction un peu different

const ajouterValeur = (...rest: number[]) => {
    return rest.map((e) => console.log(e));
}

ajouterValeur(12)

const Myfunction = (): void => {
    console.log("je suis une fonction qui ne retourne rien")
}
const Myfunction_second = (parmas: number): any => {
    // console.log("je suis une fonction qui ne retourne rien")
    return console.log(parmas)
}




// une simple conclusion
// en dehors des types basics on a 
// interface ,type ,aliase, enum et quelque bonne pratique des fonctions 



// le DOM

let btn_action = document.querySelector('.btn_action') as HTMLButtonElement

btn_action.addEventListener('click', () => {
    console.log("je suis un bouton")
})