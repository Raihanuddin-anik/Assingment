// 5! = 1*2*3*4*5

// var i = 1;
// var factorial = 1;
// while (i <= 10) {
//     factorial = factorial * i;
//     // console.log(i, factorial);
//     i++
// }
// console.log(factorial);

function factorial(n){
var i = 1;
var fact = 1;
while (i <= n) {
    fact = fact * i;
    // console.log(i, factorial);
    i++
}
return fact;
}
var result = factorial(4)
console.log(result);
