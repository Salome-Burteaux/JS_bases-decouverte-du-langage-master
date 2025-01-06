// you can write js here
var kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");

// let kelvins = 294;

// je déclare une variable celsius qui va soustraire 273 à la valeur de la variable kelvins pour la convertir
let celsius = kelvins - 273;

console.log(celsius);

// je déclare une variable fahrenheits qui va multiplier par 9/5 + 32 la valeur de la variable celsius pour la convertir
// j'utilise la méthode Math.floor pour obtenir un nombre entier
let fahrenheits = Math.floor(celsius * (9/5) + 32);

console.log(fahrenheits);