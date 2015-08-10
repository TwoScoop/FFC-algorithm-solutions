function convert(num) {
 var result = '',
        dec   = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    dec.forEach(function (n, i) {
      while (num >= n) {
        result += roman[i];
        num -= n;
      }
    });
    return result;
}


convert(36);