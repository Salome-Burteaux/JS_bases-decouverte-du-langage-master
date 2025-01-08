console.log("exo-7");

console.log(jsonDatas);

for (let article in jsonDatas) {
  console.log(
    `${article}: ${jsonDatas[article].name} ${jsonDatas[article].type} ${jsonDatas[article].description} ${jsonDatas[article].price} ${jsonDatas[article].quantity}`
  );
}

let tradType = {
  videoGame: "Jeux Vidéos",
  car: "voiture",
  house: "maison",
  game: "jeux",
  show: "évènement",
};



jsonDatas.forEach((element) => {
  switch (element.type) {
    case "videoGame":
      element.newType = tradType.videoGame;
      break;
    case "car":
      element.newType = tradType.car;
      break;
    case "house":
      element.newType = tradType.house;
      break;
    case "game":
      element.newType = tradType.game;
      break;
    default:
      element.newType = tradType.show;
      break;
      
  }
});

console.log(tradType.car);
console.log(jsonDatas);

for (let article in jsonDatas) {
  console.log(
    `${article}: ${jsonDatas[article].name} ${jsonDatas[article].type} ${jsonDatas[article].description} ${jsonDatas[article].price} ${jsonDatas[article].quantity} ${jsonDatas[article].newType}`
  );
}


// 4. Créer une page HTML et lister les articles depuis la donnée.
let listeArticle = document.getElementById("liste");

jsonDatas.forEach(element => {

    listeArticle.innerHTML += `${element.name}  ${element.type}  ${element.description}  ${element.price}  ${element.quantity}` ;
    
});
