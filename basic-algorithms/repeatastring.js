function repeat(str, num) {
  // repeat after me
  if (num >=0) {
    return str.repeat(num);
  } else {
    str = "";
  }  
  return str; 
}

repeat('abc', 3);