let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

soma = 0;
contador = 0;
for (index = 0; index<numbers.length; index += 1){
  soma = soma + numbers[index];
  contador ++;
}

console.log(soma/contador);

