/**
 * 80. Funções geradoras
 */
function* geradora1(){
    //qual o valor que ela vai entregar:
    // código qualquer ...
    yield 'Valor 1';
    // código qualquer ...
    yield 'Valor 2';
    // código qualquer ...
    yield 'Valor 3';
    // código qualquer ...
    yield 'Valor 4';
}

const g1 = geradora1();
/* // retorna o tipo de função: Object [Generator] {}
console.log(g1);
// Pára ver o conteúdo do objeto
console.log(g1.next());
// para ver o valor do objeto
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
 */

// podemos iterar sobre Funções geradoras
for (const valor of g1) {
    console.log(valor);
}


function* geradora2(){
    // a cada chamada ela irá retornar um valor
    // ela é uma função geradora infinita
    let i = 0;
    while (true) {
        yield i;
        i++;
    }
}

/* const g2 = geradora2();

// esse tipo de for não irá parar pois a função é infinita
for (const valor of g2) {
    console.log(valor);
    // para que a função não rode eternamente
    // definimos um ponto de parada
    if (valor >= 100) return;
}
 */
// criar uma função geradora que delega tarefas para outro gerador

function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4(){
    // delegando para que yield busque valores da 
    // função geradora3
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for (const valor of g4) {
    console.log(valor);
    
}

function* geradora5(){
    yield function(){
        console.log('vim do yield 1');
    };
    // ...
    yield function(){
        console.log('vim do yield n');
    };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();