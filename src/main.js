var a = 10

console.log(a)

if (true) {
  console.log(a)
}

let nome = prompt("dimmi il tuo nome")

if (nome === null || nome == "") {
  console.error("il nome inserito non è consentito")
}
else {
  console.log(`piacere ${nome}`)
}

let lingua = prompt("che lingua parli")

if (lingua === "it") {
  console.log(`ciao ${nome}`)
} else if (lingua === "es") {
  console.log(`Hola ${nome}`)
} else if (lingua === "en") {
  console.log(`Hello ${nome}`)
} else {
  console.warn("lingua non riconosciuta")
}

