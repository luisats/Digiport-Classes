const prompt = require("prompt-sync")();

let positivos = 0;
let negativos = 0;
let zeros = 0;

for (let i = 1; i <= 10; i++) {
  let numero = parseInt(prompt(`Digite o número ${i}: `));
  
  if (numero > 0) {
    positivos += 1;
  } else if (numero < 0) {
    negativos += 1;
  } else {
    zeros += 1;
  }
}

console.log("Positivos: ", positivos);
console.log("Negativos: ", negativos);
console.log("Zeros: ", zeros);