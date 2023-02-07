function sumArray(Numbers){
        sum = 0;
    for(let i = 0 ; i < Numbers.length; i++){
       
        index = i;
        Element = myNumbers[index]
        sum = sum + Element;
    console.log(index,Element , sum);
    }  
    return sum
}

function getOdd (numbers){
    const oddNumber = []

    for (let i = 0; i < numbers.length ; i ++){
        index = i ;

        Element = numbers[index];
        if( Element % 2 !== 0){
            console.log(index,Element);
            oddNumber.push(Element);
          
        }
    }
}


const myNumbers = [20, 21,24,55,67,97,87] ;
sumArray(myNumbers);
const result = getOdd(myNumbers);

console.log(result);