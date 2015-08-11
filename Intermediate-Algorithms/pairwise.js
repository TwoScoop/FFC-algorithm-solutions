function pairwise(arr, arg) {

/*  
Return the sum of all indices of elements of 'arr' that can be paired with one other 
element to form a sum that equals the value in the second argument 'arg'. If multiple 
sums are possible, return the smallest sum. Once an element has been used, it 
cannot be reused to pair with another.  
*/


   var newArray = []; 
    
  for(i=0; i<arr.length; i++) {
    for(j=i+1; j<arr.length; j++) {
      if(arr[i] + arr[j] === arg && newArray.indexOf(i) === -1 && newArray.indexOf(j) === -1) {
        newArray.push(i,j);
      }
    }
  }
   
  console.log(newArray); 
   
  if(arr.length<1) {
    return 0; 
  }
  
  return newArray.reduce(function(a, b) {
    return a+b; 
  }); 
}

pairwise([1,4,2,3,0,5], 7);