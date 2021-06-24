// Ao chamar a função doingThings:
const doingThings = (wakeUp) => {
  return wakeUp;
}

const acorda = () => 'Acordando!!';
const tomarCafe = () => 'Bora tomar café!!';
const dormir = () => 'Partiu dormir';

console.log(doingThings(acorda()));
console.log(doingThings(tomarCafe()));