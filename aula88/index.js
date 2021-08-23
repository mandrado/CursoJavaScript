/**
 * 110. Async / Await
 * 
 * */

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
// usar promises como se fosse alco sincrono, mas na verdade é assincrono

// esperaAi('Fase 1', rand(0, 3))
//     .then(valor => {
//         //só e chamada com Fase 1 terminar
//         console.log(valor);
//         return esperaAi('Fase 2', rand(0, 3))
//     })
//     .then(fase => {
//         //só e chamada com Fase 2 terminar
//         console.log(fase);
//         return esperaAi('Fase 3', rand(0, 3))
//     })
//     .then(fase => {
//         //só e chamada com Fase 3 terminar
//         console.log(fase);
//         return fase;
//     })
//     .then(fase => {
//         //só e chamada com Fase anterior terminar
//         console.log('Terminamos na fase:', fase);
//     })
//     .catch(e => console.log(e));

    // fazendo tudo com Async / Await é bem mais simples

    async function executa() {
        try {
            const fase1 = await esperaAi('Fase 1', rand(0, 3));
            console.log(fase1);
    
            const fase2 = await esperaAi(2, rand(0, 3));
            console.log(fase2);
    
            const fase3 = await esperaAi('Fase 3', rand(0, 3));
            console.log(fase3);
    
            console.log('Terminamos na fase:', fase3);
            
        } catch (error) {
            console.log(error);
        }
    }
    executa();

    /**
     * 
     * Um Promise está em um destes estados: 
     * pending (pendente): Estado inicial, que não foi realizada nem rejeitada.
     * fulfilled (realizada): sucesso na operação.
     * rejected (rejeitado):  falha na operação.
     * 
     */