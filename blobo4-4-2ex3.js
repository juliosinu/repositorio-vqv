function smallerNumber(numbers){
  let smallerindex = 1;
  for(let index in numbers){
    if (numbers[index]<numbers[smallerindex]){
      smallerindex = index;
    }
  }
  return smallerindex;
}
console.log(smallerNumber([2, 4, 6, 7, 10, 0, -3]));