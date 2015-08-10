function chunk(arr, size) {
  // Break it up.
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