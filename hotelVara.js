// var myDays       = 50 ;
// var first1To10   = 500;
// var second11To20 = 300;
// var third21Plass = 100;

// if(
//     myDays <= 10
// ){
//     var first1To10Cost = myDays * 500;
//     console.log('Apnar ',myDays,' days charge :', first1To10Cost);
// }
// else if(
//     myDays > 10 && myDays <=20 
// ){
//     var first1To10Cost = 10 * 500;
//     var remainDays = myDays - 10;
//     var second11To20Cost = remainDays * 300;
//     var secondTotalCost = second11To20Cost + first1To10Cost;
//     console.log('Apnar ',myDays,' days charge :', secondTotalCost);
// }
//  else{
//      var first1To20Cost = (10 * 500) + (300* 10);
//      var remainDays = myDays - 20;
//      var thirdCost = remainDays * 100;
//      var thirdTotalCost = thirdCost + first1To20Cost ;
//      console.log('Apnar ',myDays,' days charge :', thirdTotalCost);
//  }


function hotelVara(myDays) {
    var first1To10 = 500;
    var second11To20 = 300;
    var third21Plass = 100;
    if (
        myDays <= 10
    ) {
        var first1To10Cost = myDays * 500;
        console.log('Apnar ', myDays, ' days charge :', first1To10Cost);
    } else if (
        myDays > 10 && myDays <= 20
    ) {
        var first1To10Cost = 10 * 500;
        var remainDays = myDays - 10;
        var second11To20Cost = remainDays * 300;
        var secondTotalCost = second11To20Cost + first1To10Cost;
        console.log('Apnar ', myDays, ' days charge :', secondTotalCost);
    } else {
        var first1To20Cost = (10 * 500) + (300 * 10);
        var remainDays = myDays - 20;
        var thirdCost = remainDays * 100;
        var thirdTotalCost = thirdCost + first1To20Cost;
        console.log('Apnar ', myDays, ' days charge :', thirdTotalCost);
    }
}
var stayDays = 25;
hotelVara(stayDays);