function findLongestWord(str) {
  var a = str.split(" ");
  var z = 0
  
  for (i=0; i<a.length; i++) {
    var count = a[i].length;
    
    if (count > z) {
      z = count; 
    }  
  }
  return z
}

findLongestWord('The quick brown fox jumped over the lazy dog');