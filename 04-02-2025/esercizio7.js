// Replica esercizio dei cani
// Dato un array di oggetti che rappresenta una lista di cani, stampare in pagina una card, per ognuno di essi.

function stampaCani() {
    dogs.forEach((item) => {
        const card = document.createElement('div')
    
        const [name, breed, image] = item
    
        card.appendChild(name)
        card.appendChild(breed)
        card.appendChild(image)
        document.body.appendChild(card)
    })
}

const dogs = [
    {
      name: 'Buddy',
      breed: 'Golden Retriever',
      image: 'https://www.centrodogtrainer.it/wp-content/uploads/2020/11/addestramento-golden-retriever-1920x960.jpg',
    },
    {
      name: 'Luna',
      breed: 'Siberian Husky',
      image: 'https://www.my-personaltrainer.it/2024/01/19/siberian-husky_900x760.jpeg',
    },
    {
      name: 'Rocky',
      breed: 'Bulldog',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Bulldog_inglese.jpg/1200px-Bulldog_inglese.jpg',
    },
    {
      name: 'Molly',
      breed: 'Dachshund',
      image: 'https://upload.wikimedia.org/wikipedia/commons/b/be/닥스훈트%28단모종%29_%28Dachshund_%28Short%29%29.jpg',
    },
    {
      name: 'Max',
      breed: 'Border Collie',
      image: 'https://www.my-personaltrainer.it/2024/10/25/border-collie-orig.jpeg',
    },
    {
      name: 'Daisy',
      breed: 'Poodle',
      image: 'https://image.petmd.com/files/styles/863x625/public/2023-01/toy-poodle.jpg',
    },
  ];

stampaCani()

const nome = document.getElementById('nome')
const razza = document.getElementById('razza')
const img = document.getElementById('img')
const cane = {}

nome.addEventListener('change', (e) => {
    cane.name = e.target.value
})

razza.addEventListener('change', (e) => {
    cane.breed = e.target.value
})

img.addEventListener('change', (e) => {
    cane.image = e.target.value
})

const addBtn = document.getElementById('add')
addBtn.addEventListener('click', (e) => {
    dogs.push(cane)
    stampaCani()
})