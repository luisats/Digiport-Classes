let listaDeCompras = [
    {
        nome: "Banana",
        quantidade: 4
    },
    {
        nome: "Maçã",
        quantidade: 5
    },
    {
        nome: "Abacaxi",
        quantidade: 3
    },
    {
        nome: "Laranja",
        quantidade: 7
    }
]

function adicionarItem(item) {
    listaDeCompras.push(item);
      console.log(`${item.nome} (${item.quantidade}) foi adicionado à lista de compras.`);
}

function visualizarLista(item) {
    console.log("Lista de Compras:");
    listaDeCompras.forEach((item, index) => {
        console.log(`${index + 1}. ${item.nome} - Quantidade: ${item.quantidade}`);
    });
}

function removerItens(item) {
    for (let i = 0; i < listaDeCompras.length; i++) {
        if (listaDeCompras[i] === item) {
            listaDeCompras.splice(i, 1);
            break;
        }
    }
}

