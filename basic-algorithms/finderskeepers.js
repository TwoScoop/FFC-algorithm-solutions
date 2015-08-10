function find(arr, func) {
  /* Create a function that looks through an array (first 
  argument) and returns the first element in the array that 
  passes a truth test (second argument). */ 	

   if(arr.some(func)){
     for(i=0; i<=arr.length; i++) {
       if(func(arr[i])) {
         return arr[i];
       }
     }
    } else {
     return undefined;
    }      
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });