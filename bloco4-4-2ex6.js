function sum(n){
  let soma = 0;
  for(let index = 0; index <= n; index += 1){
    soma = soma + index;
  }
  return soma; 
}
console.log(sum(5));