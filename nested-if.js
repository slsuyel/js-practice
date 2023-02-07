var result = 110;
if( result> 0){
    if(result<33){
        console.log('you are fail');
    }
    else if(result >= 33 && result < 40){
        console.log('pass only');
    }
    else if(result >= 40 && result<50){
        console.log('D');
    }
    else if (result >=50 && result <60 ){
        console.log('C');
    }
    else if (result >= 60 && result <70)
    {
        console.log('B');
    }
    else if (result >= 70 && result < 80){
        console.log('A');
    }
    else if (result >=80 && result <=100){
        console.log('A+');
    }

    else{
        console.log('marks Should Be 1-100');
    }
}
else {
    console.log('Try with valid number');
}
