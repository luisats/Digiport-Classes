let numero1 = 2;
let numero2 = 4;
let numero3 = 6;

if (numero1 > numero2 && numero1 > numero3) {
    console.log("O número maior é: " + numero1);
} else if (numero2 > numero1 && numero2 > numero3) {
    console.log("O número maior é: " + numero2);
} else {
    console.log("O número maior é: " + numero3);
}

if (numero1 < numero2 && numero1 < numero3) {
    console.log("O número menor é: " + numero1);
} else if (numero2 < numero1 && numero2 < numero3) {
    console.log("O número menor é: " + numero2);
} else {
    console.log("O número menor é: " + numero3);
}