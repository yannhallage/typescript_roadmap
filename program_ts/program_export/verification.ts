

export const verification_variable_entree = (parmas: any): any => {
    if (typeof parmas === 'string' || 'number' || 'boolean') {
        return console.log(typeof parmas)
    } else {
        return console.log('la variable n\'est pas de type string, number ou boolean')
    }
}