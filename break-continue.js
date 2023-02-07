// var i = 0 ;
// for( var i = 0 ; i <= 100 ; i++){
//     console.log(i);
//     if (i >= 30) { break; }
// }

// var numbers = 0 ;
// while ( numbers <= 10){
//     console.log('hiii');
//     numbers++;
//     if (numbers == 2){
//         break;
//     }
// }
var items = ['bottle', 'mobile', 'mouse','box','tab']
for (i = 0 ; i < items.length ; i++ )
{
    var item = items[i];
   if(item == 'mouse'){
    continue;
   }
    console.log(item);
}