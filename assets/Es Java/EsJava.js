/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

console.log('----------ESERCIZIO 1----------');

const pets = ['dog', 'cat', 'hamster', 'redfish'];
console.log(pets);

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

console.log('----------ESERCIZIO 2----------');

const sortedPets = pets.slice().sort();
console.log(sortedPets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log('----------ESERCIZIO 3----------');

const reversePets = pets.slice().reverse();
console.log(reversePets);
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

console.log('----------ESERCIZIO 4----------');
const firstToLast = pets.slice(1).concat(pets[0]);
console.log(firstToLast);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/

console.log('----------ESERCIZIO 5----------');

const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
];

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = 'AA123AA';
}

console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

console.log('----------ESERCIZIO 6----------');

cars.push({
  brand: 'Audi',
  model: 'A6',
  color: 'Green',
  trims: ['s-line', 'avant', 'sportback'],
});

console.log('Array con nuova auto inserita:', cars);
const deletedTrimCars = [];
for (let i = 0; i < cars.length; i++) {
  const deletedTrimCar = {
    brand: cars[i].brand,
    model: cars[i].model,
    color: cars[i].color,
    trims: cars[i].trims.slice(0, cars[i].trims.length - 1), // Rimuove l'ultimo elemento di "trims"
  };
  deletedTrimCars.push(deletedTrimCar);
}

console.log('Array con ultimo elemento di trims rimosso:', deletedTrimCars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

console.log('----------ESERCIZIO 7----------');

const justTrims = [];

for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}
console.log('Array justTrims:', justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

console.log('----------ESERCIZIO 8----------');

for (let i = 0; i < cars.length; i++) {
  if (cars[i].color[0].toLowerCase() === 'b') {
    console.log('Fizz');
  } else {
    console.log('Buzz');
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/

console.log('----------ESERCIZIO 9----------');

const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

let i = 0;
while (numericArray[i] !== 32) {
  console.log(numericArray[i]);
  i++;
}
console.log(numericArray[i]);

console.log('Il ciclo si è fermato al numero 32');

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/

console.log('----------ESERCIZIO 10----------');

const charactersArray = ['r', 'f', 'd', 't', 'a'];

const positionArray = [];

for (let i = 0; i < charactersArray.length; i++) {
  let position;
  switch (charactersArray[i]) {
    case 'a':
      position = 1;
      break;
    case 'b':
      position = 2;
      break;
    case 'c':
      position = 3;
      break;
    case 'd':
      position = 4;
      break;
    case 'e':
      position = 5;
      break;
    case 'f':
      position = 6;
      break;
    case 'g':
      position = 7;
      break;
    case 'h':
      position = 8;
      break;
    case 'i':
      position = 9;
      break;
    case 'l':
      position = 10;
      break;
    case 'm':
      position = 11;
      break;
    case 'n':
      position = 12;
      break;
    case 'o':
      position = 13;
      break;
    case 'p':
      position = 14;
      break;
    case 'q':
      position = 15;
      break;
    case 'r':
      position = 16;
      break;
    case 's':
      position = 17;
      break;
    case 't':
      position = 18;
      break;
    case 'u':
      position = 19;
      break;
    case 'v':
      position = 20;
      break;
    case 'z':
      position = 21;
      break;
  }
  positionArray.push(position);
}
console.log(positionArray);