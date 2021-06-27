const verifySorteio = (mynumber, numberSorteado) => mynumber === numberSorteado;

const resultadoSorteio = (mynumber, callback) => {
  const numberSorteado = Math.floor((Math.random()*5)+1);

  console.log(numberSorteado);
  const resultado = callback(mynumber, numberSorteado);
  if (resultado === true) {
    return 'Vc ganhou';
  } else {
    return 'Tente novamente';
  }
  
}
console.log(resultadoSorteio(5,verifySorteio));
