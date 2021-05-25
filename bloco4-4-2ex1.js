function checkPalindrome(str) {
  let letras = str.split('');
  for (let index in letras) {
    if (letras[index] != str[(str.length - 1)- index]) {
      return false;
    }else {
      return true;
    }
  }
}
console.log(checkPalindrome('arara'));
console.log(checkPalindrome('desenvolvimento')); 