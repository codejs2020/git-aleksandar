/* eslint-disable no-unused-vars */
// 1. zadatak
const slova = ['a', 'b', 'c']
// 2. zadatak
const brojevi = [1, 2, 3]
// 3. zadatak
const imena = ['Aleksandar', 'Branko', 'Marko', 'Darko', 'Stefan', 'Luka', 'Nemanja', 'Pavle', 'Nikola', 'Milos']
const prezimena = ['Stojanovic', 'Radicevic', 'Maksimovic', 'Cosic', 'Ilic', 'Jovic', 'Matic', 'Arsenijevic', 'Milutinov', 'Maric']
const automobiliMarke = ['BMW', 'Audi', 'Opel', 'Mercedes', 'Ford', 'Skoda', 'Porsche', 'Ferari', 'Fiat', 'Reno']
const zanimanja = ['Advokat', 'Elektricar', 'Profesor', 'Programer', 'Automehanicar', 'Slikar', 'Konobar', 'Bastovan', 'Ugostitelj', 'Vaspitac']
// 4. zadatak
const min = 1000000
const max = 10000000
const random = []
for (let i = 0; i < 50; i++) {
  random[i] = Math.round(Math.random() * (max - min + 1) + min)
}
// eslint-disable-next-line no-console
console.log(random)
// 5. zadatak
const slova2 = 'qwertyuiopasdfghjklzxcvbnm'.split('')
const randomSlova = []
for (let i = 0; i < 200; i++) {
  randomSlova[i] = slova2[Math.round(Math.random() * 25)]
}

// eslint-disable-next-line no-console
console.log(randomSlova)
// 6. zadatak
const niz4 = [[1, 2, 3], ['a', 'b', 'c'], [7, 4, 6]]
// 7. zadatak
for (const el in niz4) {
  // eslint-disable-next-line no-console
  console.log(niz4[el])
}
// 8. zadatak
for (let i = 0; i < slova.length; i++) {
  // eslint-disable-next-line no-console
  console.log(slova[i])
}
for (let i = 0; i < brojevi.length; i++) {
  // eslint-disable-next-line no-console
  console.log(brojevi[i])
}
for (let i = 0; i < imena.length; i++) {
  // eslint-disable-next-line no-console
  console.log(imena[i])
}
for (let i = 0; i < prezimena.length; i++) {
  // eslint-disable-next-line no-console
  console.log(prezimena[i])
}
// 9. zadatak
for (let i = 0; i < randomSlova.length; i++) {
  // eslint-disable-next-line no-console
  console.log(randomSlova[i])
}
for (const el in randomSlova) {
  // eslint-disable-next-line no-console
  console.log(randomSlova[el])
}
// 10. zadatak
const srpska = 'абвгдђжзијклљмнњопрстћуфхцчџш'.split('')

// 11. zadatak

// Obj

// Objekat 1
const osoba = {
  osoba1: {
    ime: 'Aleksandar',
    prezime: 'Stojanovic',
    zanimanje: 'programer',
    visina: 1.85,
    tezina: 95 + ' kg'
  },
  osoba2: {
    ime: 'Stefan',
    prezime: 'Denic',
    zanimanje: 'konobaar',
    visina: 1.84,
    tezina: 91 + ' kg'
  },
  osoba3: {
    ime: 'Marko',
    prezime: 'Markovic',
    zanimanje: 'kuvar',
    visina: 1.88,
    tezina: 101 + ' kg'
  },
  osoba4: {
    ime: 'Petar',
    prezime: 'Stojadinovic',
    zanimanje: 'profesor',
    visina: 1.87,
    tezina: 88 + ' kg'
  },
  osoba5: {
    ime: 'Luka',
    prezime: 'Lukic',
    zanimanje: 'frizer',
    visina: 1.91,
    tezina: 82 + ' kg'
  }
}
// Objekat 2
const automobili = {
  Tojota: {
    marka: 'rav4',
    boja: 'bela',
    brojVrata: '5'
  },
  Micubisi: {
    marka: 'micubisi1',
    boja: 'crn',
    brojVrata: '5'
  },
  Bugati: {
    marka: 'bugati1',
    boja: 'zelen',
    brojVrata: '2'
  },
  Lada: {
    marka: 'lada1',
    boja: 'plava',
    brojVrata: '5'
  },
  Aston: {
    marka: 'aston1',
    boja: 'zuta',
    brojVrata: '2'
  }
}
// Objekat 3
osoba.osoba1.automobil = automobili.Aston
osoba.osoba2.automobil = automobili.Lada
osoba.osoba3.automobil = automobili.Bugati
osoba.osoba4.automobil = automobili.Micubisi
osoba.osoba5.automobil = automobili.Tojota
// Objekat 4
