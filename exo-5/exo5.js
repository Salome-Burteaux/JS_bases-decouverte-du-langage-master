// you can write js here

console.log('exo-5');

let input = "Bonjour";

let vowels = ["A", "E", "I", "O", "U", "Y"];

resultArray = [];

input.toUpperCase().split('').forEach(iElement => {

    // console.log(iElement);

    vowels.forEach(vElement => {

        // console.log(vElement);
        
        if (vElement === iElement) {
            console.log("correspondance : " + vElement);
            resultArray.push(vElement);
            console.log(resultArray.join(" "));
        }
    });


}); 




