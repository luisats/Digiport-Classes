
const prompt = require("prompt-sync")();

let opcao = parseInt(prompt("Escolha uma opção: \n1 - Ver o cardápio \n2 - Fazer um pedido \n3 - Falar com um atendente \n4 - Sair\n"));

while (opcao !== 4) {
switch (opcao) {
  case 1: console.log("1 - Pizza 2 - Batatas Fritas 3 - Frango 4 - Sorvete");
  break;
  case 2: console.log("Fazendo o pedido.");
  break;
  case 3: console.log("Chamando o atendente.");
  break;
  case 4: console.log("4 - Sair");
  break;
  default:
    console.log("Opção inválida. Por favor, escolha uma opção válida.")
    break;
    }

opcao = parseInt(prompt("Escolha uma opção: 1 - Ver o cardápio 2 - Fazer um pedido 3 - Falar com um atendente 4 - Sair"));
}

console.log("Você saiu do sistema.");