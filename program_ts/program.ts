import { verification_variable_entree } from "./program_export/verification";
import { variable_additionner } from './program_export/addition';



// j'utilise les des fonctions importées 

let variable_entree: any;
variable_entree = 222;
verification_variable_entree(variable_entree); //renvoie normalemnt le typeof de la variable en question


variable_additionner(12, 12, 12, 12, 12, 12)

