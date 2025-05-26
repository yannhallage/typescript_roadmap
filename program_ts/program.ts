

// just un simple programme avec ts 
// okay donc ici je vais essayer de creer un code permettant de 
// resoudre un probleme 


let variable_entree: any;

const verification_variable_entree = (parmas: any): any => {
    if (typeof parmas === 'string' || 'number' || 'boolean') {
        return console.log(typeof parmas)
    } else {
        return console.log('la variable n\'est pas de type string, number ou boolean')
    }
}
variable_entree = 222;
verification_variable_entree(variable_entree);