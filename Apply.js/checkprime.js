function isprime(n){

    for(i = 2; i < n; i++){
        console.log(i, n % i);
    
        if(n % i ==0){
           return "not a prime number";
            
        }
    
    }
           return "your number is a prime number";
}

var result = isprime(128);
console.log(result);