// Dato un array di nomi, usa map per creare un nuovo array con tutti i nomi in maiuscolo.

const nomi = ['gino', 'pino', 'luca'];

let nomiMaiuscolo = nomi.map((item) => {
    return item.toUpperCase()
})

console.log(nomiMaiuscolo);