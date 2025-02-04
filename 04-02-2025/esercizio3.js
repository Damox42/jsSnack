// Dato un array di prodotti, ottenere solo quelli con prezzo inferiore a 100€

const prodotti = [
    {   
        nome: 'Smartphone', 
        prezzo: 800 
    },
    { 
        nome: 'Cuffie', 
        prezzo: 50 
    },
    { 
        nome: 'Mouse', 
        prezzo: 30 
    },
    { 
        nome: 'Monitor', 
        prezzo: 120 
    }
  ];

  let prodottiLowCost = prodotti.filter((item) => {
    return item.prezzo < 100
  })

  console.log(prodottiLowCost)