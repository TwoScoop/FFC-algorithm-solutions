function pair(str) {
 str = str.split('');
 var newArr = [];
  
 for(i=0; i<str.length; i++) {
   switch(str[i]) {
   case "A":
     newArr.push(["A", "T"]);
     break; 
   case ("T"):
     newArr.push(["T", "A"]);
     break; 
   case ("C"):
     newArr.push(["C", "G"]);
     break; 
   case ("G"):
     newArr.push(["G", "C"]);
     break;     
   } 
 }
  
 return newArr;  
}
pair("GCG");