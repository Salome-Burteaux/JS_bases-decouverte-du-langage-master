// you can write js here
console.log('exo-3');

// génère un nombre aléatoire entre 0 et 2
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


let playerInput = prompt("Your choice ( rock, paper, scissors) ?")


// récupère le choix du joueur
function getPlayerChoice(input) {


    if (input == "rock" || "scissors" || "paper" || "bomb") {

        console.log("choix du joueur = " + input);
        return input.toLowerCase();

    } else {
        console.log("Erreur")
        return null;
    }

}

playerInput = getPlayerChoice(playerInput);

let computerChoice = getRandomInt(3);
console.log("choix de l'ordinateur = " + computerChoice)


// génère le choix de l'ordinateur
function getComputerChoice() {
    

    if (computerChoice == 0) {
        computerChoice = "rock";
        console.log("choix de l'ordinateur = " + computerChoice);
        return computerChoice;
    }

    else if (computerChoice == 1) {
        computerChoice = "scissors";
        console.log("choix de l'ordinateur = " + computerChoice);
        return computerChoice;
    }

    else if (computerChoice == 2) {
        computerChoice = "paper";
        console.log("choix de l'ordinateur = " + computerChoice);
        return computerChoice;

    } else {
        console.log("Erreur")
    }

}

// compare les résultats pour trouver le gagnant
function findWinner(playerChoice, computerChoice) {
     
    let tied = "Egalité"
    let won = "Gagné"
    let lost = "Perdu"

    if (playerChoice === computerChoice) {
        console.log(tied);
    }


    else if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
            console.log(won);
        } else { 
            console.log(lost);
        }
    }


    else if (playerChoice === "paper") {
        if (computerChoice === "rock") {
            console.log(won);
        } else {
                console.log(lost);
        }
    }

    else if (playerChoice === "scissors") {
        if (computerChoice === "paper") {
            console.log(won);
        } else {
                console.log(lost);
        }
    }

    else if (playerChoice === "bomb") {
        console.log(won);
    }
}

function playGame() {
    findWinner(playerInput, computerChoice);
}



getPlayerChoice(playerInput);
getComputerChoice();
playGame();