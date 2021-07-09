/**
 * 73. Funções de callback
 * 
 * Estamos usando setTimeOut para simular o tempo de responsta de um servidor web
 */

// criar função de tempo aleatório entre 1 e 3 segundos:
function rand(min = 1000, max = 3000) {
    // gerar número aleatório com random
    const num = Math.random() * (max - min) + min;
    // A função Math.floor(x) retorna o menor número inteiro dentre o número "x".
    return Math.floor(num);
}

function f1(callback) {
    //criar uma função de callback
    setTimeout(() => {
        
        console.log('f1');
        // se existir uma função de callback eu executo ela
        if (callback) callback();
        // finalizar setTimeOut com um intervalo aleatório
    }, rand());
}

function f2(callback) {
    //criar uma função de callback
    setTimeout(() => {
        console.log('f2');
        // se existir uma função de callback eu executo ela
        if (callback) callback();
        // finalizar setTimeOut com um intervalo aleatório
    }, rand());
}

function f3(callback) {
    //criar uma função de callback
    setTimeout(() => {
        console.log('f3');
        // se existir uma função de callback eu executo ela
        if (callback) callback();
        // finalizar setTimeOut com um intervalo aleatório
    }, rand());
}

/**
 * agora vamos fazer com que apesar de tempos aleatórios
 * cada função irá ser chamada na ordem f1, f2, f3..
 */
// vamos chamar f1 com uma função de callback hell
f1(function () {
    // enviar um callback na função f2
    f2(function () {
        // enviar um callback na função f2
        f3(function () {
            // enviar um callback para chamar o console.log
            console.log('Olá mundo!');
        })
    })
});
// outra forma de fazer o código de cima:

f1(f1Callback);
function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
    f3(f3Callback);
}
function f3Callback() {
    console.log('Olá mundo!');
}