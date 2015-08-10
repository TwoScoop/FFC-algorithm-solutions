function every(collection, pre) {
  /* Check if the predicate (second argument) returns truthy 
  (defined) for all elements of a collection (first argument). */
  
  for(i=0; i<collection.length; i++) {
      if(collection[i].hasOwnProperty(pre) === false) {
        return false;            
      } 
  }
  
  return true; 
  
}

every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, 
{'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex');
