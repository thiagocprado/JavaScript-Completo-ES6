// objetos 

// conjunto de variáveis e funções, que são chamadas de propriedades e métodos

var pessoa = {
    nome: 'thiago',
    idade: 19,
    profissao: 'dev front-end',
    possuiFaculdade: false
}

pessoa.nome; // 'Thiago'
pessoa.possuiFaculdade; // false

// propriedades e métodos consistem em nome (chave) e valor

// métodos 

// é uma propriedade que possui uma função no local do seu valor

var quadrado = {
    lados: 4,
    area: function (lado) {
        return lado * lado;
    },
    perimetro: function (lado) {
        return this.lados * lado // faz referencia ao objeto em si, no caso a propriedade lados 
    }
}

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20

// ou (atualização ES6)

var quadrado = {
    lados: 4,
    area(lado) {
        return lado * lado;
    },
    perimetro(lado) {
        return this.lados * lado // faz referencia ao objeto em si, no caso a propriedade lados 
    }
}

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20

// objetos server para organizar o código em pequenas partes reutilizáveis

Math.PI; // 3.14
Math.random(); // número aleatório

var pi = Math.PI;
console.log(pi);

// Math é um objeto nativo de JS. 
// Já percebeu que console é um objeto e log() um método?

// criar um objeto

// um objeto é criado utilizando '{}'

var carro = {};
var pc = {};

// dot notation get
// acesse as propriedades de um objeto utilizando '.'

var menu = {
    width = 800,
    height = 50,
    backgroundColor = '#84E'
}

var bg = menu.backgroundColor; // '#84E'

// palavra-chave 'this'
// 'this' irá fazer uma referência ao próprio objeto

var height = 120;
var menu = {
    width: 800,
    height: 50,
    metadeHeight() {
        return this.height / 2;
    }
}

menu.metadeHeight(); // 25
// sem o this, seria 60

// 'this' irá retornar o próprio objeto

// protótipo e herança

// o objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo 

menu.backgroundColor = '#000';
menu.color = 'blue';

menu.esconder = function () {
    console.log('Escondido');
}

var bg = menu.backgroundColor;

// tudo é objeto

// strings, números, booleanos, objetos e mais, possuem propriedades e métodos. Por isso são objetos

var nome = 'Thiago';

nome.length; // 5
nome.charAt(1); // 'h'
nome.replace('h', ''); // tiago
nome; // 'Thiago'

// uma string herda propriedades e métodos do construtor String()

// números

var altura = 1.8;

altura.toString(); // '1.8'
altura.toFixed(); // '2'

// por um breve momento o número é envolvido em um Objeto (coerção), tendo acesso assim as suas propriedades e métodos

// funções

function areaQuadrado(lado) {
    return lado * lado;
}

areaQuadrado.toString();
// "function areaQuadrado(lado) {
//     return lado * lado;
// }"

areaQuadrado.length; // 1

// elementos do DOM

var btn = document.querySelector('.btn');

btn.classList.add("azul"); // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener('click', function () {
    console.log('Clicou');
});

// praticamente todos os efeitos com JS são feitos utilizando propriedades e métodos de objetos do DOM

// web api's são métodos e propriedades que permitem a interação JS e Browser