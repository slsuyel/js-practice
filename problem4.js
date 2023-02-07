// Code counts negative numbers in an array with a for loop and returns count.

function findingBadData(array){
  if(typeof array != 'object'){
    return "opps! Provide  array only"
} 
    let Bad_Data = 0 ;
    for(let i=0;i<array.length;i++)
    {
      if (array[i]<0)
      Bad_Data++;
    }
    return Bad_Data
   }