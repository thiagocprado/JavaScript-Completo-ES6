// array

// é um grupo de valores geralemnte relacionados 
// serve para guardarmos diferentes valores em uma única variável

var videoGames = ['Switch', 'PS4', 'Xbox'];

videoGames[0]; // Switch
videoGames[1]; // Xbox

// acesse um elemento do array utilizando '[n]'
// array é base 0

// métodos e propriedades de um array

var videoGames = ['Switch', 'PS4', 'Xbox'];

videoGames.pop(); // remove o último item e retorna ele
videoGames.push('3DS'); // adiciona ao final do array
videoGames.length; // 3

// existem diversos outros métodos como 'map, reduce, forEach'  e mais

// For Loop
// fazem algo repetidamente até que uma condição seja aitingida 

for (var numero = 0; numero < 10; numero++) { // o for loop possuí 3 partes: início, condição e incremento
    console.log(numero); // retorna de 0 a 9 no console
}

// While Loop

var i = 0;
while (i < 10) {
    console.log(i); // retorna de 0 a 9 no console 
    i++;
}

// for loop é mais comum

// arrays e loops

var videoGames = ['Switch', 'PS4', 'Xbox', '3DS'];
for (var i = 0; i < videoGames.length; i++){
    console.logs(videoGames[i]);
}

// Break

// o loop irá parar caso encontro a palavra break;

var videoGames = ['Switch', 'PS4', 'Xbox', '3DS'];
for (var i = 0; i < videoGames.length; i++){
    console.logs(videoGames[i]);
    if (videoGames[i] === 'PS4'){
        break;
    }
}

// forEach

// forEach é um método que executa uma função para cada item do array
// é uma forma mais de utilizarmos um loop com arrays(ou array-like)

var videoGames = ['Switch', 'PS4', 'Xbox', '3DS'];
videoGames.forEach(function(item) {
    console.logs(item);
});
// o argumento item será atribuiado dinâmicamente 

// podemos passar os seguintes parâmetros 'item', 'index' e 'array'

// Não se confunda com a sintaxe

var numero = 0;
var maximo = 50;
for(;numero < maximo;) {
    console.log(numero);
    numero++
}

// não aconselho escrever da forma acima, mas funciona normalmente