// calculates the difference between "number" and 7 and returns it if less than 7,else return double of the input....

function isLGSeven(number){
    if(typeof number != 'number'){
        return "opps! Provide valid input"
    } 
    const difference = number - 7
    if ( difference < 7) {
        return difference
    }
    else return number * 2 ;
}