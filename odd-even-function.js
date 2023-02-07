function isEvenOdd(number){

    const reminder = number % 2;
    if(reminder === 0){
        return true
    }
  else{
    return false
}
}

const input = prompt();
const myNumber = isEvenOdd(input);
console.log(myNumber);