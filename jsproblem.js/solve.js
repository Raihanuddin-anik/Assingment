var a = 5;
var b = 7;
console.log("before swap: a =", b, "b =", a);
var temp = a;
a = b;
b = temp;
console.log("after swap: a =", b, "b =", a);

// 2nd process

var x = 5;
var y = 7;
x = x + y;
y = x - y;
x = x - y;
console.log("after swap: x =", x, "y =", y);

// 3rd process/javascript special process

var p = 5;
var q = 7;
[p, q] = [q, p]
console.log("after swap: p =", p, "q =", q);