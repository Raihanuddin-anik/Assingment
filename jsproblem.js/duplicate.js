var number = [3, 5, 3, 5, 4, 5, 5, 3, 2];
var uniqueName = [];

for(var i = 0; i<number.length; i++){
    var element = number[i];
    var index = uniqueName.indexOf(element);
    if(index == -1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);