// you can write js here
console.log('exo-2');

const myDate = new Date();
let today = myDate.getDay()
let actualHour = myDate.getHours()

let semaine = "nous sommes en semaine"
let we = "c'est le week end !"

let isTesting = true;



function isWE(day, hour) {

        if (isTesting) {

            let userDay = prompt("Veuillez entrer le jour actuel");
            let userHour = prompt("Veuillez entrer l'heure actuelle");
            

            if (userDay === "mardi" || userDay === "mercredi" || userDay === "jeudi" || (userDay === "lundi" && userHour > 9) || (userDay === "vendredi" && userHour > 17) )  {
                console.log(semaine)
            
            } else {
                console.log(we)
            }
    
        } else {


            if (today > 2 && today < 5) {
                console.log(semaine)
            }
            
            else if ((today = 5 && actualHour < 17) && (today = 1 && actualHour > 9)) {
                console.log(semaine) 
            
            } else {
                console.log(we)
            }

    }



}

isWE(today, actualHour)
