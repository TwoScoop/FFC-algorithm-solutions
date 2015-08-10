
function spinalCase(str) {
 /* Convert a string to spinal case. Spinal case 
 is all-lowercase-words-joined-by-dashes. */

   str = str.replace(/([a-z])([A-Z])/g, '$1-$2');
   str = str.replace(/[\s_]/g, "-");
   return str.toLowerCase();
    
}

spinalCase('This Is Spinal Tap');
