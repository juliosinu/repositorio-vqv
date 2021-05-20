let numbers = [5, 9, 3, 19, 70, 8, 2, 35, 27];

soma = 0;
contador = 0;
for (index = 0; index<numbers.length; index += 1){
  soma = soma + numbers[index];
  contador ++;
}

if ((soma/contador)>=20){
  console.log('valor maior que 20');
}
else {
  console.log('valor menor igual a 20')
}


