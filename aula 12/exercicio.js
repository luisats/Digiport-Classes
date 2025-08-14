let numeros = [1, 2, 3, 4, 5];

console.log("Números:", numeros);

let soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}
console.log("Soma:", soma);

let media = soma / numeros.length;
console.log("Média:", media);

let maior = Math.max(...numeros);
console.log("Maior número:", maior);

let menor = Math.min(...numeros);
console.log("Menor número:", menor);

let numeros2 = [];

for (let i = 0; i < 5; i++) 
numeros2.push(i);

console.log("Números aleatórios:", numeros2);
