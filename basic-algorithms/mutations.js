function mutation(arr) {
 
    var one = arr[0].toLowerCase();
    var two = arr[1].toLowerCase();
    for(x=0; x<two.length; x++) {
        if(one.indexOf(two[x]) === -1) {
            return false;
        }
    } return true;
}

mutation(['hello', 'hey']);