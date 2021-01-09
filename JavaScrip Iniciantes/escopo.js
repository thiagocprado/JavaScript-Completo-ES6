// escopo

const { func } = require("prop-types");

// escopo de função
// variáveis declaradas dentro de funções não são acessadas fora das mesmas

function mostraCarro() {
    var carro = 'Fusca';
    console.log(carro);
}

mostraCarro(); // Fusca no console
console.log(carro); // Erro, carro is not defined 

// escopo evita conflito entre nomes

// variável global(erro)

// declarar variáveis sem a palavra chave 'var', 'const' ou 'let', cria uma variável
// que pode ser acessadar em qualquer escopo(global)
// isso é um erro

function mostraCarro() {
    carro = 'Fusca';
    console.log(carro);
}

mostraCarro(); // Fusca
console.log(carro); // Fusca

// 'use stric' impede isso

'use strict'
function mostraCarro() {
    carro = 'Fusca';
    console.log(carro);
}

mostraCarro(); // Fusca no console
console.log(carro); // Erro, carro is not defined

// escopo de função(pai)
// variáveis declaradas no escopo pai da função conseguem ser acessadas pelas funções

var carro = 'Fusca';

function mostraCarro() {
    var frase = `Meu carro é um ${carro}`;
    console.log(frase);
}

mostraCarro(); // Meu carro é um Fusca
console.log(carro); // Fusca

// escopo de bloco

// variáveis criadas com 'var', vazam o bloco.
// por isso com a introdução do ES6 a melhor forma de declararmos uma variável é
// utilizando 'const' e 'let', pois estas respeitam o escopo de bloco 

if (true) {
    var carro = 'Fusca';
    console.log(carro);
}
console.log(carro); // Carro

// var vaza o bloco 

// mesmo com a condição falsa, a variável ainda será declarada
// utilizando hoisting e o valor ficará como undefined

if (false) {
    var carro = 'Fusca';
    console.log(carro);
}

console.log(carro); // undefined

// const e let no lugar de var
// a partir de agora vamos utilizar apenas const e let para declararmos variáveis

if (true) {
    const carro = 'Fusca';
    console.log(carro);
}

console.log(carro); // erro, carro is not defined

// '{}' cria um bloco
// chaves '{}' criam um escopo de bloco, não confundir com a criação de objetos '= {}'

{
    var carro = 'Fusca';
    const ano = '2018';
}

console.log(carro); // Carro
console.log(ano); // erro ano is not defined 

// for loop
// ao utilizar 'var' dentro de um 'for loop', que é um bloco, o valor do variável utilizada irá vazar e existir fora do loop

for (var i = 0; i < 10; i++) {
    console.log(`Número ${i}`);
}
console.log(i); // 10

// for loop com let

for (let i = 0; i < 10; i++) {
    console.log(`Número ${i}`);
}
console.log(i); // erro, 'i' is not defined

// const

// mantém o escopo no bloco, impede a redeclaração e impede a
// modificação do valor da viariável, evitando bugs no código

const mes = 'Dezembro';
mes = 'Janeiro'; // erro, tentou modificar o valor
const semana; // erro, declarou sem valor

const data = {
    dia: 28,
    mes: 'Dezembro',
    ano: 2018,
}

data.dia = 29; // funciona. As propriedades dos objetos podem ser alteradas
data = janeiro; // erro

// variáveis com valores constantes

// let

// mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável

let ano;
ano = 2021;
ano++;
console.log(ano); // 2022

let ano = 2022; // erro, redeclarou a variável

// geralmente vamos utilizar o 'const'

