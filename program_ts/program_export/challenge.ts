

// challenge 
// ensemble de defis realisable par le joueur 

export const choix_challenge = (choix: string):any => {

    if (choix === 'action') {
        return console.log('vous avez choisir ' + choix)
    } else {
        return console.log('vous avez choisi ' + choix)
    }
}
