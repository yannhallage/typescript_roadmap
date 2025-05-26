import { verification_variable_entree } from "./program_export/verification";
import { variable_additionner } from './program_export/addition';
import { choix_challenge } from "./program_export/challenge";



// j'utilise les des fonctions importées 

let variable_entree: any;
variable_entree = 222;
verification_variable_entree(variable_entree); //renvoie normalemnt le typeof de la variable en question


variable_additionner(12, 12, 12, 12, 12, 12)


// interface et alias 
// le truc ici est de les utilisees

// action ou verité
choix_challenge('verité')
// 