

// checks the text's value "length" is odd,return that..
function evenOdd(text){
  if(typeof text != 'string'){
    return "opps! Provide valid input"
} 
  let length = text.length;
    if(length % 2 == 0) {
        return "even";
  }
   else return "odd";
   }