var student = {id:121, phone:1734, name:"Tahsin"};
var student2 = {id:122, phone:01634, name:"Tanha"};

var phoneNo1 = student.phone;
var phoneNo2 = student["phone"];
var phonePropName = "phone";
var phoneNo3 = student[phonePropName];                              
// update phoneno
student2.phone = 544664;
student2["phone"] = 6654543;
student2[phonePropName] = 999111;

student2.cinema = "OGni22"
student2["cinema"] = "cutegirl"

console.log(phoneNo3);
console.log(student2);