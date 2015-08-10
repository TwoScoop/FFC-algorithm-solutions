function drop(arr, func) {
  /* Drop the elements of an array (first argument), 
  starting from the front, until the predicate 
  (second argument) returns true. */

  return arr.filter(func);
}

drop([1, 2, 3], function(n) {return n < 3; });