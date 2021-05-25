function repeatNumber(numbers){
  let indexMoreRepeated = 0;
  let contMoreRepeated = 0;
  let cont = 0;
  for(let index in numbers){
    for(let index1 in numbers){
      if(numbers[index] === numbers[index1]){
        cont += 1;
      }
    }
    if (cont > contMoreRepeated){
      contMoreRepeated = cont; 
      indexMoreRepeated = index;
    }
    cont = 0;
    
  }
  return numbers[indexMoreRepeated]; 
}
console.log(repeatNumber([2, 3, 2, 5, 8, 2, 3]));