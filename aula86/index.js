/**
 * 108. Promises
 * 
 */

// exemplo sem promises com função de callback
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi0(msg, tempo, callback) {
    setTimeout(()=>{
        console.log(msg);
        if(callback) callback();
    }, tempo);
}

esperaAi0('Callback: Frase 1', rand(0,1), function(){
    esperaAi0('Callback: Frase 2', rand(0,1), function() {
        esperaAi0('Callback: Frase 3', rand(0,1));
    });
});

// Exemplo com promises código assincrono
// rodam em paralelo

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('Valor não é uma string');
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Promise: Conexção com o BD', rand(2, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Promise: Buscanco dados do BD', rand(2, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi(22222, rand(2,3));
    })
    .then(resposta =>{
        console.log(resposta);
    })
    .then(()=>{
        console.log('Exibe os dados na tela');
    })
    .then(()=>{
        console.log('Eu serei o último a ser exibido.');
    })
    .catch(e =>{
        console.log('Erro:', e);
    });

