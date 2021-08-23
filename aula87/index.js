/**
 * 109. Métodos úteis para Promises
 * 
 *  Promise.all
 *  Promise.race
 *  Promise.resolve
 *  Promise.reject
 * 
 * */

const { func } = require("joi");

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('CAI NO RERRO');
                return;
            }
            resolve(msg.toUpperCase() + ' - Passei na promise.');
        }, tempo);
    });
}

//Promise.all entrega um array de todas as promessas resolvidas, ou se uma falhar ele retorna a falha
const promises = [
    'Primeiro valor',
    esperaAi('Promise 1', rand(1, 3)),
    esperaAi('Promise 2', rand(1, 3)),
    esperaAi('Promise 3', rand(1, 3)),
    esperaAi(123456, rand(1, 3)),
    'Outro valor'
];

Promise.all(promises)
    .then(function (valor) {
        console.log('Promise.all: ',valor);
    })
    .catch(function (erro) {
        console.log('Promise.all: ',erro);
    });

// Promise.race é como uma corrida entre todas as promessas, o primeiro que resolver é entregue, ou o erro é entregue
const promisesRace = [
    esperaAi('Promise 1', rand(1, 4)),
    esperaAi('Promise 2', rand(1, 4)),
    esperaAi('Promise 3', rand(1, 4)),
    esperaAi(123456, rand(1, 4)),
];
Promise.race(promisesRace)
    .then(function (valor) {
        console.log('Promise.race: ', valor);
    })
    .catch(function (erro) {
        console.log('Promise.race: ', erro);
    });

// Promise.resolve 
function baixaPagina() {
    const emCache = false;

    if (emCache) {
        return Promise.resolve('Promise.resolve: Página em cache.');
    } else{
        return esperaAi('Promise.resolve: Baixei a página', rand(2, 5));
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log(e));

// Promise.reject
function baixaPagina2() {
    const emCache = true;

    if (emCache) {
        return Promise.reject('Página em cache.');
    } else{
        return esperaAi('Baixei a página', rand(2, 5));
    }
}

baixaPagina2()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('Promise.reject: ERRO', e));  