// Hai due array di iscritti a un corso. Usando lo spread operator, crea un nuovo array che contenga tutti gli elementi di entrambi gli array.

const iscrittiOnline = ['Gino', 'Pino', 'Roberto'];
const iscrittiOffline = ['Franca', 'Salvo', 'Maria'];

let iscritti = [...iscrittiOnline, ...iscrittiOffline]

console.log(iscritti);
