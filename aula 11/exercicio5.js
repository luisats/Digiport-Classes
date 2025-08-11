const prompt = require("prompt-sync")();

let soma = 0;
let numero = 0;

while (numero >= 0) {
  numero = parseInt(prompt("Insira um número: "));
  
  if (numero >= 0) {
    soma += numero;
  }
}

console.log("A soma dos números positivos inseridos é: ", soma);