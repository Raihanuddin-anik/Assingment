// 10! = 1*2*3*4*5*6*7*8*9*10
// 2! = 1*2
// 0! = 1
// 3! =1*2*3
// 4! = 3!*4
// 5! = (5-1)!*5
// n! = (n-1)!*n
function factorial(n){
    if(n == 0){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}
var result = factorial(4);
console.log(result);