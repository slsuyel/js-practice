
// Multiplies the number by 3,Adds 10 to the result,Divides the result by 2,Subtracts 5 from the final result.Return result.
function mindGame(number){
    if(typeof number != 'number'){
        return "opps! Provide valid number"
    }
    let result = ((number * 3 + 10) / 2) - 5 
    return result
}

// checks the text's value "length" is odd,return that..
function evenOdd(text){
    if(typeof text != 'string'){
      return "opps! Provide valid input"
  } 
    let length = text.length;
      if(length % 2 == 0) {
          return "even";
    }
     else return "odd";
     }
// calculates the difference between "number" and 7 and returns it if less than 7, return double of the input....

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

// Code counts negative numbers in an array with a for loop and returns count.

function findingBadData(array){
    if(typeof array != 'object'){
      return "opps! Provide  array only"
  } 
      let Bad_Data = 0 ;
      for(let i=0;i<array.length;i++)
      {
        if (array[i]<0)
        Bad_Data++;
      }
      return Bad_Data
     }


// Calculates total gems, returns difference from 2000 if over 2000.
function  gemsToDiamond(firstFriendgems,secondFriendgems,thirdFriendgems){
    if (typeof firstFriendgems !== 'number' || typeof secondFriendgems !== 'number' || typeof thirdFriendgems !== 'number') {
        return "Oops! Provide valid inputs.";
    }
    const totalDiamond = firstFriendgems * 21 + secondFriendgems * 32 + thirdFriendgems * 43;
   if (totalDiamond > 1000 * 2 )
    { return (totalDiamond - 2000);
   }
   else return totalDiamond
}