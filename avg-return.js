function assAvg(assinmen1, assinmen2, assinmen3){
    const totalMarks = assinmen1 + assinmen2 + assinmen3 ;
    const avgMarks = totalMarks / 3 ;
    return avgMarks;

}
var ass1 = 40;
var ass2 = 50;
var ass3 = 10;

const avg = assAvg(ass1,ass2 , ass3);

var avagg = avg.toFixed(2)
console.log('amr assignment ar avg marks :' + avagg);

var ass1 = 56;
var ass2 = 54;
var ass3 = 10;
console.log('Rakib ar  assignment ar avg marks :' + avg);