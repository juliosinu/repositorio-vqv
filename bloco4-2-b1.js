let array = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];
for (let i= 1; i < array.length; i += 1) {
  for (let j = 0; j < i; j += 1) {
    if (array[i] < array[j]) {
      let position = array[i];
      array[i] = array[j];
      array[j] = position;
    }
  }
}
for (cont = 0; cont < array.length; cont += 1){
  console.log(array[cont]);
}
