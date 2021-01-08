// bloco de código que pode ser executado e reutilizado. 
// valores podem ser passados por uma função e a mesma retorna outro valor

function areaQuadrado(lado) {
    return lado * lado;
}

areaQuadrado(4); // 16
areaQuadrado(5); // 25
areaQuadrado(6); // 36

// chamada de function declaration

function pi() {
    return 3.14;
}

var total = 5 * pi();
console.log(total);

// parâmetros e argumentos

// ao 'criar' uma função, você pode definir 'parâmetros'
// ao 'executar' uma função, você pode passar 'argumentos'

// peso e altura são os parâmetros
function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc;
}

console.log(imc(80, 1.80)); // 80 e 1.80 são os argumentos
console.log(imc(60, 1.70)); // 60 e 1.70 são os argumentos

// separar por vírgula cada parâmetro
// você pode definir mais de um parâmetro ou nenhum também

// parênteses executa a função

function corFavorita(cor) {
    if(cor === 'azul'){
        return 'Céu';
    } else if (cor === 'verde'){
        return 'Grama';
    } else {
        return 'Não sei qual cor você gosta :/'
    }
}

corFavorita(); // retorna 'Não sei qual cor você gosta :/'

// se apenas definirmos a função com o function e não executarmos a mesma, nada que estiver dentro dela irá acontecer

// argumentos podem ser funções

// chamadas de Callback, geralmente são funções que occorem após algum evento

addEventListener('click', function() {
    console.log('Clicou');
});

// a função possui dois argumentos
// primeiro é a string 'click'
// segundo é um função anônima

// funções anônimas são aquelas em que o nome da função não é definido, escritas como function() {} ou () => {}

// pode ou não retornar um valor

// quando não definimos o return, ela irá retornar undefined. O código interno da função é executado normalmente, independete de existir valor de return ou não

function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc);
}

imc(80, 1.80); // retorna o imc
console.log(imc(60, 1.70)); // retorna o imc e undefined

// valores retornardos

// uma função pode retornar qualquer tipo de dado e até outras funções

function terceiraIdade(idade) {
    if(typeof idade !== 'number') {
        return 'Informe a sua idade!';
    } else if (idade >= 60) {
        return true;
    } else {
        return false;
    }
}

// cuidado, retornar diferentes tipos de dados na mesma função não é uma boa ideia

// escopo 

// variáveis e funções criadas dentro de um bloco '{}', não são visíveis fora dele.

function precisoVisitar(paiseisVisitados) {
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paiseisVisitados} paises`
}

console.log(totalPaises); // erro, totalPaiseis não definido

// escopo léxico

// funções conseguem acessar variáveis que foram criadas no contexto 'pai'

var profissao = 'Desenvolvedor front-end'

function dados() {
    var nome = 'Thiago';
    var idade = 19;
    function outrosDados() {
        var endereco = 'Franca';
        var idade = 20;
        return `${nome}, ${idade}, ${endereco}, ${profissao}`;
    }
    return outrosDados();
}

dados(); // retorna 'Thiago, 20, Franca, Desenvolvedor front-end'
outrosDados(); // retorna um erro

// Hoisting
// Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória 

imc(80, 1.80); // imc aparece no console

function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc);
}