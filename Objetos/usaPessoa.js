// Arquivo criado em projeto no www.stackblitz.com denominado usaPessoa.js
// Para executar utilize: node ./objetos/usaPessoa.js

const Pessoa = require('./Pessoa.js');

const joao = new Pessoa(80, 1.75);
console.log(joao.imc());

const pedro = new Pessoa();
pedro.peso = 100;
pedro.altura = 1.6;

console.log(pedro.imc());

const maria = new Pessoa();
maria.peso = 96;
maria.altura = 1.68;

console.log(maria.imc());