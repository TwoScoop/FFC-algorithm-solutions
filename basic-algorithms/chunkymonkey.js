function chunk(arr, size) {
  /* Write a function that splits an array (first argument) 
  into groups the length of size (second argument) and 
  returns them as a multidimensional array. */
  
  var i = 0;
  var newArray = [];
  var finalArray = [];
  
  while (i < arr.length) {
    newArray = arr.slice(i, i+size);
    finalArray.push(newArray);
    i += size;
  }
  return finalArray;
}

chunk(['a', 'b', 'c', 'd'], 2);
