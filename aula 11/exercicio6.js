const prompt = require("prompt-sync")();

const correctPassword = "1234";
let userPassword = "";

while (userPassword !== correctPassword) {
  userPassword = prompt("Digite a senha: ");
  
  if (userPassword === correctPassword) {
    console.log("Senha correta! Acesso concedido.");
  } else {
    console.log("Senha incorreta. Tente novamente.");
  }
}