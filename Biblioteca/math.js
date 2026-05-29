// Arquivo criado em projeto no www.stackblitz.com denominado definemodulo.js
// Arquivo criado dentro de uma pasta na raiz do projeto

function soma(x, y) {
    let soma = x + y; // variável local
    return soma;     // retorna o resultado
  }
  
  const subtrair = function(x, y) { 
    return x - y; 
  }
  
  const divisao = function(x, y) {
    return x / y;
  }

const multiplicacao = function (x, y) { 
    return x * y;
}

  // módulos são utilizados para disponibilizar bibliotecas e funções e classes
  module.exports = { soma, subtrair,divisao,multiplicacao }