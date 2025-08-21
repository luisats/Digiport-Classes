function calcularOperacao(num1, num2, operacao) {
  if (operacao === '+') {
    return num1 + num2;
  } else if (operacao === '-') {
    return num1 - num2;
  } else if (operacao === '*') {
    return num1 * num2;
  } else if (operacao === '/') {
    if (num2 !== 0) {
      return num1 / num2;
    } else {
      return 'Erro: Divisão por zero';
    }
  } else {
    return 'Operação inválida';
  }
}