function destroyer(arr) {
  var newArray = []; 
  
  for(var i in arguments) {
    newArray.push(arguments[i]);
  }
  
  return arr.filter(function(value) {
    return newArray.indexOf(value) === -1;           
  });
  
 }

destroyer([1, 2, 3, 1, 2, 3], 2, 3);