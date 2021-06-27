//34. Valores primitivos e valores por referência
/**
 * Primitivos (imutáveis): String, number, boolean, undefined, null
 * bigint, symbol
 * 
 * os valores são copiados
 * 
 */
// copiando valores entre variáveis
let a = 'A';
let b = a; // copia o valor de a
console.log(a, b);

// alterando o valor de a não altera o valor de b
a = 'Outra coisa';
console.log(a, b);

/**
 * tipos de dados por referência são mutáveis: array, object e funcion
 * os valores são passados por referência
 */

let c = [1, 2, 3];
let d = c; // faz uma link de referência para o local da memória onde está o c
let e = [...c] // faz uma cópia do valor que está em c

console.log(c, d);

c.push(4);
console.log(c, d);

d.pop();
console.log(c, d, e);

c.push(4);
console.log(c, d, e);

// até mesmo um texto pode ser enviado para uma lista
let f = [...a] // faz uma cópia do valor que está em a
console.log(f);

// exemplo com objetos

const p = {
    nome: 'Mandrado',
    sobrenome: 'Santos'
};
// referenciando o valor de p em q:
const q = p;

p.nome = 'Maria';
console.log(q);

// copiando o valor de p em r:
const r = {...p};

p.nome = 'Nathalya';
console.log(q);
console.log(r);