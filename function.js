function bookSell(money){
    var bookPrice = 10;
    totalSell = bookPrice * money;
    return(totalSell);

  }
 var sell = bookSell(30);
 console.log(sell);