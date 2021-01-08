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
    area: function(lado) {
        return lado * lado;
    },
    perimetro: function(lado) {
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

