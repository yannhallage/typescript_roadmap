"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verification_variable_entree = void 0;
var verification_variable_entree = function (parmas) {
    if (typeof parmas === 'string' || 'number' || 'boolean') {
        return console.log(typeof parmas);
    }
    else {
        return console.log('la variable n\'est pas de type string, number ou boolean');
    }
};
exports.verification_variable_entree = verification_variable_entree;
