// Hai un oggetto che rappresenta una persona. Estrai il nome e eta usando il destructuring e stampali in console.

const persona = {
    nome: 'Gino',
    cognome: 'Panino',
    eta: 20,
    hobby: ['sport', 'videogiochi']
  };

let {nome, eta} = persona

console.log(`Nome: ${nome}. Età: ${cognome}`);
