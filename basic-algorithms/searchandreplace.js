function replace(str, before, after) {
 
  if(before.charAt(0) === before.charAt(0).toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.substr(1);
  }
 
  str = str.replace(before, after);
  
  return str; 
    
}

replace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");