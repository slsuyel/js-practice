// const phones =[
//     {Name : 'Panr', Price : 23434, Color : 'Black'},
//     {Name : 'PC', Price : 12323, Color : 'Black'},
//     {Name : 'Laptop', Price : 20000, Color : 'Black'},
//     {Name : 'Phone', Price : 13000, Color : 'Black'},
//     {Name : 'Dress', Price : 32000, Color : 'Black'},
//     {Name : 'htc' , Price : 200, Color : 'Black'},
//     {Name : 'Freeege' , Price : 1300, Color : 'Black'},
// ];
// function totalCost(phones){
//         let sum = 0;
//     for( let i =0 ; i < phones.length; i ++ ){
//        let cost = phones[i];
//         sum = cost.Price + sum;
//     }
//     return sum
// }
// const totalEcpense=  totalCost(phones);
// console.log(totalEcpense);


const bazar =[
 {Name : 'Panr' , Price : 200, Color : 'Black',quantity :5},{Name : 'PC'   , Price : 100, Color : 'Black',quantity :5},
];
function ajkerBazar(bazar){
    let total = 0;
    for(let i = 0 ; i < bazar.length; i++){
       
       let bazarItem = bazar[i]
       let TotalPrice = bazarItem.Price * bazarItem.quantity;
        total = TotalPrice + total ;
        console.log(TotalPrice);
    } return total
}
const bazarCharge = ajkerBazar(bazar);
console.log(bazarCharge);