function biggerNumber(numbers){
  let biggerIndex = 1;
  for(let index in numbers){
    if (numbers[index]>numbers[biggerIndex]){
      biggerIndex = index;
    }
  }
  return biggerIndex;
}
console.log(biggerNumber([2, 3, 16, 7, 10, 1]));