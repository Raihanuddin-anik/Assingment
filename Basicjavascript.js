var number1 = 25;
var number2 = '15.5';
  number2 =parseFloat(number2);
 console.log(number1 + number2);

 var number1 = 25;
 var number2 = '15.5';
   number2 =parseInt(number2);
  console.log(number1 + number2);

  var number1 = 25;
  var number2 = '15.5';
  number2 = +number2;
 console.log(number1 + number2);

 var number1 = 25;
 var number2 = 15.5;
  number1 = ' ' + number1;
 console.log(typeof number1);


 var number1 = 0.1;
 var number2 = 0.2;
 var total = number1 + number2;
 
total = total.toFixed(3)
console.log(total);