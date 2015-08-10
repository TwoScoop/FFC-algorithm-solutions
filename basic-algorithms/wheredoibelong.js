function where(arr, num) {
  // Find my place in this sorted array.
  arr.push(num);
  arr.sort(); 
  return arr.indexOf(num); 
  
}

where([40, 60], 50);