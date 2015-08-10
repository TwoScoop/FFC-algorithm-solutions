function palindrome(str) {
  // Good luck!
  str = str.replace(/[^a-zA-Z]/g,"").toLowerCase();
  var revStr = str.split('').reverse().join('');
  
  if (str === revStr) {
    return true;
  } else {
    return false;  
}
};


palindrome("eye");