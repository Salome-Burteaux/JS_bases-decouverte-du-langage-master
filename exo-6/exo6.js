// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
  name: "Joe's house",
  rooms: 5,
  garage: false,
  bathrooms: 1 + 2,
  cars: ["Clio", "Van"],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe
console.log("nombre de voitures : " + joeInfo.cars.length);

// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.
joeInfo.bathrooms = 1;
console.log("nombre de sdb : " + joeInfo.bathrooms);

// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information.
joeInfo.garage = 1;
console.log("nombre de garage : " + joeInfo.garage);

let team = {
  players: [
    {
      firstName: "Rafael",
      lastName: "Nadal",
      age: 32,
    },
    {
      firstName: "Williams",
      lastName: "Serena",
      age: 35,
    },
    {
      firstName: "Williams",
      lastName: "Venus",
      age: 29,
    },
  ],

  games: [
    {
      opponent: "Broncos",
      teamPoints: 42,
      opponentPoints: 27,
    },
    {
      opponent: "Paris",
      teamPoints: 74,
      opponentPoints: 96,
    },
    {
      opponent: "Madrid",
      teamPoints: 74,
      opponentPoints: 96,
    },
  ],

  addPlayer(firstName, lastName, age) {
    const newPlayerIndex = Object.keys(this.players).length + 1;

    this.players[newPlayerIndex] = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
  },

  addGames(opponent, teamPoints, opponentPoints) {
    const newGamesIndex = Object.keys(this.games).length + 1;

    this.games[newGamesIndex] = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    };
  },

  calculateTotalTeamPoints() {
    const totalTeamPoints = Object.values(this.games).reduce(
      (acc, game) => acc + game.teamPoints,
      0
    );
    console.log("moyenne score team : " + totalTeamPoints);
  },

  calculateAverageOpponentPoints() {
    const totalOpponentPoints = Object.values(this.games).reduce(
      (acc, game) => acc + game.opponentPoints,
      0
    );
    let average = totalOpponentPoints / Object.values(this.games).length;
    console.log("moyenne score adversaire : " + average);

    return average;
  },
};

team.addPlayer("Federer", "Roger", 35);
team.addGames("Berlin", 4, 12);
team.calculateTotalTeamPoints();
team.calculateAverageOpponentPoints();

console.log(team.players);
console.log(team.games);



function findOldestPlayer() {
    
    let oldestAge = team.players[0];
    console.log(oldestAge)

    team.players.forEach((element) => {

        if (oldestAge["age"] < element["age"]) {
            
            oldestAge = element["age"],
        
            console.log("âge du joueur le plus âgé : " + oldestAge);
            return oldestAge;
        }
        
    });

}

findOldestPlayer();

