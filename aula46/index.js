/**
 * 65. setInterval e setTimeout
 * 
 */

function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

console.log(mostraHora());


/**
 * configurar um intervalo de tempo para que uma função seja executada em algum momento; 
 * passar a função apenas por referência, sem executar (sem parenteses) e depois o tempo 
 * em miléssimo de segundos.
 */

/* function funcaoDoInterval() {
    console.log(mostraHora());
}

setInterval(funcaoDoInterval, 1000); */

/**
 * Também podemos criar a função dentro do setInterval:
 */

/* setInterval(function () {
    console.log(mostraHora());
}, 1000);
 */
// control + Alt + M para parar a execução.

// Também podemos setar em uma variável

const tempo = setInterval(() => {
    console.log(mostraHora());
}, 1000);

// função para parar o intervalo de tempo setInterval
setTimeout(() => {
    clearInterval(tempo);
}, 3000);

// função também serve para executar um comando após determinado tempo:
setTimeout(() => {
    console.log('Olá Mundo!');
}, 5000);