

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!
const wakeUp = () => console.log('Acordando!!');
const breakFast = () => console.log('Bora tomar café!!');
const sleep = () => console.log('Partiu dormir!!');

const doingThings = (callback) => callback;

doingThings(breakFast());