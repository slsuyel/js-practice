function bestfriend(friends){
   let longestName = ''
    for (let i = 0; i < friends.length ; i++ ){
       if( friends[i].length > longestName.length){
        longestName = friends[i]
       }
    }
    return longestName
}


let friends = ["John", "Janeerwre", "Jim", "Jessica"];
let longestName = bestfriend(friends);
console.log(longestName);