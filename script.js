let peso = Number(prompt("Digite seu Peso"))

let altura = Number(prompt("Digite sua altura em metros (exemplo: 1.90)"))

  const imc = (peso / (altura * altura))

if (imc <= 18.5) {
  console.log("você está abaixo do peso")
} else if (imc >= 18.5 && imc <= 24.9) {
  console.log("seu peso está normal")
} else if (imc >= 25 && imc <= 29.9) {
  console.log("você é sobrepeso")
} else if (imc >= 30 && imc <= 34.9) {
  console.log("você está obeso")
} else if (imc >=35 && imc <= 39.9) {
  console.log("eita amigo a situação ae ta seria")
} else {
  console.log("taporra")
}