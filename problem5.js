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