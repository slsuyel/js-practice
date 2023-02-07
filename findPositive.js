// function findPositiveNumbers(numbers) {
//     let positiveNumbers = [];
//     for (let i = 0; i < numbers.length; i++) {
//       if (numbers[i] > 0) {
//         positiveNumbers.push(numbers[i]);}}
//          return positiveNumbers;}
//   let numbers = [-1, 2, 3, 4, -5, 6, 7,9];
//   let positiveNumbers = findPositiveNumbers(numbers);
//   console.log(positiveNumbers);
  

function positiveNumbers(numbers) {
    let positiveNumbersArray = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < 0) {
        break;
      }
      positiveNumbersArray.push(numbers[i]);
    }
    return positiveNumbersArray;
  }
  let numbers = [1, 2, 3, -1, 4, 5];
  let positiveNumbersArray = positiveNumbers(numbers);
  console.log(positiveNumbersArray); 
