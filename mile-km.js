function milesToKm(miles){
    const kilometer = miles * 1.60934;
    return(kilometer);
}

const input = 80;
const  inputMiles = milesToKm(input);
console.log(input, 'mile = ' + inputMiles, 'km' );