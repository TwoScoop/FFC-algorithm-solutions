function smallestCommons(arr) {
  /* Find the smallest number that is evenly 
  divisible by all numbers in the provided range. */

  //greatest common denominator of two numbers 

function gcd(a, b) {
    if (b === 0) {  
        return a;
    } else {
       return gcd(b, a%b);
    }
} 

//smallest common denominator of two numbers (scd)

function scd (a,b) {
     return a*b/gcd(a,b);
}

//least common multipe of a range of numbers

   arr = arr.sort(function(a, b){return a-b;});
   var scm = 1; 
   for (var i = arr[0]; i<=arr[1]; i+=1) { 
        scm =  scd(scm, i); 
    }

  return scm;
}


smallestCommons([1,5]);