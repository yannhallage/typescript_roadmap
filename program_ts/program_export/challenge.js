"use strict";
// challenge 
// ensemble de defis realisable par le joueur 
Object.defineProperty(exports, "__esModule", { value: true });
exports.choix_challenge = void 0;
var choix_challenge = function (choix) {
    if (choix === 'action') {
        return console.log('vous avez choisir ' + choix);
    }
    else {
        return console.log('vous avez choisi ' + choix);
    }
};
exports.choix_challenge = choix_challenge;
