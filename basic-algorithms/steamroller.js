function steamroller(arr) {
  /* Flatten a nested array. You must account for varying 
  levels of nesting. */

  arr = arr.join(",").split(",");
  console.log(arr);
  newArr = [];
  
  for(i=0; i<arr.length; i++) {
    if(arr[i] !== ""){
      if(parseInt(arr[i]) >= 0 || parseInt(arr[i]) < 0){
      newArr.push(parseInt(arr[i]));}
      else {
        newArr.push(arr[i]);
      }
    }
  }

  return newArr;

}

steamroller([1, [2], [3, [[4]]]]);