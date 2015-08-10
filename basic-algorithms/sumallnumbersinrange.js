function sumAll(arr) {
  var max = Math.max.apply(Math, arr);
  var min = Math.min.apply(Math, arr);
  var sum = 0;
  
  for(i=min; i<=max; i++) {
    sum += i;   
  }
  
  return sum; 
}

sumAll([1, 4]);