/**
 * 59. Break e Continue
 * 
 * pode ser utilizado em todos os laços apresentados 
 * até o momento.
 * 
 * Continue continua para a próxima iteração sem executar o restante do laço.
 * Break sai do laço
 * 
 */

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numeros);

// For of
for (let numero of numeros) {
    console.log(`For of (let ${numero} of ${numeros})`);

    if (numero === 2) {
        console.log(`Pula o nemero ${numero}, encontrado continue ...`);
        continue; // encontrando essa palavra ele pula para a proxima iteraçao do laço
    }

    console.log(numero);

    if (numero === 7) {
        console.log(`${numero} encontrado break e saindo ...`);
        break; // para a execução e sai do laço
    }
}

// For in
for (let i in numeros) {
    console.log(`For in (let ${i} in ${numeros})`);
    let numero = numeros[i];

    if (numero === 2) {
        console.log(`Pula o número ${numero}, encontrado continue ...`);
        continue; // encontrando essa palavra ele pula para a proxima iteraçao do laço
    }

    console.log(numero);

    if (numero === 7) {
        console.log(`${numero} encontrado break e saindo ...`);
        break; // para a execução e sai do laço
    }
}


// For clássico
for (let i = 0; i < numeros.length; i++) {
    console.log(`For clássico (let i = 0; ${i} < ${numeros.length}; i++)`);
    let numero = numeros[i];

    if (numero === 2) {
        console.log(`Pula o número ${numero}, encontrado continue ...`);
        continue; // encontrando essa palavra ele pula para a proxima iteraçao do laço
    }

    console.log(numero);

    if (numero === 7) {
        console.log(`${numero} encontrado break e saindo ...`);
        break; // para a execução e sai do laço
    }
}


// While
let i = 0
while (i < numeros.length) {
    console.log(`While (${i} < ${numeros.length})`);
    let numero = numeros[i];

    if (numero === 2) {
        console.log(`Pula o número ${numero} , encontrado continue ...`);
        i++ // sempre atualize o contador antes da palavra continue
        continue; // encontrando essa palavra ele pula para a proxima iteraçao do laço
    }
    console.log(numero);

    if (numero === 7) {
        console.log(`${numero} encontrado break e saindo ...`);
        i++ // sempre atualize o contador antes da palavra break
        break; // para a execução e sai do laço
    }
    i++ // sempre atualize o contador antes de finalizar o while
}

// Do While
let d = 0
do {
    console.log(`Do ... While (${d} < ${numeros.length})`);
    let numero = numeros[d];

    if (numero === 2) {
        console.log(`Pula o número ${numero}, encontrado continue ...`);
        d++ // sempre atualize o contador antes da palavra continue
        continue; // encontrando essa palavra ele pula para a proxima iteraçao do laço
    }
    console.log(numero);

    if (numero === 7) {
        console.log(`${numero} encontrado break e saindo ...`);
        d++ // sempre atualize o contador antes da palavra break
        break; // para a execução e sai do laço
    }
    d++ // sempre atualize o contador antes de finalizar o while
} while (d < numeros.length)



