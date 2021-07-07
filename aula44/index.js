/**
 * 63. Tratando e lançando erros (try, catch, throw)
 * try tente executar um código
 * catch execute o código em caso de erro
 * NÃO É RECOMENDADO mostrar ao usuário o código do erro
 * salve ele me um arquivo de log ou banco de dados.
 */

try {
    console.log(NaoExisto);
} catch (error) {
    console.log('Naoexisto', 'Não existe');
    console.log(error);
}

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw('soma: x e y precisam ser números');
    }
    return x + y;
}

console.log(soma(1,2));

//tratando o erro criado com throw
try {
    console.log(soma('1',2));
    
} catch (error) {
    console.log(error);
}

//tratando o erro criado com throw e ReferenceError
function soma2(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new ReferenceError('soma2: x e y precisam ser números');
    }
    return x + y;
}

try {
    console.log(soma2('1',2));
    
} catch (error) {
    console.log(error);
    console.log('o ideal é lançar algo mais amigável para o usuário');
}
