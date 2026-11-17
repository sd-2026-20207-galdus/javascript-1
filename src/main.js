var a = 10

console.log(a)

if (true) {
  console.log(a)
}

// let nome = prompt("dimmi il tuo nome")

// if (nome === null || nome == "") {
//   console.error("il nome inserito non è consentito")
// }
// else {
//   console.log(`piacere ${nome}`)
// }

// // let lingua = prompt("che lingua parli")

// if (lingua === "it") {
//   console.log(`ciao ${nome}`)
// } else if (lingua === "es") {
//   console.log(`Hola ${nome}`)
// } else if (lingua === "en") {
//   console.log(`Hello ${nome}`)
// } else {
//   console.warn("lingua non riconosciuta")
// }

// // switch

// switch (lingua) {
//   case "it":
//     console.log(`ciao ${nome}`)
//     break;

// }

// // operatore ternario


// // funzioni

// // prima funzione senza parametri

// function saluta() {
//   console.log("ciao")
// }

// saluta()

// // funzione con parametro obbligatorio

// function SalutaUtente(nome) {
//   console.log(`ciao ${nome}`)
// }

// SalutaUtente("manuel")

// function SalutaUtente2(nome, dareDelLei = false) {
//   if (dareDelLei) {
//     console.log(`ciao ${nome}`)
//   } else {
//     console.log(`Salve ${nome}`)
//   }
// }

// SalutaUtente2("Paolo")
// SalutaUtente2("giovanni", true)

{
  console.log("esercizio 1")

  function SquareRoot(number) {
    return (Math.sqrt(number))
  }

  console.log(SquareRoot(16))

}

console.log("esercizio 2")

function mostraStringa(parola) {
  console.log(parola)
}

mostraStringa("ippopdromo")

console.log("esercizio 3")

function parametri(nome, eta = 18, genere = maschio) {
  console.log(nome, eta, genere)
}

parametri("Giovanni", 22, "femmina")

console.log("esercizo 4")

function somma(num1, num2) {
  return num1 + num2
}

console.log(somma(1, 2))

function sottrazione(num1, num2) {
  return num1 - num2
}

console.log(sottrazione(5, 7))

function moltiplicazione(num1, num2) {
  return num1 * num2
}

console.log(moltiplicazione(7, 3))

function divisione(num1, num2) {
  return num1 / num2
}

console.log(divisione(10, 5))

// esercizo 5

function ordinaLettere(stringa) {
  console.log(stringa.split("").sort().join(""))
}

ordinaLettere("Manuel")

// esercizo 6

function contaLettere(testo) {
  console.log(testo.length)
}

// esercizio 7

function calcolaEta(dataDiNascita) {
  const today = new Date()

}