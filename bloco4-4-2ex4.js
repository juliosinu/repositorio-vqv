function biggerName(names){
  index1 = 0;
  for(let index in names){
    if (names[index].length > names[index1].length){
      index1 = index;       
    }
  }
  return names[index1];
}
console.log(biggerName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));