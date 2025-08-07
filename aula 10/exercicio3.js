
const prompt = require("prompt-sync")();

let opcao = parseInt(prompt("Escolha uma opção: "));

while (opcao !== 4) {
    switch (opcao) {
    case 1: console.log("1 - Ver o cardápio");
    break;
    case 2: console.log("2 - Fazer um pedido");
    break;
    case 3: console.log("3 - Falar com um atendente");
    break;
    case 4: console.log("4 - Sair");
    break;
    }
  opcao = parseInt(prompt("Escolha uma opção: "));
}