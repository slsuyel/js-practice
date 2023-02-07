
// Multiplies the number by 3,Adds 10 to the result,Divides the result by 2,Subtracts 5 from the final result.Return result.
function mindGame(number){
    if(typeof number != 'number'){
        return "opps! Provide valid number"
    }
    let result = ((number * 3 + 10) / 2) - 5 
    return result
}

