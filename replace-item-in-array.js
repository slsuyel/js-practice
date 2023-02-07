var arr = ['css', 'js', 'ts'];

var fromIndex = arr.indexOf('css'); // 👉️ 0
var toIndex = 2;

var element = arr.splice(fromIndex, 1)[0];
console.log(element); // ['css']

arr.splice(toIndex, 0, element);

console.log(arr); // 👉️ ['js', 'ts', 'css']
