const fatorial = number => {
    let contador = 1;

    for (let index = 1; index <= number; index += 1){
        contador *= index;
    }
    return contador; 
}

console.log(fatorial(4));