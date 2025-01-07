// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

// enlever le dernier élément d'un tableau
secretMessage.pop();
console.log(secretMessage)

// Utiliser une méthode pour ajouter les mots 'to' and 'program' comme des éléments distincts à la fin du tableau.
secretMessage.push('to','program');
console.log(secretMessage)

// Changer le mot 'easily' par 'right' en accédant au bon index du tableau.
let found = secretMessage.findIndex((element) => element === "easily");
console.log(found);

if (found !== -1) {
    secretMessage[found] = "right";
}
console.log(secretMessage);

// Utiliser une méthode pour supprimer le premier élément du tableau.
let deleteTheFirstValue = secretMessage.shift();
console.log(secretMessage);

// Utiliser une méthode pour ajouter la chaine "Programming" en début de tableau.
secretMessage.unshift("Programming");
console.log(secretMessage);

// Utiliser une méthode pour remplacer la série de cinq mots : 'get', 'right', 'the', 'first', 'time' par un seul mot : 'know'.
secretMessage.splice(5, 5, 'know');
console.log(secretMessage);

// Utiliser la méthode `.join` pour afficher le message secret dans la console.
console.log(secretMessage.join());