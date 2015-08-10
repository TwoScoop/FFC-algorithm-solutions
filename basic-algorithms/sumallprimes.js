function sumPrimes(num) {
  /* Sum all the prime numbers up 
  to and including the provided 
  number. */

  var sum = 0; 
  
  for(var i=num; i>1; i--) {
    var j = 2; 
    while(i % j !== 0) {
      j++;
    }
    
    if(i===j) {
      sum+=i;
    }
  }
  
    return sum; 
}

sumPrimes(10);