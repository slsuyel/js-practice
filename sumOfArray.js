function sumOfArry(numbers){
    sum = 0;
    for ( let i = 0 ; i < numbers.length ; i++ ){
        const index = i ;
        const element = numbers[index]
        sum = sum +  element;
        console.log(index,element,sum);
    }
    return sum;
}
const  myNumbers = [29, 34, 30, 90,  66,34 ,20,]
sumOfArry(myNumbers);