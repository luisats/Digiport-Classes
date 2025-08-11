const prompt = require("prompt-sync")();

let vermelho = 0;
let verde = 0;

for (let fruta = 1; fruta <= 10; fruta++) {
  let cor = prompt(`Digite a cor da fruta ${fruta} (vermelha/verde): `).toLowerCase();
  
  if (cor === "vermelha") {
    vermelho += 1;
  } else if (cor === "verde") {
    verde += 1;
  }
}

console.log("Frutas vermelhas: ", vermelho);
console.log("Frutas verdes: ", verde);