let numbers = [5, 9, 3, 19, 70, 8, 100, 35, 27];

contador = numbers[0];
numerommenor = 0;
for (index = 1; index<numbers.length; index += 1){
  if(contador < numbers[index]){
    numeromaior = contador;
    contador = contador;
  }
  else {
    numeromenor = numbers[index];
    contador = numbers[index]
  }
}
console.log(numeromenor);