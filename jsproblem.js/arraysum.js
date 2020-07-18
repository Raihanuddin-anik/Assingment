// var numbers = [34, 45, 67, 23, 45, 56, 78]
//  var sum = numbers[0];
// for(var i = 0; i < numbers.length; i++){
//     var element = numbers[i];
//     sum = sum + element;


// }
// console.log(sum);

function getArraySum(numbers){
    var sum = 0;
    for(var i = 0; i < numbers.length; i++){
          var element = numbers[i];
           sum = sum + element;
    }
    return sum;
}
var numbers = [34, 45, 67, 23, 45, 56, 78];
var result = getArraySum(numbers);
console.log(result);

var total = getArraySum([34, 45, 44, 34]);
console.log(total);