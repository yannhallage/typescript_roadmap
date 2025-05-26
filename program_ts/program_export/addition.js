"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.variable_additionner = void 0;
var variable_additionner = function () {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    return rest.map(function (e) { return console.log(e * e); });
};
exports.variable_additionner = variable_additionner;
