function checkPalindrome(str) {
  let letras = str.length;
  for (let index = 0; index < letras/2; index++) {
   if (str[index] !== str[letras - 1 - index]) {
    return false;
   }
  }
  return true;
 }

 console.log(checkPalindrome("arara"));
 
console.log(checkPalindrome("desenvolvimento"));
 
