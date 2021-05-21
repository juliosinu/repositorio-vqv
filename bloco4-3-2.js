let number = 5;

for(cont = 1; cont <= number; cont += 1 ){
  for(index = 1; index <= cont; index += 1){
    process.stdout.write('*')
  }
  console.log('\n');
}