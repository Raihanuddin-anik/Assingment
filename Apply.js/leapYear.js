// const year = 3566;
// let leapyear = 3687 % 4;
// if (leapyear == 0){
//     console.log('your year is a leap Year');
// }
// else{
//     console.log('your year is not a leap year')
// }

function isleapYear(year){

    
    let leapyear = 3688 % 4;
    if (leapyear == 0){
        return true;
    }
    else{
        return false;
    }
}

const check2000 = isleapYear(2000);
console.log(check2000);