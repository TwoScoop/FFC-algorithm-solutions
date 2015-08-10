function translate(str) {
  
  var newString = '';
  
  
  if(str.charAt(0).match(/[aeiou]/i)) {
    newString = str + "way";
  } else if(str.charAt(0).match(/[^aeiou]/i) && str.charAt(1).match(/[^aeiou]/i))  { 
    newString = str.substr(2) + str.charAt(0) + str.charAt(1) + 'ay';
  } else {
    newString = str.substr(1) + str.charAt(0) + 'ay';               
  }
    
  return newString;
}

translate("are");