/*
    Chair = 3 cft
    table = 10 cft
    bed   = 50 cft
*/

function wood(chair,table,bed){

 const chairCost = chair * 3 ;
 const tableCost = table * 10 ;
 const bedCost   = bed * 50 ;
 const totalWood = chairCost + tableCost + bedCost;
 console.log(totalWood,chairCost,tableCost,bedCost);

}
var chair = 10 ;
var table = 20 ;
var bed   = 10 ;

wood(chair,table,bed);