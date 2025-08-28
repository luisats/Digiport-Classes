const prompt = require("prompt-sync")();

for (let dia = 1; dia <= 7; dia++) {
  let quantidade = prompt(`Quantas maçãs João colheu no dia ${dia}? `);
  console.log(`No dia ${dia}, João colheu ${quantidade} maçãs.`);
}


