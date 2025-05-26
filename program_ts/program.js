"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var verification_1 = require("./program_export/verification");
var addition_1 = require("./program_export/addition");
var challenge_1 = require("./program_export/challenge");
// j'utilise les des fonctions importées 
var variable_entree;
variable_entree = 222;
(0, verification_1.verification_variable_entree)(variable_entree); //renvoie normalemnt le typeof de la variable en question
(0, addition_1.variable_additionner)(12, 12, 12, 12, 12, 12);
// interface et alias 
// le truc ici est de les utilisees
// action ou verité
(0, challenge_1.choix_challenge)('verité');
// 
