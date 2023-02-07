var marks = parseInt(prompt("Enter a Value", "0"));


if (marks >= 80 && marks <= 100){
    // console.log('A+');
    document.write('A+')
}
else if(marks >=70 && marks <= 79){
      document.write('A');
}
else if(marks >=60 && marks <= 69){
      document.write('A-');
}
else if(marks >=50 && marks <= 59){
      document.write('B');
}
else if(marks >=40 && marks <= 49){
      document.write('C');
}
else if(marks >=33 && marks <=39){
      document.write('D');
}

else{
      document.write('Fail');
}