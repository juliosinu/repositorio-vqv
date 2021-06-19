const testingScope = escopo => {
    if (escopo === true) {
      const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      console.log(`${ifScope} ótimo, fui utilizada no escopo !`);
    } else {
      const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(`${elseScope} ótimo, fui utilizada no escopo !`);
    }
}

testingScope(false);