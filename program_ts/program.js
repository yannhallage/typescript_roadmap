"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var verification_1 = require("./program_export/verification");
var addition_1 = require("./program_export/addition");
// j'utilise les des fonctions importées 
var variable_entree;
variable_entree = 222;
(0, verification_1.verification_variable_entree)(variable_entree); //renvoie normalemnt le typeof de la variable en question
(0, addition_1.variable_additionner)(12, 12, 12, 12, 12, 12);
