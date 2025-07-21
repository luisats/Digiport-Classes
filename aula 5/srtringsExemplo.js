// Crie uma variável string "Javascript é incrível"
let umaString = "Javascript é incrível";

// Acesse e imprima a 5ª letra da string
console.log(umaString[4]); // Retorna "s"

// Use charAt() para acessar o mesmo caractere
console.log(umaString.charAt(4)); // Retorna "s"

// Substitua a palavra "incrível" por "poderoso"
let novaString = umaString.replace("incrível", "poderoso");
console.log(novaString); // Retorna "Javascript é poderoso"

// Imprima o número de caracteres da string
console.log(umaString.length); // Retorna 20

// Use slice() para extrair a palavra "Javascript"
let palavraExtraida = umaString.slice(0, 10);
console.log(palavraExtraida); // Retorna "Javascript"

// Use concat() para adicionar "Vamos aprender!" ao final da string
let stringConcatenada = umaString.concat(" Vamos aprender!");
console.log(stringConcatenada); // Retorna "Javascript é incrível Vamos aprender!"