function sumFibs(num) {
  /* Return the sum of all odd Fibonacci 
  numbers up to and including the passed 
  number if it is a Fibonacci number. */

  var fib = [1,1];
  var z= 0;
  var i = 2;
  
  while(i<num) {
    fib[i] = fib[i-1] + fib[i-2];
    i++;
  }
  
  for(i=0; i<fib.length; i++) {
    if(fib[i]%2 !== 0 && fib[i] <= num) {
      z += fib[i];
    }
  }
  
  return z;
}

sumFibs(4);