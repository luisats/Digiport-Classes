const prompt = require("prompt-sync")();

let saldo = 1000;
let running = true;

while (running) {
    console.log("\nMenu de Atendimento");
    console.log("1 - Verificar saldo");
    console.log("2 - Depositar");
    console.log("3 - Sacar");
    console.log("4 - Sair");

    let escolha = prompt("Escolha uma opção: ");

switch (escolha) {
    case '1': console.log(`Seu saldo é: R$${saldo}`);
    break;
    case '2': console.log(`Transferindo para um de nossos atendente`);
    break;
    case '3': console.log(`Transferindo para área de saque`);
    break;
    case '4': console.log(`Obrigado por usar o sistema. Até logo!`);
    running = false;
    break;
    default:
        console.log("Opção inválida. Por favor, escolha uma opção válida.")
        break;
    }
}