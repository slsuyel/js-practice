// function publicBusFare (participants){
//   let remaining = 0;
//   remaining = participants % 50 ;
// let publicErJnneRemaining = 0;
//   publicErJnneRemaining = remaining % 11;
//   pubBusVara = publicErJnneRemaining * 250 ;
//   return pubBusVara
// }
// let result = publicBusFare(235);
// console.log(result);



function publicBusFare(participants) {
  return (participants % 50 % 11) * 250;
}
let result = publicBusFare(235);
console.log(result);
