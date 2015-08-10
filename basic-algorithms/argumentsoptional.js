function add() {
  /* Create a function that sums two arguments together. If only 
  one argument is provided, return a function that expects one additional argument and will return the sum. */

  var a = arguments[0];
  
  if(arguments.length==2){
    if(typeof arguments[1] != typeof 2){ return ;}
    return a+arguments[1];
  }
  
  if(arguments.length==1){
    if( typeof a != typeof 2 ){ return ;}
    return function(n){
      if(typeof n != typeof 2 || typeof a != typeof 2 ){ return ;}
      return n+a;
    };
  }
  
}

add(2,3);