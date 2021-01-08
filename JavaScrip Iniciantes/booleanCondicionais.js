// boolean
var possuiFaculdade = false;
var possuiEnsinoMedio = true;

// condicionais If e Else
// verificar se uma expressão é verdadeira com if, caso contrário else será ativado

if (possuiEnsinoMedio) { // O valor dentro dos parênteses sempre será avaliado em false ou true
    console.log('Possui Ensino Médio'); // retorna esse, pois o valor da variável é true
} else { // caso a condição anterio seja a correta, o código para 
    console.log('Não possui graduação'); // ignora esse
}

if (!possuiEnsinoMedio) { // negação. nesse caso, negamos o valor original da variável, então ele passa a ser false
    console.log('Possui Ensino Médio'); //  ignora esse
} else {
    console.log('Não possui graduação'); // retorna esse
}

// exemplo 1
var example1 = true;
var example11 = true; 

if (example) { // por mais que os dois valores sejam verdadeiros a primeira condição satisfeita será o ponto de parada 
    console.log('entra aqui');
} else if (example2) { // condição encadeada
    console.log('não vai entrar aqui, porque entrou na condição anterior');
} else {
    console.log('não possui nada');
}

// exemplo 2
var example2 = true;
var example22 = true; 

if (!example2) { // negamos o verdadeiro, ou seja, o valor dele será falso, então ele avançara para a próxima condição
    console.log('não vai entrar aqui');
} else if (example22) { // condição encadeada
    console.log('entra aqui, porque satisfaz a condição');
} else {
    console.log('não possui nada');
}


// exemplo 3
var example3 = false;
var example33 = false; 

if (example3) { // negamos o verdadeiro, ou seja, o valor dele será falso, então ele avançara para a próxima condição
    console.log('não vai entrar aqui');
} else if (example33) { // condição encadeada
    console.log('não vai entrar aqui');
} else {
    console.log('entra aqui, pois nenhuma condição anterior foi satisfeita');
}

// Truthy e Falsy

// existem valores que retornam true e outros que retornam false quando verificados em uma expressão booleana

// Falsy

if(false);
if(0); // ou -0
if(NaN);
if(null);
if(undefined);
if(''); // ou "" ou ``

// todo o resto é truthy

// truthy 

if(true); 
if(1); 
if(' '); 
if('thiago'); 
if(-5); 
if({}); // objeto

// o operador '!', nega uma operação, ou seja, !true tem valor false

// podemos utilizar '!!' para verificar se uma expressão é truthy

if(!true); // false
if(!1); // false
if(!''); // true
if(!undefined); // true
if(!!' '); // true - primeiro converte pra false, depois converte para true novamente
if(!!''); // false


// operadores de comparação
// sempre retornam um valor booleano

10 > 5; // true
5 > 10; // false
20 < 10 // false
10 <= 10 // true
10 >= 11 // false

// '==' faz comparação não tão estrita e o '===' faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos '==='

10 == '10'; // true
10 == 10; // true
10 === '10' // false
10 === 10 // true
10 != 15 // true - '!=' significa diferente
10 != '10' // false
10 !== '10' // true


// operador lógico '&&' compara se uma expressão 'e' a outra é verdadeira 

true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gata' && false; // false
(5 >= 5) && (3 < 6); // true

// se ambos os valores forem true ele irá retornar o último valor verificado
// se algum valor for false ele irá retornar o mesmo e não irá continuar a vertificar os próximos

// operador lógico '||' compara se uma expressão 'ou' outra é verdadeira

true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gata' || false; // 'Gato'
(5 >= 5) || (3 < 6); // true

// retorna o primeiro valor true que encontrar

// switch

// com o 'switch' você pode verificar se uma variável é igual à diferentes valores utilzando 'case'. Caso ele seja igual, você
// pode fazer alguma coisa e utilizar a palavra chave 'break;' para cancelar a continuação. O valor de 'default' ocorrerá caso nenhuma
// das anteriores seja verdadeira

var corFavorita = 'Azul';

switch (corFavorita) {
    case 'Azul':
        console.log('Céu');
        break;
    case 'Vermelho':
        console.log('Rosas');
        break;
    case 'Amarelo':
        console.log('Sol');
        break;
    default:
        console.log('Não tem cor');
}