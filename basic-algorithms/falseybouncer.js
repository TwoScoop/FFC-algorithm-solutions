function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var newArray = [];
  
  for(i=0; i<arr.length; i++) {
    if(arr[i]) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

bouncer([7, 'ate', '', false, 9]);