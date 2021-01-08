var idade = 28;
var gols = 1000;
var pi = 3.14;
var exp = 2e10; //20000000000
// precisão para até 15 digitos, depois disso ele arredonda

// operadores

var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 50; // 50
var expoente = 10^2; // 100
var modulo = 5 % 2; // 1

// operadores aritméticos(strings)

var soma = '100' + 50; // 10050
var subtracao = '100' - 50; // 50 | força para número ou retorna NaN
var multiplicacao = 100 * 2; // 200 |  força para número
var divisao = 'comprei 100' / 50; // NaN - not a number

// not a number geralemnte ocorre quando temos realizar alguma operação entre string e number ou com algum número que possa ter vírgula indesejada

// a ordem importa
// começa por multiplicação e divisão, depois por soma e subtração

var total1 = 20 + 5 * 2; // 30  
var total2 = (20 + 5) * 2 // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 20 / 2; // 40

// incrementos

var incrimento1 = 5;
    incrimento1++; // 5
    incrimento1; // 6

var incremento2 = 5;
    ++incrimento2; // 6 

// mesma coisa para subtração

var x = +'100'
    x === 100 // converte para number

