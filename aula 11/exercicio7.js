const prompt = require("prompt-sync")();

let saldo = 1000;

menu = parseInt(prompt("Escolha uma opção: 1 - Verificar saldo 2 - Depositar 3 - Sacar 4 - Sair"))

while (opcao !== 4) {
switch (menu) {
    case 1: console.log("1 - Verificar saldo");
    break;
    case 2: console.log("2 - Depositar");
    break;
    case 3: console.log("3 - Sacar");
    break;
    case 4: console.log("4 - Sair");
    break;
    }
}