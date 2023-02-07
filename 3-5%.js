for(let i = 1; i <= 50 ; i ++){
   if( i % 3 === 0 && i % 5 === 0
   ){
    console.log("3 & % dara");
   }
   else if( i % 3 == 0
   ){
    console.log("Foo");
   }
   else if( i % 5 == 0
   ){
    console.log("Bar");
   }
   else {
    console.log(i);
   }
}